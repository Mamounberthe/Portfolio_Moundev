import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Sparkles } from "lucide-react";
import { Button } from "../ui/Button";
import { GlassCard } from "../ui/GlassCard";
import { TagPill } from "../ui/TagPill";
import { portfolio } from "../../data/portfolio";
import MounPhoto from "../../assets/Moun.jpeg";

export function Hero() {
  const reduce = useReducedMotion();
  const floating = reduce ? {} : { y: [0, -10, 0] };

  return (
    <section
      id="hero"
      aria-label="Section d'accueil"
      className="relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--card)] px-6 py-8 shadow-soft backdrop-blur-xl sm:px-10 sm:py-12"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-lines bg-[length:260px_260px] opacity-10 mix-blend-overlay" />
      <div className="pointer-events-none absolute -left-28 top-6 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-1/4 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-12 h-1/2 w-[420px] -translate-x-1/2 rounded-full bg-white/5 blur-2xl opacity-70" />

      <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="order-2 space-y-8 lg:order-1"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/10 px-4 py-2 text-sm uppercase tracking-[0.35em] text-[var(--accent)] shadow-[0_10px_50px_rgba(255,122,24,0.12)]">
            {portfolio.role}
          </div>

          <div className="space-y-6 max-w-3xl">
            <h1 className="text-4xl font-semibold leading-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
              <span className="block">Mamoun Berthe</span>
              <span className="block text-[var(--muted)]">Je conçois des produits numériques élégants et performants.</span>
            </h1>
            <p className="max-w-2xl text-[var(--muted)] sm:text-lg leading-8">
              Étudiant en Informatique spécialisé React, Laravel et interfaces premium. Je transforme les idées en expériences digitales modernes,
              fluides et orientées produit.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href="#contact" className="w-full sm:w-auto min-w-[180px]" variant="solid">
              Me contacter
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="#projects" className="w-full sm:w-auto min-w-[180px]" variant="outline">
              Voir mes projets
            </Button>
          </div>

          <div className="space-y-3 text-[var(--muted)]">
            <div className="flex items-center gap-3">
              <a
                href={portfolio.socials[0].href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex h-11 w-11 items-center justify-center rounded-3xl border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={portfolio.socials[1].href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-11 w-11 items-center justify-center rounded-3xl border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] transition hover:border-[var(--secondary)] hover:text-[var(--secondary)]"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <span className="inline-flex rounded-full border border-[var(--border)] bg-[var(--card-strong)] px-4 py-2 text-sm text-[var(--muted)]">
              Freelance / Startup engineer
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={reduce ? { opacity: 1 } : { opacity: 1, ...floating }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[400px] order-1 lg:order-2"
        >
          <GlassCard className="overflow-hidden p-6">
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-orange-500/10 to-transparent" />
            <div className="relative space-y-8">
              <div className="flex items-center justify-between gap-4 rounded-[1.75rem] border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-sm text-[var(--foreground)]">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-3xl bg-[var(--accent)]/10 text-[var(--accent)]">
                    <Sparkles className="h-5 w-5" />
                  </span>
                  <span>Produit premium</span>
                </div>
                <span className="rounded-full bg-[var(--card-strong)] px-3 py-1 text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
                  Startup-ready
                </span>
              </div>

              <motion.div
                aria-hidden
                whileHover={reduce ? {} : { scale: 1.02 }}
                transition={{ type: "spring", stiffness: 120, damping: 16 }}
                className="relative mx-auto h-56 w-56"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--accent)]/15 via-transparent to-[var(--accent)]/15 blur-3xl" />
                <div className="relative z-10 flex h-full w-full items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card-strong)]/70 p-1 shadow-glow">
                  <img
                    src={MounPhoto}
                    alt="Photo de profil de Mamoun Berthe"
                    className="h-full w-full rounded-full object-cover object-center"
                  />
                </div>
              </motion.div>

              <div className="grid gap-4 sm:grid-cols-2">
                <TagPill label="React" />
                <TagPill label="Laravel" />
                <TagPill label="Tailwind" />
                <TagPill label="API & Prod" />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--card)] px-5 py-4 text-[var(--foreground)]">
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">Focus</p>
                  <p className="mt-3 text-lg font-semibold text-[var(--foreground)]">Interfaces glissantes</p>
                </div>
                <div className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--card)] px-5 py-4 text-[var(--foreground)]">
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">Valeur</p>
                  <p className="mt-3 text-lg font-semibold text-[var(--foreground)]">Performance & clarté</p>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
