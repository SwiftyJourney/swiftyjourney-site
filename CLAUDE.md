# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for an iOS engineer, built with **Astro 5** + **Tailwind CSS v4** + **TypeScript**. Deployed to **Vercel**.

## Commands

- `npm run dev` — local dev server with hot reload
- `npm run build` — production build to `dist/`
- `npm run preview` — serve production build locally
- `npm run astro -- --help` — Astro CLI help

No automated test framework is configured. Manual testing should cover both locales (`/en/`, `/es/`), responsive layout, and dark/light mode.

## Architecture

### Bilingual Routing

The site serves two locales: English (`/en/`) and Spanish (`/es/`). The root `index.astro` redirects to `/en/`. Each locale has its own page files under `src/pages/en/` and `src/pages/es/` with translated content. Slug mapping dictionaries handle route translation between languages. All pages include hreflang tags and canonical URLs for SEO.

### Key Directories

- `src/pages/` — Astro routes, split by locale (`en/`, `es/`)
- `src/layouts/` — `BaseLayout` with header, footer, nav, SEO component
- `src/components/` — Reusable Astro components (cards, toggles, sections, etc.)
- `src/data/` — Structured data (JSON-LD factories, cross-site links)
- `src/styles/` — Global CSS with Tailwind v4 imports
- `public/` — Static assets referenced with absolute paths (e.g., `/partners/ed/logo.png`)

### Middleware

`src/middleware.ts` sets security headers (CSP, HSTS, X-Frame-Options, Referrer-Policy). CSP allows scripts from self and Essential Developer academy domains.

### Design System

- **Colors**: Zinc palette (primary) + Orange-500 accents. Dark mode via `.dark` class on `<html>`.
- **Patterns**: `rounded-2xl`, subtle shadows, `hover:scale-105` transitions, 300ms duration standard.
- **Typography**: System fonts with OpenType features (`cv11`, `ss01`).
- **Responsive**: Mobile-first with sm/md/lg/xl breakpoints.

## Conventions

- 2-space indentation in `.astro`, `.ts`, `.css` files
- PascalCase component names (follow local patterns if kebab-case exists)
- TypeScript interfaces for component props
- Tailwind utility classes over inline styles; follow existing class ordering
- Commit messages: short, imperative, sentence-case (e.g., "Improve styling", "Remove preloads"). No `feat:`/`fix:` prefixes.
