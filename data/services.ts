import {
  Code2,
  Server,
  Palette,
  Gauge,
  Search,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "Frontend Engineering",
    description:
      "Production-grade React and Next.js apps with accessible, motion-aware UI.",
    icon: Code2,
  },
  {
    title: "Backend & APIs",
    description:
      "TypeScript services, database schema, auth, and thoughtful REST or tRPC.",
    icon: Server,
  },
  {
    title: "UI Design",
    description:
      "Interfaces designed in the browser — from wireframe to polished component.",
    icon: Palette,
  },
  {
    title: "Performance",
    description:
      "Core Web Vitals audits, bundle diet, image and font strategy that lasts.",
    icon: Gauge,
  },
  {
    title: "SEO & Analytics",
    description:
      "Structured data, sitemap, Open Graph, and measurable, ethical analytics.",
    icon: Search,
  },
];
