/**
 * Luna generated page
 * Page: ManageHolidayPage
 * Route: /manage-holiday
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
"use client";

import { FigmaScreenDataProvider } from "@/components/luna-figma/useFigmaScreenData";
import { ManageHolidayPage } from "@/components/luna-figma/ManageHolidayPage";

export default function Page() {
  return (
    <FigmaScreenDataProvider routePath="manage-holiday">
      <ManageHolidayPage />
    </FigmaScreenDataProvider>
  );
}
