/**
 * Luna generated page
 * Page: ManageHolidayPage
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
import type { Metadata } from "next";
import { FigmaScreenDataProvider } from "@/components/luna-figma/useFigmaScreenData";
import { ManageHolidayPage } from "@/components/luna-figma/ManageHolidayPage";

export const metadata: Metadata = { title: "Manage-holiday" };

export default function Page() {
  return (
    <div className="w-full flex flex-col">
      <FigmaScreenDataProvider routePath="manage-holiday">
        <ManageHolidayPage />
      </FigmaScreenDataProvider>
    </div>
  );
}
