import type { Metadata } from "next";
import type { ReactNode } from "react";

import { ErrorBoundary } from "@/components/ui/ErrorBoundary";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/theme/ThemeProvider";

import "./globals.css";

export const metadata: Metadata = {
  title: "Marketing Content Calendar",
  description: "Marketing team content calendar application",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600;700;800&family=Noto+Sans:wght@400&family=Inter:wght@400;500;600;800&display=swap"
        />
      </head>
      <body
        className="min-h-screen antialiased font-onest"
        style={{ fontFamily: "'Onest', sans-serif" }}
      >
        <ThemeProvider>
          <ErrorBoundary>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-[var(--radius-6)] focus:bg-card focus:px-3 focus:py-2 focus:shadow-[var(--shadow-drop-shadow)]"
            >
              Skip to main content
            </a>
            {children}
            <Toaster position="top-right" richColors closeButton />
          </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  );
}
