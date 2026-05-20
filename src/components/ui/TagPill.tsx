import { ReactNode } from "react";

type TagPillProps = {
  label: string;
  icon?: ReactNode;
  className?: string;
};

export function TagPill({ label, icon, className = "" }: TagPillProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/80 px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-200 shadow-[0_10px_30px_rgba(0,0,0,0.2)] ${className}`}
    >
      {icon}
      {label}
    </span>
  );
}
