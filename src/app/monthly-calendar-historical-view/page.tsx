/**
 * Luna generated page
 * Page: MonthlyCalendarHistoricalPage
 * Route: /monthly-calendar-historical-view
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
"use client";

import { FigmaScreenDataProvider } from "@/components/luna-figma/useFigmaScreenData";
import { MonthlyCalendarHistoricalPage } from "@/components/luna-figma/MonthlyCalendarHistoricalPage";

export default function Page() {
  return (
    <FigmaScreenDataProvider routePath="monthly-calendar-historical-view">
      <MonthlyCalendarHistoricalPage />
    </FigmaScreenDataProvider>
  );
}
