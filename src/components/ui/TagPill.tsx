import type { ReactNode } from "react";

type TagPillProps = {
  label: string;
  icon?: ReactNode;
  className?: string;
};

export function TagPill({ label, icon, className = "" }: TagPillProps) {
  return (
    <span
      className={`inline-flex w-full justify-center gap-2 rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)] shadow-[0_10px_30px_rgba(var(--shadow-rgb),0.12)] sm:w-auto ${className}`}
    >
      {icon}
      {label}
    </span>
  );
}
