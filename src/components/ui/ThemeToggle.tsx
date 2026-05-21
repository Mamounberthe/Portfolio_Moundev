import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

type ThemeToggleProps = {
  compact?: boolean;
};

export function ThemeToggle({ compact = false }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";
  const toggleAriaProps = {
    "aria-label": "Basculer le thème jour / nuit",
    "aria-pressed": isLight,
  };

  if (compact) {
    return (
      <button
        type="button"
        {...toggleAriaProps}
        onClick={toggleTheme}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] transition duration-300 hover:scale-[1.03] hover:border-[var(--accent-orange)] hover:shadow-[0_20px_60px_rgba(255,122,24,0.12)] focus:outline-none focus:ring-2 focus:ring-orange-300/30"
      >
        {isLight ? <Sun className="h-5 w-5 text-orange-400" /> : <Moon className="h-5 w-5 text-sky-400" />}
      </button>
    );
  }

  return (
    <button
      type="button"
      {...toggleAriaProps}
      onClick={toggleTheme}
      className="relative inline-flex h-12 w-[96px] items-center rounded-full border border-[var(--border)] bg-[var(--surface)] p-1 text-[var(--text-primary)] shadow-[0_24px_80px_rgba(0,0,0,0.16)] transition duration-300 hover:scale-[1.02] hover:border-[var(--accent-orange)] focus:outline-none focus:ring-2 focus:ring-orange-300/30"
    >
      <span className="sr-only">Basculer le thème vers {isLight ? "sombre" : "clair"}</span>
      <motion.span
        layout
        animate={{ x: isLight ? 48 : 0 }}
        transition={{ type: "spring", stiffness: 420, damping: 30 }}
        className="absolute left-1 top-1 h-10 w-10 rounded-full bg-[var(--card-strong)] shadow-[0_10px_30px_rgba(0,0,0,0.16)] border border-[var(--border)]"
      />
      <div className="relative z-10 flex w-full items-center justify-between px-2 text-[var(--muted)]">
        <Sun className={`h-5 w-5 transition ${isLight ? "text-[var(--accent-orange)]" : "text-[var(--muted)]"}`} />
        <Moon className={`h-5 w-5 transition ${isLight ? "text-[var(--muted)]" : "text-[var(--secondary)]"}`} />
      </div>
    </button>
  );
}
