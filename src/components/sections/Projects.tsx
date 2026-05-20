import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { portfolio } from "../../data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="space-y-6">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.35em] text-orange-300">Projets</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Projets réalisés</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {portfolio.projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.08 }}
            whileHover={{ y: -6 }}
            className="group overflow-hidden rounded-[2rem] border border-white/10 bg-surface-950/80 p-6 shadow-soft backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_25px_80px_rgba(0,0,0,0.35)]"
          >
            <div className="mb-4 flex items-center justify-between gap-4">
              <span className="rounded-3xl bg-orange-500/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-orange-300">
                Projet
              </span>
              <div className="flex items-center gap-3 text-slate-300">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Voir le dépôt GitHub de ${project.title}`}
                  className="transition hover:text-orange-300"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Voir la démo de ${project.title}`}
                  className="transition hover:text-orange-300"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
            <p className="mt-3 text-slate-300 leading-7">{project.subtitle}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between gap-4">
              <span className="text-sm uppercase tracking-[0.3em] text-slate-500">En ligne</span>
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-200 transition hover:bg-orange-500/15 hover:text-orange-100"
              >
                Voir la démo
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
