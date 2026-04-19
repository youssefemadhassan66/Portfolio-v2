export function ExperienceTimeline({ items }) {
  return (
    <div className="timeline" role="list" aria-label="Experience timeline">
      {items.map((item) => (
        <article className="timeline-item" key={item.title} role="listitem">
          <div className="timeline-item__dot" aria-hidden="true" />
          <div className="timeline-item__content">
            <p className="timeline-item__date">{item.period}</p>
            <h3>{item.title}</h3>
            <p className="timeline-item__company">{item.company}</p>
            <ul>
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}
