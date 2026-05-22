import { portfolio } from "../../data/portfolio";
import { ProjectCard } from "../ui/ProjectCard";
import { GlassCard } from "../ui/GlassCard";
import { SectionHeading } from "../ui/SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="space-y-10">
      <SectionHeading
        eyebrow="Projets"
        title="Réalisations concrètes, orientées produit"
        description="Des projets pensés pour la production, avec une interface premium, une architecture solide et une expérience utilisateur fluide."
      />

      <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
        <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card-strong)] p-5 text-[var(--muted)] shadow-[0_18px_60px_rgba(var(--shadow-rgb),0.08)]">
          <p className="text-sm uppercase tracking-[0.32em] text-[var(--accent)]">Focus</p>
          <p className="mt-3 text-base leading-7">
            Des projets produits avec une attention particulière au workflow, à la performance et à la cohérence visuelle.
          </p>
        </div>
        <div className="hidden items-center gap-3 rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/10 px-4 py-2 text-sm uppercase tracking-[0.28em] text-[var(--accent)] sm:inline-flex">
          Premium design
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.3fr_0.9fr]">
        <GlassCard className="p-6 sm:p-8">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-3 rounded-[1.5rem] border border-[var(--accent)]/20 bg-[var(--accent)]/10 px-4 py-2 text-[0.72rem] uppercase tracking-[0.35em] text-[var(--accent)] shadow-[0_18px_60px_rgba(var(--accent-rgb),0.12)]">
              Projet en vedette
            </div>
            <div className="space-y-4">
              <p className="text-[var(--foreground)] text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                Conception de produits robustes avec une expérience utilisateur premium.
              </p>
              <p className="text-[var(--muted)] leading-8">
                Chaque réalisation met en avant des interfaces propres, des parcours fluides et une architecture prête pour la mise en production.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card-strong)] p-4 text-center">
                <p className="text-xs uppercase tracking-[0.32em] text-[var(--accent)]">Projets</p>
                <p className="mt-3 text-2xl font-semibold text-[var(--foreground)]">{portfolio.projects.length}</p>
              </div>
              <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card-strong)] p-4 text-center">
                <p className="text-xs uppercase tracking-[0.32em] text-[var(--accent)]">Stack</p>
                <p className="mt-3 text-2xl font-semibold text-[var(--foreground)]">React + Laravel</p>
              </div>
              <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card-strong)] p-4 text-center">
                <p className="text-xs uppercase tracking-[0.32em] text-[var(--accent)]">Livraison</p>
                <p className="mt-3 text-2xl font-semibold text-[var(--foreground)]">Premium</p>
              </div>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="p-6 sm:p-8">
          <div className="space-y-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[var(--muted)]">Focalisation</p>
                <h3 className="mt-3 text-2xl font-semibold text-[var(--foreground)]">Des solutions claires et scalables</h3>
              </div>
              <span className="inline-flex rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm font-semibold text-[var(--accent)]">
                Priorité produit
              </span>
            </div>
            <p className="text-[var(--muted)] leading-8">
              Les projets présentés reflètent une architecture pensée pour la croissance, des interfaces orientées utilisateur et une maintenance simplifiée.
            </p>
            <div className="grid gap-3">
              {portfolio.projects.slice(0, 2).map((project) => (
                <div key={project.title} className="rounded-[1.25rem] border border-[var(--border)] bg-[var(--card)] p-4 shadow-[0_10px_30px_rgba(var(--shadow-rgb),0.08)]">
                  <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent)]">{project.title}</p>
                  <p className="mt-3 text-sm text-[var(--muted)] leading-6">{project.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </GlassCard>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {portfolio.projects.map((project, index) => (
          <ProjectCard key={project.title} index={index} {...project} />
        ))}
      </div>
    </section>
  );
}
