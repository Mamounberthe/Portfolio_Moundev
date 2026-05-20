import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { portfolio } from "../../data/portfolio";

export function Hero() {
  const reduce = useReducedMotion();
  const heroFloat = reduce
    ? {}
    : {
        y: [0, -8, 0],
        x: [0, 6, 0],
      };
  const avatarPulse = reduce
    ? {}
    : {
        scale: [1, 1.02, 1],
      };
  const buttonHover = reduce ? {} : { scale: 1.03 };

  return (
    <section
      id="hero"
      aria-label="Section d'accueil"
      className="relative overflow-hidden rounded-[2rem] border border-white/8 bg-surface-900/95 p-6 shadow-soft backdrop-blur-xl sm:p-10"
    >
      {/* Decorative animated blobs */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={
          reduce
            ? {}
            : {
                opacity: [0.6, 0.9, 0.6],
                x: [0, -20, 0],
                y: [0, -10, 0],
                scale: [1, 1.05, 1],
              }
        }
        transition={reduce ? {} : { duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-24 -top-8 h-72 w-72 rounded-full bg-gradient-to-br from-orange-500/20 to-transparent blur-3xl opacity-80"
      />

      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={
          reduce
            ? {}
            : {
                opacity: [0.5, 0.85, 0.5],
                x: [0, 24, 0],
                y: [0, 12, 0],
                scale: [1, 1.03, 1],
              }
        }
        transition={reduce ? {} : { duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-24 bottom-6 h-80 w-80 rounded-full bg-gradient-to-br from-blue-400/12 to-transparent blur-3xl opacity-80"
      />

      <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="space-y-6"
        >
          <span className="inline-flex rounded-full border border-orange-400/20 bg-orange-400/10 px-4 py-2 text-sm uppercase tracking-[0.3em] text-orange-200">
            {portfolio.role}
          </span>

          <h1 id="hero-title" className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
            {portfolio.name}
          </h1>

          <p className="max-w-2xl text-slate-300 sm:text-lg">
            {portfolio.description}
          </p>

          <div className="flex flex-wrap gap-3">
            <motion.a
              href="#contact"
              role="button"
              aria-label="Contacter Mamoun"
              whileHover={buttonHover}
              className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-orange-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
            >
              Me contacter
              <ArrowRight className="h-4 w-4" />
            </motion.a>

            <motion.a
              href="#projects"
              aria-label="Voir les projets"
              whileHover={buttonHover}
              className="inline-flex items-center rounded-full border border-white/10 px-5 py-3 text-sm text-slate-100 transition hover:border-orange-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/10"
            >
              Voir mes projets
            </motion.a>
          </div>

          <div className="flex items-center gap-4 text-slate-100">
            <a
              href={portfolio.socials[0].href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition hover:text-orange-300 focus:outline-none"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href={portfolio.socials[1].href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition hover:text-blue-300 focus:outline-none"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={reduce ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1, ...heroFloat }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative mx-auto flex h-full max-w-[360px] items-center justify-center rounded-[2rem] border border-white/8 bg-gradient-to-br from-slate-950/90 to-slate-900/70 p-6 shadow-glow"
        >
          <div className="relative flex h-[340px] w-[340px] items-center justify-center rounded-[2rem] bg-gradient-to-br from-orange-500/15 via-transparent to-blue-500/10 p-6">
            <div className="absolute inset-0 rounded-[1.75rem] bg-[#020202]/90 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]" />

            {/* Avatar circle with subtle border + glow */}
            <motion.div
              aria-hidden
              animate={avatarPulse}
              whileHover={reduce ? {} : { scale: 1.06 }}
              transition={{ type: "spring", stiffness: 120, damping: 14 }}
              className="relative z-10 flex h-48 w-48 items-center justify-center rounded-full bg-gradient-to-br from-orange-500/20 to-blue-500/10 p-1"
            >
              <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-900/70 text-3xl font-semibold text-orange-300">
                <span className="sr-only">Avatar Mamoun Berthe</span>
                <img
                  src="/assets/Moun.jpeg"
                  alt="Photo de profil de Mamoun Berthe"
                  className="h-full w-full rounded-full object-cover object-center"
                />
              </div>
            </motion.div>
              </div>
            </motion.div>
          </div>
    </section>
  );
}
