"use client";

/**
 * CF-8 ACCEPTED ARCHITECTURE (Tailwind + CSS variables)
 *
 * The original brief listed styled-components as an option; this scaffold formally
 * adopts Tailwind utilities with Sofia tokens in src/app/globals.css (:root) instead.
 * Token values are mirrored in src/styles/theme.ts for tests and tooling.
 *
 * When adding or changing a token, update both globals.css and theme.ts together.
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return children;
}
