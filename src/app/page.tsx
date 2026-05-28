/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import HackathonsSection from "@/components/section/hackathons-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import { ArrowUpRight, FileText, Code2, Database, ShieldCheck, Palette, Cloud } from "lucide-react";
import DitherShader from "@/components/ui/dither-shader";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const BLUR_FADE_DELAY = 0.06;

const CATEGORY_METADATA = [
  {
    id: "frontend" as const,
    title: "Frameworks & Client-Side",
    icon: Code2,
    glowBg: "bg-blue-500/10",
    iconBoxClass: "bg-blue-500/10 border-blue-500/20 text-blue-500 dark:text-blue-400",
    hoverClass: "hover:border-blue-500/20",
    bgGradient: "bg-gradient-to-br from-blue-500/[0.015] via-transparent to-transparent hover:from-blue-500/[0.04]",
    gridId: "grid-frontend",
  },
  {
    id: "backend" as const,
    title: "Backend & Databases",
    icon: Database,
    glowBg: "bg-emerald-500/10",
    iconBoxClass: "bg-emerald-500/10 border-emerald-500/20 text-emerald-500 dark:text-emerald-400",
    hoverClass: "hover:border-emerald-500/20",
    bgGradient: "bg-gradient-to-br from-emerald-500/[0.015] via-transparent to-transparent hover:from-emerald-500/[0.04]",
    gridId: "grid-backend",
  },
  {
    id: "auth" as const,
    title: "Authentication & Payments",
    icon: ShieldCheck,
    glowBg: "bg-purple-500/10",
    iconBoxClass: "bg-purple-500/10 border-purple-500/20 text-purple-500 dark:text-purple-400",
    hoverClass: "hover:border-purple-500/20",
    bgGradient: "bg-gradient-to-br from-purple-500/[0.015] via-transparent to-transparent hover:from-purple-500/[0.04]",
    gridId: "grid-auth",
  },
  {
    id: "design" as const,
    title: "Design & UI Architecture",
    icon: Palette,
    glowBg: "bg-orange-500/10",
    iconBoxClass: "bg-orange-500/10 border-orange-500/20 text-orange-500 dark:text-orange-400",
    hoverClass: "hover:border-orange-500/20",
    bgGradient: "bg-gradient-to-br from-orange-500/[0.015] via-transparent to-transparent hover:from-orange-500/[0.04]",
    gridId: "grid-design",
  },
  {
    id: "infra" as const,
    title: "Infrastructure & Tools",
    icon: Cloud,
    glowBg: "bg-indigo-500/10",
    iconBoxClass: "bg-indigo-500/10 border-indigo-500/20 text-indigo-500 dark:text-indigo-400",
    hoverClass: "hover:border-indigo-500/20",
    bgGradient: "bg-gradient-to-br from-indigo-500/[0.015] via-transparent to-transparent hover:from-indigo-500/[0.04]",
    gridId: "grid-infra",
  },
];

const MOODS = {
  opportunities: {
    label: "Open to Work",
    glowColor: "#10b981",
    glowBg: "bg-emerald-500/20",
    borderColor: "border-emerald-500/35",
    badgeBg: "bg-emerald-500/10 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400",
    badgeBorder: "border-emerald-500/20 dark:border-emerald-500/30",
    icon: (
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>
    ),
  },
  travelling: {
    label: "Travelling",
    glowColor: "#0ea5e9",
    glowBg: "bg-sky-500/20",
    borderColor: "border-sky-500/35",
    badgeBg: "bg-sky-500/10 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400",
    badgeBorder: "border-sky-500/20 dark:border-sky-500/30",
    icon: <span className="text-xs">✈️</span>,
  },
  away: {
    label: "Away",
    glowColor: "#f59e0b",
    glowBg: "bg-amber-500/20",
    borderColor: "border-amber-500/35",
    badgeBg: "bg-amber-500/10 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400",
    badgeBorder: "border-amber-500/20 dark:border-amber-500/30",
    icon: <span className="text-xs">🌙</span>,
  },
} as const;

