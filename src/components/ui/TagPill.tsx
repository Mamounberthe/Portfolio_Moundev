import type { ReactNode } from "react";

type TagPillProps = {
  label: string;
  icon?: ReactNode;
  className?: string;
};

export function TagPill({ label, icon, className = "" }: TagPillProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)] shadow-[0_10px_30px_rgba(0,0,0,0.12)] ${className}`}
    >
      {icon}
      {label}
    </span>
  );
}
