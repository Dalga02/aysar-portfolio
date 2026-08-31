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
    ],
  },
  {
    title: "Tools & Cloud",
    items: [
      { name: "Git / GitHub", level: 95 },
      { name: "Docker", level: 65 },
    ],
  },
];

export const learningTech = [
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "REST / GraphQL",
  "Redis",
];

export const techIcons = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Tailwind",
  "Docker",
  "Prisma",
  "GitHub",
];
