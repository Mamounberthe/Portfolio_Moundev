import { motion } from "framer-motion";
import { Code2, Layers, ShieldCheck } from "lucide-react";
import { portfolio } from "../../data/portfolio";
import { GlassCard } from "../ui/GlassCard";
import { SectionHeading } from "../ui/SectionHeading";
import { TagPill } from "../ui/TagPill";

const skillCategories = [
  {
    title: "Front-end",
    description: "Composants réactifs et performants avec gestion d'état optimisée et architecture UI modulaire.",
    icon: <Code2 className="h-5 w-5" />,
  },
  {
    title: "Back-end",
    description: "APIs RESTful scalables, gestion de données et logique métier pour produits en croissance.",
    icon: <Layers className="h-5 w-5" />,
  },
  {
    title: "Quality",
    description: "Code maintenable, architecture claire et tests pour projets évolutifs long-terme.",
    icon: <ShieldCheck className="h-5 w-5" />,
  },
];

export function Skills() {
  return (
    <section id="skills" className="space-y-10">
      <SectionHeading
        eyebrow="Compétences"
        title="Stack technique pour produits scale-ready"
        description="Une sélection d'outils et de méthodologies permettant de construire des interfaces robustes, maintenables et en croissance."
      />

      <GlassCard className="p-6 sm:p-8">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-3 rounded-[1.5rem] border border-[var(--accent)]/20 bg-[var(--accent)]/10 px-4 py-2 text-[0.72rem] uppercase tracking-[0.35em] text-[var(--accent)] shadow-[0_18px_60px_rgba(var(--accent-rgb),0.12)]">
            Tech Approach
          </div>
          <div className="space-y-3">
            <p className="text-[var(--foreground)] text-2xl font-semibold sm:text-3xl">
              Des choix technologiques alignés avec les objectifs produit.
            </p>
            <p className="text-[var(--muted)] leading-8">
              React, Laravel et TypeScript pour maximiser la qualité et la maintenabilité. Chaque outil sert un purpose.
            </p>
          </div>
        </div>
      </GlassCard>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.85, ease: "easeOut" }}
        className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]"
      >
        <GlassCard className="p-6 sm:p-8">
          <div className="space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[var(--accent)]">Stack</p>
                <h3 className="mt-3 text-2xl font-semibold text-[var(--foreground)] sm:text-3xl">
                  Une base technique solide pour chaque projet.
                </h3>
              </div>
              <span className="inline-flex rounded-full border border-[var(--border)] bg-[var(--card-strong)] px-4 py-2 text-sm font-semibold text-[var(--accent)]">
                Produit fiable
              </span>
            </div>

            <p className="text-[var(--muted)] leading-8">
              J’utilise une sélection d’outils et de méthodologies permettant de garantir des interfaces rapides, une architecture claire et une expérience maintenable.
            </p>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {portfolio.skills.map((skill) => (
                <TagPill
                  key={skill}
                  label={skill}
                  className="w-full text-center text-sm font-semibold text-[var(--foreground)]"
                />
              ))}
            </div>
          </div>
        </GlassCard>

        <div className="space-y-4">
          {skillCategories.map((category) => (
            <GlassCard key={category.title} className="p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-[1rem] bg-[var(--card-strong)] text-[var(--accent)] shadow-glow">
                  {category.icon}
                </span>
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-[var(--muted)]">{category.title}</p>
                  <p className="mt-3 text-lg font-semibold text-[var(--foreground)]">{category.title}</p>
                </div>
              </div>
              <p className="mt-4 text-[var(--muted)] leading-7">{category.description}</p>
            </GlassCard>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
