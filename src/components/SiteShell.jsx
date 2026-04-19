import { NavLink, Outlet } from "react-router-dom";
import { profile } from "../data/profile";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/contact", label: "Contact" },
];

export function SiteShell() {
  return (
    <div className="site-shell">
      <div className="ambient ambient-left" />
      <div className="ambient ambient-right" />
      <header className="site-header">
        <div className="shell-container nav-bar">
          <NavLink className="brand-mark" to="/">
            <span className="brand-mark__badge">
              <img src={profile.portraitUrl} alt="Youssef Emad portrait" />
            </span>
            <span>
              <strong>{profile.shortName}</strong>
              <small>{profile.role}</small>
            </span>
          </NavLink>
          <nav className="main-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  isActive ? "nav-link nav-link--active" : "nav-link"
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <a className="nav-cta" href={profile.githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </header>

      <main className="site-main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="shell-container footer-grid">
          <div>
            <p className="footer-kicker">Built with React</p>
            <h2>{profile.shortName}</h2>
            <p>{profile.summary}</p>
          </div>
          <div className="footer-links">
            <a href={profile.githubUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
