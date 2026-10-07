import type { Metadata } from "next";
import { Inter, Onest } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--font-inter",
  display: "swap",
});

const onest = Onest({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-onest",
  display: "swap",
});

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
    <html lang="en" className={`${inter.variable} ${onest.variable}`}>
      <body className="font-inter antialiased">{children}</body>
    </html>
  );
}
