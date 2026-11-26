"use client";

import { useEffect, useRef } from "react";

/**
 * Lightweight "connected dots" background (replaces Vanta NET + Three.js).
 *
 * Why it's cheap:
 * - Plain 2D canvas, no WebGL / no external scripts.
 * - Particle count scales with the hero area and is hard-capped.
 * - Device pixel ratio is capped, so 4K / retina screens don't render 4x the pixels.
 * - Lines are batched into a few alpha buckets → only a handful of stroke() calls per frame.
 * - Frame rate is capped at ~60fps (120/144Hz screens don't double the work).
 * - Animation fully stops when the hero is off-screen or the tab is hidden.
 * - prefers-reduced-motion → draws a single static frame.
 */

const COLOR = "139, 123, 255"; // #8b7bff
const ALPHA_BUCKETS = 4;
const FRAME_MS = 1000 / 60;

type Particle = { x: number; y: number; vx: number; vy: number };

export function NetBackground() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;

    let width = 0;
    let height = 0;
    let linkDist = 130;
    let particles: Particle[] = [];
    let rafId = 0;
    let running = false;
    let inView = true;
    let lastTime = 0;
    let acc = 0;
    const mouse = { x: -9999, y: -9999, active: false };
    let rect = wrap.getBoundingClientRect();

    function setup() {
      rect = wrap!.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const isMobile = width < 768;
      const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1 : 1.5);

      canvas!.width = Math.round(width * dpr);
      canvas!.height = Math.round(height * dpr);
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      linkDist = isMobile ? 100 : 130;
      const target = Math.round((width * height) / (isMobile ? 16000 : 13000));
      const count = Math.max(18, Math.min(isMobile ? 32 : 70, target));

      // Keep existing particles when resizing, only add/remove the difference.
      particles = particles.filter((p) => p.x <= width && p.y <= height).slice(0, count);
      while (particles.length < count) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 12 + Math.random() * 18; // px per second
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
        });
      }
    }

    function step(dt: number) {
      for (const p of particles) {
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        if (p.x < 0 || p.x > width) {
          p.vx *= -1;
          p.x = Math.max(0, Math.min(width, p.x));
        }
        if (p.y < 0 || p.y > height) {
          p.vy *= -1;
          p.y = Math.max(0, Math.min(height, p.y));
        }
      }
    }

    // Reused buffers for batched line drawing.
    const buckets: number[][] = Array.from({ length: ALPHA_BUCKETS }, () => []);

    function draw() {
      ctx!.clearRect(0, 0, width, height);
      for (const b of buckets) b.length = 0;

      const maxSq = linkDist * linkDist;
      const n = particles.length;

      for (let i = 0; i < n; i++) {
        const a = particles[i];
        for (let j = i + 1; j < n; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < maxSq) {
            const strength = 1 - d2 / maxSq;
            const k = Math.min(ALPHA_BUCKETS - 1, (strength * ALPHA_BUCKETS) | 0);
            buckets[k].push(a.x, a.y, b.x, b.y);
          }
        }
        if (mouse.active) {
          const dx = a.x - mouse.x;
          const dy = a.y - mouse.y;
          const d2 = dx * dx + dy * dy;
          const mMax = maxSq * 1.6;
          if (d2 < mMax) {
            const strength = 1 - d2 / mMax;
            const k = Math.min(ALPHA_BUCKETS - 1, (strength * ALPHA_BUCKETS) | 0);
            buckets[k].push(a.x, a.y, mouse.x, mouse.y);
          }
        }
      }

      ctx!.lineWidth = 1;
      for (let k = 0; k < ALPHA_BUCKETS; k++) {
        const segs = buckets[k];
        if (!segs.length) continue;
        ctx!.strokeStyle = `rgba(${COLOR}, ${((k + 1) / ALPHA_BUCKETS) * 0.55})`;
        ctx!.beginPath();
        for (let s = 0; s < segs.length; s += 4) {
          ctx!.moveTo(segs[s], segs[s + 1]);
          ctx!.lineTo(segs[s + 2], segs[s + 3]);
        }
        ctx!.stroke();
      }

      ctx!.fillStyle = `rgba(${COLOR}, 0.9)`;
      ctx!.beginPath();
      for (const p of particles) {
        ctx!.moveTo(p.x + 2, p.y);
        ctx!.arc(p.x, p.y, 2, 0, Math.PI * 2);
      }
      ctx!.fill();
    }

    function loop(time: number) {
      if (!running) return;
      rafId = requestAnimationFrame(loop);
      const delta = lastTime ? time - lastTime : FRAME_MS;
      lastTime = time;
      acc += delta;
      if (acc < FRAME_MS) return; // cap at ~60fps
      const dt = Math.min(acc, 50) / 1000; // avoid big jumps after a hiccup
      acc = 0;
      step(dt);
      draw();
    }

    function start() {
      if (running || reducedMotion) return;
      running = true;
      lastTime = 0;
      acc = 0;
      rafId = requestAnimationFrame(loop);
    }

    function stop() {
      running = false;
      cancelAnimationFrame(rafId);
    }

    function updateRunning() {
      if (inView && !document.hidden) start();
      else stop();
    }

    setup();
    draw();

    let resizeTimer = 0;
    const ro = new ResizeObserver(() => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        setup();
        draw();
      }, 150);
    });
    ro.observe(wrap);

    const io = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        if (inView) rect = wrap.getBoundingClientRect();
        updateRunning();
      },
      { threshold: 0 }
    );
    io.observe(wrap);

    document.addEventListener("visibilitychange", updateRunning);

    const onScroll = () => {
      if (inView) rect = wrap.getBoundingClientRect();
    };
    const onMove = (e: PointerEvent) => {
      if (!inView) return;
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = mouse.x >= 0 && mouse.y >= 0 && mouse.x <= width && mouse.y <= height;
    };
    const onLeave = () => {
      mouse.active = false;
    };
    if (finePointer && !reducedMotion) {
      window.addEventListener("pointermove", onMove, { passive: true });
      window.addEventListener("scroll", onScroll, { passive: true });
      document.addEventListener("pointerleave", onLeave);
    }

    updateRunning();

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      window.clearTimeout(resizeTimer);
      document.removeEventListener("visibilitychange", updateRunning);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-20 overflow-hidden opacity-60"
    >
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}
