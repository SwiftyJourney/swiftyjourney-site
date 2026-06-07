# Repository Guidelines

## Project Structure & Module Organization
- `src/pages/` holds Astro routes, split by locale (`en/`, `es/`), with `src/pages/index.astro` redirecting to `/en/`.
- `src/layouts/` contains layout shells; keep shared structure there instead of duplicating in pages.
- `src/components/` houses reusable UI pieces (cards, toggles, navigation, etc.).
- `src/data/` stores structured content used by pages and components.
- `src/styles/` contains global styling (`global.css`); keep site-wide tokens and base styles here.
- Static assets live in `public/` (images, icons, downloads) and are referenced with absolute paths like `/partners/product/image.png`.
- Built output goes to `dist/`.

## Build, Test, and Development Commands
- `npm install` — install dependencies.
- `npm run dev` — start the local Astro dev server with hot reload.
- `npm run build` — build the production site into `dist/`.
- `npm run preview` — serve the production build locally for verification.
- `npm run astro -- --help` — Astro CLI help for content/diagnostics.

## Coding Style & Naming Conventions
- Indentation: 2 spaces in `.astro`, `.ts`, and `.css` files (match existing files).
- Keep component and layout names in `PascalCase` unless a folder already uses `kebab-case` (follow local patterns).
- Use Astro components for UI (`.astro`) and keep components small and reusable.
- Prefer Tailwind utility classes over inline styles; follow existing class ordering in files you touch.
- Use TypeScript interfaces for component props when adding new props.

## Testing Guidelines
- No automated test framework is configured yet. If you add tests, document the framework and commands here.
- Manual checks should include both locales (`/en/`, `/es/`) and responsive layout. The site is light-only — no dark mode to test.

## Commit & Pull Request Guidelines
- Recent commits use short, imperative, sentence-case messages (e.g., “Improve styling”, “Remove preloads…”). Follow that convention and avoid prefixes like `feat:` unless the team adopts them.
- PRs should describe the user-facing change, include screenshots for UI updates, and mention any affected routes (e.g., `/en/affiliates`, `/es/afiliados`). Link related issues if applicable.

## Configuration & Deployment Notes
- Astro configuration lives in `astro.config.mjs`.
- The project uses Astro and Tailwind CSS v4; dependencies are managed via `npm`.
- No environment variables are required for local dev per current setup.
- Production builds are intended for Vercel (`npm run build`, output `dist/`).
