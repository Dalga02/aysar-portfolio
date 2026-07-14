"use client";

import { motion } from "framer-motion";

export function HeroBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Grid fade */}
      <div
        className="absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Blobs */}
      <motion.div
        className="absolute -left-40 top-10 h-[520px] w-[520px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--accent) / 0.35), transparent 60%)",
        }}
        animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-32 top-40 h-[420px] w-[420px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--accent-soft) / 0.28), transparent 65%)",
        }}
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Star specks */}
      <div className="absolute inset-0">
        {Array.from({ length: 40 }).map((_, i) => {
          const left = (i * 37) % 100;
          const top = (i * 53) % 100;
          const delay = (i * 0.13) % 3;
          return (
            <span
              key={i}
              className="absolute h-[2px] w-[2px] rounded-full bg-ink/40 dark:bg-ink/60"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                animation: `float 6s ease-in-out ${delay}s infinite`,
                opacity: 0.5,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
