"use client";

import { motion } from "framer-motion";
import { Quote, Sparkles } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/effects/Reveal";

export function Testimonials() {
  return (
    <section id="testimonials" className="container-x py-24 md:py-32">
      <SectionTitle
        eyebrow="Kind words"
        title="What people say."
        description="Working with clients now — kind words coming soon."
      />

      <Reveal className="mt-14">
        <div className="glass noise relative mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-3xl p-10 text-center md:p-14">
          {/* Floating decorative quotes */}
          <motion.span
            aria-hidden
            initial={{ opacity: 0, scale: 0.6, rotate: -12 }}
            whileInView={{ opacity: 0.15, scale: 1, rotate: -12 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="pointer-events-none absolute left-8 top-8 text-accent"
          >
            <Quote className="h-16 w-16" />
          </motion.span>
          <motion.span
            aria-hidden
            initial={{ opacity: 0, scale: 0.6, rotate: 12 }}
            whileInView={{ opacity: 0.15, scale: 1, rotate: 12 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="pointer-events-none absolute bottom-8 right-8 rotate-180 text-accent"
          >
            <Quote className="h-16 w-16" />
          </motion.span>

          <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-canvas/50 px-3 py-1 text-xs font-medium text-accent">
            <Sparkles className="h-3.5 w-3.5" />
            Coming soon
          </span>

          <h3 className="font-display text-3xl leading-tight md:text-4xl">
            Building relationships,
            <br />
            one project at a time.
          </h3>

          <p className="max-w-lg text-ink-soft">
            I'm actively working with clients right now. Testimonials will land
            here as projects wrap up.
          </p>

          <a
            href="#contact"
            className="focus-ring mt-2 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-soft"
          >
            Be the first
          </a>
        </div>
      </Reveal>
    </section>
  );
}
