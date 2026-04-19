import { PageIntro } from "../components/PageIntro";
import { ExperienceTimeline } from "../components/ExperienceTimeline";
import { profile } from "../data/profile";

export function ExperiencePage() {
  return (
    <div className="page-stack shell-container">
      <PageIntro
        eyebrow="Experience"
        title="A connected career timeline with linked bullets and clearer progression."
        text="This page turns the experience section into a real narrative path, making the milestones feel related instead of visually isolated."
      />
      <ExperienceTimeline items={profile.experience} />
    </div>
  );
}
