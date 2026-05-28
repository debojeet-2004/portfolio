"use client";

import { motion } from "motion/react";

interface ProjectHeroProps {
  title: string;
  subtitle: string;
}

export function ProjectHero({ title, subtitle }: ProjectHeroProps) {
  return (
    <div className="flex flex-col gap-y-4 items-center justify-center text-center mt-6 mb-10">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex items-center w-full max-w-lg justify-center mb-2"
      >
        <div className="flex-1 h-px bg-linear-to-r from-transparent via-border to-transparent" />
        <div className="border border-border bg-muted/60 z-10 rounded-full px-4 py-1">
          <span className="text-muted-foreground text-xs font-semibold uppercase tracking-wider">
            Portfolio
          </span>
        </div>
        <div className="flex-1 h-px bg-linear-to-l from-transparent via-border to-transparent" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl"
      >
        {title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-muted-foreground md:text-lg/relaxed max-w-2xl text-pretty"
      >
        {subtitle}
      </motion.p>
    </div>
  );
}
