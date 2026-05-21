import { motion } from "framer-motion";
import { portfolio } from "../../data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="space-y-6">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.35em] text-[var(--accent)]">Expérience</p>
        <h2 className="text-3xl font-semibold text-[var(--foreground)] sm:text-4xl">Parcours</h2>
      </div>

      <div className="space-y-6">
        {portfolio.experience.map((item, index) => (
          <motion.div
            key={`${item.role}-${index}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
            className="relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 shadow-soft backdrop-blur-xl transition duration-300 hover:shadow-[0_30px_90px_rgba(0,0,0,0.16)]"
          >
            <div className="absolute inset-x-6 top-6 h-1 rounded-full bg-gradient-to-r from-[var(--accent)]/40 to-transparent" />
            <div className="relative space-y-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent)]">{item.period}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-[var(--foreground)]">{item.role}</h3>
                </div>
                <span className="rounded-full bg-[var(--card-strong)] px-4 py-2 text-sm font-medium text-[var(--muted)]">
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
