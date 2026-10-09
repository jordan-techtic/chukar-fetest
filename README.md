# Marketing Content Calendar

Plain Next.js (App Router) frontend project.

## Stack

- Next.js 16 (App Router) + React 19
- TypeScript (strict)
- Tailwind CSS 4 + shadcn/ui (Radix)
- styled-components theme provider + Sofia CSS tokens
- react-router-dom client route shell
- Axios API client with Bearer auth interceptor
- ESLint + Prettier + Jest

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

| Variable                           | Description                                                  |
| ---------------------------------- | ------------------------------------------------------------ |
| `NEXT_PUBLIC_API_URL`              | Optional absolute API base; leave empty to use `/api` rewrite |
| `LUNA_VALIDATION_API_PROXY_TARGET` | Backend target for `/api/*` rewrites in `next.config.js`     |

## Scripts

| Command                | Description               |
| ---------------------- | ------------------------- |
| `npm run dev`          | Start development server  |
| `npm run build`        | Production build          |
| `npm run start`        | Start production server   |
| `npm run lint`         | Run ESLint                |
| `npm run format`       | Format with Prettier      |
| `npm run format:check` | Check Prettier formatting |
| `npm run test`         | Run Jest unit tests       |

## Project Structure

```
src/
  app/
    [[...slug]]/page.tsx   Client router entry (Home at /)
    root-router.tsx        react-router-dom routes
    layout.tsx
    globals.css
    not-found.tsx
    (auth)/
    (dashboard)/
    api/
  components/
    ui/                    shadcn primitives
    layout/                AppShell, Header, Sidebar
    features/
  hooks/
  lib/
    api/
    auth/
    utils/
  stores/
  theme/                   tokens.css, ThemeProvider
  types/
tests/
```

The placeholder **Home** route is `/`, rendered by `RootRouter` inside the App Router catch-all page (Next.js cannot combine `page.tsx` and `[[...slug]]` at `/`).
