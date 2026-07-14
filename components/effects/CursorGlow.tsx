"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const [pos, setPos] = useState({ x: -400, y: -400 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setEnabled(true);

    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-[45] h-[420px] w-[420px] rounded-full blur-3xl mix-blend-screen"
      style={{
        background:
          "radial-gradient(circle, hsl(var(--accent) / 0.25), transparent 60%)",
      }}
      animate={{ x: pos.x - 210, y: pos.y - 210 }}
      transition={{ type: "spring", stiffness: 60, damping: 22, mass: 0.6 }}
    />
  );
}
