# Databara — Landing Page

Marketing landing page for [**Databara**](https://github.com/ClaudioGuevaraDev/Databara),
a modern, lightweight desktop database client for PostgreSQL (built with Tauri, React and Rust).

Built with **Next.js (App Router)**, **TypeScript** and **Tailwind CSS v4**.

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the page.

> Note: the native deps `sharp` and `unrs-resolver` need build scripts. They are
> pre-approved in `pnpm-workspace.yaml` (`allowBuilds`). If pnpm ever re-prompts,
> set those entries to `true` and run `pnpm install` again.

## Scripts

| Command          | Description                          |
| ---------------- | ------------------------------------ |
| `pnpm dev`       | Start the dev server                 |
| `pnpm build`     | Production build                     |
| `pnpm start`     | Serve the production build           |
| `pnpm lint`      | Run ESLint                           |

## Structure

```
app/
  layout.tsx     # metadata, fonts, theme
  page.tsx       # composes the sections
  globals.css    # Tailwind + navy/cyan theme tokens
  data.ts        # download links, version, feature list (single source of truth)
components/       # Navbar, Hero, AppMock, Features, Download, Community, Footer, icons
public/
  databara-logo.png
```

## Updating download links

All download URLs and the version live in [`app/data.ts`](app/data.ts). When a new
release ships, bump `VERSION` and the asset filenames there.

## Configuration

- `NEXT_PUBLIC_SITE_URL` — set to the deployed origin (e.g. `https://databara.dev`)
  so Open Graph / social image URLs resolve correctly. Defaults to `http://localhost:3000`.

## Deploy

Any static-friendly host works (Vercel recommended). `pnpm build` produces a fully
static page.
