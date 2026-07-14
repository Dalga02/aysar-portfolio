export type SkillGroup = {
  title: string;
  items: { name: string; level: number }[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 92 },
      { name: "Tailwind CSS", level: 94 },
      { name: "Framer Motion", level: 85 },
      { name: "React Native", level: 78 },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", level: 90 },
      { name: "PostgreSQL", level: 85 },
      { name: "Prisma", level: 88 },
      { name: "REST / GraphQL", level: 84 },
      { name: "Redis", level: 72 },
    ],
  },
  {
    title: "Tools & Cloud",
    items: [
      { name: "Git / GitHub", level: 95 },
      { name: "Docker", level: 80 },
      { name: "Vercel / AWS", level: 82 },
      { name: "Supabase", level: 85 },
      { name: "Figma", level: 78 },
    ],
  },
];

export const techIcons = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Tailwind",
  "Docker",
  "Prisma",
  "Supabase",
  "GitHub",
  "Framer",
];
