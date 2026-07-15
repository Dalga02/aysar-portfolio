"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/effects/Reveal";
import { services } from "@/data/services";
import { useLanguage } from "@/lib/language-context";

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="container-x py-24 md:py-32">
      <SectionTitle
        eyebrow={t.services.eyebrow}
        title={t.services.title}
        description={t.services.description}
      />

      <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map(({ icon: Icon }, i) => {
          const content = t.services.items[i];
          if (!content) return null;
          return (
            <Reveal key={content.title} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="glass noise group relative flex h-full flex-col gap-5 overflow-hidden rounded-3xl p-7"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle, hsl(var(--accent) / 0.5), transparent 60%)",
                  }}
                />
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-muted/70 text-accent transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:rotate-[-6deg]">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-2xl leading-tight">
                  {content.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-soft">
                  {content.description}
                </p>
                <div className="mt-auto flex items-center gap-2 text-sm text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {t.services.explore}
                </div>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
