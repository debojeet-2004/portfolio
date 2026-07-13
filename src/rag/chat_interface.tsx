"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export function PortfolioChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const currentMessage = input;
    const chatHistory = [...messages]; 

    setMessages((prev) => [...prev, { role: "user", content: currentMessage }]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: currentMessage,
          history: chatHistory,
        }),
      });

      if (!res.ok) throw new Error("API Failure");

      const reader = res.body?.getReader();
      const decoder = new TextDecoder();
      let botMessage = "";
      let isFirstChunk = true;

      while (true) {
        const { done, value } = await reader!.read();
        if (done) break;
        
        if (isFirstChunk) {
          setMessages((prev) => [...prev, { role: "assistant", content: "" }]);
          isFirstChunk = false;
        }

        botMessage += decoder.decode(value);
        setMessages((prev) => [
          ...prev.slice(0, -1),
          { role: "assistant", content: botMessage },
        ]);
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Error connecting to server." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <Card className="w-[450px] h-[600px] flex flex-col shadow-[0_0_20px_rgba(0,0,0,0.2)] border-primary/20 overflow-hidden backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between p-4 border-b bg-muted/80">
            <CardTitle className="text-md font-semibold flex items-center gap-2">
              <Bot className="w-5 h-5 text-primary" /> Chat with My Assistant
            </CardTitle>
            <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-destructive/10 hover:text-destructive" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>

          <CardContent className="flex-1 p-0 overflow-hidden bg-background relative">
            <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#000_1px,transparent_1px)] dark:bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
            
            <ScrollArea className="h-full p-4 relative z-10">
              <div className="space-y-4">
                {messages.length === 0 && (
                  <p className="text-center text-muted-foreground mt-10 text-sm font-medium">Ask anything about my experience!</p>
                )}
                
                {messages.map((msg, i) => (
                  <div key={i} className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[85%] p-3 rounded-xl text-sm shadow-sm break-words overflow-hidden ${msg.role === "user" ? "bg-primary text-primary-foreground rounded-tr-none" : "bg-muted rounded-tl-none border border-border/50"}`}>
                      <ReactMarkdown 
                        remarkPlugins={[remarkGfm]}
                        components={{
                          a: ({ node, ...props }) => (
                            <a {...props} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline break-all" />
                          ),
                        }}
                      >
                        {msg.content}
                      </ReactMarkdown>
                    </div>
                  </div>
                ))}

                {isLoading && messages[messages.length - 1]?.role === "user" && (
                  <div className="flex gap-2 justify-start">
                    <div className="bg-muted p-3 rounded-xl rounded-tl-none border border-border/50 shadow-sm">
                      <div className="flex gap-1.5 items-center px-1 py-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-foreground/50 animate-bounce" />
                        <span className="w-1.5 h-1.5 rounded-full bg-foreground/50 animate-bounce [animation-delay:0.2s]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-foreground/50 animate-bounce [animation-delay:0.4s]" />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={bottomRef} />
              </div>
            </ScrollArea>
          </CardContent>

          <CardFooter className="p-3 border-t bg-muted/30">
            <div className="flex w-full items-center gap-2">
              <Input 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                onKeyDown={(e) => e.key === "Enter" && handleSend()} 
                placeholder="Type your message..." 
                disabled={isLoading}
                className="flex-1 bg-background"
              />
              <Button size="icon" onClick={handleSend} disabled={isLoading || !input.trim()} className="shadow-md">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      ) : (
        <div className="flex flex-col items-end gap-3">
          <div className="bg-primary text-primary-foreground px-4 py-2 rounded-2xl rounded-br-none shadow-lg text-sm font-medium animate-pulse border border-primary-foreground/20">
            Chat with my assistant 👋
          </div>
          <Button size="icon" className="h-14 w-14 rounded-full shadow-2xl hover:scale-105 transition-transform" onClick={() => setIsOpen(true)}>
            <MessageCircle className="h-6 w-6" />
          </Button>
        </div>
      )}
    </div>
  );
}