/**
 * Luna generated page
 * Page: MonthlyCalendarHistoricalPage
 * Route: /monthly-calendar-historical-view
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
import type { Metadata } from "next";
import { FigmaScreenDataProvider } from "@/components/luna-figma/useFigmaScreenData";
import { MonthlyCalendarHistoricalPage } from "@/components/luna-figma/MonthlyCalendarHistoricalPage";

export const metadata: Metadata = { title: "Monthly-calendar-Historical view" };

export default function Page() {
  return (
    <FigmaScreenDataProvider routePath="monthly-calendar-historical-view">
      <MonthlyCalendarHistoricalPage />
    </FigmaScreenDataProvider>
  );
}
