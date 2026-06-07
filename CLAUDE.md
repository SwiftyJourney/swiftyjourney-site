# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for an iOS engineer, built with **Astro 5** + **Tailwind CSS v4** + **TypeScript**. Deployed to **Vercel**.

## Commands

- `npm run dev` — local dev server with hot reload
- `npm run build` — production build to `dist/`
- `npm run preview` — serve production build locally
- `npm run astro -- --help` — Astro CLI help

No automated test framework is configured. Manual testing should cover both locales (`/en/`, `/es/`) and responsive layout. The site is light-only — there is no dark mode to test.

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

Tokens live in `src/styles/global.css` via Tailwind v4 `@theme`. Use the semantic aliases, not raw hex or Tailwind zinc/orange.

- **Colors**: Coral scale with `--color-accent` (coral-500 `#EC695B`) / `--color-accent-hover` (coral-600 `#DC5648`) over a warm cream background `--color-bg` (`#F5F3EF`). Use `text-accent` / `border-accent` for foregrounds and borders; `bg-coral-500` / `hover:bg-coral-600` are the sanctioned background aliases.
- **Light-only**: No dark mode. There is no `.dark` class; `html` declares `color-scheme: light`. Do not add `dark:` utilities.
- **Typography**: Inter (`--font-sans` / `--font-display`) with OpenType features (`cv11`, `ss01`).
- **Patterns**: `rounded-2xl`, subtle shadows, smooth transitions on the `--ease-apple` curve.
- **Responsive**: Mobile-first with sm/md/lg/xl breakpoints.

## Conventions

- 2-space indentation in `.astro`, `.ts`, `.css` files
- PascalCase component names (follow local patterns if kebab-case exists)
- TypeScript interfaces for component props
- Tailwind utility classes over inline styles; follow existing class ordering
- Commit messages: short, imperative, sentence-case (e.g., "Improve styling", "Remove preloads"). No `feat:`/`fix:` prefixes.
