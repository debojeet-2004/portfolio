"use client";

import Link from "next/link";
import { ChevronLeft, Folder, Briefcase, Calendar, CheckSquare } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion, useScroll, useSpring } from "motion/react";
import { Project } from "@/data/resume";
import { ProjectMarkdown } from "@/components/project/ProjectMarkdown";
import { ProjectActions } from "@/components/project/ProjectActions";
import { ProjectCard } from "@/components/project/ProjectCard";

interface ProjectClientProps {
  project: Project;
  relatedProjects: Project[];
}

export default function ProjectClient({ project, relatedProjects }: ProjectClientProps) {
  // Setup dynamic reading progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen pb-24 relative text-left">
      {/* Top Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Back Button */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors duration-200 mt-6 select-none group"
        >
          <ChevronLeft className="size-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
          <span>Back to Projects</span>
        </Link>

        {/* Hero Section */}
        <div className="flex flex-col gap-6 mb-10">
          <div className="flex flex-wrap gap-2 items-center">
            {/* Category Tag */}
            <Badge variant="outline" className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 border-border rounded-full flex items-center gap-1.5 w-fit">
              {project.category === "personal" ? (
                <>
                  <Folder className="size-3 text-muted-foreground" />
                  <span>Personal Project</span>
                </>
              ) : (
                <>
                  <Briefcase className="size-3 text-muted-foreground" />
                  <span>Client Solution</span>
                </>
              )}
            </Badge>

            {/* Status Tag */}
            {project.status && (
              <Badge variant={project.status === "completed" ? "default" : "secondary"} className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full w-fit">
                {project.status}
              </Badge>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground">
            {project.title}
          </h1>

          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
            {project.description}
          </p>

          {/* Action buttons */}
          <ProjectActions liveUrl={project.href} githubUrl={project.githubUrl} />
        </div>

        {/* Meta Info Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 border border-border/40 bg-card rounded-2xl mb-10">
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
              Category
            </span>
            <span className="text-sm font-semibold capitalize text-foreground">
              {project.category}
            </span>
          </div>

          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
              Timeline
            </span>
            <span className="text-sm font-semibold text-foreground flex items-center gap-1.5">
              <Calendar className="size-3.5 text-muted-foreground" />
              <span>{project.dates}</span>
            </span>
          </div>

          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
              Status
            </span>
            <span className="text-sm font-semibold text-foreground flex items-center gap-1.5 capitalize">
              <CheckSquare className="size-3.5 text-muted-foreground" />
              <span>{project.status || "Completed"}</span>
            </span>
          </div>

          <div className="flex flex-col gap-0.5 col-span-2 md:col-span-1">
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
              Tech Stack
            </span>
            <span className="text-xs font-semibold text-foreground line-clamp-1">
              {project.technologies.slice(0, 3).join(", ")}
              {project.technologies.length > 3 && "..."}
            </span>
          </div>
        </div>

        {/* Banner Cover / Video Previews */}
        {project.video ? (
          <div className="w-full aspect-video rounded-2xl overflow-hidden border border-border bg-black shadow-md mb-12">
            <video
              src={project.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        ) : project.image ? (
          <div className="w-full aspect-video rounded-2xl overflow-hidden border border-border bg-muted shadow-md mb-12">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        ) : null}

        {/* Markdown Core Content */}
        <div className="mb-16">
          <ProjectMarkdown content={project.fullDescription || ""} />
        </div>

        {/* Tech stack badge list */}
        <div className="border-t border-border/60 pt-8 mb-16 text-left">
          <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4">
            Full Technologies & Libraries
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="text-xs font-semibold px-3 py-1 border border-border bg-card text-foreground"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Related Projects Section */}
        {relatedProjects.length > 0 && (
          <div className="border-t border-border/60 pt-12 text-left">
            <h3 className="text-xl font-bold tracking-tight text-foreground mb-6">
              Related Projects
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedProjects.map((relProj) => (
                <ProjectCard key={relProj.slug} project={relProj} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
