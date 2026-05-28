import { Icons } from "@/components/icons";
import { Briefcase, HomeIcon, NotebookIcon } from "lucide-react";
import { ReactNode } from "react";
import { projects } from "./projects";

import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Neon } from "@/components/ui/svgs/neon";
import { IoLogoFirebase } from "react-icons/io5";
import { SiSupabase } from "react-icons/si";
import { RiVercelFill } from "react-icons/ri";
import { VscAzure } from "react-icons/vsc";
import { IoLogoFigma } from "react-icons/io5";
import { SiTldraw } from "react-icons/si";
import { SiNotion } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { SiExpo } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiZod } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiDrizzle } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiReactquery } from "react-icons/si";
import { SiBetterauth } from "react-icons/si";
import { Zustand } from "@/components/ui/svgs/zustand";
import DodopaymentsIcon from "@/components/ui/svgs/dodo-payments";
import { triggerDevIcon } from "@/components/ui/svgs/trigger-dev";

// Interfaces
export interface Skill {
  name: string;
  icon: React.ComponentType<any>;
  category?: "frontend" | "backend" | "auth" | "design" | "infra";
}

export interface NavbarItem {
  href: string;
  icon: React.ComponentType<any>;
  label: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<any>;
  navbar: boolean;
}

export interface Contact {
  email: string;
  tel: string;
  social: Record<string, SocialLink>;
}

export interface WorkExperience {
  company: string;
  href: string;
  badges: string[];
  location: string;
  title: string;
  logoUrl: string;
  start: string;
  end: string;
  description: string[];
  isFeatured?: boolean;
}

export interface Education {
  school: string;
  href: string;
  degree: string;
  logoUrl: string;
  start: string;
  end: string;
}

export interface Badges {
  type: string;
  icon: ReactNode;
}

export interface Project {
  title: string;
  slug: string;
  href: string;
  dates: string;
  active: boolean;
  description: string;
  technologies: string[];
  badges?: Badges[];
  image: string;
  video: string;
  isFeatured: boolean;
  category: "personal" | "client";
  githubUrl?: string;
  status?: "completed" | "ongoing";
  fullDescription?: string;
}

export interface Hackathon {
  title: string;
  dates: string;
  location: string;
  description: string;
  image?: string;
  mlh: string;
  links: string[];
}

export interface ResumeData {
  name: string;
  initials: string;
  url: string;
  location: string;
  locationLink: string;
  description: string;
  summary: string;
  avatarUrl: string;
  skills: Skill[];
  navbar: NavbarItem[];
  contact: Contact;
  work: WorkExperience[];
  education: Education[];
  projects: Project[];
  hackathons: Hackathon[];
  activeMood?: "opportunities" | "travelling" | "away";
}


