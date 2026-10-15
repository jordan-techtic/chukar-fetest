/**
 * Luna generated page
 * Page: FigmaRoutePending
 * Route: /marketing-team-member-add-category
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function Page() {
  redirect("/manage-holiday");
}
