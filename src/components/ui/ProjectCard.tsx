import { motion } from "framer-motion";
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
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--card)] shadow-soft backdrop-blur-xl transition duration-300 hover:shadow-[0_25px_100px_rgba(0,0,0,0.2)]"
    >
      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-br from-orange-500/10 to-transparent opacity-80" />
      <div className="relative p-6">
        <div className="mb-6 flex items-center justify-between gap-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--accent)]/10 px-3 py-1 text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
            Projet
          </span>
          <div className="flex items-center gap-3 text-[var(--muted)]">
            <a href={github} target="_blank" rel="noreferrer" aria-label={`Voir le dépôt GitHub de ${title}`} className="transition hover:text-[var(--accent)]">
              <Github className="h-5 w-5" />
            </a>
            <a href={demo} target="_blank" rel="noreferrer" aria-label={`Voir la démo de ${title}`} className="transition hover:text-[var(--accent)]">
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-[1.75rem] bg-[var(--card-strong)] p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
            <div className="h-44 overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,122,24,0.14),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(75,140,255,0.12),transparent_25%)]" />
              <div className="relative h-full w-full before:absolute before:inset-0 before:bg-[linear-gradient(135deg,rgba(255,255,255,0.05),transparent_20%),linear-gradient(90deg,rgba(255,255,255,0.04),transparent_25%)]" />
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-semibold text-[var(--foreground)]">{title}</h3>
            <p className="text-[var(--muted)] leading-7">{subtitle}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {tech.map((item) => (
              <TagPill key={item} label={item} className="bg-white/5 text-slate-200 border-white/10" />
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between gap-4">
            <span className="text-sm uppercase tracking-[0.3em] text-[var(--muted)]">Voir en action</span>
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/10 px-4 py-2 text-sm font-medium text-[var(--accent)] transition hover:bg-[var(--accent)]/15 hover:text-[var(--foreground)]"
            >
              Démo
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
