import { Link, useParams } from "react-router-dom";
import { projectsBySlug } from "../data/projects";

export function ProjectDetailPage() {
  const { slug } = useParams();
  const project = slug ? projectsBySlug[slug] : null;

  if (!project) {
    return (
      <div className="page-stack shell-container">
        <div className="surface-card">
          <p className="eyebrow">Project not found</p>
          <h1>This project page is not available yet.</h1>
          <p>The route does not match one of the GitHub-backed portfolio entries.</p>
          <Link className="button button--primary" to="/projects">
            Back to projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-stack shell-container">
      <section className="project-hero">
        <div>
          <p className="eyebrow">{project.category}</p>
          <h1>{project.title}</h1>
          <p className="page-intro__text">{project.description}</p>
        </div>
        <div className="project-hero__meta">
          <span>{project.language}</span>
          <span>{project.repoName}</span>
        </div>
      </section>

      <section className="detail-grid">
        <article className="surface-card">
          <h2>Highlights</h2>
          <ul className="feature-list">
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </article>
        <article className="surface-card">
          <h2>Links</h2>
          <div className="detail-links">
            <a href={project.githubUrl} target="_blank" rel="noreferrer">
              View GitHub repository
            </a>
            {project.liveUrl ? (
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                Open live demo
              </a>
            ) : (
              <p>No live demo published for this project yet.</p>
            )}
          </div>
        </article>
      </section>

      <section className="surface-card">
        <h2>Stack snapshot</h2>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </section>
    </div>
  );
}
