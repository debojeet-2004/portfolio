import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, FolderOpen } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsSection() {
    const featuredProjects = DATA.projects.filter(
        (project) => project.isFeatured && project.active
    );

    return (
        <section id="projects">
            <div className="flex min-h-0 flex-col gap-y-8">
                <div className="flex flex-col gap-y-4 items-center justify-center ">
                    <div className="flex items-center w-full">
                        <div
                            className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent"
                        />
                        <div className="border bg-primary z-10 rounded-xl px-4 py-1">
                            <span className="text-background text-sm font-medium">My Projects</span>
                        </div>
                        <div
                            className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent"
                        />
                    </div>
                    <div className="flex flex-col gap-y-3 items-center justify-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center">
                            Bringing ideas to life through <span className="italic">code</span>
                        </h2>
                        <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center max-w-2xl">
                            A curated selection of modern web applications and digital tools I've built recently.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-y-8">
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-250 mx-auto auto-rows-fr">
                        {featuredProjects.map((project, id) => (
                            <BlurFade
                                key={project.title}
                                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                                className="h-full"
                            >
                                <ProjectCard
                                    href={project.href}
                                    slug={project.slug}
                                    key={project.title}
                                    title={project.title}
                                    description={project.description}
                                    dates={project.dates}
                                    tags={project.technologies}
                                    image={project.image}
                                    video={project.video}
                                    badges={project.badges}
                                    isFeatured={project.isFeatured}
                                />
                            </BlurFade>
                        ))}
                    </div>
                    <div className="flex justify-center mt-2">
                        <BlurFade delay={BLUR_FADE_DELAY * 12 + featuredProjects.length * 0.05}>
                            <Button
                                asChild
                                variant="outline"
                                className="group rounded-xl px-6 py-5 gap-2 border border-border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground transition-all duration-300 cursor-pointer"
                            >
                                <Link
                                    href={"/projects"}
                                >
                                    <FolderOpen className="size-4" />
                                    <span className="font-semibold">See All Projects</span>
                                    <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform duration-200" />
                                </Link>
                            </Button>
                        </BlurFade>
                    </div>
                </div>
            </div>
        </section>
    );
}

