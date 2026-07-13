import { Icons } from "@/components/icons";
import { Briefcase, HomeIcon, NotebookIcon } from "lucide-react";
import { ReactNode } from "react";
import { projects } from "./projects";

import { Typescript } from "@/components/ui/svgs/typescript";
import { PowerBI } from "@/components/ui/svgs/powerbi";
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
import { MdDashboardCustomize } from "react-icons/md";
import { VscVscodeInsiders } from "react-icons/vsc";
import { RiFileExcel2Fill } from "react-icons/ri";
import { FaDatabase } from "react-icons/fa";


import { Zustand } from "@/components/ui/svgs/zustand";

import DodopaymentsIcon from "@/components/ui/svgs/dodo-payments";
import { triggerDevIcon } from "@/components/ui/svgs/trigger-dev";

// Interfaces

export interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}

export interface SkillsData {
  data: SkillCategory[];
  software: SkillCategory[];
}

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

export interface Certification {
  title: string;
  organization: string;
  platform: string;
  dates: string;
  credentialUrl: string;
  logoUrl?: string;
  skillsGained: string[];
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
  skills: SkillsData;
  navbar: NavbarItem[];
  contact: Contact;
  work: WorkExperience[];
  education: Education[];
  projects: Project[];
  hackathons: Hackathon[];
  certifications: Certification[];
  activeMood?: "opportunities" | "travelling" | "away";
}


