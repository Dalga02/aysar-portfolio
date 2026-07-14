"use client";

import { Zap, Smartphone, ShieldCheck, Sparkles, Cloud, Rocket } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const features = [
  { icon: Zap, label: "Fast" },
  { icon: Smartphone, label: "Responsive" },
  { icon: ShieldCheck, label: "Secure" },
  { icon: Sparkles, label: "Clean" },
  { icon: Cloud, label: "Cloud-ready" },
  { icon: Rocket, label: "SEO" },
];

export function FloatingFeatureCard() {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 800], [1, 0.94]);
  const opacity = useTransform(scrollY, [0, 400, 1400, 1700], [0, 1, 1, 0]);

  return (
    <motion.div
      style={{ scale, opacity }}
      className="pointer-events-none sticky bottom-6 z-30 mx-auto -mt-16 hidden w-fit md:block"
    >
      <div className="glass noise pointer-events-auto flex items-center gap-6 rounded-2xl px-6 py-4">
        {features.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="group flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-ink"
          >
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-muted/70 text-accent transition-transform group-hover:scale-110">
              <Icon className="h-4 w-4" />
            </span>
            <span className="hidden lg:inline">{label}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
