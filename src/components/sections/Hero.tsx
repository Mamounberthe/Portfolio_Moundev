import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, ChevronDown } from "lucide-react";
import { Button } from "../ui/Button";
import { portfolio } from "../../data/portfolio";
import MounPhoto from "../../assets/Moun.jpeg";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const scrollIndicatorVariants = {
    animate: {
      y: [0, 8, 0],
      opacity: [0.5, 1, 0.5],
      transition: { duration: 2, repeat: Infinity },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-[var(--background)]"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/4 h-96 w-96 rounded-full bg-[var(--accent)]/8 blur-3xl" />
        <div className="absolute -bottom-1/2 -right-1/4 h-96 w-96 rounded-full bg-[var(--secondary)]/5 blur-3xl" />
        <div className="absolute top-1/3 right-1/4 h-72 w-72 rounded-full bg-[var(--accent)]/5 blur-3xl" />
      </div>

      {/* Content container */}
      <motion.div
        className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Two column grid */}
        <div className="grid w-full gap-8 lg:gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left content */}
          <motion.div className="flex flex-col justify-center space-y-8">
            {/* Intro label */}
            <motion.div variants={itemVariants}>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
                Developer & Product Designer
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-[var(--foreground)]"
            >
              Crafting digital experiences that matter
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="max-w-xl text-lg text-[var(--text-muted)] leading-relaxed"
            >
              {portfolio.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-4 sm:flex-row sm:gap-3"
            >
              <Button href="#projects" variant="solid" className="group">
                <span>View my work</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button href="#contact" variant="outline">
                Let's talk
              </Button>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 pt-4"
            >
              <a
                href={portfolio.socials[0].href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="group inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--border)] bg-transparent transition-all hover:border-[var(--accent)] hover:bg-[var(--accent)]/10"
              >
                <Github className="h-5 w-5 text-[var(--text-muted)] transition group-hover:text-[var(--accent)]" />
              </a>
              <a
                href={portfolio.socials[1].href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--border)] bg-transparent transition-all hover:border-[var(--secondary)] hover:bg-[var(--secondary)]/10"
              >
                <Linkedin className="h-5 w-5 text-[var(--text-muted)] transition group-hover:text-[var(--secondary)]" />
              </a>
              <span className="h-px w-12 bg-gradient-to-r from-[var(--border)] to-transparent" />
              <span className="text-sm text-[var(--text-muted)]">Available for projects</span>
            </motion.div>
          </motion.div>

          {/* Right visual composition */}
          <motion.div
            variants={imageVariants}
            className="relative flex items-center justify-center overflow-visible"
          >
            {/* Animated gradient circle background */}
            <motion.div
              animate={floatingVariants.animate}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--accent)]/20 via-transparent to-[var(--secondary)]/20 blur-3xl" />
              <div className="absolute inset-1/4 rounded-full bg-gradient-to-t from-[var(--accent)]/10 to-transparent blur-2xl" />
            </motion.div>

            {/* Profile image container */}
            <motion.div
              animate={floatingVariants.animate}
              className="relative z-10 h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96"
            >
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full border border-[var(--accent)]/30 shadow-[0_0_60px_rgba(var(--accent-rgb),0.2)]" />

              {/* Image */}
              <img
                src={MounPhoto}
                alt="Mamoun Berthe"
                className="h-full w-full rounded-full object-cover object-center"
              />

              {/* Soft inner glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/5 via-transparent to-black/5" />
            </motion.div>

            {/* Floating card - status */}
            <motion.div
              animate={{
                y: [0, 15, 0],
                transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 lg:bottom-12 lg:left-12 z-50 rounded-2xl border border-[var(--border)] bg-[var(--card)]/80 backdrop-blur px-4 py-3 sm:px-6 sm:py-4 shadow-lg"
            >
              <p className="text-xs sm:text-sm font-semibold text-[var(--accent)]">⚡ Production Ready</p>
              <p className="text-[0.65rem] sm:text-xs text-[var(--text-muted)] mt-1">Full-stack solutions</p>
            </motion.div>

            {/* Floating card - tech stack */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 },
              }}
              className="absolute top-4 right-4 sm:top-8 sm:right-8 lg:top-12 lg:right-12 z-20 rounded-2xl border border-[var(--border)] bg-[var(--card)]/80 backdrop-blur px-4 py-3 sm:px-6 sm:py-4 shadow-lg"
            >
              <p className="text-xs sm:text-sm font-semibold text-[var(--secondary)]">React + Laravel</p>
              <p className="text-[0.65rem] sm:text-xs text-[var(--text-muted)] mt-1">Modern tech stack</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={scrollIndicatorVariants.animate}
            className="flex flex-col items-center gap-2 text-[var(--text-muted)]"
          >
            <span className="text-xs uppercase tracking-widest font-semibold">Scroll</span>
            <ChevronDown className="h-4 w-4" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
