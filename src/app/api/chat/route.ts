import { getTextEmbedding } from "@/rag/embedding";
import { BasicModel } from "@/rag/model";
import { SYSTEM_PROMPT } from "@/rag/prompt";
import { mergeContextChunks, vectorSearch } from "@/rag/similarity-search";
import { streamText } from "ai";
import { NextResponse } from "next/server";

type ChatMessage = { 
  role: "user" | "assistant"; 
  content: string 
};

/*
Input:
{
  message: string;
  history: {
    role: "user" | "assistant";
    content: string;
  }[];
}
 */

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const message = String(body?.message ?? "").trim();
    const history = Array.isArray(body?.history) ? (body.history as ChatMessage[]).slice(-10) : [];
    if (!message) {
      return NextResponse.json({ error: "Message is required." }, { status: 400 });
    }
    const embedding = await getTextEmbedding(message);
    const chunks = await vectorSearch(embedding, 6);
    const context = chunks.length ? mergeContextChunks(chunks, 2500).join("\n\n") : "No relevant information found.";

    const result = streamText({
      model: BasicModel,
      system: SYSTEM_PROMPT,
      messages: [
        ...history,
        {
          role: "user",
          content: `Context:\n${context}\n\nQuestion:\n${message}\n\nRules:\n- Use context first.\n- Use history for follow-up questions.\n- If answer isn't in context, say you don't know.`
        }
      ],
      temperature: 0.3,
      topK: 5,
      maxOutputTokens: 512,
    });

    return result.toTextStreamResponse();
  } catch (error) {
    console.error("[CHAT_API]", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
