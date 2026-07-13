"use client";

import { DATA } from "@/data/resume";
import BlurFade from "@/components/magicui/blur-fade";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Code2, Database, ShieldCheck, Palette, Cloud, BarChart, LineChart, Server } from "lucide-react";
import { cn } from "@/lib/utils";

const BLUR_FADE_DELAY = 0.06;

const CATEGORY_STYLES: Record<string, any> = {
  analysis: { icon: BarChart, glowBg: "bg-blue-500/10", iconBoxClass: "bg-blue-500/10 border-blue-500/20 text-blue-500", hoverClass: "hover:border-blue-500/20", bgGradient: "bg-gradient-to-br from-blue-500/[0.015] to-transparent", gridId: "grid-analysis" },
  python: { icon: Code2, glowBg: "bg-emerald-500/10", iconBoxClass: "bg-emerald-500/10 border-emerald-500/20 text-emerald-500", hoverClass: "hover:border-emerald-500/20", bgGradient: "bg-gradient-to-br from-emerald-500/[0.015] to-transparent", gridId: "grid-python" },
  visualization: { icon: LineChart, glowBg: "bg-purple-500/10", iconBoxClass: "bg-purple-500/10 border-purple-500/20 text-purple-500", hoverClass: "hover:border-purple-500/20", bgGradient: "bg-gradient-to-br from-purple-500/[0.015] to-transparent", gridId: "grid-vis" },
  tools: { icon: Server, glowBg: "bg-orange-500/10", iconBoxClass: "bg-orange-500/10 border-orange-500/20 text-orange-500", hoverClass: "hover:border-orange-500/20", bgGradient: "bg-gradient-to-br from-orange-500/[0.015] to-transparent", gridId: "grid-tools" },
  frontend: { icon: Code2, glowBg: "bg-blue-500/10", iconBoxClass: "bg-blue-500/10 border-blue-500/20 text-blue-500", hoverClass: "hover:border-blue-500/20", bgGradient: "bg-gradient-to-br from-blue-500/[0.015] to-transparent", gridId: "grid-frontend" },
  backend: { icon: Database, glowBg: "bg-emerald-500/10", iconBoxClass: "bg-emerald-500/10 border-emerald-500/20 text-emerald-500", hoverClass: "hover:border-emerald-500/20", bgGradient: "bg-gradient-to-br from-emerald-500/[0.015] to-transparent", gridId: "grid-backend" },
  auth: { icon: ShieldCheck, glowBg: "bg-purple-500/10", iconBoxClass: "bg-purple-500/10 border-purple-500/20 text-purple-500", hoverClass: "hover:border-purple-500/20", bgGradient: "bg-gradient-to-br from-purple-500/[0.015] to-transparent", gridId: "grid-auth" },
  design: { icon: Palette, glowBg: "bg-orange-500/10", iconBoxClass: "bg-orange-500/10 border-orange-500/20 text-orange-500", hoverClass: "hover:border-orange-500/20", bgGradient: "bg-gradient-to-br from-orange-500/[0.015] to-transparent", gridId: "grid-design" },
  infra: { icon: Cloud, glowBg: "bg-indigo-500/10", iconBoxClass: "bg-indigo-500/10 border-indigo-500/20 text-indigo-500", hoverClass: "hover:border-indigo-500/20", bgGradient: "bg-gradient-to-br from-indigo-500/[0.015] to-transparent", gridId: "grid-infra" },
};

export default function SkillsSection() {
  return (
    <div className="flex min-h-0 flex-col gap-y-6">
      <Tabs defaultValue="data" className="w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold tracking-tight">Skills & Tech Stack</h2>
            <p className="text-muted-foreground mt-1 text-sm sm:text-base max-w-[600px]">
              A curated breakdown of the technologies, frameworks, and tools I have solid experience working with:
            </p>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 9.5} className="w-full md:w-auto">
            <TabsList className="grid w-full md:w-[350px] grid-cols-2">
              <TabsTrigger value="data">Data Analytics</TabsTrigger>
              <TabsTrigger value="software">Software Dev</TabsTrigger>
            </TabsList>
          </BlurFade>
        </div>

        {["data", "software"].map((tabKey) => (
          <TabsContent key={tabKey} value={tabKey} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(DATA.skills as any)[tabKey].map((category: any, catId: number) => {
                const style = CATEGORY_STYLES[category.id] || CATEGORY_STYLES.frontend;
                const Icon = style.icon;

                return (
                  <BlurFade key={category.title} delay={BLUR_FADE_DELAY * (10 + catId)} className={cn(catId === 4 && "md:col-span-2")}>
                    <div className={cn("border border-border/60 bg-card/45 backdrop-blur-md rounded-2xl p-5 flex flex-col gap-4 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group h-full", style.hoverClass, style.bgGradient)}>
                      <div className={cn("absolute -right-8 -top-8 size-24 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none", style.glowBg)} />
                      <svg className="absolute inset-0 size-full stroke-muted-foreground/[0.025] dark:stroke-muted-foreground/[0.045] [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] pointer-events-none" aria-hidden="true">
                        <defs>
                          <pattern id={style.gridId} width="16" height="16" patternUnits="userSpaceOnUse" x="-1" y="-1">
                            <path d="M.5 16V.5H16" fill="none" />
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill={`url(#${style.gridId})`} />
                      </svg>
                      <div className="flex items-center gap-3 relative z-10">
                        <div className={cn("p-2 rounded-xl border flex items-center justify-center shadow-xs", style.iconBoxClass)}>
                          <Icon className="size-4 shrink-0" />
                        </div>
                        <h3 className="font-semibold text-sm sm:text-base text-card-foreground">{category.title}</h3>
                      </div>
                      <div className="flex flex-wrap gap-2 relative z-10 mt-auto">
                        {category.skills.map((skill: any) => (
                          <div key={skill.name} className="border bg-background/60 hover:bg-background/90 hover:border-border transition-colors border-border/40 rounded-xl h-8 px-3 flex items-center gap-2 select-none">
                            {skill.icon && <skill.icon className="size-4 rounded overflow-hidden object-contain shrink-0" />}
                            <span className="text-card-foreground text-xs font-medium">{skill.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </BlurFade>
                );
              })}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}