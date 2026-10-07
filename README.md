# Marketing Content Calendar

Plain Next.js (App Router) frontend project.

## Stack

- Next.js 16 (App Router) + React 19
- TypeScript
- Tailwind CSS 4
- ESLint + Prettier
- Jest + Testing Library

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

| Variable                           | Description                                                  |
| ---------------------------------- | ------------------------------------------------------------ |
| `LUNA_VALIDATION_API_PROXY_TARGET` | Optional target for the `/api/*` rewrite in `next.config.js` |

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
    layout.tsx    Root layout
    page.tsx      Home page
    globals.css   Tailwind entry
```
