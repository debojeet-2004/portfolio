"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface ProjectMarkdownProps {
  content: string;
}

function dedent(str: string): string {
  if (!str) return "";
  const lines = str.split("\n");
  
  // Calculate min indentation ignoring the first line (which can be a backtick inline header)
  let minIndent = Infinity;
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    if (line.trim().length === 0) continue;
    const match = line.match(/^(\s*)/);
    if (match) {
      const indent = match[1].length;
      if (indent < minIndent) {
        minIndent = indent;
      }
    }
  }

  if (minIndent !== Infinity && minIndent > 0) {
    return lines
      .map((line, idx) => {
        if (idx === 0) return line.trimStart();
        return line.trim().length === 0 ? "" : line.slice(minIndent);
      })
      .join("\n");
  }

  return str;
}

export function ProjectMarkdown({ content }: ProjectMarkdownProps) {
  const dedentedContent = dedent(content);

  return (
    <article className="prose prose-neutral dark:prose-invert max-w-none text-left leading-relaxed text-sm md:text-base">
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ node, ...props }) => (
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight mt-8 mb-4 border-b border-border pb-2 text-foreground" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 className="text-xl md:text-2xl font-bold tracking-tight mt-6 mb-3 text-foreground" {...props} />
          ),
          h3: ({ node, ...props }) => (
            <h3 className="text-lg md:text-xl font-semibold tracking-tight mt-4 mb-2 text-foreground" {...props} />
          ),
          p: ({ node, ...props }) => (
            <p className="mb-4 text-muted-foreground text-justify sm:text-left leading-relaxed" {...props} />
          ),
          ul: ({ node, ...props }) => (
            <ul className="list-disc list-outside pl-5 mb-4 space-y-1.5 text-muted-foreground" {...props} />
          ),
          ol: ({ node, ...props }) => (
            <ol className="list-decimal list-outside pl-5 mb-4 space-y-1.5 text-muted-foreground" {...props} />
          ),
          li: ({ node, ...props }) => (
            <li className="pl-1" {...props} />
          ),
          a: ({ node, ...props }) => (
            <a 
              className="text-primary underline underline-offset-4 font-medium hover:text-primary/80 transition-colors" 
              target="_blank" 
              rel="noopener noreferrer" 
              {...props} 
            />
          ),
          code: ({ node, className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || "");
            const isInline = !match;
            
            if (isInline) {
              return (
                <code 
                  className="bg-muted px-1.5 py-0.5 rounded-sm text-xs font-mono font-medium text-foreground border border-border/40" 
                  {...props}
                >
                  {children}
                </code>
              );
            }

            return (
              <div className="relative my-6 rounded-xl border border-border/60 overflow-hidden bg-zinc-950 dark:bg-zinc-900 shadow-md">
                {match && match[1] && (
                  <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-zinc-900/60 dark:bg-zinc-950/60 text-xs font-mono text-zinc-400 select-none">
                    <span>{match[1].toLowerCase()}</span>
                  </div>
                )}
                <pre className="p-4 overflow-x-auto font-mono text-xs md:text-sm text-zinc-200 leading-relaxed bg-zinc-950">
                  <code {...props}>{children}</code>
                </pre>
              </div>
            );
          },
          blockquote: ({ node, ...props }) => (
            <blockquote className="border-l-4 border-primary/40 pl-4 italic my-6 text-muted-foreground bg-muted/30 py-1.5 pr-4 rounded-r-lg" {...props} />
          ),
          strong: ({ node, ...props }) => (
            <strong className="font-semibold text-foreground" {...props} />
          ),
          table: ({ node, ...props }) => (
            <div className="overflow-x-auto my-6 border border-border rounded-xl">
              <table className="w-full text-sm border-collapse text-left" {...props} />
            </div>
          ),
          th: ({ node, ...props }) => (
            <th className="border-b border-border bg-muted/50 p-3 font-semibold text-foreground select-none" {...props} />
          ),
          td: ({ node, ...props }) => (
            <td className="border-b border-border p-3 text-muted-foreground" {...props} />
          ),
        }}
      >
        {dedentedContent}
      </ReactMarkdown>
    </article>
  );
}
