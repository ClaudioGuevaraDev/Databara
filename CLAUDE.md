# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The marketing **landing page for Databara** — a separate desktop app (a PostgreSQL
client built with Tauri/React/Rust, lives at `../Databara` and on GitHub at
`ClaudioGuevaraDev/Databara`). This repo is **only** the website: a single static
page that explains the app, lists features, offers download links, and drives people
to the GitHub repo. There is no backend and no app logic here.

Stack: Next.js 16 (App Router) · React 19 · TypeScript (strict) · Tailwind CSS v4 · pnpm.

## Commands

```bash
pnpm install      # see pnpm note below
pnpm dev          # dev server at http://localhost:3000
pnpm build        # production build (fully static)
pnpm start        # serve the production build
pnpm lint         # ESLint (eslint-config-next)
```

There are no tests. "Verifying a change" = `pnpm lint` + `pnpm build` pass, plus a
visual check of the rendered page.

## Committing (`/conventional-commit`)

When the `/conventional-commit` skill is invoked, in addition to generating the
conventional commit, **always bump the `version` in `package.json` (`A.B.C`)** as part
of the same commit. Rules for the bump:

- **Only ever change `B` (minor) or `C` (patch) — never `A` (major).** Even for a
  `BREAKING CHANGE`, cap the bump at minor; do not touch `A`.
- Pick the segment at your discretion based on the commit type:
  - `feat` → bump **minor** (`B`), reset patch to 0 (e.g. `0.1.4` → `0.2.0`).
  - everything else (`fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`,
    `ci`, `chore`, `revert`) → bump **patch** (`C`) (e.g. `0.1.4` → `0.1.5`).
- Stage the `package.json` change together with the rest so it lands in the one commit.

## Dependency versions

**Every dependency is pinned to an exact version — no `^` (or `~`) ranges** in
`package.json`. `.npmrc` sets `save-exact=true`, so `pnpm add <pkg>` pins automatically;
if you ever add a version manually, write the exact version (e.g. `"4.3.1"`, not `"^4"`).

## pnpm native-build gotcha

`sharp` and `unrs-resolver` need build scripts. pnpm 11.7 will otherwise abort install
(and `pnpm build`/`pnpm start` run a pre-check install that inherits the failure) with
`ERR_PNPM_IGNORED_BUILDS`. They are pre-approved in `pnpm-workspace.yaml` under
`allowBuilds: { sharp: true, unrs-resolver: true }`. If pnpm rewrites that block with
placeholder values and re-prompts, set both back to `true` and reinstall.

## Architecture

- **Single page, composed of section components.** `app/page.tsx` just stacks
  `Navbar → Hero → Features → Download → Community → Footer`. Each section is a
  self-contained server component in `components/`. To change a section, edit its file;
  page structure rarely needs touching.
- **`app/data.ts` is the single source of truth** for all content that changes between
  releases: the GitHub URLs, the release `VERSION`, the per-OS `DOWNLOADS` (label + URL
  per installer format), and the `FEATURES` list rendered by the Features grid. When a
  new app release ships, bump `VERSION` and the asset filenames here — do not hardcode
  URLs in components. Note: `VERSION` builds the download URLs but is intentionally
  **not displayed** anywhere in the UI.
- **Icons** live in `components/icons.tsx` as inline SVGs (GitHub, Star, OS logos,
  feature glyphs). `FeatureIcon` maps the string `icon` keys from `FEATURES` to paths.
  No icon library — add new glyphs here.
- **Theme.** Colors are CSS custom properties in `app/globals.css` (`:root`) and exposed
  to Tailwind via the `@theme inline` block, so utilities like `bg-surface`,
  `text-accent`, `border-border` work. Palette is deep navy + cyan accent to match the
  desktop app. Change colors in `:root`, not scattered across components.
- **Import alias:** `@/*` maps to the repo root (e.g. `@/app/data`, `@/components/...`).
- **`components/AppMock.tsx`** is a pure-CSS placeholder mock of the app window in the
  hero (no real screenshot exists yet). Replace it when a real screenshot is available.
- **`NEXT_PUBLIC_SITE_URL`** sets `metadataBase` for Open Graph URLs; defaults to
  `http://localhost:3000`. Set it to the deployed origin in production.

## Verifying responsive layout on Windows

Chrome headless `--window-size` cannot produce a viewport narrower than ~484px on this
Windows setup (`window.innerWidth` floors there), so `--screenshot` of a "390px" window
clips the right edge — a capture artifact, not a real CSS overflow. To genuinely test a
mobile viewport, drive Chrome over the DevTools Protocol with
`Emulation.setDeviceMetricsOverride` and measure `documentElement.scrollWidth` vs
`window.innerWidth`. Node 24 has a global `WebSocket`, so no `ws` package is needed.
