import { PageIntro } from "../components/PageIntro";
import { profile } from "../data/profile";

export function AboutPage() {
  return (
    <div className="page-stack shell-container">
      <PageIntro
        eyebrow="About"
        title="A developer who likes structure, clarity, and interfaces that feel alive."
        text="My work sits between clean frontend delivery and practical backend systems, with a strong bias toward responsive experiences and maintainable project structure."
      />

      <section className="detail-grid">
        <article className="surface-card">
          <h2>Profile</h2>
          <p>{profile.summary}</p>
          <p>
            I enjoy taking rough ideas and shaping them into complete web products with stronger
            hierarchy, clearer flows, and reliable implementation details.
          </p>
        </article>
        <article className="surface-card">
          <h2>Education</h2>
          <p>{profile.education.degree}</p>
          <p>{profile.education.school}</p>
          <p>Graduated in {profile.education.year}</p>
        </article>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Core strengths</p>
            <h2>Built for both collaboration and execution.</h2>
          </div>
        </div>
        <div className="strength-board">
          {profile.strengths.map((strength) => (
            <article className="surface-card" key={strength}>
              <p>{strength}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
