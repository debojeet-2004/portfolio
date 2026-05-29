import { Icons } from "@/components/icons";
import type { Project } from "./resume";

export const projects: Project[] = [
  {
    title: "SafeHealth",
    slug: "safehealth",
    href: "https://chatcollect.com",
    dates: "Oct 2024 - Dec 2024",
    active: true,
    isFeatured: true,
    category: "personal",
    status: "completed",
    githubUrl: "https://github.com/debojeet-2004/safehealth",
    description: "Healthcare app for understanding prescriptions and scheduling medication intake using React Native, Supabase, and AI-powered analysis.",
    technologies: [
      "Expo",
      "React Native",
      "Typescript",
      "PostgreSQL",
      "Drizzle",
      "Neon",
      "Open Ai Apis",
      "Supabase Storage",
    ],
    badges: [
      {
        type: "App",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "https://atqpgrvnzrohszocxpxz.supabase.co/storage/v1/object/public/Devbuilds-media/safehealth.webp",
    video: "",
    fullDescription: `# SafeHealth - AI Powered Prescription & Medication Guide

      SafeHealth is a comprehensive mobile and web application designed to help patients understand their prescriptions and stay on track with their medication schedules. By leveraging AI-powered analysis, patients can easily scan their physical prescriptions, extract complex medical details, and receive detailed suggestions and safety guidelines in plain, accessible language.

      ## Key Features

      - **Prescription Scanning & OCR:** Capture or upload images of your physical prescription to extract active ingredients and instructions automatically.
      - **AI-Powered Explanations:** Get a detailed, user-friendly breakdown of what each medication is for, its dosage rules, and natural ways to improve health.
      - **Medication Scheduling & Alerts:** Set recurring medication reminders with scheduling calendars so you never miss a dose.
      - **Offline Mode Support:** View synced prescriptions and instructions without an internet connection using local SQLite cache storage.

      ## The Technology Stack

      SafeHealth was constructed with state-of-the-art technologies to ensure high speed, data integrity, and a premium user experience:

      - **Frontend:** React Native with Expo and TypeScript for cross-platform app performance, TailwindCSS (NativeWind) for layout styling.
      - **Backend Service:** Next.js Server Actions and Route Handlers for the secure ingestion and routing of AI models.
      - **Database layer:** Supabase PostgreSQL with Drizzle ORM and Neon DB cluster for scalable storage.
      - **AI Integration:** OpenAI GPT-4 Vision model to analyze scanned documents and deliver medical guidance.`
  },
  {
    title: "Devbuilds CLI Tool",
    slug: "devkit",
    href: "https://www.npmjs.com/package/@dvbuilds/kit",
    dates: "Dec 2025 - Feb 2026",
    active: true,
    isFeatured: true,
    category: "personal",
    status: "completed",
    githubUrl: "https://github.com/Developers-stater-kit/CLI-TOOL",
    description: "Designed, developed and sold animated UI components for developers.",
    technologies: [
      "Next.js",
      "React",
      "ora",
      "Chalk",
      "commander",
      "Typescript",
      "PostgreSQL",
      "Drizzle",
      "Neon",
      "TailwindCSS",
      "Shadcn UI",
    ],
    badges: [
      {
        type: "Website",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "Source",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "https://atqpgrvnzrohszocxpxz.supabase.co/storage/v1/object/public/Devbuilds-media/devbuilds-cli-tool.webp",
    video: "",
    fullDescription: `# Devbuilds CLI Tool - Instant Modern Component Ingestion
      Devbuilds is an interactive command-line interface tool that enables web engineers to inject beautiful, ready-to-use React and Tailwind CSS components directly into their localized codebases. Built with high performance and accessibility in mind, it bridges the gap between complex UI design systems and day-to-day coding productivity.

      ## Key Features

      - **Interactive CLI UI:** Intuitive terminal experience built on top of Clack for seamless component selection and customization.
      - **Zero-Config Integrations:** Auto-detects project configurations (Next.js, Vite, Tailwind CSS, shadcn settings) and installs necessary dependencies out-of-the-box.
      - **Dynamic Registries:** Connects to remote UI registries to fetch, compile, and stream components with custom presets.
      - **Tailwind v4 Optimized:** Full compatibility with the latest Tailwind CSS v4 design pipelines.

      ## Tech Stack Overview

      - **Runtime & CLI Engine:** Node.js, Commander.js, and Clack for building the terminal shell.
      - **Component Stack:** React, Tailwind CSS, shadcn UI, and Magic UI tokens.
      - **Bundler & Compiler:** Bun and esbuild for lightning-fast compilation speeds.`
  },
  {
    title: "ZenoAI",
    slug: "zenoai",
    href: "https://zenoai-rouge.vercel.app",
    dates: "Jan 2024 - Feb 2024",
    active: true,
    isFeatured: false,
    category: "personal",
    status: "completed",
    // githubUrl: "",
    description: "AI-powered RAG SaaS enabling businesses to build chatbots on custom data and deploy them instantly via script widgets.",
    technologies: [
      "Next.js",
      "React",
      "Typescript",
      "Supabase",
      "PostgreSQL",
      "Drizzle",
      "pgvector",
      "Vercel",
      "Vercel AI SDK",
      "Gemini AI",
      "Better Auth",
      "Dodo Payments",
      "TailwindCSS",
      "Shadcn UI",
    ],
    badges: [
      {
        type: "Website",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "https://atqpgrvnzrohszocxpxz.supabase.co/storage/v1/object/public/Devbuilds-media/zenoai.webp",
    video: "",
    fullDescription: `# ZenoAI - Custom Data AI Chatbot Deployer
      ZenoAI is a modern AI-powered RAG (Retrieval-Augmented Generation) SaaS platform that enables businesses to build context-aware chatbots trained on custom files and deploy them instantly on any website.

      ## Key Features

      - **Custom Knowledge Ingestion:** Upload PDFs, company wikis, product catalogs, or FAQs to train your chatbot.
      - **Embeddable Chat Widget:** Integrate the AI assistant into any landing page using a lightweight JavaScript snippet.
      - **Secure Sandbox Security:** Includes API key management and origin domain restrictions to prevent unauthorized use.
      - **Live Memory & Streaming:** Supports real-time streaming conversations with multi-turn session memory.
      - **Monetization & Billing:** Organization-based multi-tenant workspaces powered by Better Auth and Dodo Payments billing.

      ## Technical Architecture & RAG Pipeline

      - **Vector Database:** Stores high-dimensional document chunk embeddings inside PostgreSQL using pgvector.
      - **Embedding Generation:** Generates document chunk vectors dynamically via Gemini Embeddings API.
      - **Semantic Retrieval:** Queries relevant company knowledge in real-time using cosine similarity vector search.
      - **Contextual Generation:** Combines retrieved knowledge chunks with chat history to stream accurate responses using Gemini 2.5 Flash models.`
  },
  {
    title: "Nirmal Dental Care",
    slug: "nirmal-dental",
    href: "https://nirmaldentalclinic.vercel.app/",
    dates: "Mar 2024 - Apr 2024",
    active: true,
    isFeatured: false,
    category: "client",
    status: "completed",
    // githubUrl: "https://github.com/debojeet-2004/pearl-dental",
    description: "High-converting, performance-optimized premium landing page for a modern dental clinic featuring interactive booking, custom clinic schedules, and responsive UI.",
    technologies: [
      "Next.js",
      "React",
      "Typescript",
      "TailwindCSS",
      "Vercel",
      "Shadcn UI",
    ],
    badges: [
      {
        type: "Website",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "https://atqpgrvnzrohszocxpxz.supabase.co/storage/v1/object/public/Devbuilds-media/niraml-dental.webp",
    video: "",
    fullDescription: `# Pearl Dental Care - Premium Clinic Experience

    Pearl Dental Care is a modern, high-converting digital landing platform developed for a leading cosmetic dentistry clinic. Built with pixel-perfect visual design, the site drives patient acquisition through a fluid interactive appointment schedule, interactive service showcase, and optimized client feedback flows.

    ## Key Features

    - **Seamless Appointment Scheduler:** Patients can select dental services, choose doctors, and pick available time slots via an elegant multi-step calendar form.
    - **Interactive Service Explorer:** Beautifully polished visual cards detailing dental treatments with smooth accordion transitions.
    - **Dynamic Patient Testimonials:** A custom infinite scroll banner displaying high-fidelity client success stories and before/after metrics.
    - **Local SEO Optimized:** Configured with Google Maps embeds, structural schema metadata, and lightning-fast loading speeds to dominate regional search results.

    ## The Design & Development Stack

    - **Frontend & Routing:** Next.js with React Server Components (RSC) for instantaneous initial content rendering.
    - **Fluid Micro-Interactions:** Framer Motion for responsive, spring-based scroll entries and tab indicator transitions.
    - **Layout and Typography:** Tailwind CSS optimized styling matching a clean, medical-grade color system (deep ocean teals and warm slates).
    - **Interactive Elements:** Radix UI primitives composed beautifully via shadcn/ui.`
  },
];
