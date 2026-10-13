"use client";

import { usePathname } from "next/navigation";

import { AppShell } from "@/components/layout/AppShell";
import { HomePlaceholder } from "@/components/features/home/HomePlaceholder";
import { NotFoundContent } from "@/components/NotFoundContent";

export default function CatchAllPage() {
  const pathname = usePathname();
  const isRoot = pathname === "/";

  return (
    <AppShell>
      {isRoot ? <HomePlaceholder /> : <NotFoundContent />}
    </AppShell>
  );
}