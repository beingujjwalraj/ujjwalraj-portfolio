# Ujjwal Raj Portfolio

Personal portfolio website built with React 19, TypeScript, and Vite.

**Live Site:** [beingujjwalraj.netlify.app](https://beingujjwalraj.netlify.app/)

---

## Overview

This repository contains the source code for my personal portfolio. The site is designed for fast load times, responsive cross-device performance, and clean typography without heavy UI component libraries.

### Key Sections

- **About:** Background, core technical proficiencies, and experience metrics.
- **Resume:** Work history at GemsCap Global, academic background at IIITDM Kancheepuram, and technical credentials.
- **Projects:** Interactive showcase of quantitative systems, algorithmic trading tools, and full-stack AI applications with category filtering.
- **Services:** Breakdown of technical capabilities across low-latency data pipelines, AI integrations, and full-stack architecture.
- **Contact:** Direct contact channels and an integrated form powered by Netlify Forms.

---

## Tech Stack

- **Framework:** React 19
- **Language:** TypeScript
- **Bundler:** Vite 8
- **Animation:** Framer Motion
- **Styling:** CSS Modules, Vanilla CSS
- **Linter:** Oxlint
- **Hosting:** Netlify
- **SEO & Metadata:** OpenGraph, Twitter Cards, Schema.org JSON-LD, XML Sitemap

---

## Getting Started

### Prerequisites

- Node.js (version 18 or later recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/beingujjwalraj/ujjwalraj-portfolio.git
   cd ujjwalraj-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173`.

---

## Scripts

- `npm run dev` — Starts the development server with Hot Module Replacement (HMR).
- `npm run build` — Type-checks TypeScript files and generates an optimized production build in `dist/`.
- `npm run preview` — Previews the production build locally.
- `npm run lint` — Runs Oxlint for fast code analysis.

---

## Project Structure

```text
portfolio/
├── public/
│   ├── _redirects              # Netlify client-side routing rules
│   ├── google*.html            # Search Console verification
│   ├── robots.txt              # Search crawler directives
│   └── sitemap.xml             # Search engine URL map
├── src/
│   ├── assets/                 # Static images, icons, and media
│   ├── components/             # Reusable UI components (Header, Navigation)
│   ├── data/                   # Content definitions (projects, experience, services)
│   ├── sections/               # Page sections (About, Resume, Projects, Services, Contact)
│   ├── App.tsx                 # Root component, routing, and swipe navigation
│   ├── main.tsx                # React DOM entry point
│   └── index.css               # Global typography, color tokens, and base styles
├── index.html                  # HTML template with SEO and Schema.org metadata
├── package.json                # Project dependencies and npm scripts
├── tsconfig.json               # TypeScript configuration
└── vite.config.ts              # Vite configuration
```

---

## Contact

- **Website:** [beingujjwalraj.netlify.app](https://beingujjwalraj.netlify.app/)
- **Email:** [ujjwalrajbgis@gmail.com](mailto:ujjwalrajbgis@gmail.com)
- **LinkedIn:** [linkedin.com/in/beingujjwalraj](https://linkedin.com/in/beingujjwalraj)
- **GitHub:** [github.com/beingujjwalraj](https://github.com/beingujjwalraj)
- **X:** [@beingujjwalraj](https://x.com/beingujjwalraj)

---

&copy; 2026 Ujjwal Raj. All rights reserved.
