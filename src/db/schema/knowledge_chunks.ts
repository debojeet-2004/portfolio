import {
    pgTable,
    text,
    timestamp,
    integer,
    uuid,
    index,
    vector,
} from "drizzle-orm/pg-core";

export const knowledgeChunks = pgTable("knowledge_chunks",{
        id: uuid("id").defaultRandom().primaryKey(),
        content: text("content").notNull(),
        embedding: vector("embedding", {
            dimensions: 768,
        }).notNull(),
        source: text("source").notNull(), // about.md, projects.md
        section: text("section"), // About, Experience, Skills
        chunkIndex: integer("chunk_index").notNull(),
        createdAt: timestamp("created_at").defaultNow().notNull(),
    },
    (table) => [
        index("embedding_idx").using(
            "hnsw",
            table.embedding.op("vector_cosine_ops")
        ),
    ]
);