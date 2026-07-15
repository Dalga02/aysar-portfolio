"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Reveal } from "@/components/effects/Reveal";
import { techIcons } from "@/data/skills";
import { site } from "@/data/site";
import { useLanguage } from "@/lib/language-context";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="container-x py-24 md:py-32">
      <SectionTitle
        eyebrow={t.about.eyebrow}
        title={t.about.title}
        description={t.about.description}
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
                  {site.role} · {t.hero.location}
                </div>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-ink-soft">
              {t.about.bio1}
            </p>
            <p className="leading-relaxed text-ink-soft">{t.about.bio2}</p>

            <div>
              <div className="text-xs uppercase tracking-[0.14em] text-ink-soft">
                {t.about.techLabel}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {techIcons.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border/70 bg-canvas/60 px-3 py-1 text-sm text-ink-soft"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 gap-4">
            {t.about.stats.map((s) => (
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
