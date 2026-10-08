/**
 * Luna generated page
 * Page: AddCategoryPage
 * Route: /add-category
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
"use client";

import { FigmaScreenDataProvider } from "@/components/luna-figma/useFigmaScreenData";
import { AddCategoryPage } from "@/components/luna-figma/AddCategoryPage";

export default function Page() {
  return (
    <FigmaScreenDataProvider routePath="add-category">
      <AddCategoryPage />
    </FigmaScreenDataProvider>
  );
}
