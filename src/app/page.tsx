import type { Metadata } from "next";

import { HomePlaceholder } from "@/components/features/home/HomePlaceholder";
import { AppShell } from "@/components/layout/AppShell";

export const metadata: Metadata = {
  title: "Marketing Content Calendar",
};

export default function HomePage() {
  return (
    <AppShell>
      <HomePlaceholder />
    </AppShell>
  );
}
