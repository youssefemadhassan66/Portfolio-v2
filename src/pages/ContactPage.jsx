import { PageIntro } from "../components/PageIntro";
import { profile } from "../data/profile";

export function ContactPage() {
  return (
    <div className="page-stack shell-container">
      <PageIntro
        eyebrow="Contact"
        title="Let’s build something practical, polished, and ready to ship."
        text="I’m open to frontend, backend, and full-stack opportunities where strong implementation and clean user experience both matter."
      />

      <section className="detail-grid">
        <article className="surface-card">
          <h2>Reach out</h2>
          <ul className="feature-list">
            <li>Email: {profile.email}</li>
            <li>Phone: {profile.phone}</li>
            <li>Location: {profile.location}</li>
          </ul>
        </article>
        <article className="surface-card">
          <h2>Direct links</h2>
          <div className="detail-links">
            <a href={`mailto:${profile.email}`}>Send an email</a>
            <a href={profile.githubUrl} target="_blank" rel="noreferrer">
              Open GitHub
            </a>
            <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">
              Open LinkedIn
            </a>
          </div>
        </article>
      </section>
    </div>
  );
}
