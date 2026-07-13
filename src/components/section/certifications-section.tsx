/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { DATA } from "@/data/resume";
import { Timeline, TimelineItem, TimelineConnectItem } from "@/components/timeline";
import { Award, ExternalLink } from "lucide-react";

export default function CertificationsSection() {
  return (
    <section id="certifications" className="overflow-hidden">
      <div className="flex min-h-0 flex-col gap-y-8 w-full">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">Certifications</span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Continuous Learning</h2>
            <p className="text-muted-foreground text-xs md:text-lg text-balance text-center max-w-[600px]">
              I actively invest in strengthening my skills in Data Analytics, SQL, Python, Excel, Power BI, and Business Intelligence.
            </p>
          </div>
        </div>
        <Timeline>
          {DATA.certifications.map((cert) => (
            <TimelineItem key={cert.title} className="w-full flex items-start justify-between gap-10">
              <TimelineConnectItem className="flex items-start justify-center">
                {cert.logoUrl ? (
                  <img
                    src={cert.logoUrl}
                    alt={cert.organization}
                    className="size-10 bg-white dark:bg-zinc-900 z-10 shrink-0 overflow-hidden p-1.5 border rounded-full shadow ring-2 ring-border object-contain flex-none"
                  />
                ) : (
                  <div className="size-10 bg-primary/10 text-primary z-10 shrink-0 border border-primary/20 rounded-full shadow-xs flex items-center justify-center flex-none">
                    <Award className="size-5" />
                  </div>
                )}
              </TimelineConnectItem>
              <div className="flex flex-1 flex-col justify-start gap-2 min-w-0">
                {cert.dates && (
                  <time className="text-xs text-muted-foreground">{cert.dates}</time>
                )}
                {cert.title && (
                  <h3 className="font-semibold leading-snug text-base sm:text-lg">{cert.title}</h3>
                )}
                <p className="text-sm text-muted-foreground font-medium">
                  {cert.organization} • {cert.platform}
                </p>
                {cert.skillsGained && cert.skillsGained.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {cert.skillsGained.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground ring-1 ring-inset ring-border"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
                {cert.credentialUrl && (
                  <div className="mt-2">
                    <Link
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-primary hover:underline font-medium"
                    >
                      <span>View Credential</span>
                      <ExternalLink className="size-3" />
                    </Link>
                  </div>
                )}
              </div>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  );
}
