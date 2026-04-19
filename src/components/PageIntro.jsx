export function PageIntro({ eyebrow, title, text }) {
  return (
    <div className="page-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="page-intro__text">{text}</p>
    </div>
  );
}
