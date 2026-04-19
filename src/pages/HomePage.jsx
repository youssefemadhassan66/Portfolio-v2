import { Link } from "react-router-dom";
import { ExperienceTimeline } from "../components/ExperienceTimeline";
import { ProjectCard } from "../components/ProjectCard";
import { profile } from "../data/profile";
import { featuredProjects } from "../data/projects";

export function HomePage() {
  return (
    <div className="page-stack">
      <section className="hero-panel shell-container">
        <div className="hero-copy">
          <p className="eyebrow">Bold modern React portfolio</p>
          <h1>{profile.heroHeadline}</h1>
          <p className="hero-copy__body">{profile.heroBody}</p>
          <div className="hero-actions">
            <Link className="button button--primary" to="/projects">
              Explore projects
            </Link>
            <Link className="button button--ghost" to="/contact">
              Hire me
            </Link>
          </div>
          <div className="hero-stats">
            {profile.stats.map((stat) => (
              <div className="stat-chip" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <aside className="hero-spotlight">
          <p className="eyebrow">Quick profile</p>
          <ul className="hero-spotlight__list">
            <li>{profile.location}</li>
            <li>{profile.education.degree}</li>
            <li>{profile.education.school}</li>
          </ul>
          <div className="hero-quote">
            <span>Now shipping</span>
            <strong>React pages, project routes, and GitHub-first case studies.</strong>
          </div>
        </aside>
      </section>

      <section className="shell-container split-banner">
        <div>
          <p className="eyebrow">What I bring</p>
          <h2>Frontend sharpness, backend structure, and product thinking in the same build.</h2>
        </div>
        <div className="strength-list">
          {profile.strengths.map((strength) => (
            <p key={strength}>{strength}</p>
          ))}
        </div>
      </section>

      <section className="shell-container section-block">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Featured work</p>
            <h2>Project cards that lead straight to the code.</h2>
          </div>
          <Link className="text-link" to="/projects">
            See all projects
          </Link>
        </div>
        <div className="project-grid">
          {featuredProjects.slice(0, 6).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="shell-container section-block">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Experience</p>
            <h2>A connected timeline instead of disconnected cards.</h2>
          </div>
          <Link className="text-link" to="/experience">
            Open full timeline
          </Link>
        </div>
        <ExperienceTimeline items={profile.experience.slice(0, 3)} />
      </section>
    </div>
  );
}
