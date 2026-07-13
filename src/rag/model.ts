import { createGoogleGenerativeAI } from "@ai-sdk/google";

// create provider
export const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_API_KEY,
});


// 🔹 Primary LLM (chat / generation)
export const BasicModel = google("gemini-2.5-flash");
// or use "gemini-1.5-flash" for cheaper + faster

// 🔹 Embedding Model (IMPORTANT for RAG)
export const EmbeddingModel = google.embedding("gemini-embedding-2");
// export const EmbeddingModel2 = google.embedding("gemini-embedding-001");



// 🔹 (Optional) Large embedding (Gemini currently has one main good model)
export const LargeEmbeddingModel = EmbeddingModel;


// 🔹 Image generation (optional)
export const IMAGE_GENERATOR_MODEL = google.image("imagen-3.0-generate-002");

