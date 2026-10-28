/**
 * Luna generated page
 * Page: ManageCategoryPage
 * Route: /manage-category
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
import type { Metadata } from "next";
import { FigmaScreenDataProvider } from "@/components/luna-figma/useFigmaScreenData";
import { ManageCategoryPage } from "@/components/luna-figma/ManageCategoryPage";

export const metadata: Metadata = { title: "Manage-category" };

export default function Page() {
  return (
    <div className="w-full flex flex-col">
      <FigmaScreenDataProvider routePath="manage-category">
        <ManageCategoryPage />
      </FigmaScreenDataProvider>
    </div>
  );
}
