/**
 * Luna generated page
 * Page: FigmaRoutePending
 * Route: /marketing-team-member-manage-activity
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function Page() {
  // Pending screens are 404 in production and never indexed.
  if (process.env.NODE_ENV === "production") {
    notFound();
  }
  return (
    <main
      data-figma-route-pending="true"
      data-figma-route="marketing-team-member-manage-activity"
      className="flex min-h-screen flex-col items-center justify-center gap-2 p-6 text-center"
    >
      <h1 className="text-xl font-semibold">Marketing team member manage activity</h1>
      <p className="text-sm text-muted-foreground">Not yet implemented.</p>
    </main>
  );
}
