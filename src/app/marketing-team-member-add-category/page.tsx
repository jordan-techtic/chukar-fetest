/**
 * Luna generated page
 * Route: /marketing-team-member-add-category
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AppShell } from "@/components/layout/AppShell";

export const metadata: Metadata = {
  title: "Add category",
  robots: { index: false, follow: false },
};

export default function Page() {
  if (process.env.NODE_ENV === "production") {
    notFound();
  }
  return (
    <AppShell>
      <main
        data-figma-route="marketing-team-member-add-category"
        className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-2 p-6 text-center"
      >
        <h1 className="font-onest text-xl font-semibold text-text-body-231f20">Add category</h1>
        <p className="font-onest text-sm text-muted-foreground">
          Marketing team member category creation screen (Figma route).
        </p>
      </main>
    </AppShell>
  );
}
