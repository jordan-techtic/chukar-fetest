/**
 * Luna generated page
 * Page: ManageCategoryPage (Add Category modal open)
 * Route: /marketing/add-category
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
import type { Metadata } from "next";
import { FigmaScreenDataProvider } from "@/components/luna-figma/useFigmaScreenData";
import { ManageCategoryPage } from "@/components/luna-figma/ManageCategoryPage";
import { OpenAddCategoryOnMount } from "@/components/luna-figma/OpenAddCategoryOnMount";

export const metadata: Metadata = { title: "Add-category" };

export default function Page() {
  return (
    <FigmaScreenDataProvider routePath="marketing/add-category">
      <OpenAddCategoryOnMount />
      <ManageCategoryPage />
    </FigmaScreenDataProvider>
  );
}
