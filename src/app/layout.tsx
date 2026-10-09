import type { Metadata } from "next";
import { Inter, Noto_Sans, Onest } from "next/font/google";
import type { ReactNode } from "react";

import { ErrorBoundary } from "@/components/ui/ErrorBoundary";
import { Toaster } from "@/components/ui/toast";
import { ThemeProvider } from "@/theme/ThemeProvider";

import "./globals.css";

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "800"],
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Marketing Content Calendar",
  description: "Marketing team content calendar application",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${onest.variable} ${inter.variable} ${notoSans.variable}`}
    >
      <body className={`${onest.className} min-h-screen antialiased`}>
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
