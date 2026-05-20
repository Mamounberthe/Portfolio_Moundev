import { motion } from "framer-motion";
import { portfolio } from "../../data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="space-y-6">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.35em] text-orange-300">Compétences</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Ce que je maîtrise</h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="grid gap-6 lg:grid-cols-[1.3fr_0.9fr]"
      >
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur-xl">
          <p className="text-slate-300 leading-8">
            J’aide les équipes et les projets à passer du concept à la production avec une approche technique et esthétique.
            Mes compétences couvrent l’intégration front-end réactive, le back-end Laravel et la création d’expériences digitalisées
            performantes.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {portfolio.skills.map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 shadow-[0_10px_30px_rgba(15,23,42,0.2)]"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="space-y-4 rounded-[2rem] border border-white/10 bg-surface-950/90 p-8 shadow-soft">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="rounded-[2rem] border border-white/5 bg-gradient-to-br from-orange-500/10 to-slate-950/80 p-6"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-orange-300">Focus</p>
            <h3 className="mt-3 text-xl font-semibold text-white">Front-end moderne</h3>
            <p className="mt-3 text-slate-300 leading-7">
              Construction d’interfaces rapides et responsives avec React, Tailwind et des animations maîtrisées.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
            className="rounded-[2rem] border border-white/5 bg-slate-900/90 p-6"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Back-end & intégration</p>
            <h3 className="mt-3 text-xl font-semibold text-white">Laravel et API</h3>
            <p className="mt-3 text-slate-300 leading-7">
              Mise en place d’architectures robustes, d’APIs sécurisées et d’expériences métiers fiables.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
