"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/effects/Reveal";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="container-x py-24 md:py-32">
      <SectionTitle
        eyebrow="Skills"
        title="Depth where it matters, breadth to move fast."
        description="A working stack shaped by shipping. I go deep on the layers I own end to end, and stay comfortable across the rest."
      />

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {skillGroups.map((group, gi) => (
          <Reveal key={group.title} delay={gi * 0.05}>
            <div className="glass noise flex h-full flex-col gap-6 rounded-3xl p-7">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl">{group.title}</h3>
                <span className="rounded-full bg-muted/70 px-2.5 py-1 font-mono text-[11px] text-ink-soft">
                  0{gi + 1}
                </span>
              </div>

              <ul className="flex flex-col gap-5">
                {group.items.map((s, i) => (
                  <li key={s.name} className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-ink">{s.name}</span>
                      <span className="tabular-nums text-ink-soft">
                        {s.level}
                      </span>
                    </div>
                    <div className="relative h-1.5 overflow-hidden rounded-full bg-muted/70">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{
                          duration: 1.1,
                          delay: 0.15 + i * 0.05,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="absolute inset-y-0 left-0 rounded-full"
                        style={{
                          background:
                            "linear-gradient(90deg, hsl(var(--accent)), hsl(var(--accent-soft)))",
                          boxShadow:
                            "0 0 20px -4px hsl(var(--accent) / 0.6)",
                        }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
