import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Sparkles } from "lucide-react";
import { Button } from "../ui/Button";
import { GlassCard } from "../ui/GlassCard";
import { TagPill } from "../ui/TagPill";
import { portfolio } from "../../data/portfolio";
import MounPhoto from "../../assets/Moun.jpeg";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="hero"
      aria-label="Section d'accueil"
      className="relative overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] px-5 py-8 shadow-soft backdrop-blur-xl sm:px-8 sm:py-10"
    >
      <div className="pointer-events-none absolute -left-16 top-6 h-56 w-56 rounded-full bg-[var(--accent)]/12 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-10 h-72 w-72 rounded-full bg-[var(--secondary)]/12 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-36 w-36 -translate-x-1/2 rounded-full bg-[var(--accent)]/8 blur-3xl" />

      <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.9fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="order-2 space-y-6 lg:order-1"
        >
          <div className="inline-flex items-center gap-3 rounded-[2rem] border border-[var(--accent)]/20 bg-[var(--accent)]/10 px-4 py-2 text-[0.72rem] uppercase tracking-[0.35em] text-[var(--accent)] shadow-[0_18px_60px_rgba(var(--accent-rgb),0.12)]">
            {portfolio.role}
          </div>

          <div className="space-y-5 text-center sm:text-left">
            <div className="max-w-3xl space-y-4">
              <h1 className="text-3xl font-semibold leading-tight text-[var(--foreground)] sm:text-4xl md:text-5xl lg:text-6xl">
                Je crée des expériences produit élégantes et performantes.
              </h1>
              <p className="mx-auto max-w-2xl text-[var(--muted)] sm:mx-0 sm:text-lg leading-8">
                Je conçois des interfaces digitales modernes et premium pour startups, agences et équipes produit. Au croisement de la tech, du design et de la croissance.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto]">
              <div className="grid gap-3 sm:flex sm:items-center sm:gap-3">
                <Button href="#contact" className="w-full sm:w-auto" variant="solid">
                  Me contacter
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href="#projects" className="w-full sm:w-auto" variant="outline">
                  Voir mes projets
                </Button>
              </div>
              <div className="hidden items-center justify-end rounded-[1.5rem] border border-[var(--card-strong)]/70 bg-[var(--card-strong)]/80 px-4 py-3 text-sm text-[var(--muted)] sm:flex">
                Mobile-first / Desktop-ready
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card-strong)] px-4 py-4 text-center">
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--accent)]">Temps</p>
              <p className="mt-3 text-lg font-semibold text-[var(--foreground)]">Rapide</p>
            </div>
            <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card-strong)] px-4 py-4 text-center">
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--accent)]">Clarté</p>
              <p className="mt-3 text-lg font-semibold text-[var(--foreground)]">Optimisée</p>
            </div>
            <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card-strong)] px-4 py-4 text-center">
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--accent)]">Design</p>
              <p className="mt-3 text-lg font-semibold text-[var(--foreground)]">Systémique</p>
            </div>
            <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card-strong)] px-4 py-4 text-center">
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--accent)]">Impact</p>
              <p className="mt-3 text-lg font-semibold text-[var(--foreground)]">Conversion</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 text-[var(--muted)] sm:flex-row sm:justify-start">
            <a
              href={portfolio.socials[0].href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex h-11 w-11 items-center justify-center rounded-[1rem] border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={portfolio.socials[1].href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-11 w-11 items-center justify-center rounded-[1rem] border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] transition hover:border-[var(--secondary)] hover:text-[var(--secondary)]"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <span className="inline-flex rounded-[1.5rem] border border-[var(--border)] bg-[var(--card-strong)] px-4 py-2 text-sm text-[var(--muted)]">
              Freelance / Startup engineer
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[420px] order-1 lg:order-2"
        >
          <GlassCard className="overflow-hidden p-5 sm:p-6 lg:p-8">
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[var(--accent)]/20 to-transparent" />
            <div className="relative space-y-7">
              <div className="flex items-center justify-between gap-3 rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-sm text-[var(--foreground)]">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-[1rem] bg-[var(--accent)]/10 text-[var(--accent)]">
                    <Sparkles className="h-5 w-5" />
                  </span>
                  <span>Produit premium</span>
                </div>
                <span className="rounded-full bg-[var(--card-strong)] px-3 py-1 text-[0.72rem] uppercase tracking-[0.28em] text-[var(--accent)]">
                  Startup-ready
                </span>
              </div>

              <motion.div
                aria-hidden
                whileHover={reduce ? {} : { scale: 1.02 }}
                transition={{ type: "spring", stiffness: 120, damping: 16 }}
                className="relative mx-auto h-64 w-64 sm:h-72 sm:w-72"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--accent)]/15 via-transparent to-[var(--accent)]/15 blur-3xl" />
                <div className="relative z-10 flex h-full w-full items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card-strong)]/75 p-1 shadow-glow">
                  <img
                    src={MounPhoto}
                    alt="Photo de profil de Mamoun Berthe"
                    className="h-full w-full rounded-full object-cover object-center"
                  />
                </div>
              </motion.div>

              <div className="grid gap-3 sm:grid-cols-2">
                <TagPill label="React" />
                <TagPill label="Laravel" />
                <TagPill label="Tailwind" />
                <TagPill label="API & Prod" />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] px-5 py-4 text-[var(--foreground)]">
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">Focus</p>
                  <p className="mt-3 text-lg font-semibold text-[var(--foreground)]">Interfaces glissantes</p>
                </div>
                <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] px-5 py-4 text-[var(--foreground)]">
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
