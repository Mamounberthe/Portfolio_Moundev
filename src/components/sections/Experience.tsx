import { motion, useReducedMotion } from "framer-motion";
import { portfolio } from "../../data/portfolio";

export function Experience() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="experience" className="space-y-6">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.35em] text-[var(--accent)]">Expérience</p>
        <h2 className="text-2xl font-semibold text-[var(--foreground)] sm:text-3xl">Parcours</h2>
      </div>

      <div className="space-y-5">
        {portfolio.experience.map((item, index) => (
          <motion.div
            key={`${item.role}-${index}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
            whileHover={reduceMotion ? undefined : { y: -3 }}
            whileTap={reduceMotion ? undefined : { scale: 0.995 }}
            className="relative overflow-hidden rounded-[1rem] border border-[var(--border)] bg-[var(--card)] p-5 shadow-soft backdrop-blur-xl transition duration-300 motion-safe:hover:-translate-y-1 sm:p-6"
          >
            <div className="absolute left-4 top-6 h-10 w-1 rounded-full bg-[var(--accent)]" />
            <div className="relative space-y-4 pl-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent)]">{item.period}</p>
                  <h3 className="mt-2 text-xl font-semibold text-[var(--foreground)]">{item.role}</h3>
                </div>
                <span className="inline-flex rounded-full bg-[var(--card-strong)] px-3 py-2 text-sm font-medium text-[var(--muted)]">
                  {item.company}
                </span>
              </div>

              <p className="text-[var(--muted)] leading-7">{item.details}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
