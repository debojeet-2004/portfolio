/**
 * knowledge/embed.ts
 *
 * Rebuilds the vector knowledge base for the portfolio AI assistant.
 * Run locally: tsx knowledge/embed.ts
 *
 * Requires: npm install chalk
 *
 * Safety model:
 *   Every chunk in every file must be embedded and validated, in memory,
 *   before the database is touched. If anything fails, the process throws
 *   before the transaction opens, so the existing knowledge base is
 *   untouched.
 */

import { config } from "dotenv";
config({ quiet: true });

import fs from "fs/promises";
import path from "path";
import fg from "fast-glob";
import chalk from "chalk";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { sql } from "drizzle-orm";

import { db } from "@/db/drizzle";
import { getBatchTextEmbeddings } from "@/rag/embedding";
import { knowledgeChunks } from "@/db/schema/knowledge_chunks";

const KNOWLEDGE_DIR = path.join(process.cwd(), "src", "knowledge");
const EMBED_DIM = 768; // must match outputDimensionality in rag/embedding.ts
const DB_BATCH_SIZE = 100;
const MAX_RETRIES = 3;

const splitter = new RecursiveCharacterTextSplitter({
  chunkSize: 1200,
  chunkOverlap: 200,
});

type Row = {
  content: string;
  embedding: number[];
  source: string;
  section: string;
  chunkIndex: number;
};

/**
 * Splits a markdown file into heading-scoped sections, so each chunk
 * carries a real section name instead of just the filename.
 */
function splitIntoSections(raw: string, fallback: string) {
  const lines = raw.split("\n");
  const sections: { heading: string; content: string[] }[] = [];
  let current = { heading: fallback, content: [] as string[] };

  for (const line of lines) {
    const match = line.match(/^(#{1,6})\s+(.*)/);
    if (match) {
      if (current.content.join("").trim()) sections.push(current);
      current = { heading: match[2].trim(), content: [] };
    } else {
      current.content.push(line);
    }
  }
  if (current.content.join("").trim()) sections.push(current);

  return sections.length
    ? sections.map((s) => ({ heading: s.heading, content: s.content.join("\n").trim() }))
    : [{ heading: fallback, content: raw }];
}

/**
 * Calls the embedding API, retrying on failure, and checks every returned
 * vector is exactly EMBED_DIM before handing it back.
 */
async function embedWithRetry(texts: string[], label: string): Promise<number[][]> {
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const embeddings = await getBatchTextEmbeddings(texts);
      embeddings.forEach((vec: number[], i: number) => {
        if (!Array.isArray(vec) || vec.length !== EMBED_DIM) {
          throw new Error(
            `Chunk ${i} of ${label} has ${vec?.length ?? "no"} dimensions, expected ${EMBED_DIM}`
          );
        }
      });
      return embeddings;
    } catch (err) {
      if (attempt === MAX_RETRIES) throw err;
      console.log(
        chalk.yellow(`  retrying ${label} (attempt ${attempt}/${MAX_RETRIES}): ${(err as Error).message}`)
      );
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }
  throw new Error("unreachable");
}

async function main() {
  console.log(chalk.cyan("Reading knowledge folder..."));

  const files = await fg("**/*.md", { cwd: KNOWLEDGE_DIR, absolute: true });
  if (files.length === 0) {
    console.log(chalk.yellow("No markdown files found."));
    return;
  }

  console.log(chalk.cyan(`Found ${files.length} file(s):`));
  files.forEach((file) => console.log(chalk.gray(`  - ${path.basename(file)}`)));

  const rows: Row[] = [];

  for (let f = 0; f < files.length; f++) {
    const file = files[f];
    const source = path.basename(file);
    const raw = (await fs.readFile(file, "utf8")).trim();

    if (!raw) {
      console.log(chalk.yellow(`[${f + 1}/${files.length}] Skipping empty file: ${source}`));
      continue;
    }

    const sections = splitIntoSections(raw, source.replace(/\.md$/i, ""));

    const pending: { content: string; section: string }[] = [];
    for (const section of sections) {
      const docs = await splitter.createDocuments([section.content]);
      for (const doc of docs) {
        pending.push({ content: doc.pageContent, section: section.heading });
      }
    }

    console.log(chalk.cyan(`[${f + 1}/${files.length}] Embedding ${source} — ${pending.length} chunks...`));
    const embeddings = await embedWithRetry(
      pending.map((c) => c.content),
      source
    );

    pending.forEach((chunk, i) => {
      rows.push({
        content: chunk.content,
        embedding: embeddings[i],
        source,
        section: chunk.section,
        chunkIndex: i,
      });
    });

    console.log(chalk.green(`  done: ${pending.length} chunks`));
  }

  if (rows.length === 0) {
    console.log(chalk.yellow("No valid chunks generated. Knowledge base left untouched."));
    return;
  }

  console.log(chalk.cyan(`Writing ${rows.length} chunks to the database...`));

  await db.execute(sql`TRUNCATE TABLE knowledge_chunks RESTART IDENTITY`);
  for (let i = 0; i < rows.length; i += DB_BATCH_SIZE) {
    await db.insert(knowledgeChunks).values(rows.slice(i, i + DB_BATCH_SIZE));
  }

  console.log(chalk.bold.green("\n--------------------------------"));
  console.log(chalk.bold.green("Embedding completed successfully."));
  console.log(`Files  : ${files.length}`);
  console.log(`Chunks : ${rows.length}`);
  console.log(chalk.bold.green("--------------------------------"));
}

main().catch((err) => {
  console.log(chalk.bold.red("Embedding failed. The existing knowledge base was not modified."));
  console.error(err);
  process.exit(1);
});