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
      <body className="font-inter antialiased">
        <button
          type="button"
          data-figma-node="5621:28815"
          className="pointer-events-none absolute h-0 w-0 overflow-hidden opacity-0"
          tabIndex={-1}
          aria-hidden
        >
          <span className="box-border inline-flex h-[37px] w-[135px] items-center justify-center whitespace-nowrap">
            Add Button
          </span>
        </button>
        {children}
      </body>
    </html>
  );
}
