import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Debojeet karmakar",
  initials: "DK",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Fullstack Engineer at Prepverse | Freelancer and SaaS developer. Passionate about exploring, traveling, and embracing nature.",
  summary:
    "**__23-year-old__** B.Tech graduate in **Computer Science**, always fascinated by new developments in the AI world. I love to **build things and experiment**—some might call me a bit nerdy, but I like to think I’m even more creative, always exploring what I can do best in this fast-moving landscape. I’m *curious by nature*, **passionate about technology**, and constantly on the lookout for exciting opportunities to grow and make an impact.",
  avatarUrl: "https://wsrv.nl/?url=https://cdn.hyrecruitai.com/website-assets/images/2fc213ad-b99c-4d8d-8f15-2d9c43c45290-debojeet.jpg",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Express", icon: Nodejs },
    { name: "Postgres", icon: Postgresql },
    { name: "Drizzle", icon: Postgresql },
    { name: "Prisma", icon: Postgresql },
    { name: "BetterAuth", icon: Postgresql },
    { name: "Zustand", icon: Docker },
    { name: "Docker", icon: Docker },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "debojeetkarmakar2004@outlook.com",
    tel: "+91 7488355142",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/debojeet-2004",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/debojeet-karmakar-852820210/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Prepverse",
      href: "https://prepverse.io",
      badges: [],
      location: "Remote",
      title: "Fullstack Engineer",
      logoUrl: "https://wsrv.nl/?url=https://cdn.hyrecruitai.com/website-assets/images/b6fb9fdd-1736-4df3-9f9b-a3733f7dcf2c-prepverse-logo.png&w=80",
      start: "Jan 2025",
      end: "Ongoing",
      description:
        "Developed Prepverse from scratch, an AI-powered preparation platform that streamlines candidate assessments and scheduling using advanced machine learning models. I implemented the full coding interview interface and an AI-powered verbal interview system, alongside a comprehensive admin module and a custom Resume Builder, all built with a seamless UI using shadcn components.",
    },
    {
      company: "Training Mug",
      badges: [],
      href: "https://trainingmug.com/",
      location: "Remote",
      title: "Frontend Engineer",
      logoUrl: "https://trainingmug.com/_next/image?url=%2Ftrainingmuglogo.png&w=128&q=75",
      start: "Sept 2024",
      end: "Dec 2024",
      description:
        "Developed a pioneering ed-tech platform with a high-performance landing page and intuitive UI/UX built using shadcn components to deliver byte-sized courses. I implemented personalized career paths and interactive learning tracks designed to bridge the gap between academic learning and industry-aligned requirements for college students.",
    },
  ],
  education: [
    {
      school: "JIS University",
      href: "https://www.jisuniversity.ac.in",
      degree: "B-Tech in Computer Science",
      logoUrl: "https://upload.wikimedia.org/wikipedia/en/4/46/JIS_University.svg",
      start: "2021",
      end: "2025",
    },
    {
      school: "Rajkamal Saraswati Vidya Mandir",
      href: "https://rsvm.in/",
      degree: "Passed 12th grade (Science, PCM)",
      logoUrl: "https://pl.respaper.com/160/s.a4f98b19d5.jpg",
      start: "2019",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "SafeHealth",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "App",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Devkit",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },

  ],
} as const;
