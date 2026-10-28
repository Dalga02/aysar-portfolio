"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    VANTA: {
      NET: (config: Record<string, unknown>) => { destroy: () => void };
    };
    THREE: unknown;
  }
}

export function VantaNetBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const effectRef = useRef<{ destroy: () => void } | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadScript(src: string) {
      return new Promise<void>((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load ${src}`));
        document.body.appendChild(script);
      });
    }

    async function init() {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      if (navigator.hardwareConcurrency !== undefined && navigator.hardwareConcurrency <= 2) {
        return;
      }

      try {
        await loadScript("https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js");
        await loadScript("https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.net.min.js");
      } catch {
        return;
      }

      if (cancelled || !containerRef.current || !window.VANTA) return;

      const isMobile = window.innerWidth < 768;

      effectRef.current = window.VANTA.NET({
        el: containerRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x8b7bff,
        backgroundColor: 0x0,
        backgroundAlpha: 0.0,
        points: isMobile ? 7.0 : 10.0,
        maxDistance: 22.0,
        spacing: 18.0,
      });
    }

    init();

    return () => {
      cancelled = true;
      effectRef.current?.destroy();
      effectRef.current = null;
    };
  }, []);

  return <div ref={containerRef} aria-hidden className="pointer-events-none absolute inset-0 -z-20 overflow-hidden opacity-60" />;
}
