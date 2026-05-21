import { motion } from "framer-motion";
import { Layers, Code2, ServerCog } from "lucide-react";
import { portfolio } from "../../data/portfolio";

export function Services() {
  return (
    <section id="services" className="space-y-6">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.35em] text-[var(--accent)]">Services</p>
        <h2 className="text-3xl font-semibold text-[var(--foreground)] sm:text-4xl">Ce que je propose</h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.85, ease: "easeOut" }}
        className="grid gap-6 md:grid-cols-3"
      >
        {portfolio.services.map((service, index) => {
          const icons = [
            <Layers key="layers" className="h-6 w-6" />,
            <Code2 key="code" className="h-6 w-6" />,
            <ServerCog key="server" className="h-6 w-6" />,
          ];

          return (
            <motion.article
              key={service.title}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 120, damping: 16 }}
              className="group relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 shadow-soft backdrop-blur-xl transition duration-300 hover:shadow-[0_28px_90px_rgba(0,0,0,0.16)]"
            >
              <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-[var(--accent)]/10 to-transparent opacity-70 blur-2xl" />
              <div className="relative space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-[var(--accent)]/10 text-[var(--accent)] ring-1 ring-[var(--accent)]/20">
                  {icons[index]}
                </div>
                <h3 className="text-xl font-semibold text-[var(--foreground)]">{service.title}</h3>
                <p className="text-[var(--muted)] leading-7">{service.description}</p>
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}
