import { PageIntro } from "../components/PageIntro";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/projects";

export function ProjectsPage() {
  return (
    <div className="page-stack shell-container">
      <PageIntro
        eyebrow="Projects"
        title="GitHub-backed project pages, built to make your work easier to scan."
        text="Every card links to the repository, and every project has a route-ready detail page so recruiters can move from portfolio polish to source code without friction."
      />
      <section className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
    </div>
  );
}
