import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { TagPill } from "./TagPill";

type ProjectCardProps = {
  title: string;
  subtitle: string;
  tech: string[];
  github: string;
  demo: string;
  index: number;
};

export function ProjectCard({ title, subtitle, tech, github, demo, index }: ProjectCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.08 }}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      whileTap={{ scale: 0.98 }}
      className="group relative overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-6 shadow-soft backdrop-blur-xl transition-all duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:border-[var(--accent)]/20 motion-safe:hover:shadow-[0_26px_90px_rgba(var(--shadow-rgb),0.18)] sm:p-7"
    >
      <div className="pointer-events-none absolute left-[-18%] top-[-15%] h-40 w-40 rounded-full bg-[var(--accent)]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[-16%] top-20 h-32 w-32 rounded-full bg-[var(--secondary)]/12 blur-3xl" />
      <div className="relative z-10 space-y-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--accent)]/10 px-3 py-1 text-[0.72rem] uppercase tracking-[0.28em] text-[var(--accent)]">
            Projet
          </span>
          <div className="flex items-center gap-2 text-[var(--muted)]">
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              aria-label={`Voir le dépôt GitHub de ${title}`}
              className="inline-flex h-11 w-11 items-center justify-center rounded-[1.25rem] border border-[var(--border)] bg-[var(--card)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              aria-label={`Voir la démo de ${title}`}
              className="inline-flex h-11 w-11 items-center justify-center rounded-[1.25rem] border border-[var(--border)] bg-[var(--card)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-[var(--card-strong)] p-4 shadow-[inset_0_0_0_1px_rgba(var(--border-rgb),0.08)]">
          <div className="relative h-44 overflow-hidden rounded-[1.25rem] bg-[var(--card-strong)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(var(--accent-rgb),0.18),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(var(--secondary-rgb),0.12),transparent_25%)]" />
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-[var(--foreground)] sm:text-2xl">{title}</h3>
          <p className="text-[var(--muted)] leading-7">{subtitle}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {tech.map((item) => (
            <TagPill key={item} label={item} className="w-full sm:w-auto" />
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-sm uppercase tracking-[0.3em] text-[var(--muted)]">Voir en action</span>
          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/10 px-4 py-3 text-sm font-medium text-[var(--accent)] transition duration-300 hover:bg-[var(--accent)]/15 hover:text-[var(--foreground)] sm:w-auto"
          >
            Démo
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
