/**
 * Luna generated page
 * Page: ManageHolidayPage (Add Holiday modal open)
 * Route: /marketing-calendar/add-holiday
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
import type { Metadata } from "next";
import { FigmaScreenDataProvider } from "@/components/luna-figma/useFigmaScreenData";
import { ManageHolidayPage } from "@/components/luna-figma/ManageHolidayPage";
import { OpenAddHolidayOnMount } from "@/components/luna-figma/OpenAddHolidayOnMount";

export const metadata: Metadata = { title: "Add-holiday" };

export default function Page() {
  return (
    <FigmaScreenDataProvider routePath="marketing-calendar/add-holiday">
      <OpenAddHolidayOnMount />
      <ManageHolidayPage />
    </FigmaScreenDataProvider>
  );
}