export const DATA: ResumeData = {
  name: "Debojeet karmakar",
  initials: "DK",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Fullstack Developer and Designer | Freelancer and SaaS developer. Passionate about exploring, traveling, and embracing nature.",
  summary:
    "**__22-year-old__** B.Tech graduate in **Computer Science**, always fascinated by new developments in the AI world. I love to **build things and experiment** some might call me a bit nerdy, but I like to think I’m even more creative, always exploring what I can do best in this fast-moving landscape. I’m *curious by nature*, **passionate about technology**, and constantly on the lookout for exciting opportunities to grow and make an impact.",
  avatarUrl: "https://atqpgrvnzrohszocxpxz.supabase.co/storage/v1/object/public/Devbuilds-media/debojeet-compressed.webp",
  activeMood: "opportunities",
  skills: [
    { name: "Next.js", icon: SiNextdotjs, category: "frontend" },
    { name: "React", icon: FaReact, category: "frontend" },
    { name: "Typescript", icon: Typescript, category: "frontend" },
    { name: "BetterAuth", icon: SiBetterauth, category: "auth" },
    { name: "shadcn", icon: SiShadcnui, category: "design" },
    { name: "Node.js", icon: Nodejs, category: "backend" },
    { name: "Express", icon: SiExpress, category: "backend" },
    { name: "Drizzle", icon: SiDrizzle, category: "backend" },
    { name: "Postgresql", icon: Postgresql, category: "backend" },
    { name: "Neon", icon: Neon, category: "backend" },
    { name: "Dodo Payments", icon: DodopaymentsIcon, category: "auth" },

    { name: "Zod", icon: SiZod, category: "frontend" },
    { name: "Zustand", icon: Zustand, category: "frontend" },
    { name: "TanStack Query", icon: SiReactquery, category: "frontend" },
    { name: "Trigger.dev", icon: triggerDevIcon, category: "auth" },
    { name: "Supabase", icon: SiSupabase, category: "backend" },
    { name: "Firebase", icon: IoLogoFirebase, category: "backend" },
    { name: "Github", icon: FaGithub, category: "infra" },

    { name: "React Native", icon: TbBrandReactNative, category: "frontend" },
    { name: "Expo", icon: SiExpo, category: "frontend" },

    { name: "Notion", icon: SiNotion, category: "design" },
    { name: "Tldraw", icon: SiTldraw, category: "design" },
    { name: "Figma", icon: IoLogoFigma, category: "design" },

    { name: "Docker", icon: Docker, category: "infra" },
    { name: "Vercel", icon: RiVercelFill, category: "infra" },
    { name: "Azure", icon: VscAzure, category: "infra" },

    { name: "Python", icon: FaPython, category: "backend" },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/projects", icon: Briefcase, label: "Projects" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "debojeetkarmakar2004@outlook.com",
    tel: "+91 9330455142",
    social: {
      X: {
        name: "X.com",
        url: "https://x.com/debojeetbuilds",
        icon: Icons.x,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/debojeet-karmakar-852820210",
        icon: Icons.linkedin,

        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/debojeet-2004",
        icon: Icons.github,
        navbar: true,
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
      start: "Sept 2024",
      end: "April 2026",
      isFeatured: true,
      description: [
        "Engineered Prepverse from the ground up, an AI-driven candidate assessment and scheduling platform utilizing advanced machine learning models.",
        "Designed and implemented the complete coding interview terminal interface and an AI-powered verbal assessment module.",
        "Built a fully-featured administrator dashboard and a custom drag-and-drop Resume Builder with a highly polished, responsive UI using shadcn components."
      ],
    },
    {
      company: "Training Mug",
      badges: [],
      href: "https://trainingmug.com/",
      location: "Remote",
      title: "Frontend Engineer",
      logoUrl: "https://trainingmug.com/_next/image?url=%2Ftrainingmuglogo.png&w=128&q=75",
      start: "June 2024",
      end: "Sept 2024",
      isFeatured: false,
      description: [
        "Developed a high-performance, responsive landing page and intuitive educational interface using shadcn/ui components for byte-sized content delivery.",
        "Architected and integrated personalized, dynamic student career pathways and interactive track builders.",
        "Bridged academic curricula with real-world industry standards, resulting in highly engaging, goal-oriented learning flows."
      ],
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
      logoUrl: "https://play-lh.googleusercontent.com/g4t_Y8xSHKVlKLB9ndJ3az7ybWevHj7VOmPPL7GdQm9eBxC9WAlKERLuRa80utNiuuQ",
      start: "2019",
      end: "2021",
    },
  ],

  projects: projects,

  hackathons: [
    {
      title: "CodeSprint-SIH 2024",
      dates: "2024",
      location: "Jis University",
      description:
        "Developed a mobile application which use to tell about the users Prescription and Medical Report and suggest natural ways to improve their health.",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack for Bengal",
      dates: "2024",
      location: "Jis Engineering College",
      description:
        "Developed a mobile application which use to tell about the users Prescription and Medical Report and suggest natural ways to improve their health.",
      image: "https://images.lumacdn.com/calendars/m1/bdd66e60-b42c-4e92-a316-f3a6424d911d",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Codefest",
      dates: "2023",
      location: "Jis University",
      description:
        "Organized a successful three-day hybrid hackathon with seamless coordination between in-person and virtual participants, strong team collaboration, and effective problem-solving.",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },

  ],
} as const;
