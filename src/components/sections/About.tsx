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
        title="Histoire d’un développeur orienté produit"
        description="Je combine technique et sens produit pour créer des expériences digitales premium, claires et scalables." 
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="grid gap-6 lg:grid-cols-[1.45fr_0.9fr]"
      >
        <GlassCard className="relative overflow-hidden p-8">
          <div className="pointer-events-none absolute left-0 top-0 h-24 w-24 rounded-full bg-[var(--accent)]/10 blur-3xl" />
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-[var(--muted)] leading-8">
                {portfolio.description} Je construis des interfaces claires et modernes pour des projets web haut de gamme, en alliant design, performance et qualité technique.
              </p>
              <p className="text-[var(--muted)] leading-8">
                Mon approche est orientée produit : je conçois des expériences qui donnent confiance aux décideurs et facilitent la montée en charge des équipes.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--card-strong)] p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">Expertise</p>
                <p className="mt-3 text-lg font-semibold text-[var(--foreground)]">React & Laravel</p>
              </div>
              <div className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--card-strong)] p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--secondary)]">Approche</p>
                <p className="mt-3 text-lg font-semibold text-[var(--foreground)]">Design système</p>
              </div>
            </div>
          </div>
        </GlassCard>

        <div className="space-y-5">
          <GlassCard className="p-6">
            <div className="flex items-center gap-3 text-orange-300">
              <Sparkles className="h-5 w-5" />
              <p className="text-sm uppercase tracking-[0.35em]">Pourquoi moi</p>
            </div>
            <ul className="mt-6 space-y-4 text-slate-300">
              {portfolio.highlights.map((item) => (
                <li key={item} className="rounded-3xl border border-white/5 bg-white/5 p-4 leading-7">
                  {item}
                </li>
              ))}
            </ul>
          </GlassCard>

          <div className="grid gap-4 sm:grid-cols-2">
            <GlassCard className="p-6">
              <div className="flex items-center gap-3 text-[var(--secondary)]">
                <Layers className="h-5 w-5" />
                <p className="text-sm uppercase tracking-[0.35em]">Process</p>
              </div>
              <p className="mt-4 text-lg font-semibold text-[var(--foreground)]">Récurrent & adaptable</p>
            </GlassCard>

            <GlassCard className="p-6">
              <div className="flex items-center gap-3 text-[var(--accent)]">
                <Clock3 className="h-5 w-5" />
                <p className="text-sm uppercase tracking-[0.35em]">Livraison</p>
              </div>
              <p className="mt-4 text-lg font-semibold text-[var(--foreground)]">Rapide et précis</p>
            </GlassCard>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
