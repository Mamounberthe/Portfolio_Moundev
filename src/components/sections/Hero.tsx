import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { portfolio } from "../../data/portfolio";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-surface-900/95 p-6 shadow-soft backdrop-blur-xl sm:p-10">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-orange-500/15 to-transparent blur-3xl" />
      <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="space-y-6"
        >
          <span className="inline-flex rounded-full border border-orange-400/20 bg-orange-400/10 px-4 py-2 text-sm uppercase tracking-[0.3em] text-orange-200">
            Développeur Web & Applications
          </span>
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
            {portfolio.name}
          </h1>
          <p className="max-w-2xl text-slate-300 sm:text-lg">
            {portfolio.description}
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-orange-400">
              Me contacter
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#projects" className="inline-flex items-center rounded-full border border-white/10 px-5 py-3 text-sm text-slate-100 transition hover:border-orange-300">
              Voir mes projets
            </a>
          </div>
          <div className="flex items-center gap-4 text-slate-100">
            <a href={portfolio.socials[0].href} aria-label="GitHub" className="transition hover:text-orange-300">
              <Github className="h-6 w-6" />
            </a>
            <a href={portfolio.socials[1].href} aria-label="LinkedIn" className="transition hover:text-blue-300">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative mx-auto flex h-full max-w-[360px] items-center justify-center rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-950/90 to-slate-900/70 p-6 shadow-glow"
        >
          <div className="flex h-[340px] w-[340px] items-center justify-center rounded-[2rem] bg-gradient-to-br from-orange-500/15 via-transparent to-blue-500/10 p-6">
            <div className="flex h-full w-full items-center justify-center rounded-[1.75rem] bg-[#020202]/90 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]">
              <div className="flex h-48 w-48 items-center justify-center rounded-full bg-slate-900/70 text-3xl text-orange-300">
                MB
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
