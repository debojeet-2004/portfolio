"use client";

import { motion } from "motion/react";
import { Folder, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectTabsProps {
  activeTab: "personal" | "client";
  onChange: (tab: "personal" | "client") => void;
}

export function ProjectTabs({ activeTab, onChange }: ProjectTabsProps) {
  const tabs = [
    {
      id: "personal" as const,
      label: "Personal Projects",
      icon: Folder,
      count: "SaaS & Experiments",
    },
    {
      id: "client" as const,
      label: "Client Projects",
      icon: Briefcase,
      count: "Freelance & Agency",
    },
  ];

  return (
    <div className="flex justify-center w-full max-w-xl mx-auto mb-8">
      <div className="grid w-full grid-cols-2 p-1 bg-muted/50 border border-border/40 rounded-xl relative">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <motion.button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              whileTap={{ scale: 0.97 }}
              className={cn(
                "relative flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 px-3 py-3 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-300 cursor-pointer select-none focus-visible:outline-hidden",
                isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="active-tab-indicator"
                  className="absolute inset-0 bg-primary rounded-lg shadow-sm"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5 sm:gap-2">
                <Icon className={cn("size-4 shrink-0 transition-colors duration-300", isActive ? "text-primary-foreground" : "text-muted-foreground")} />
                <span>{tab.label}</span>
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
