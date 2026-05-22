import { motion } from "framer-motion";
import { Sparkles, Layers, Clock3 } from "lucide-react";
import { portfolio } from "../../data/portfolio";
import { GlassCard } from "../ui/GlassCard";
import { SectionHeading } from "../ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="space-y-10">
      <SectionHeading
        eyebrow="À propos"
        title={portfolio.about.title}
        description={portfolio.about.intro}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="grid gap-6 lg:grid-cols-[1.4fr_0.9fr]"
      >
        <GlassCard className="relative overflow-hidden p-5 sm:p-6 lg:p-8">
          <div className="pointer-events-none absolute right-0 top-6 h-28 w-28 rounded-full bg-[var(--accent)]/10 blur-3xl" />
          <div className="space-y-6">
            <div className="inline-flex rounded-[1.5rem] border border-[var(--accent)]/20 bg-[var(--accent)]/10 px-4 py-2 text-[0.7rem] uppercase tracking-[0.35em] text-[var(--accent)] shadow-[0_10px_50px_rgba(var(--accent-rgb),0.12)]">
              UX story
            </div>

            <div className="space-y-5">
              <p className="text-[var(--muted)] leading-8">
                {portfolio.about.philosophy}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card-strong)] p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">Mentalité</p>
                <p className="mt-3 text-lg font-semibold text-[var(--foreground)]">Shipping matters</p>
              </div>
              <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card-strong)] p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--secondary)]">Philosophie</p>
                <p className="mt-3 text-lg font-semibold text-[var(--foreground)]">Tech invisible</p>
              </div>
            </div>
          </div>
        </GlassCard>

        <div className="space-y-5">
          <GlassCard className="overflow-hidden p-5 sm:p-6">
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[var(--accent)]/10 to-transparent" />
            <div className="relative space-y-6">
              <div className="flex items-center gap-3 text-[var(--accent)]">
                <Sparkles className="h-5 w-5" />
                <p className="text-sm uppercase tracking-[0.35em]">Pourquoi moi</p>
              </div>
              <ul className="mt-5 space-y-4 text-[var(--muted)]">
                {portfolio.highlights.map((item) => (
                  <li key={item} className="rounded-[1.25rem] border border-[var(--border)] bg-[var(--card-soft)] p-4 leading-7">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </GlassCard>

          <div className="grid gap-4 sm:grid-cols-2">
            <GlassCard className="p-5">
              <div className="flex items-center gap-3 text-[var(--secondary)]">
                <Layers className="h-5 w-5" />
                <p className="text-sm uppercase tracking-[0.35em]">Process</p>
              </div>
              <p className="mt-4 text-lg font-semibold text-[var(--foreground)]">Itérations rapides</p>
              <p className="mt-2 text-[var(--muted)] leading-7">Des cycles courts, des validations claires, des livrables immédiatement exploitables.</p>
            </GlassCard>

            <GlassCard className="p-5">
              <div className="flex items-center gap-3 text-[var(--accent)]">
                <Clock3 className="h-5 w-5" />
                <p className="text-sm uppercase tracking-[0.35em]">Livraison</p>
              </div>
              <p className="mt-4 text-lg font-semibold text-[var(--foreground)]">Focus qualité</p>
              <p className="mt-2 text-[var(--muted)] leading-7">Des projets livrés propres, testés et prêts à évoluer rapidement.</p>
            </GlassCard>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
