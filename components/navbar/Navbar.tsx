"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { site } from "@/data/site";
import { ThemeToggle } from "./ThemeToggle";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = site.nav
      .map((n) => document.querySelector(n.href))
      .filter(Boolean) as HTMLElement[];

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all",
          scrolled ? "backdrop-blur-xl" : ""
        )}
      >
        <div className="container-x">
          <div
            className={cn(
              "mt-4 flex items-center justify-between rounded-full border px-4 py-2 transition-all",
              scrolled
                ? "border-border/70 bg-surface/70 shadow-[0_10px_40px_-20px_hsl(var(--accent)/0.35)]"
                : "border-transparent"
            )}
          >
            <a href="#top" className="focus-ring flex items-center gap-2 rounded-full px-3 py-1">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-accent text-[13px] font-semibold text-white">
                A
              </span>
              <span className="font-display text-lg">{site.shortName}</span>
            </a>

            <nav className="hidden items-center gap-1 md:flex">
              {site.nav.map((item) => {
                const isActive = active === item.href;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "focus-ring relative rounded-full px-3 py-1.5 text-sm transition-colors",
                      isActive ? "text-ink" : "text-ink-soft hover:text-ink"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-muted"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    {item.label}
                  </a>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <a
                href="#contact"
                className="focus-ring hidden rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-soft md:inline-flex"
              >
                Get in touch
              </a>
              <button
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                className="focus-ring grid h-9 w-9 place-items-center rounded-full border border-border md:hidden"
              >
                <Menu className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
      <div id="top" />
    </>
  );
}
