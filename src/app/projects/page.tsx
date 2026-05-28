"use client";

import { useState } from "react";
import { DATA } from "@/data/resume";
import { ProjectHero } from "@/components/project/ProjectHero";
import { ProjectTabs } from "@/components/project/ProjectTabs";
import { ProjectCard } from "@/components/project/ProjectCard";
import { ProjectPagination } from "@/components/project/ProjectPagination";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

const PROJECTS_PER_PAGE = 4; // Set page size to 2 to perfectly showcase pagination!

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<"personal" | "client">("personal");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter projects by active category and make sure they are active
  const filteredProjects = DATA.projects.filter(
    (project) => project.active && project.category === activeTab
  );

  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);

  // Get current page slice
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const paginatedProjects = filteredProjects.slice(
    startIndex,
    startIndex + PROJECTS_PER_PAGE
  );

  const handleTabChange = (tab: "personal" | "client") => {
    setActiveTab(tab);
    setCurrentPage(1); // Reset page to 1 on tab switches
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="min-h-[calc(100vh-10rem)] flex flex-col pb-16 justify-center items-center text-left">
      {/* Hero Header */}
      <ProjectHero
        title="Projects"
        subtitle="A curated selection of modern web applications, SaaS creations, and client solutions built with code."
      />

      {/* Dynamic Tab Filter */}
      <ProjectTabs activeTab={activeTab} onChange={handleTabChange} />

      {/* Dynamic Grid with Premium Animation */}
      <div className="flex-1 mt-4">
        <AnimatePresence mode="wait">
          {paginatedProjects.length > 0 ? (
            <motion.div
              key={activeTab + "-" + currentPage}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
            >
              {paginatedProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty-state"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-16 text-center"
            >
              <p className="text-muted-foreground text-sm font-semibold">
                No projects found in this category.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Pagination Controls */}
      <ProjectPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </section>
  );
}