import { db } from "@/db/drizzle";
import { knowledgeChunks } from "@/db/schema/knowledge_chunks";
import { sql } from "drizzle-orm";


export async function vectorSearch(
  queryEmbedding: number[],
  limit: number = 6
) {
  try {
    const embeddingStr = `[${queryEmbedding.join(",")}]`;

    const results = await db
      .select({
        id: knowledgeChunks.id,
        content: knowledgeChunks.content,
        source: knowledgeChunks.source,
        section: knowledgeChunks.section,
        chunkIndex: knowledgeChunks.chunkIndex,
        similarity: sql<number>`
          1 - (${knowledgeChunks.embedding} <=> ${embeddingStr}::vector)
        `,
      })
      .from(knowledgeChunks)
      .orderBy(
        sql`${knowledgeChunks.embedding} <=> ${embeddingStr}::vector`
      )
      .limit(limit);

    return results;
  } catch (error) {
    console.error("Vector search error:", error);
    return [];
  }
}



interface ChunkWithMetadata {
  id: string;
  content: string;
  chunkIndex: number;
  similarity: number;
}

export function mergeContextChunks(
  chunks: ChunkWithMetadata[],
  maxTokens: number = 2500
): string[] {
  const sorted = [...chunks].sort((a, b) => a.chunkIndex - b.chunkIndex);
  const merged: string[] = [];
  let currentContext = "";
  let currentTokens = 0;

  for (const chunk of sorted) {
    const chunkTokens = Math.ceil(chunk.content.length / 4);
    // If adding this chunk exceeds limit, start new context
    if (currentTokens + chunkTokens > maxTokens && currentContext.length > 0) {
      merged.push(currentContext.trim());
      currentContext = chunk.content;
      currentTokens = chunkTokens;
    } else {
      // Merge with current context
      currentContext += "\n\n" + chunk.content;
      currentTokens += chunkTokens;
    }
  }

  // Add remaining
  if (currentContext.length > 0) {
    merged.push(currentContext.trim());
  }

  return merged;
}