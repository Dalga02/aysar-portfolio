export type Project = {
  title: string;
  description: string;
  tags: string[];
  category: "Frontend" | "Backend" | "Full Stack" | "AI" | "Open Source";
  image?: string;
  github?: string;
  demo?: string;
  featured?: boolean;
  status?: "live" | "coming-soon" | "in-progress";
};

export const projects: Project[] = [
  {
    title: "Task Flow",
    description:
      "A clean, focused task manager with drag-and-drop lists, authentication, and realtime sync — like a leaner Todoist.",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind", "DnD Kit"],
    category: "Full Stack",
    status: "coming-soon",
  },
  {
    title: "DevFinder",
    description:
      "Search any developer on GitHub and get a clean visual profile — repos, top languages, activity charts, all in one view.",
    tags: ["Next.js", "TypeScript", "GitHub API", "Recharts", "Tailwind"],
    category: "Frontend",
    status: "coming-soon",
  },
  {
    title: "Snippet Vault",
    description:
      "A personal library for code snippets with syntax highlighting, search, and language tags — built for the way developers actually work.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Shiki", "Tailwind"],
    category: "Full Stack",
    status: "coming-soon",
  },
];

export const projectCategories = [
  "All",
  "Frontend",
  "Backend",
  "Full Stack",
  "AI",
  "Open Source",
] as const;
