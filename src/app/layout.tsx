import type { Metadata } from "next";
import type { ReactNode } from "react";

import { ErrorBoundary } from "@/components/ui/ErrorBoundary";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/theme/ThemeProvider";

import "./globals.css";
// Figma design fonts (Inter + Onest) load globally, exactly once, via the
// owned-layout support CSS. Never import figma-fonts.css per page/section.
import "@/components/luna-figma/figma-fonts.css";

export const metadata: Metadata = {
  title: "Marketing Content Calendar",
  description: "Marketing team content calendar application",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="font-onest min-h-screen antialiased">
        <ThemeProvider>
          <ErrorBoundary>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-[var(--radius-6)] focus:bg-card focus:px-3 focus:py-2 focus:shadow-[var(--shadow-drop-shadow)]"
            >
              Skip to main content
            </a>
            {children}
            <Toaster position="top-right" />
          </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  );
}
