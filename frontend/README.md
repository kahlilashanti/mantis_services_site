# Mantis Services

A modern web application built with Vite, React 18, TypeScript, and Bootstrap 5.

## Stack

- **Vite** - Fast build tool and dev server
- **React 18** - UI library
- **TypeScript** - Type safety
- **Bootstrap 5** - CSS framework
- **react-bootstrap** - Bootstrap components for React
- **Zustand** - State management
- **React Router** - Routing
- **SCSS** - Styling with Bootstrap customization
- **Yarn 4** - Package manager

## Prerequisites

- Node.js 22.x (preferably 22.21.1)
- Yarn 4

## Getting Started

1. Install dependencies:
   ```bash
   yarn install
   ```

2. Start the development server:
   ```bash
   yarn start
   # or
   yarn dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `yarn start` / `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build
- `yarn lint` - Run ESLint

## Project Structure

```
src/
  api/              # API clients and models
  assets/           # Images, SVGs, static files
  auth/             # Authentication helpers
  components/
    global/         # Shared UI components
    views/          # Route-level components
  config/           # App configuration
  scss/             # SCSS styles and Bootstrap overrides
  stores/           # Zustand state stores
  utils/            # Utility functions
  validation/       # Form validators
```

## Path Alias

The project uses `@src` as an alias to the `src/` directory:

```typescript
import Home from '@src/components/views/Home/Home'
```

## Styling

Bootstrap 5 is configured with custom SCSS variables in `src/scss/_vars.scss`. Import custom styles in `src/scss/_custom.scss`.

## License

Private
