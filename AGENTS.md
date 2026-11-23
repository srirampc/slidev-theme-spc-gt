# AGENTS.md

Instructions for coding agents working in `slidev-theme-spc-gt`.

## Project Overview

`slidev-theme-spc-gt` is a **light-only** [Slidev](https://sli.dev) theme styled with Georgia Tech colors and backgrounds (originally adapted from `slidev-theme-behackl-kfu`).

- Package manager: `pnpm` (`pnpm-lock.yaml`, `.npmrc` sets `shamefully-hoist=true`).
- Theme metadata in `package.json` enforces `"colorSchema": "light"` and `"highlighter": "shiki"`.

## Commands & Verification

- `pnpm install` — install dependencies.
- `pnpm dev` — start the Slidev dev server for `example/slides.md`.
- `pnpm build` — build `example/slides.md` into `dist/` (gitignored). During validation, prefer `pnpm exec slidev build example/slides.md --out <temp-dir>` to avoid leaving build artifacts in the repo.
- `pnpm export` / `pnpm screenshot` — export `example/slides.md` to PDF or PNGs via `playwright-chromium` (requires Chromium binaries; `pnpm-workspace.yaml` sets `playwright-chromium: false` under `allowBuilds`).

After changing layouts, styles, components, or `setup/` files, run at least `slidev build example/slides.md` (and PNG export inspection when making visual/layout changes). Keep `README.md` and `example/slides.md` updated when adding or changing layouts, components, or `themeConfig` options.

## Repository Structure & Conventions

- **`assets/`**: Theme background images (`cover-background.png`, `default-background.png`, `section-slide-background.jpg`).
  - Always resolve bundled assets in layouts with `new URL('../assets/...', import.meta.url).href` so Vite bundles them when the theme is consumed from another deck.
- **`layouts/`**:
  - `cover.vue` defaults to `assets/cover-background.png` (which already contains the GT logo in the bottom-right corner).
  - `intro.vue`, `section.vue`, and `end.vue` default to `assets/section-slide-background.jpg`.
  - `default.vue`, `image-left.vue`, `image-right.vue`, `two-cols.vue`, and `two-cols-header.vue` default to `assets/default-background.png`.
  - On `image-left.vue` and `image-right.vue`, apply `:style="bgStyle"` to the outer 16:9 `grid-cols-2` wrapper so the full-slide background preserves aspect ratio and logo placement across both columns.
- **`layoutHelper.ts`**:
  - Use `handleBackgroundNC` (not `handleBackground`) for light-background layouts so text color is not forced to `white`.
  - Both helpers accept `(background?: string, dim = false, backgroundSize = 'cover')`.
- **`styles/layout.css`** (imported by `styles/index.ts` after `@slidev/client/styles/layouts-base.css`):
  - Theme CSS variables in `:root`: `--slidev-theme-primary` (`#eaaa00`), `--slidev-theme-supplement` (`#fff7c8`), `--slidev-theme-text-color` (`#051E39`), and `--slidev-theme-title-color` (`#8F713D`).
  - Keep the theme light-only: do not add `.dark` / `html.dark` overrides or `colorSchema: "both"`.
  - Do not set `margin-left` on `.slidev-layout` (it shifts full-bleed background images off the left edge); use `padding-left` instead.
  - Keep `.decor` at `z-index: 0; pointer-events: none`. A negative `z-index` hides `<decor>` behind opaque slide backgrounds (`default-background.png`), while creating a stacking context on `.slidev-layout` would cover `slide-bottom.vue` headers/footers.
- **`setup/`**:
  - `setup/root.ts`: Watches `configs.themeConfig` via Slidev's `#slidev/configs` virtual module and toggles `html.gt-plain-colors` when `gtColors: false` or `plainColors: true` is set (reverting `--slidev-theme-text-color` and `--slidev-theme-title-color` to `#000000`). Avoid importing `@slidev/client` directly in theme setup/components since consumer projects may not hoist it.
  - `setup/shiki.ts`: Syntax highlighting (`material-theme-ocean`).
  - `setup/mermaid.ts`: Mermaid diagram theme (`forest`, light theme).
- **`components/`**: Auto-imported Slidev components (`admonition.vue`, `block.vue`, `bottom-logo-gt-ext.vue`, `decor.vue`, `logo-gt-ext.vue`). Keep GT branding (`gt`) consistent—avoid reintroducing `kfu` / `unigraz` identifiers.
- **`example/`**:
  - `example/slides.md` must reference `theme: ../` (not a repository folder name) so it works regardless of clone directory name.
  - `example/slide-bottom.vue` is specific to the example deck and is not loaded by consumer decks using this theme.
