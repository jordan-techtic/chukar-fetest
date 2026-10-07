"use client";

/**
 * Intentional Tailwind + CSS-variable architecture (not styled-components).
 *
 * Sofia tokens live in src/app/globals.css (:root) and are mirrored in
 * src/styles/theme.ts for tests and tooling. When adding or changing a token,
 * update both globals.css and theme.ts so values stay synchronized.
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return children;
}
