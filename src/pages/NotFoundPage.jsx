import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div className="page-stack shell-container">
      <section className="surface-card">
        <p className="eyebrow">404</p>
        <h1>That page is outside the portfolio map.</h1>
        <p>Use the main navigation to jump back into the React app.</p>
        <Link className="button button--primary" to="/">
          Return home
        </Link>
      </section>
    </div>
  );
}
