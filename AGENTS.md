# AGENTS.md

This document helps future agents understand, build, run, and work on the storybook-henk repository.

Only information directly observed in the repository is included.

---

## Quick status
- Project type: Storybook-based design system (Storybook + Vite + TypeScript + PostCSS + Liquid snippets).
- Primary purpose: component library / design system with Storybook stories and a small set of scripts that produce browser assets under `public/assets`.

---

## Key directories
- src/
  - assets/             → CSS sources and asset-related files
  - stories/            → Storybook stories, components, templates, and story assets
  - scripts/            → TypeScript scripts compiled to browser JS (Vite / tsc + bundling)
  - internal-components → small React/JSX/TS components (used by stories)
  - decorators/         → Storybook decorators (e.g. withSectionWrapper)
  - utils/              → small utilities used by stories or scripts
  - liquid-engine.js    → LiquidJS engine + registered asset_url filter
- public/
  - assets/             → built/compiled CSS/JS exported for consumption (fonts, prebuilt CSS, minified JS)
- snippets/             → Liquid snippet(s), e.g. `henk-card.liquid`
- tokens/               → token JSON used by docs
- .storybook/           → Storybook configuration (main.ts, preview.ts, manager.js, preview-head.html)

---

## Observed package scripts (run via npm run <name>)
(From package.json)

- npm run storybook
  - Launches Storybook dev: `storybook dev -p 6006`
- npm run storybook-docs
  - Launchs Storybook dev with docs: `storybook dev --docs`
- npm run build-storybook
  - Build Storybook static: `storybook build`
- npm run build-storybook-docs
  - Build Storybook docs: `storybook build --docs`
- npm run ori_build:js
  - Runs `tsc -p tsconfig.scripts.json` then terser over `public/assets/*.js` files (legacy/original build flow)
- npm run build:js
  - `vite build --config vite.shopify.config.js` (shopify-specific vite config)
- npm run watch:js
  - `vite build --config vite.shopify.config.js --watch` (watch build for scripts)
- npm run build:wc
  - `vite build && cp -r dist/assets/* public/assets/` (build and copy the generated assets into public)
- npm run check:browsers
  - `npx browserslist`
- npm run css:dev
  - `NODE_ENV=development node build-css.js` (build CSS to public assets with source maps inline)
- npm run css:prod
  - `NODE_ENV=production node build-css.js` (production build, creates .min.css)
- npm run watch:css
  - `nodemon -e css -w src/assets -w src/stories --ignore public/assets --exec "npm run css:dev && npm run css:prod"`

Note: `test` script is a placeholder that exits with error (no tests configured in package.json).

---

## Build & asset pipeline
- CSS
  - Source CSS authored under `src/assets/*.css`.
  - `build-css.js` reads selected source CSS files and runs them through PostCSS plugins (postcss-import, postcss-discard-comments, postcss-preset-env, cssnano in prod).
  - Output files are written to `public/assets/` (and `.min.css` variants in production).
  - `css:dev` and `css:prod` npm scripts drive this.

- JS (scripts)
  - `src/scripts/*.ts` are the entry points for site/shopify scripts.
  - `vite.config.js` discovers `src/scripts/*.ts` and builds them as separate entries (outputs to `dist/assets` by default via Vite build settings).
  - `build:wc` runs `vite build` then copies `dist/assets/*` into `public/assets/`.
  - `ori_build:js` compiles via `tsc -p tsconfig.scripts.json` and then runs `terser` over JS in `public/assets` (legacy flow).

- Storybook
  - Uses `@storybook/html-vite` / Storybook 8 with Vite.
  - Stories live under `src/stories/**` (mdx and .stories.ts files). See `.storybook/main.ts` for story globs and addon list.
  - `.storybook/preview.ts` contains global decorators (theme toggles) and story sorting configuration.

- Liquid
  - `src/liquid-engine.js` creates a Liquid engine (liquidjs) with a registered `asset_url` filter that maps to `/assets/<filename>`.
  - Snippets in `snippets/` appear to be Shopify-style Liquid snippets (e.g. `henk-card.liquid`).

---

