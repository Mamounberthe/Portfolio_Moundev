import type { ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
};

export function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div
      className={`rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 shadow-soft backdrop-blur-xl text-[var(--foreground)] ${className}`}
    >
      {children}
    </div>
  );
}
