/**
 * Luna generated page
 * Page: AddHolidayPage
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
"use client";

import { FigmaScreenDataProvider } from "@/components/luna-figma/useFigmaScreenData";
import { AddHolidayPage } from "@/components/luna-figma/AddHolidayPage";

export default function Page() {
  return (
    <FigmaScreenDataProvider routePath="add-holiday">
      <AddHolidayPage />
    </FigmaScreenDataProvider>
  );
}