## TypeScript configuration / import aliases
- tsconfig.json sets baseUrl and multiple path aliases used throughout the codebase:
  - @src/* → src/*
  - @components/* → src/stories/components/*
  - @internal-components/* → src/internal-components/*
  - @templates/* → src/stories/templates/*
  - @stories/* → src/stories/*
  - @assets/* → src/assets/*
  - @utils/* → src/utils/*
  - @decorators/* → src/decorators/*
  - @scripts/* → src/scripts/*
- vite.config.js mirrors these aliases in the bundler.

Gotcha observed: `tsconfig.scripts.json` contains inline comments (//...) which is invalid JSON and causes the JSON language server errors shown in diagnostics. The file is used by the `ori_build:js` script (tsc -p tsconfig.scripts.json) — Node's tsc accepts comments only in tsconfig (it generally tolerates comments?), but the diagnostics indicate editor JSON parsing errors. Be aware editors/JSON tools may flag it.

---

## Linters & style
- postcss.config.js present (PostCSS config used by build-css.js and possibly other tooling)
- stylelint.config.mjs present (stylelint config found in repo root)
- Prettier is in devDependencies (no explicit script present in package.json)

Commands for linters are not present in package.json; run them manually if needed (e.g., `npx stylelint "src/**/*.css"`).

---

## CI
- GitHub Actions workflow `.github/workflows/chromatic.yml` publishes to Chromatic on push.
  - Workflow runs `npm ci` and Chromatic action using secrets.CHROMATIC_PROJECT_TOKEN and GITHUB_TOKEN.

---

## Storybook specifics and patterns observed
- Storybook framework: `@storybook/html-vite` (stories are mostly framework-agnostic HTML/TS stories).
- preview.ts configures a global theme toolbar and applies `data-theme` attribute to <html>.
- Story sorting is customized heavily (see preview.ts: storySort.order array).
- Global decorator examples (theme toggling) and docs container customizing theme for docs.

---

## Representative code patterns
- CSS files are prefixed `henk-` and organized by tokens/base/atoms/components.
- Scripts in `src/scripts` are small TS modules compiled per-file to generate individual JS assets.
- `liquid-engine.js` registers template filters (asset_url) — suggests the repository is used to build Shopify-compatible snippets or to preview liquid snippets in Storybook.
- Some internal components are JSX/React (`.jsx` files exist in internal-components), but the Storybook config uses `@storybook/html-vite`. The repo mixes small React/JSX modules for internal components and HTML stories.

---

## Testing
- Do not run `npm test` (it always fails by design). No tests are configured. If you need tests, add a test framework and update package.json accordingly.

---

## Important gotchas & notes for agents
- Do not assume there are tests: none exist.
- Do not summarize the chat unless explicitly asked.
- Do not run tests unless explicitly asked.
- Do not run typechecks unless explicitly asked.
- tsconfig.scripts.json contains comments which cause JSON parse diagnostics in some editors; be mindful when editing this file and with JSON-only tools.
- There are two JS build flows:
  - Vite-based flow: `npm run build:wc` (vite build → copy dist/assets → public/assets).
  - Legacy tsc + terser flow: `npm run ori_build:js` (tsc -p tsconfig.scripts.json then terser public/assets/*.js).
  Choose the correct flow depending on which files you change.
- CSS build is bespoke via `build-css.js`. It must be run with NODE_ENV set appropriately (css:dev or css:prod scripts set NODE_ENV inline).
- public/assets contains many built, minified files already; removing/overwriting them may affect Storybook or any static previews. Vite's `build` writes to `dist/assets` by default; `build:wc` copies to public/assets for consumption.

---

## Onboarding checklist for an agent (practical steps)
1. Run `npm ci` to install devDependencies.
2. Run `npm run css:dev` to build CSS for local development (creates assets in public/assets).
3. Run `npm run storybook` to start Storybook at http://localhost:6006.
4. If editing scripts under `src/scripts`, run `npm run watch:js` or `npm run build:wc` after changes.
5. If producing production CSS/JS, run `npm run css:prod` and `npm run build:wc` (or `npm run ori_build:js` if repository expects the legacy flow).
6. If verifying CI: ensure CHROMATIC_PROJECT_TOKEN secret exists for Chromatic publishing; workflow runs `npm ci` and chromaui/action.

---

## Files worth reading for context
- .storybook/main.ts
- .storybook/preview.ts
- package.json
- vite.config.js
- tsconfig.json
- tsconfig.scripts.json
- build-css.js
- src/liquid-engine.js
- public/assets/* (already-built artifacts)
- .github/workflows/chromatic.yml

---

## Missing / not observed
- No unit / integration tests or test framework found (test script is placeholder).
- No documented deployment commands beyond Chromatic workflow.
- No explicit lint/test scripts in package.json (stylelint and prettier exist as dependencies/configs but no npm scripts observed).

---

If you are an automated agent performing edits: follow repository patterns — update both Vite aliases and tsconfig paths together, use the CSS pipeline (build-css.js) to regenerate public CSS, and prefer `build:wc` for bundling scripts into public assets used by Storybook and demos.