export default function Page() {
  const activeMood = DATA.activeMood || "opportunities";
  const activeMoodConfig = MOODS[activeMood];

  return (
    <main className="min-h-dvh flex flex-col gap-12 relative">
      <BlurFade delay={BLUR_FADE_DELAY * 0.5}>
        <div className="hidden lg:flex rounded-xl overflow-hidden border border-border/80 bg-muted/40  mb-0 relative h-50 w-full">
          <DitherShader
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=2670&auto=format&fit=crop"
            gridSize={1}
            ditherMode="bayer"
            colorMode="grayscale"
            invert={false}
            animated={false}
            animationSpeed={0.02}
            primaryColor="#00054d"
            secondaryColor="#f5f5f5"
            threshold={0.3}
            className="h-full w-full"
          />
        </div>
      </BlurFade>
      <section id="hero">
        <div className="mx-auto w-full space-y-8">
          <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between items-start">
            <div className="gap-4 flex flex-col order-2 md:order-1 items-start">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-7xl"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
              />
              <BlurFadeText
                className="text-muted-foreground max-w-[700px] md:text-lg lg:text-xl text-left"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
              <BlurFade delay={BLUR_FADE_DELAY * 1.5}>
                <Button
                  asChild
                  className="rounded-xl px-5 py-4 cursor-pointer gap-2 font-semibold shadow-sm hover:shadow-md transition-all duration-300 mt-2"
                >
                  <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <FileText className="size-4 shrink-0" />
                    <span>View My Resume</span>
                  </Link>
                </Button>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2 self-center md:self-start">
              <div className="relative group p-4 select-none cursor-pointer">
                {/* Glowing ambient background aura */}
                <div className={cn(
                  "absolute inset-4 rounded-[2rem] blur-2xl opacity-10 group-hover:opacity-40 transition-all duration-700 ease-out",
                  activeMoodConfig.glowBg
                )} />

                {/* Main Interactive Frame Container */}
                <div 
                  className={cn(
                    "relative size-28 md:size-52 rounded-[2rem] p-[2.5px] overflow-hidden bg-border/20 backdrop-blur-3xl shadow-xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] group-hover:-translate-y-2 group-hover:rounded-[1.5rem] group-hover:shadow-2xl",
                    activeMood === "opportunities" && "group-hover:shadow-[0_20px_50px_rgba(16,185,129,0.18)]",
                    activeMood === "travelling" && "group-hover:shadow-[0_20px_50px_rgba(14,165,233,0.18)]",
                    activeMood === "away" && "group-hover:shadow-[0_20px_50px_rgba(245,158,11,0.18)]"
                  )}
                >
                  {/* Rotating Conic Light Sweep */}
                  <div 
                    className="absolute inset-[-150%] animate-[spin_8s_linear_infinite] opacity-30 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background: `conic-gradient(from 0deg, transparent 40%, ${activeMoodConfig.glowColor} 80%, ${activeMoodConfig.glowColor} 100%)`
                    }}
                  />
                  
                  {/* Inner Masking Box for Profile Image */}
                  <div className="absolute inset-[2.5px] rounded-[1.85rem] group-hover:rounded-[1.35rem] bg-background overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    <Avatar className="size-full rounded-none">
                      <AvatarImage 
                        alt={DATA.name} 
                        src={DATA.avatarUrl} 
                        className="object-cover size-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] scale-100 group-hover:scale-106 saturate-[0.8] group-hover:saturate-100 dark:brightness-90 group-hover:brightness-100" 
                      />
                      <AvatarFallback className="rounded-none text-xl font-bold">{DATA.initials}</AvatarFallback>
                    </Avatar>
                    
                    {/* Shadow overlay at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-85 group-hover:opacity-30 transition-opacity duration-500" />
                  </div>
                </div>

                {/* Corner Badge with dynamic translation */}
                <div className={cn(
                  "absolute bottom-2 right-6 z-20 flex items-center gap-1.5 px-3 py-1.5 text-[9px] sm:text-xs font-semibold rounded-2xl border shadow-md backdrop-blur-md transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-3 group-hover:translate-y-2 group-hover:scale-105 whitespace-nowrap",
                  activeMoodConfig.badgeBg,
                  activeMoodConfig.badgeBorder
                )}>
                  {activeMoodConfig.icon}
                  <span>{activeMoodConfig.label}</span>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-2xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="prose max-w-full text-justify text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <Markdown>
                {DATA.summary}
              </Markdown>
            </div>
          </BlurFade>
        </div>
      </section>

      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-2xl font-bold">Work Experience</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <WorkSection />
          </BlurFade>
        </div>
      </section>

      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-2xl font-bold">Education</h2>
          </BlurFade>
          <div className="flex flex-col gap-8">
            {DATA.education.map((education, index) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 8 + index * 0.05}
              >
                <Link
                  href={education.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-x-3 justify-between group"
                >
                  <div className="flex items-center gap-x-3 flex-1 min-w-0">
                    {education.logoUrl ? (
                      <img
                        src={education.logoUrl}
                        alt={education.school}
                        className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none bg-white/80"
                      />
                    ) : (
                      <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
                    )}
                    <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                      <div className="font-semibold leading-none flex items-center gap-2">
                        {education.school}
                        <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" aria-hidden />
                      </div>
                      <div className="font-sans text-sm text-muted-foreground">
                        {education.degree}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                    <span>
                      {education.start} - {education.end}
                    </span>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold tracking-tight">Skills & Tech Stack</h2>
            <p className="text-muted-foreground mt-1 text-sm sm:text-base">
              A curated breakdown of the technologies, frameworks, and tools I have solid experience working with:
            </p>
          </BlurFade>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CATEGORY_METADATA.map((category, catId) => {
              const matchedSkills = DATA.skills.filter((s) => s.category === category.id);
              if (matchedSkills.length === 0) return null;
                
              return (
                <BlurFade
                  key={category.title}
                  delay={BLUR_FADE_DELAY * (10 + catId)}
                  className={cn(catId === 4 && "md:col-span-2")}
                >
                  <div className={cn(
                    "border border-border/60 bg-card/45 backdrop-blur-md rounded-2xl p-5 flex flex-col gap-4 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group h-full",
                    category.hoverClass,
                    category.bgGradient
                  )}>
                    {/* Glowing background accent on hover */}
                    <div className={cn(
                      "absolute -right-8 -top-8 size-24 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
                      category.glowBg
                    )} />
                    
                    {/* Subtle grid background pattern */}
                    <svg className="absolute inset-0 size-full stroke-muted-foreground/[0.025] dark:stroke-muted-foreground/[0.045] [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] pointer-events-none" aria-hidden="true">
                      <defs>
                        <pattern id={category.gridId} width="16" height="16" patternUnits="userSpaceOnUse" x="-1" y="-1">
                          <path d="M.5 16V.5H16" fill="none" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#${category.gridId})`} />
                    </svg>
                    
                    <div className="flex items-center gap-3 relative z-10">
                      <div className={cn(
                        "p-2 rounded-xl border flex items-center justify-center shadow-xs",
                        category.iconBoxClass
                      )}>
                        <category.icon className="size-4 shrink-0" />
                      </div>
                      <h3 className="font-semibold text-sm sm:text-base text-card-foreground">
                        {category.title}
                      </h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 relative z-10 mt-auto">
                      {matchedSkills.map((skill) => (
                        <div
                          key={skill.name}
                          className="border bg-background/60 hover:bg-background/90 hover:border-border transition-colors border-border/40 rounded-xl h-8 px-3 flex items-center gap-2 select-none"
                        >
                          {skill.icon && (
                            <skill.icon className="size-4 rounded overflow-hidden object-contain shrink-0" />
                          )}
                          <span className="text-card-foreground text-xs font-medium">
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </section>

      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <ProjectsSection />
        </BlurFade>
      </section>

      <section id="hackathons">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <HackathonsSection />
        </BlurFade>
      </section>

      <section id="contact" className="mt-8">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  );
}
