"use client";

import { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Folder, Briefcase } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Project } from "@/data/resume";

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className="w-full h-48 bg-linear-to-br from-primary/10 via-primary/5 to-background flex items-center justify-center border-b border-border select-none">
        <span className="text-2xl font-black tracking-widest text-primary/20 uppercase">
          {alt.slice(0, 3)}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105 border-b border-border"
      onError={() => setImageError(true)}
    />
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="group flex flex-col h-full border border-border rounded-xl overflow-hidden bg-card hover:shadow-md cursor-pointer transition-all duration-300 relative"
    >
      <Link href={`/projects/${project.slug}`} className="flex flex-col h-full">
        {/* Cover Media */}
        <div className="relative overflow-hidden shrink-0">
          <ProjectImage src={project.image} alt={project.title} />
          
          {/* Status Badge */}
          {project.status && (
            <Badge
              variant={project.status === "completed" ? "default" : "secondary"}
              className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
            >
              {project.status}
            </Badge>
          )}

          {/* Category Tag */}
          <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-xs text-white text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/10">
            {project.category === "personal" ? (
              <>
                <Folder className="size-3 text-primary-foreground" />
                <span>Personal</span>
              </>
            ) : (
              <>
                <Briefcase className="size-3 text-primary-foreground" />
                <span>Client</span>
              </>
            )}
          </div>
        </div>

        {/* Content Details */}
        <div className="p-6 flex flex-col gap-3 flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-200 text-lg">
              {project.title}
            </h3>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
          </div>

          <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed flex-1">
            {project.description}
          </p>

          {/* Technologies Stack */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-auto pt-2">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  className="text-[10px] font-medium border border-border/40 h-5 w-fit px-1.5 bg-muted/40 hover:bg-muted text-muted-foreground"
                  variant="outline"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
