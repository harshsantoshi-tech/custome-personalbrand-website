# Elena Marsh — Business Strategy Consulting

A single-page portfolio and booking site for a business strategy consultant, built with React and Vite. Features an editorial-style design system, a case studies gallery, and a fully custom (front-end only) session booking flow — no third-party scheduling tool required.

## Features

- **Light/dark theme toggle** — every color in the site is driven by CSS custom properties, so the whole page re-themes instantly
- **Case studies gallery** — a self-balancing masonry-style layout with industry filters (Retail, Fintech, Manufacturing, Healthcare)
- **Custom booking picker** — a Calendly-style date and time selector built from scratch, matched to the site's visual language
- **Responsive design** — down to mobile, with visible keyboard focus states and reduced-motion support

## Tech stack

- [React](https://react.dev)
- [Vite](https://vitejs.dev) — build tool and dev server
- Plain CSS with custom properties (no CSS framework)

## Getting started

Clone the repo and install dependencies:

```bash
git clone <your-repo-url>
cd elena-marsh-consulting
npm install
```

Start the local dev server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`.

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```