import { portfolio } from "../../data/portfolio";
import { ProjectCard } from "../ui/ProjectCard";
import { SectionHeading } from "../ui/SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="space-y-10">
      <SectionHeading
        eyebrow="Projets"
        title="Réalisations concrètes, orientées produit"
        description="Des projets pensés pour la production, avec une interface premium, une architecture solide et une expérience utilisateur fluide."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {portfolio.projects.map((project, index) => (
          <ProjectCard key={project.title} index={index} {...project} />
        ))}
      </div>
    </section>
  );
}
