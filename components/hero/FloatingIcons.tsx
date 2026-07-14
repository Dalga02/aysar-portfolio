"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

const icons = [
  { label: "React", top: "8%", left: "6%", delay: 0 },
  { label: "TS", top: "22%", left: "82%", delay: 0.4 },
  { label: "Next", top: "62%", left: "3%", delay: 0.8 },
  { label: "Node", top: "78%", left: "88%", delay: 1.2 },
  { label: "Tailwind", top: "40%", left: "92%", delay: 1.6 },
  { label: "Docker", top: "88%", left: "40%", delay: 2 },
  { label: "Prisma", top: "12%", left: "48%", delay: 2.4 },
  { label: "Supabase", top: "70%", left: "60%", delay: 2.8 },
];

export function FloatingIcons() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const tx = useTransform(mx, (v) => v * 12);
  const ty = useTransform(my, (v) => v * 12);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      mx.set(nx);
      my.set(ny);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [mx, my]);

  return (
    <motion.div style={{ x: tx, y: ty }} className="pointer-events-none absolute inset-0">
      {icons.map((icon, i) => (
        <motion.div
          key={icon.label}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -14, 0],
          }}
          transition={{
            opacity: { duration: 0.6, delay: 0.3 + i * 0.05 },
            scale: { duration: 0.6, delay: 0.3 + i * 0.05 },
            y: { duration: 5 + (i % 3), repeat: Infinity, delay: icon.delay, ease: "easeInOut" },
          }}
          style={{ top: icon.top, left: icon.left }}
          className="absolute"
        >
          <div className="glass flex h-11 items-center gap-2 rounded-full px-3 text-xs font-medium text-ink-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {icon.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
