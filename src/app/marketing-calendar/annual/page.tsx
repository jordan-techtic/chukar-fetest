/**
 * Luna generated page
 * Page: AnnualCalendarDefaultPage
 * Route: /marketing-calendar/annual
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
import type { Metadata } from "next";
import { FigmaScreenDataProvider } from "@/components/luna-figma/useFigmaScreenData";
import { AnnualCalendarDefaultPage } from "@/components/luna-figma/AnnualCalendarDefaultPage";

export const metadata: Metadata = { title: "Annual-calendar-default" };

export default function Page() {
  return (
    <FigmaScreenDataProvider routePath="marketing-calendar/annual">
      <AnnualCalendarDefaultPage />
    </FigmaScreenDataProvider>
  );
}
