"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Reveal } from "@/components/effects/Reveal";
import { techIcons } from "@/data/skills";
import { site } from "@/data/site";

const stats = [
  { value: 1, suffix: "+", label: "Years shipping" },
  { value: 10, suffix: "+", label: "Projects delivered" },
  { value: 5, suffix: "+", label: "Happy clients" },
  { value: 100, suffix: "%", label: "Care per pixel" },
];

export function About() {
  return (
    <section id="about" className="container-x py-24 md:py-32">
      <SectionTitle
        eyebrow="About"
        title="Engineer who cares about the last 10%."
        description="I've spent the last few years building products that need to work well on a phone in a village and a monitor in a boardroom. I like small teams, careful choices, and code that will read well a year from now."
      />

      <div className="mt-16 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-start">
        <Reveal>
          <div className="glass noise flex flex-col gap-6 rounded-3xl p-8 md:p-10">
            {/* Avatar + name row */}
            <div className="flex items-center gap-4">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="relative"
              >
                <div
                  aria-hidden
                  className="absolute inset-0 rounded-full blur-lg"
                  style={{
                    background:
                      "radial-gradient(circle, hsl(var(--accent) / 0.45), transparent 70%)",
                  }}
                />
                <Image
                  src={site.avatarUrl}
                  alt={site.name}
                  width={72}
                  height={72}
                  unoptimized
                  className="relative rounded-full border-2 border-accent/40 bg-canvas"
                />
              </motion.div>
              <div>
                <div className="font-display text-2xl leading-tight">
                  {site.name}
                </div>
                <div className="text-sm text-ink-soft">
                  {site.role} · {site.location}
                </div>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-ink-soft">
              Based in Amman, I collaborate with founders and product teams to
              ship interfaces that are quick, considered, and honest. I care
              about the tiny frictions — the hover you didn't notice was
              missing, the empty state that told you what to do, the load that
              never happened.
            </p>
            <p className="leading-relaxed text-ink-soft">
              My default stack is Next.js, TypeScript, Tailwind, and Postgres,
              but the tools follow the problem. When a project needs a
              different shape, I pick the boring one that will still make sense
              in three years.
            </p>

            <div>
              <div className="text-xs uppercase tracking-[0.14em] text-ink-soft">
                Tech I reach for
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {techIcons.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border/70 bg-canvas/60 px-3 py-1 text-sm text-ink-soft"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="glass noise flex flex-col gap-2 rounded-2xl p-6"
              >
                <div className="font-display text-5xl leading-none text-ink md:text-6xl">
                  <AnimatedCounter to={s.value} suffix={s.suffix} />
                </div>
                <div className="text-sm text-ink-soft">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
