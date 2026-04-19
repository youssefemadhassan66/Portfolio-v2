# Portfolio React Rebuild Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the static portfolio with a routed React app that has separate pages, GitHub-linked project detail pages, improved containers, and a connected experience timeline.

**Architecture:** Use a Vite-powered React SPA with `react-router-dom` for route-level pages and a shared `SiteShell` layout. Keep project content in a central data file so cards and detail pages stay synchronized and easy to extend.

**Tech Stack:** React, React Router, Vite, Vitest, Testing Library, CSS

---

### Task 1: App Foundation

**Files:**
- Create: `package.json`
- Create: `vite.config.js`
- Create: `vitest.setup.js`
- Create: `.gitignore`
- Modify: `index.html`

- [ ] Add the React/Vite package manifest and test tooling.
- [ ] Point the HTML entry file at `src/main.jsx` and add the chosen typefaces.
- [ ] Add Vite config for React and JSDOM-based tests.

### Task 2: Routing and Shared Data

**Files:**
- Create: `src/main.jsx`
- Create: `src/App.jsx`
- Create: `src/data/profile.js`
- Create: `src/data/projects.js`

- [ ] Mount the app through `BrowserRouter`.
- [ ] Define the shared route tree for home, about, projects, detail, experience, contact, and fallback pages.
- [ ] Store project and profile content in data files so page components stay presentation-focused.

### Task 3: UI Components and Pages

**Files:**
- Create: `src/components/SiteShell.jsx`
- Create: `src/components/PageIntro.jsx`
- Create: `src/components/ProjectCard.jsx`
- Create: `src/components/ExperienceTimeline.jsx`
- Create: `src/pages/HomePage.jsx`
- Create: `src/pages/AboutPage.jsx`
- Create: `src/pages/ProjectsPage.jsx`
- Create: `src/pages/ProjectDetailPage.jsx`
- Create: `src/pages/ExperiencePage.jsx`
- Create: `src/pages/ContactPage.jsx`
- Create: `src/pages/NotFoundPage.jsx`

- [ ] Build the shared shell and navigation.
- [ ] Create page components for each requested route.
- [ ] Implement the connected timeline style for the experience bullets.

### Task 4: Styling and Verification

**Files:**
- Create: `src/styles.css`
- Create: `src/App.test.jsx`
- Delete: `script.js`
- Delete: `styles.css`

- [ ] Replace the old static styling with a bold modern design system built around shared containers and responsive layouts.
- [ ] Add route-level tests for the home page, project detail page, and unknown project state.
- [ ] Run the test suite and production build before calling the rewrite complete.
