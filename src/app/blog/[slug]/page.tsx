import { allPosts } from "content-collections";
import { formatDate } from "@/lib/utils";
import { DATA } from "@/data/resume";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXContent } from "@content-collections/mdx/react";
import { mdxComponents } from "@/mdx-components";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Calendar, Clock } from "lucide-react";

function getSortedPosts() {
  return [...allPosts].sort((a, b) => {
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
      return -1;
    }
    return 1;
  });
}

function getReadingTime(content: string): number {
  const wordsPerMinute = 225;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._meta.path.replace(/\.mdx$/, ""),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}): Promise<Metadata | undefined> {
  const { slug } = await params;
  const post = allPosts.find((p) => p._meta.path.replace(/\.mdx$/, "") === slug);

  if (!post) {
    return undefined;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${DATA.url}/blog/${slug}`,
      ...(image && {
        images: [
          {
            url: `${DATA.url}${image}`,
          },
        ],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image && {
        images: [`${DATA.url}${image}`],
      }),
    },
  };
}

export default async function Blog({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await params;
  const sortedPosts = getSortedPosts();
  const currentIndex = sortedPosts.findIndex(
    (p) => p._meta.path.replace(/\.mdx$/, "") === slug
  );
  const post = sortedPosts[currentIndex];

  if (!post) {
    notFound();
  }

  const previousPost = currentIndex > 0 ? sortedPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < sortedPosts.length - 1 ? sortedPosts[currentIndex + 1] : null;

  const getSlug = (post: (typeof sortedPosts)[0]) =>
    post._meta.path.replace(/\.mdx$/, "");

  const readingTime = getReadingTime(post.content);

  const jsonLdContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    description: post.summary,
    image: post.image
      ? `${DATA.url}${post.image}`
      : `${DATA.url}/blog/${slug}/opengraph-image`,
    url: `${DATA.url}/blog/${slug}`,
    author: {
      "@type": "Person",
      name: DATA.name,
    },
  }).replace(/</g, "\\u003c");

  return (
    <section id="blog" className="relative">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: jsonLdContent,
        }}
      />
      
      {/* Dynamic ambient background depth */}
      <div className="absolute -top-20 -left-20 size-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="flex justify-start gap-4 items-center relative z-10">
        <Link 
          href="/blog" 
          className="text-xs font-mono font-bold text-muted-foreground hover:text-foreground transition-all duration-300 border border-border/40 hover:border-primary/30 rounded-xl px-3 py-1.5 inline-flex items-center gap-1.5 mb-8 group bg-muted/10 hover:bg-muted/40" 
          aria-label="Back to Blog"
        >
          <ChevronLeft className="size-3.5 group-hover:-translate-x-0.5 transition-transform" />
          BACK TO BLOG
        </Link>
      </div>

      <div className="flex flex-col gap-4 relative z-10">
        <h1 className="title font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
          {post.title}
        </h1>
        
        {/* Premium Meta Row */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted-foreground font-mono">
          <span className="flex items-center gap-1">
            <Calendar className="size-3.5" />
            {formatDate(post.publishedAt)}
          </span>
          <span className="size-1 bg-border rounded-full" />
          <span className="flex items-center gap-1">
            <Clock className="size-3.5" />
            {readingTime} min read
          </span>
          {post.author && (
            <>
              <span className="size-1 bg-border rounded-full" />
              <span className="flex items-center gap-1">
                Author: {post.author}
              </span>
            </>
          )}
        </div>
      </div>

      {/* Decorative Elegant Divider */}
      <div className="my-8 flex w-full items-center relative z-10">
        <div
          className="flex-1 h-px bg-border/60"
          style={{
            maskImage:
              "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
          }}
        />
      </div>

      <article className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert relative z-10">
        <MDXContent code={post.mdx} components={mdxComponents} />
      </article>

      {/* Bottom Navigation Cards */}
      <nav className="mt-16 pt-8 border-t border-border/40 max-w-3xl relative z-10">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          {previousPost ? (
            <Link
              href={`/blog/${getSlug(previousPost)}`}
              className="group flex-1 flex flex-col gap-2 p-5 rounded-2xl border border-border/40 hover:border-primary/20 bg-muted/20 hover:bg-muted/40 transition-all duration-300 shadow-xs"
            >
              <span className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground uppercase tracking-wider">
                <ChevronLeft className="size-3.5 transform group-hover:-translate-x-0.5 transition-transform" />
                Previous Post
              </span>
              <span className="text-sm sm:text-base font-bold group-hover:text-primary transition-colors whitespace-normal wrap-break-word">
                {previousPost.title}
              </span>
            </Link>
          ) : (
            <div className="hidden sm:block flex-1" />
          )}

          {nextPost ? (
            <Link
              href={`/blog/${getSlug(nextPost)}`}
              className="group flex-1 flex flex-col gap-2 p-5 rounded-2xl border border-border/40 hover:border-primary/20 bg-muted/20 hover:bg-muted/40 transition-all duration-300 text-right shadow-xs"
            >
              <span className="flex items-center justify-end gap-1.5 text-xs font-mono text-muted-foreground uppercase tracking-wider">
                Next Post
                <ChevronRight className="size-3.5 transform group-hover:translate-x-0.5 transition-transform" />
              </span>
              <span className="text-sm sm:text-base font-bold group-hover:text-primary transition-colors whitespace-normal wrap-break-word">
                {nextPost.title}
              </span>
            </Link>
          ) : (
            <div className="hidden sm:block flex-1" />
          )}
        </div>
      </nav>
    </section>
  );
}
