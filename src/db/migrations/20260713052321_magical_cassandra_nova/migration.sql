CREATE TABLE "knowledge_chunks" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"content" text NOT NULL,
	"embedding" vector(768) NOT NULL,
	"source" text NOT NULL,
	"section" text,
	"chunk_index" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE INDEX "embedding_idx" ON "knowledge_chunks" USING hnsw ("embedding" vector_cosine_ops);