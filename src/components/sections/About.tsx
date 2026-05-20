import { motion } from "framer-motion";
import { portfolio } from "../../data/portfolio";

export function About() {
  return (
    <section id="about" className="space-y-8">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.35em] text-orange-300">À propos</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Présentation</h2>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]"
      >
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur-xl">
          <p className="text-slate-300 leading-8">
            {portfolio.description} Je conçois des expériences numériques élégantes et performantes qui facilitent l’usage, tout en respectant une architecture propre et scalable.
          </p>
        </div>
        <div className="space-y-4 rounded-[2rem] border border-white/10 bg-surface-950/90 p-8 shadow-soft">
          {portfolio.highlights.map((item) => (
            <div key={item} className="rounded-3xl border border-white/5 bg-white/5 p-5 text-slate-200 shadow-[0_10px_40px_rgba(255,255,255,0.03)]">
              {item}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
