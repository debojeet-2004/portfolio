"use client";

import { useState } from "react";
import { Globe, Github, Link as LinkIcon, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectActionsProps {
  liveUrl?: string;
  githubUrl?: string;
}

export function ProjectActions({ liveUrl, githubUrl }: ProjectActionsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy url: ", err);
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-3 w-full">
      {/* Live Demo Link */}
      {liveUrl && (
        <Button
          asChild
          className="rounded-xl px-5 py-4 cursor-pointer gap-2 font-semibold shadow-sm hover:shadow-md transition-all duration-300"
        >
          <a href={liveUrl} target="_blank" rel="noopener noreferrer">
            <Globe className="size-4 shrink-0" />
            <span>Live Demo</span>
          </a>
        </Button>
      )}

      {/* GitHub Repository Link */}
      {githubUrl && (
        <Button
          asChild
          variant="outline"
          className="rounded-xl px-5 py-4 cursor-pointer gap-2 font-semibold border-border bg-background hover:bg-muted text-foreground hover:text-foreground transition-all duration-300"
        >
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="size-4 shrink-0" />
            <span>GitHub Code</span>
          </a>
        </Button>
      )}

      {/* Copy Link Button */}
      <Button
        variant="outline"
        size="icon"
        onClick={handleCopyLink}
        className="rounded-xl size-10 border border-border bg-background hover:bg-muted text-muted-foreground hover:text-foreground cursor-pointer transition-all duration-200"
        title="Copy project link"
        aria-label="Copy project link"
      >
        {copied ? (
          <Check className="size-4 text-emerald-500" />
        ) : (
          <LinkIcon className="size-4" />
        )}
      </Button>
    </div>
  );
}
