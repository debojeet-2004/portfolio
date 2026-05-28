"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProjectPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function ProjectPagination({
  currentPage,
  totalPages,
  onPageChange,
}: ProjectPaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 mt-12">
      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="rounded-xl border-border bg-background cursor-pointer size-9 disabled:opacity-50"
        aria-label="Previous Page"
      >
        <ChevronLeft className="size-4" />
      </Button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Button
          key={page}
          variant={currentPage === page ? "default" : "outline"}
          size="sm"
          onClick={() => onPageChange(page)}
          className={cn(
            "rounded-xl min-w-9 h-9 font-semibold transition-all duration-200 cursor-pointer",
            currentPage === page
              ? "bg-primary text-primary-foreground shadow-sm"
              : "border-border bg-background hover:bg-muted text-muted-foreground hover:text-foreground"
          )}
        >
          {page}
        </Button>
      ))}

      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="rounded-xl border-border bg-background cursor-pointer size-9 disabled:opacity-50"
        aria-label="Next Page"
      >
        <ChevronRight className="size-4" />
      </Button>
    </div>
  );
}
