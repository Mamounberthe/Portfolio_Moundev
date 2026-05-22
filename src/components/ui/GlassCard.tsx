import type { ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
};

export function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div
      className={`rounded-[1rem] border border-[var(--border)] bg-[var(--card)] p-6 shadow-soft backdrop-blur-xl text-[var(--foreground)] transition-all duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_26px_90px_rgba(var(--shadow-rgb),0.18)] motion-safe:hover:border-[var(--accent)]/20 sm:rounded-[1.5rem] ${className}`}
    >
      {children}
    </div>
  );
}
