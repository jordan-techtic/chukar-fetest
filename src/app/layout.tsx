import type { Metadata } from "next";

import { AuthSessionProvider } from "@/components/providers/auth-session-provider";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/styles/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marketing Content Calendar",
  description: "Marketing Content Calendar application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- Figma spec requires Google Fonts link */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600;700;800&family=Noto+Sans:wght@400&family=Inter:wght@400;500;600;800&display=swap"
        />
      </head>
      <body className="min-h-full font-onest antialiased">
        <ThemeProvider>
          <AuthSessionProvider>
            {children}
            <Toaster position="top-right" />
          </AuthSessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
