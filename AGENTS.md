# Repository Guidelines

## Project Structure & Module Organization
- `src/` contains the Astro site: components in `src/components/`, layouts in `src/layouts/`, pages in `src/pages/`, data in `src/data/`, and global styles in `src/styles/global.css`.
- Language routes live in `src/pages/en/` and `src/pages/es/` (the root `src/pages/index.astro` redirects to `/en/`).
- Static assets (images, icons, downloads) live in `public/` and are referenced by absolute paths like `/partners/product/image.png`.

## Build, Test, and Development Commands
- `npm run dev` — start the local Astro dev server with hot reload.
- `npm run build` — build the production site into `dist/`.
- `npm run preview` — serve the production build locally for verification.
- `npm run astro` — access Astro CLI (e.g., `npm run astro -- --help`).

## Coding Style & Naming Conventions
- Use Astro components for UI (`.astro`) and keep components small and reusable.
- Prefer Tailwind utility classes over inline styles; follow existing class ordering in files you touch.
- Keep indentation at 2 spaces (Astro/TS/JSON). Use `kebab-case` for filenames like `affiliate-card` only if new files match existing patterns; otherwise follow current `PascalCase` component naming.
- Use TypeScript interfaces for component props when adding new props.

## Testing Guidelines
- No automated test framework is configured yet. If you add tests, document the framework and commands here.
- Manual checks should include both locales (`/en/`, `/es/`), responsive layout, and dark/light mode toggling.

## Commit & Pull Request Guidelines
- Recent commits use short, imperative, sentence-case messages (e.g., “Improve styling”, “Remove preloads…”). Follow that convention and avoid prefixes like `feat:` unless the team adopts them.
- PRs should describe the user-facing change, include screenshots for UI updates, and mention any affected routes (e.g., `/en/affiliates`, `/es/afiliados`). Link related issues if applicable.

## Configuration & Deployment Notes
- The project uses Astro and Tailwind CSS v4; dependencies are managed via `npm`.
- No environment variables are required for local dev per current setup.
- Production builds are intended for Vercel (`npm run build`, output `dist/`).
