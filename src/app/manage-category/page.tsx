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
import { AuthGuard } from "@/lib/auth/AuthGuard";
import { ManageCategoryPage } from "@/components/luna-figma/ManageCategoryPage";

export default function Page() {
  return (
    <AuthGuard>
      <FigmaScreenDataProvider routePath="manage-category">
        <ManageCategoryPage />
      </FigmaScreenDataProvider>
    </AuthGuard>
  );
}
