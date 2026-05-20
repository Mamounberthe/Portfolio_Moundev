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
      className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-surface-900/95 px-6 py-8 shadow-soft backdrop-blur-xl sm:px-10 sm:py-12"
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
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-orange-400/20 bg-orange-500/10 px-4 py-2 text-sm uppercase tracking-[0.35em] text-orange-200 shadow-[0_10px_50px_rgba(255,122,24,0.08)]">
            {portfolio.role}
          </div>

          <div className="space-y-6 max-w-3xl">
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              <span className="block">Mamoun Berthe</span>
              <span className="block text-slate-200">Je conçois des produits numériques élégants et performants.</span>
            </h1>
            <p className="max-w-2xl text-slate-300 sm:text-lg leading-8">
              Étudiant en Informatique spécialisé React, Laravel et interfaces premium. Je transforme les idées en expériences digitales modernes,
              fluides et orientées produit.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button href="#contact" className="min-w-[180px]" variant="solid">
              Me contacter
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="#projects" className="min-w-[180px]" variant="outline">
              Voir mes projets
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-slate-300">
            <a
              href={portfolio.socials[0].href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition hover:border-orange-300 hover:text-orange-300"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={portfolio.socials[1].href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition hover:border-blue-300 hover:text-blue-300"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <span className="rounded-full border border-white/10 bg-slate-950/75 px-4 py-2 text-sm text-slate-300">
              Freelance / Startup engineer
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={reduce ? { opacity: 1 } : { opacity: 1, ...floating }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[420px]"
        >
          <GlassCard className="overflow-hidden p-6">
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-orange-500/10 to-transparent" />
            <div className="relative space-y-8">
              <div className="flex items-center justify-between gap-4 rounded-[1.75rem] border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-3xl bg-orange-500/10 text-orange-300">
                    <Sparkles className="h-5 w-5" />
                  </span>
                  <span>Produit premium</span>
                </div>
                <span className="rounded-full bg-slate-950/80 px-3 py-1 text-xs uppercase tracking-[0.3em] text-orange-300">
                  Startup-ready
                </span>
              </div>

              <motion.div
                aria-hidden
                whileHover={reduce ? {} : { scale: 1.02 }}
                transition={{ type: "spring", stiffness: 120, damping: 16 }}
                className="relative mx-auto h-56 w-56"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500/15 via-transparent to-blue-400/15 blur-3xl" />
                <div className="relative z-10 flex h-full w-full items-center justify-center rounded-full border border-white/10 bg-slate-900/80 p-1 shadow-glow">
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
                <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/90 px-5 py-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-orange-300">Focus</p>
                  <p className="mt-3 text-lg font-semibold text-white">Interfaces glissantes</p>
                </div>
                <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/90 px-5 py-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-blue-300">Valeur</p>
                  <p className="mt-3 text-lg font-semibold text-white">Performance & clarté</p>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
