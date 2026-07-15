"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Github, Sparkles } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { projects, projectCategories, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

export function Projects() {
  const [active, setActive] = useState<(typeof projectCategories)[number]>("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="container-x py-24 md:py-32">
      <SectionTitle
        eyebrow="Selected work"
        title="Projects worth talking about."
        description="A focused set of projects I'm building right now — real code, real problems, shipping soon."
      />

      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {projectCategories.map((cat) => {
          const isActive = active === cat;
          return (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={cn(
                "focus-ring rounded-full border px-4 py-1.5 text-sm transition-all",
                isActive
                  ? "border-accent bg-accent text-white"
                  : "border-border bg-surface/60 text-ink-soft hover:text-ink"
              )}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <motion.div layout className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <div className="mt-16 text-center text-ink-soft">
          No projects in this category yet — more coming soon.
        </div>
      )}
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isComingSoon = project.status === "coming-soon";
  const isInProgress = project.status === "in-progress";

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
      exit={{ opacity: 0, y: -20, filter: "blur(6px)" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative overflow-hidden rounded-3xl border border-border/70 bg-surface/40 backdrop-blur"
    >
      {/* Visual header */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <ProjectVisual title={project.title} />
        <div className="absolute inset-0 bg-gradient-to-t from-canvas/80 via-canvas/20 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-canvas/70 px-2.5 py-1 text-[11px] font-medium text-ink backdrop-blur">
          {project.category}
        </span>
        {(isComingSoon || isInProgress) && (
          <div className="absolute right-4 top-4 flex flex-col items-end gap-1.5">
            <span className="flex items-center gap-1.5 rounded-full bg-accent/90 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur">
              <Sparkles className="h-3 w-3" />
              In Development
            </span>
            {typeof project.progress === "number" && (
              <span className="rounded-full bg-canvas/70 px-2.5 py-1 text-[11px] font-medium text-ink backdrop-blur">
                {project.progress}% complete
              </span>
            )}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-4 p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-2xl leading-tight">{project.title}</h3>
          <div className="flex items-center gap-1.5 text-ink-soft">
            {project.github && (
              <a
                href={project.github}
                aria-label="GitHub"
                className="focus-ring rounded-full p-1.5 transition-colors hover:text-ink"
              >
                <Github className="h-4 w-4" />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                aria-label="Live demo"
                className="focus-ring rounded-full p-1.5 transition-colors hover:text-ink"
              >
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        <p className="text-sm leading-relaxed text-ink-soft">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border/60 bg-canvas/60 px-2 py-0.5 font-mono text-[11px] text-ink-soft"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Hover gradient border */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(120deg, transparent 30%, hsl(var(--accent) / 0.35), transparent 70%)",
          mixBlendMode: "overlay",
        }}
      />
    </motion.article>
  );
}

/** A stylish placeholder visual using CSS gradient + initials — used when there's no image. */
function ProjectVisual({ title }: { title: string }) {
  const initials = title
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const seeds: Record<string, string> = {
    "Task Flow": "linear-gradient(135deg, #6D5DF6, #2D1B69)",
    DevFinder: "linear-gradient(135deg, #4F46E5, #0F172A)",
    "Snippet Vault": "linear-gradient(135deg, #8B5CF6, #1E1B4B)",
  };

  const bg =
    seeds[title] ||
    "linear-gradient(135deg, hsl(var(--accent)), hsl(var(--accent-soft)))";

  return (
    <div
      className="flex h-full w-full items-center justify-center"
      style={{ background: bg }}
    >
      <span className="font-display text-6xl text-white/85 mix-blend-overlay md:text-7xl">
        {initials}
      </span>
    </div>
  );
}
