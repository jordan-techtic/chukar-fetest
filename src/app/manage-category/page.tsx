/**
 * Luna generated page
 * Page: ManageCategoryPage
 * Route: /manage-category
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
"use client";

import { FigmaScreenDataProvider } from "@/components/luna-figma/useFigmaScreenData";
import { ManageCategoryPage } from "@/components/luna-figma/ManageCategoryPage";

export default function Page() {
  return (
    <FigmaScreenDataProvider routePath="manage-category">
      <ManageCategoryPage />
    </FigmaScreenDataProvider>
  );
}