export const DATA: ResumeData = {
  name: "Debojeet karmakar",
  initials: "DK",
  url: "https://debojeet.in",
  location: "Kolkata, West Bengal",
  locationLink: "https://www.google.com/maps/place/Kolkata",
  description:
    "Fullstack Developer and Designer | Freelancer and SaaS developer. Passionate about exploring, traveling, and embracing nature.",
  summary:
    "**Computer Science graduate** with nearly **two years of professional experience** as a **Full-Stack Developer**, now transitioning into **Data Analytics**. Experienced in building scalable SaaS applications, AI-powered features, and data-driven dashboards, including contributing to the growth of a platform from **0 to 44k+ active users**. Skilled in **SQL, Python, Excel, Power BI, and data visualization**, with a passion for transforming raw data into **actionable business insights**. I enjoy solving business problems through analytics while also leveraging my software engineering background to **automate workflows, build internal tools, and develop AI-powered solutions** that improve decision-making and operational efficiency.",
  avatarUrl: "https://atqpgrvnzrohszocxpxz.supabase.co/storage/v1/object/public/Devbuilds-media/debojeet-compressed.webp",
  activeMood: "opportunities",
  skills: {
    data: [
      {
        id: "analysis",
        title: "Data Analysis",
        skills: [
          { name: "SQL", icon: FaDatabase },
          { name: "Excel", icon: RiFileExcel2Fill },
          { name: "Python", icon: FaPython },
        ],
      },
      {
        id: "python",
        title: "Python Ecosystem",
        skills: [
          { name: "NumPy", icon: FaPython },
          { name: "Pandas", icon: FaPython },
          { name: "Matplotlib", icon: FaPython },
          { name: "Seaborn", icon: FaPython },
        ],
      },
      {
        id: "visualization",
        title: "Visualization & BI",
        skills: [
          { name: "Power BI", icon: PowerBI },
          { name: "Dashboarding", icon: MdDashboardCustomize },
          // { name: "EDA", icon: Icons.chart },
        ],
      },
      {
        id: "tools",
        title: "Databases & Tools",
        skills: [
          { name: "PostgreSQL", icon: Postgresql },
          { name: "Neon", icon: Neon },
          { name: "Git", icon: FaGithub },
          { name: "VS Code", icon: VscVscodeInsiders },
        ],
      },
    ],

    software: [
      {
        id: "frontend",
        title: "Frameworks & Client-Side",
        skills: [
          { name: "Next.js", icon: SiNextdotjs },
          { name: "React", icon: FaReact },
          { name: "Typescript", icon: Typescript },
          { name: "Zod", icon: SiZod },
          { name: "Zustand", icon: Zustand },
          { name: "TanStack Query", icon: SiReactquery },
          { name: "React Native", icon: TbBrandReactNative },
          { name: "Expo", icon: SiExpo },
        ],
      },
      {
        id: "backend",
        title: "Backend & Databases",
        skills: [
          { name: "Node.js", icon: Nodejs },
          { name: "Express", icon: SiExpress },
          { name: "Drizzle", icon: SiDrizzle },
          { name: "PostgreSQL", icon: Postgresql },
          { name: "Neon", icon: Neon },
          { name: "Supabase", icon: SiSupabase },
          { name: "Firebase", icon: IoLogoFirebase },
          { name: "Python", icon: FaPython },
        ],
      },
      {
        id: "auth",
        title: "Authentication & Payments",
        skills: [
          { name: "BetterAuth", icon: SiBetterauth },
          { name: "Dodo Payments", icon: DodopaymentsIcon },
          { name: "Trigger.dev", icon: triggerDevIcon },
        ],
      },
      {
        id: "design",
        title: "Design & UI Architecture",
        skills: [
          { name: "shadcn", icon: SiShadcnui },
          { name: "Notion", icon: SiNotion },
          { name: "Tldraw", icon: SiTldraw },
          { name: "Figma", icon: IoLogoFigma },
        ],
      },
      {
        id: "infra",
        title: "Infrastructure & Tools",
        skills: [
          { name: "GitHub", icon: FaGithub },
          { name: "Docker", icon: Docker },
          { name: "Vercel", icon: RiVercelFill },
          { name: "Azure", icon: VscAzure },
        ],
      },
    ],
  },
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/projects", icon: Briefcase, label: "Projects" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
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
        "Scaled and co-managed the Prepverse SaaS platform from 0 to 44,000+ active users, co-directing Full-Stack system architecture built on Next.js",
        "Designed and implemented real-time AI-powered candidate assessments, collaborative coding terminals, and drag-and-drop builder modules using WebSockets and Vercel AI SDK.",
        "Optimized data storage layers and querying pipelines using PostgreSQL, Neon, and Drizzle ORM, successfully reducing dashboard query latency by over 35%."
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
        "Developed high-converting, responsive landing pages and interactive dashboards using React, TypeScript, and TailwindCSS, driving a 25% increase in user retention.",
        "Architected scalable, dynamic learning paths and modular track builders, optimizing state management via React Query and Zustand.",
        "Composed accessible UI components (WCAG compliant) based on Radix UI and shadcn templates, ensuring pixel-perfect responsive layouts across devices."
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
  certifications: [
    {
      title: "Google Data Analytics Professional Certificate",
      organization: "Google",
      platform: "Coursera",
      dates: "2026",
      credentialUrl: "https://coursera.org/share/aba2b286206637349a2d4bc000d476f4",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
      skillsGained: [
        "Data Cleaning",
        "Data Analysis",
        "Data Visualization",
        "SQL",
        "Spreadsheet Analysis",
        "Python Programming (Fundamentals)",
        "Data Ethics",
        "Data-Driven Decision Making",
        "Business Analysis",
        "Analytical Thinking",
      ],
    },
    {
      title: "Excel Basics for Data Analysis",
      organization: "IBM",
      platform: "Coursera",
      dates: "2026",
      credentialUrl: "https://coursera.org/share/a381be3c810120166b9478a26095dfa7",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      skillsGained: [
        "Microsoft Excel",
        "Data Cleaning",
        "Data Preparation",
        "Sorting & Filtering",
        "Pivot Tables",
        "Basic Data Analysis",
        "Spreadsheet Functions",
        "Data Organization",
      ],
    },
    {
      title: "Databases and SQL for Data Science with Python",
      organization: "IBM",
      platform: "Coursera",
      dates: "2026",
      credentialUrl: "https://coursera.org/share/087fd173a2a6e8bf088b07f5daf44ff9",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      skillsGained: [
        "SQL",
        "PostgreSQL",
        "Database Design",
        "Data Retrieval",
        "Data Filtering",
        "Joins",
        "Aggregations",
        "Subqueries",
        "Database Concepts",
        "SQL with Python",
      ],
    },
  ],
} as const;
