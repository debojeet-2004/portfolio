/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Markdown from "react-markdown";

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return <div className="w-full h-48 bg-muted" />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-48 object-cover"
      onError={() => setImageError(true)}
    />
  );
}

interface Props {
  title: string;
  slug: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  badges?: readonly {
    icon: React.ReactNode;
    type: string;
  }[];
  className?: string;
  isFeatured?: boolean;
}

export function ProjectCard({
  title,
  slug,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  badges,
  className,
  isFeatured,
}: Props) {
  return (
    <Link
      href={`/projects/${slug}`}
      className={cn(
        "flex flex-col h-full border rounded-xl overflow-hidden hover:shadow-md cursor-pointer transition-all duration-300 relative group",
        isFeatured 
          ? "border-primary/20 bg-primary/[0.01] hover:border-primary/40 hover:shadow-primary/[0.02]" 
          : "border-border bg-background hover:border-muted-foreground/30",
        className
      )}
    >
      <div className="relative shrink-0">
        {image ? (
          <ProjectImage src={image} alt={title} />
        ) : (
          <div className="w-full h-48 bg-muted" />
        )}
        {badges && badges.length > 0 && (
          <div className="absolute top-2 right-2 flex flex-wrap gap-2">
            {badges.map((badge, idx) => (
              <Badge
                key={idx}
                className="flex items-center gap-1.5 text-xs bg-black text-white"
                variant="default"
              >
                {badge.icon}
                {badge.type}
              </Badge>
            ))}
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-200">{title}</h3>
            </div>
            <time className="text-xs text-muted-foreground">{dates}</time>
          </div>
          <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" aria-hidden />
        </div>
        <div className="text-xs flex-1 prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
          <Markdown>{description}</Markdown>
        </div>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-auto">
            {tags.map((tag) => (
              <Badge
                key={tag}
                className="text-[11px] font-medium border border-border h-6 w-fit px-2"
                variant="outline"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
