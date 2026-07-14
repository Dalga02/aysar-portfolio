"use client";

import { motion } from "framer-motion";

export function HeroIllustration() {
  return (
    <div className="relative aspect-square w-full max-w-lg">
      {/* Glow behind */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--accent) / 0.35), transparent 60%)",
        }}
      />

      {/* Monitor */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="glass noise absolute left-1/2 top-1/2 aspect-[16/10] w-[78%] -translate-x-1/2 -translate-y-[58%] rounded-2xl p-3"
      >
        <div className="flex items-center gap-1.5 pb-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
        </div>
        <div className="grid h-full grid-cols-[110px_1fr] gap-2 rounded-lg bg-canvas/50 p-3 font-mono text-[10px]">
          <div className="space-y-1 text-ink-soft">
            <div className="opacity-80">📁 app</div>
            <div className="pl-3">layout.tsx</div>
            <div className="pl-3 text-accent">page.tsx</div>
            <div className="opacity-80">📁 components</div>
            <div className="pl-3">Hero.tsx</div>
            <div className="pl-3">Nav.tsx</div>
          </div>
          <div className="space-y-1">
            <div className="text-ink-soft">
              <span className="text-accent">export default</span>{" "}
              <span className="text-ink">function</span>{" "}
              <span className="text-accent-soft">Hero</span>() {"{"}
            </div>
            <div className="pl-3 text-ink-soft">
              <span className="text-accent">return</span> (
            </div>
            <div className="pl-6 text-ink">
              &lt;<span className="text-accent-soft">section</span>&gt;
            </div>
            <div className="pl-9 text-ink-soft">Crafting things.</div>
            <div className="pl-6 text-ink">
              &lt;/<span className="text-accent-soft">section</span>&gt;
            </div>
            <div className="pl-3 text-ink-soft">);</div>
            <div className="text-ink-soft">{"}"}</div>
          </div>
        </div>
      </motion.div>

      {/* Stand */}
      <div className="absolute left-1/2 top-[62%] h-3 w-24 -translate-x-1/2 rounded-b-lg bg-border/70" />
      <div className="absolute left-1/2 top-[64%] h-2 w-40 -translate-x-1/2 rounded-full bg-border/50" />

      {/* Coffee */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="glass absolute bottom-4 left-4 rounded-xl px-3 py-2 text-xs"
      >
        ☕ deep focus
      </motion.div>

      {/* Keyboard hint */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="glass absolute bottom-4 right-4 rounded-xl px-3 py-2 font-mono text-[11px]"
      >
        ⌘K
      </motion.div>
    </div>
  );
}
