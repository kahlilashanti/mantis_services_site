# FYC Boilerplate — Cursor starter brief

**Use this file as the first context for a new Cursor session.**  
Goal: stand up a new website from the FYC starter, not from a customized client monorepo like Accrue Partners.

---

## Source of truth

| Item | Value |
|------|--------|
| **Template repo** | `FYC-Labs/app-template-2025-vite-react` (confirm org/name with FYC if renamed) |
| **Stack** | Vite + React 18 + TypeScript + Bootstrap 5 / react-bootstrap + SCSS + Zustand |
| **Package manager** | Yarn 4 |
| **Node** | **22** (prefer **22.21.1** — pin it; floating `22` has bitten CI before) |
| **Shared FYC utils** | `@fyclabs/tools-fyc-react` (e.g. `useEffectAsync`) |
| **Path alias** | `@src` → `src/` |

**Do not** start by forking Accrue Partners or another client monorepo. Those are product apps built *on* the template. Clone the clean template, then build the new site.

---

## First session checklist (do in order)

1. Confirm access to `FYC-Labs/app-template-2025-vite-react` (or current FYC boilerplate URL).
2. Clone into a **new** folder (not inside Accrue):
   ```bash
   git clone git@github.com:FYC-Labs/app-template-2025-vite-react.git <new-project-name>
   cd <new-project-name>
   ```
3. If the template is a monorepo (`frontend/` + `backend/`), work in `frontend/` for a marketing/site-only project unless the brief needs an API.
4. Install and run:
   ```bash
   # from frontend/ if monorepo
   yarn install
   yarn start
   ```
   Default Vite port is often **3000**.
5. Rename project strings: `package.json` name, README title, Footer “Template 2025” / FYC copyright if present, Firebase project ids, env examples.
6. Create a feature branch before product work: `feat/<short-name>`.
7. Ask the human for: site name, pages/routes, design source (Figma/Canva), hosting (Firebase Hosting vs other), and whether a backend is in scope.

---

## Typical layout (template / Accrue-derived shape)

```
frontend/
  src/
    api/                 # API clients + models
    assets/              # images, SVGs
    auth/                # Firebase auth helpers (if used)
    components/
      global/            # shared UI (NavBar, DataTable, Inputs, …)
      views/             # route-level screens
    config/              # theme, env-ish config
    scss/                # Bootstrap overrides, _vars, _custom
    stores/              # Zustand global stores ($auth, $view, …)
    utils/               # logger, auth helpers, etc.
    validation/          # form validators
  public/
  vite.config.ts
  package.json
```

If the template includes `backend/`: Express + (often) Prisma. Only scaffold/use it when the brief needs an API.

---

## Conventions Cursor must follow

Taken from FYC boiler plate rules (`cursor.md` style). Prefer these over inventing new patterns.

### Styling
- Bootstrap + react-bootstrap first; check `components/global/` before building one-offs.
- Spacing via SCSS vars in `_vars.scss` — avoid random hardcoded pixels when vars exist.
- Prefer classes over inline styles.

### Components + helpers
For non-trivial screens, use the `_helpers` pattern:

```
components/views/.../MyPage/
  MyPage.tsx
  _helpers/
    consts.ts      # constants + initial state
    events.ts      # clicks, submits, UI handlers
    resolvers.ts   # fetch + push into state
```

- Main component: **default export**, PascalCase.
- Helpers: **named exports**, camelCase.
- Global state: **Zustand** (`$auth`, `$view`, alerts, etc.).
- Local UI state: **`useState` is fine** for forms, toggles, and component-only UI (real projects use it; don’t invent a “no useState” rule that fights the codebase).
- Async effects: **`useEffectAsync`** from `@fyclabs/tools-fyc-react`.
- Logging: `@src/utils/logger` (`logError`, etc.) — strip `console.log` before merge.
- Forms: validation helpers under `@src/validation/` — no HOC form wrappers.
- Tables: prefer global `DataTable` when the template includes it.

### Vite alias tip
`@fyclabs/tools-fyc-react` may need an explicit resolve in `vite.config.ts` if the package has no clean `main` export (Accrue did this). If `useEffectAsync` import fails, mirror that alias.

### Avoid
- `@ts-nocheck`, blanket `eslint-disable`, `any` without reason
- Duplicating global components
- Copying Accrue Bullhorn / BART / recruiter-client portal code into an unrelated site

---

## Agent instructions for this new project

When the user opens a Cursor chat with this file:

1. **Read this file first**, then inspect the cloned template’s real `README`, `package.json`, and `src/` tree (names may differ slightly from Accrue).
2. **Confirm** whether the task is frontend-only site vs full monorepo.
3. **Do not commit** unless the user explicitly asks.
4. **Do not** pull Accrue business logic, Bullhorn, or Accrue branding into the new site unless they ask to reuse a specific pattern.
5. Prefer small, reviewable steps: clone → run → rename → first route/page → styling tokens → deploy config last.
6. If the template repo URL fails (renamed/private), stop and ask for the correct FYC boilerplate link — don’t invent one from Accrue.

---

## Suggested first product prompts (after clone runs)

Copy/paste one of these once the app boots:

- “Replace the template home page with a single landing page for **[Brand]**: hero, short pitch, one CTA. Keep Bootstrap/FYC patterns.”
- “Add routes for Home, About, Contact using react-router the way this template already does.”
- “Wire Footer and Nav brand name to **[Brand]** and remove Template 2025 placeholder copy.”
- “Set up env for Firebase Hosting only if we need it; otherwise leave deploy until I say so.”

---

## Quick reference commands

```bash
node -v                    # expect v22.x (prefer 22.21.1)
cd frontend && yarn install
yarn start                 # or yarn dev — check package.json scripts
yarn lint
yarn build
```

---

## Note on Accrue Partners

Accrue (`monorepo-AccruePartners-express-react-ts`) **started from** this FYC shape and then diverged hard. Use Accrue only as a **pattern reference** (helpers, Vite alias, SCSS), never as the starter clone for a new website.

---

**Last updated:** 2026-07-16  
**Owner:** paste this file into the new project root (or `docs/`) and `@` it at the start of the Cursor session.
