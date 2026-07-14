"use client";

import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative mt-16 border-t border-border/60">
      <div className="container-x flex flex-col items-center justify-between gap-6 py-10 md:flex-row">
        <div className="flex items-center gap-3">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-accent text-[13px] font-semibold text-white">
            A
          </span>
          <span className="text-sm text-ink-soft">
            © {new Date().getFullYear()} {site.name}. Crafted with care.
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs text-ink-soft">
          <span>
            Built with{" "}
            <a href="https://nextjs.org" className="hover:text-ink">
              Next.js
            </a>
            ,{" "}
            <a href="https://www.framer.com/motion/" className="hover:text-ink">
              Framer Motion
            </a>
            , and{" "}
            <a href="https://tailwindcss.com" className="hover:text-ink">
              Tailwind
            </a>
            .
          </span>
        </div>

        <motion.a
          href="#top"
          whileHover={{ y: -3 }}
          className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-border bg-surface/60 text-ink-soft transition-colors hover:text-ink"
          aria-label="Back to top"
        >
          <ArrowUp className="h-4 w-4" />
        </motion.a>
      </div>
    </footer>
  );
}
