"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/effects/Reveal";
import { skillGroups } from "@/data/skills";
import { useLanguage } from "@/lib/language-context";

function SkillRow({
  name,
  level,
  delay,
}: {
  name: string;
  level: number;
  delay: number;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const value = useMotionValue(0);
  const rounded = useTransform(value, (v) => Math.round(v).toString());
  const width = useTransform(value, (v) => `${v}%`);

  useEffect(() => {
    if (inView) {
      const controls = animate(value, level, {
        duration: 1.1,
        delay,
        ease: [0.22, 1, 0.36, 1],
      });
      return controls.stop;
    }
  }, [inView, level, delay, value]);

  return (
    <li ref={ref} className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between text-sm">
        <span className="text-ink">{name}</span>
        <motion.span className="tabular-nums text-ink-soft">
          {rounded}
        </motion.span>
      </div>
      <div className="relative h-1.5 overflow-hidden rounded-full bg-muted/70">
        <motion.div
          className="absolute inset-y-0 start-0 rounded-full"
          style={{
            width,
            background:
              "linear-gradient(90deg, hsl(var(--accent)), hsl(var(--accent-soft)))",
            boxShadow: "0 0 20px -4px hsl(var(--accent) / 0.6)",
          }}
        />
      </div>
    </li>
  );
}

export function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="container-x py-24 md:py-32">
      <SectionTitle
        eyebrow={t.skills.eyebrow}
        title={t.skills.title}
        description={t.skills.description}
      />

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {skillGroups.map((group, gi) => (
          <Reveal key={group.title} delay={gi * 0.05}>
            <div className="glass noise flex h-full flex-col gap-6 rounded-3xl p-7">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl">
                  {t.skills.groupTitles[gi] ?? group.title}
                </h3>
                <span className="rounded-full bg-muted/70 px-2.5 py-1 font-mono text-[11px] text-ink-soft">
                  0{gi + 1}
                </span>
              </div>

              <ul className="flex flex-col gap-5">
                {group.items.map((s, i) => (
                  <SkillRow
                    key={s.name}
                    name={s.name}
                    level={s.level}
                    delay={0.15 + i * 0.05}
                  />
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}