import { notFound } from "next/navigation";
import { Metadata } from "next";
import { DATA } from "@/data/resume";
import ProjectClient from "./ProjectClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static routes for all projects
export async function generateStaticParams() {
  return DATA.projects.map((project) => ({
    slug: project.slug,
  }));
}

// Generate optimized SEO metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = DATA.projects.find((p) => p.slug === slug);

  if (!project) return {};

  return {
    title: `${project.title} | Debojeet Karmakar`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
      images: project.image ? [project.image] : [],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = DATA.projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Find up to 2 related projects of the same category
  const relatedProjects = DATA.projects
    .filter((p) => p.slug !== slug && p.category === project.category && p.active)
    .slice(0, 2);

  return <ProjectClient project={project} relatedProjects={relatedProjects} />;
}