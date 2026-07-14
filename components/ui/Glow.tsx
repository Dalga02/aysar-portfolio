import { cn } from "@/lib/utils";

export function Glow({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute -inset-24 -z-10 blur-3xl opacity-70",
        className
      )}
      style={{
        background:
          "radial-gradient(circle at 30% 30%, hsl(var(--accent) / 0.35), transparent 60%), radial-gradient(circle at 70% 70%, hsl(var(--accent-soft) / 0.25), transparent 65%)",
      }}
    />
  );
}
