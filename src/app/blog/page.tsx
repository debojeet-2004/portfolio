import BlurFade from "@/components/magicui/blur-fade";
import { allPosts } from "content-collections";
import Link from "next/link";
import type { Metadata } from "next";
import { paginate, normalizePage } from "@/lib/pagination";
import { ChevronRight, Calendar, Clock, BookOpen } from "lucide-react";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on software development, life, and more.",
  openGraph: {
    title: "Blog",
    description: "Thoughts on software development, life, and more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog",
    description: "Thoughts on software development, life, and more.",
  },
};

const PAGE_SIZE = 5;
const BLUR_FADE_DELAY = 0.04;

function getReadingTime(content: string): number {
  const wordsPerMinute = 225;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageParam } = await searchParams;

  const posts = allPosts;
  const sortedPosts = [...posts].sort((a, b) => {
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
      return -1;
    }
    return 1;
  });

  const totalPages = Math.ceil(sortedPosts.length / PAGE_SIZE);
  const currentPage = normalizePage(pageParam, totalPages);
  const { items: paginatedPosts, pagination } = paginate(sortedPosts, {
    page: currentPage,
    pageSize: PAGE_SIZE,
  });

  return (
    <section id="blog" className="min-h-[calc(100vh-10rem)] flex flex-col relative">
      {/* Ambient background blur circles for rich depth */}
      <div className="absolute -top-16 -right-16 size-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="flex flex-col gap-y-3 mb-10">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
              Blog
            </h1>
            <span className="bg-primary/10 text-primary border border-primary/20 text-xs font-semibold px-2.5 py-0.5 rounded-full">
              {sortedPosts.length} {sortedPosts.length === 1 ? 'post' : 'posts'}
            </span>
          </div>
          <p className="text-muted-foreground text-pretty max-w-xl text-sm sm:text-base">
            Thoughts on software engineering, building systems, design aesthetics, and the digital craft.
          </p>
        </div>
      </BlurFade>

      {paginatedPosts.length > 0 ? (
        <>
          <div className="flex flex-col gap-5">
            {paginatedPosts.map((post, id) => {
              const slug = post._meta.path.replace(/\.mdx$/, "");
              const indexNumber = (pagination.page - 1) * PAGE_SIZE + id + 1;
              const readingTime = getReadingTime(post.content);
              
              return (
                <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={slug}>
                  <Link
                    href={`/blog/${slug}`}
                    className="group block relative border border-border/40 hover:border-border/90 bg-muted/20 hover:bg-muted/40 p-5 sm:p-6 rounded-2xl transition-all duration-300 cursor-pointer shadow-xs focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 overflow-hidden"
                  >
                    {/* Hover subtle glow pattern */}
                    <div className="absolute -right-10 -top-10 size-40 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="flex flex-col gap-y-3 relative z-10">
                      {/* Meta information row */}
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted-foreground font-mono">
                        <span className="text-primary/70 font-semibold uppercase tracking-wider">
                          #{String(indexNumber).padStart(2, "0")}
                        </span>
                        <span className="size-1 bg-border rounded-full" />
                        <span className="flex items-center gap-1">
                          <Calendar className="size-3.5" />
                          {formatDate(post.publishedAt)}
                        </span>
                        <span className="size-1 bg-border rounded-full" />
                        <span className="flex items-center gap-1">
                          <Clock className="size-3.5" />
                          {readingTime} min read
                        </span>
                      </div>

                      {/* Title & Chevron */}
                      <div className="flex items-start justify-between gap-4">
                        <h2 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors duration-300">
                          {post.title}
                        </h2>
                        <span className="p-1 rounded-full bg-muted/60 group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300 transform group-hover:translate-x-1 shrink-0 mt-0.5">
                          <ChevronRight className="size-4" />
                        </span>
                      </div>

                      {/* Summary */}
                      <p className="text-sm text-muted-foreground/80 leading-relaxed text-pretty max-w-3xl line-clamp-2">
                        {post.summary}
                      </p>
                    </div>
                  </Link>
                </BlurFade>
              );
            })}
          </div>

          {/* Pagination Controls */}
          {pagination.totalPages > 1 && (
            <BlurFade delay={BLUR_FADE_DELAY * 3}>
              <div className="flex gap-3 flex-row items-center justify-between mt-10 pt-6 border-t border-border/40">
                <div className="text-xs sm:text-sm text-muted-foreground font-mono">
                  Page <span className="text-foreground font-semibold">{pagination.page}</span> of <span className="text-foreground font-semibold">{pagination.totalPages}</span>
                </div>
                <div className="flex gap-2">
                  {pagination.hasPreviousPage ? (
                    <Link
                      href={`/blog?page=${pagination.page - 1}`}
                      className="h-9 px-4 flex items-center justify-center text-xs sm:text-sm border border-border hover:border-primary/45 rounded-xl hover:bg-muted transition-all duration-300 font-semibold focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      Previous
                    </Link>
                  ) : (
                    <span className="h-9 px-4 flex items-center justify-center text-xs sm:text-sm border border-border rounded-xl opacity-40 cursor-not-allowed select-none font-semibold text-muted-foreground">
                      Previous
                    </span>
                  )}
                  {pagination.hasNextPage ? (
                    <Link
                      href={`/blog?page=${pagination.page + 1}`}
                      className="h-9 px-4 flex items-center justify-center text-xs sm:text-sm border border-border hover:border-primary/45 rounded-xl hover:bg-muted transition-all duration-300 font-semibold focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      Next
                    </Link>
                  ) : (
                    <span className="h-9 px-4 flex items-center justify-center text-xs sm:text-sm border border-border rounded-xl opacity-40 cursor-not-allowed select-none font-semibold text-muted-foreground">
                      Next
                    </span>
                  )}
                </div>
              </div>
            </BlurFade>
          )}
        </>
      ) : (
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <div className="flex flex-col items-center justify-center py-16 px-4 border border-dashed border-border rounded-2xl bg-muted/10">
            <BookOpen className="size-8 text-muted-foreground/60 mb-3" />
            <p className="text-muted-foreground text-center font-medium">
              No blog posts yet. Check back soon!
            </p>
          </div>
        </BlurFade>
      )}
    </section>
  );
}
