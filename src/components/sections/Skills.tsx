import { motion } from "framer-motion";
import { Code2, Layers, ShieldCheck } from "lucide-react";
import { portfolio } from "../../data/portfolio";
import { GlassCard } from "../ui/GlassCard";
import { SectionHeading } from "../ui/SectionHeading";

const skillCategories = [
  {
    title: "Front-end",
    description: "Interface pixel-perfect, responsive et réactive avec React et Tailwind.",
    icon: <Code2 className="h-5 w-5" />,
  },
  {
    title: "Back-end",
    description: "API robustes et intégration Laravel orientée performances.",
    icon: <Layers className="h-5 w-5" />,
  },
  {
    title: "Qualité",
    description: "Code propre, architecture claire et livraison orientée produit.",
    icon: <ShieldCheck className="h-5 w-5" />,
  },
];

export function Skills() {
  return (
    <section id="skills" className="space-y-10">
      <SectionHeading
        eyebrow="Compétences"
        title="Tech stack premium et approche produit"
        description="J’apporte un savoir-faire complet pour construire des produits digitaux performants, fiables et élégants."
      />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.85, ease: "easeOut" }}
        className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]"
      >
        <GlassCard className="p-6 sm:p-8">
          <div className="grid gap-5">
            <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--card-strong)] p-6">
              <p className="text-sm uppercase tracking-[0.35em] text-[var(--accent)]">Stack</p>
              <p className="mt-4 text-[var(--muted)] leading-8">
                Un ensemble technique choisi pour des interfaces rapides, une architecture solide et des expériences utilisateur premium.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {portfolio.skills.map((skill) => (
                <motion.div
                  key={skill}
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="flex min-h-[58px] items-center justify-center rounded-3xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-base font-medium text-[var(--foreground)] shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </GlassCard>

        <div className="space-y-4">
          {skillCategories.map((category) => (
            <GlassCard key={category.title} className="p-6">
              <div className="flex items-center gap-3 text-[var(--foreground)]">
                <span className="flex h-11 w-11 items-center justify-center rounded-3xl bg-[var(--card-strong)] text-[var(--accent)] shadow-glow">
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
