import { motion } from "framer-motion";
import { Layers, Code2, ServerCog } from "lucide-react";
import { portfolio } from "../../data/portfolio";

export function Services() {
  return (
    <section id="services" className="space-y-6">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.35em] text-orange-300">Services</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Ce que je propose</h2>
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
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-surface-950/90 p-6 shadow-soft backdrop-blur-xl"
            >
              <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-orange-500/10 to-transparent opacity-70 blur-2xl" />
              <div className="relative space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-orange-500/10 text-orange-300 ring-1 ring-orange-300/20">
                  {icons[index]}
                </div>
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="text-slate-300 leading-7">{service.description}</p>
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}
