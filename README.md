# Marketing Content Calendar

Production-ready Next.js frontend scaffold for the Marketing Content Calendar application.

## Setup

```bash
npm install
cp .env.example .env
```

## Environment

| Variable              | Description                                              |
| --------------------- | -------------------------------------------------------- |
| `NEXT_PUBLIC_API_URL` | Backend API base URL (e.g. `http://174.138.72.184:8989`) |

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
  app/              Next.js App Router pages and route groups
  components/
    ui/             shadcn/ui primitives
    layout/         AppShell, Header, Sidebar
    features/       Feature-specific components
  hooks/            Custom React hooks
  lib/
    api/            HTTP client and API helpers
    auth/           Token storage and auth guard
    utils/          Shared utilities (cn)
  stores/           State management (placeholder)
  styles/           Design tokens and theme provider
  types/            TypeScript type definitions
tests/              Unit tests
```

## Routes

| Route       | Access    | Description                            |
| ----------- | --------- | -------------------------------------- |
| `/`         | Public    | Home placeholder with API health check |
| `/login`    | Public    | Login placeholder (auth group)         |
| `/calendar` | Protected | Calendar placeholder (dashboard group) |
