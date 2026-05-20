import { ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
};

export function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div className={`rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur-xl ${className}`}>
      {children}
    </div>
  );
}
