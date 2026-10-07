"use client";

import { usePathname } from "next/navigation";

import { FigmaScreenPage } from "./FigmaScreenPage";

export function FigmaScreenPageClient({ routePath }: { routePath?: string }) {
  const pathname = usePathname();
  const path =
    routePath ??
    pathname.replace(/^\/+|\/+$/g, "");
  return <FigmaScreenPage routePath={path} />;
}
