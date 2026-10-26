/**
 * Luna generated page
 * Page: ManageActivityPage
 * Route: /manage-activity
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
import type { Metadata } from "next";
import { FigmaScreenDataProvider } from "@/components/luna-figma/useFigmaScreenData";
import { ManageActivityPage } from "@/components/luna-figma/ManageActivityPage";

export const metadata: Metadata = { title: "Manage-activity" };

export default function Page() {
  return (
    <FigmaScreenDataProvider routePath="manage-activity">
      <ManageActivityPage />
    </FigmaScreenDataProvider>
  );
}
