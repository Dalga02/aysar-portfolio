"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { timeline } from "@/data/timeline";
import { useLanguage } from "@/lib/language-context";

export function Timeline() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 40%"],
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="container-x py-24 md:py-32">
      <SectionTitle
        eyebrow={t.timeline.eyebrow}
        title={t.timeline.title}
        description={t.timeline.description}
      />

      <div ref={ref} className="relative mx-auto mt-16 max-w-3xl">
        {/* Base line */}
        <div className="absolute inset-y-0 start-4 w-px bg-border md:start-1/2 md:-translate-x-1/2" />
        {/* Animated line */}
        <motion.div
          style={{ height }}
          className="absolute top-0 start-4 w-px origin-top md:start-1/2 md:-translate-x-1/2"
        >
          <div
            className="h-full w-full"
            style={{
              background:
                "linear-gradient(180deg, hsl(var(--accent)), hsl(var(--accent-soft)))",
              boxShadow: "0 0 24px 0 hsl(var(--accent) / 0.5)",
            }}
          />
        </motion.div>

        <ul className="flex flex-col gap-14">
          {t.timeline.items.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.li
                key={`${item.title}-${i}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative grid grid-cols-[32px_1fr] gap-6 md:grid-cols-2"
              >
                {/* Dot */}
                <span className="absolute start-4 top-6 -ms-2 h-4 w-4 rounded-full border-2 border-canvas bg-accent shadow-[0_0_0_4px_hsl(var(--accent)/0.25)] md:start-1/2 md:-translate-x-1/2" />

                <div
                  className={
                    isLeft
                      ? "col-start-2 md:col-span-1 md:pe-12 md:text-end"
                      : "col-start-2 md:col-span-1 md:col-start-2 md:ps-12"
                  }
                >
                  <div className="glass noise rounded-2xl p-6">
                    <span className="font-mono text-xs uppercase tracking-[0.12em] text-accent">
                      {timeline[i]?.year}
                    </span>
                    <h3 className="mt-2 font-display text-2xl leading-tight">
                      {item.title}
                    </h3>
                    <div className="mt-1 text-sm text-ink-soft">{item.org}</div>
                    <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
