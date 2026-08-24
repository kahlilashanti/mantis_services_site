# Mantis Services

Modern web application built with the FYC boilerplate stack.

## Project Structure

```
mantis_services/
  frontend/         # Vite + React + TypeScript frontend application
  docs/             # Brand and project documentation
  FYC_BOILERPLATE_STARTER.md  # Boilerplate setup guide
```

## Quick Start

```bash
cd frontend
corepack enable
yarn install
yarn start
```

Open [http://localhost:3000](http://localhost:3000).

See `frontend/README.md` for detailed documentation.

## Pulling Website 2.0 (`feature/website-2.0`)

This branch is the active **Mantis Labs Website 2.0** build: cinematic hero reel, updated brand copy, work grid with video tiles, and mobile nav fixes.

```bash
# Clone (first time)
git clone https://github.com/kahlilashanti/mantis_services_site.git
cd mantis_services_site

# Or update an existing clone
git fetch origin
git checkout feature/website-2.0
git pull origin feature/website-2.0

# Run locally
cd frontend
corepack enable
yarn install
yarn start
```

**Requirements:** Node.js 22.x, Yarn 4 (via Corepack).

**What's included in this branch:**
- Hero showreel (`frontend/public/videos/hero-reel-*.mp4`) and poster images
- Work tile clips for Burnley FC and Chicago Cubs (`frontend/public/videos/work/`)
- Site content and media paths in `frontend/src/config/mantis.ts`
- Brand guide in `docs/MANTIS_LABS_BRAND_GUIDE.md`

**Notes for collaborators:**
- Large video assets are committed in this branch; first pull may take a minute.
- Place additional work clips in `frontend/public/videos/work/` and wire them in `mantis.ts`.
- Raw source reels stay out of git: use `frontend/video-sources/` (gitignored).
- Cursor local context (`.cursor/context/`, `*.local.mdc`) is gitignored and not required to run the site.

**Verify after pull:**

```bash
cd frontend
yarn build
```

## Tech Stack

- Vite + React 18 + TypeScript
- Bootstrap 5 + react-bootstrap
- Zustand state management
- React Router
- SCSS styling
- Yarn 4

## Node Version

This project requires Node.js 22.x (preferably 22.21.1)
