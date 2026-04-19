import { Link } from "react-router-dom";

export function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card__topline">
        <span className="project-pill">{project.category}</span>
        <span className="project-language">{project.language}</span>
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-tags">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <div className="project-links">
        <Link className="text-link" to={`/projects/${project.slug}`}>
          View details
        </Link>
        <a href={project.githubUrl} target="_blank" rel="noreferrer">
          GitHub
        </a>
        {project.liveUrl ? (
          <a href={project.liveUrl} target="_blank" rel="noreferrer">
            Live demo
          </a>
        ) : null}
      </div>
    </article>
  );
}
