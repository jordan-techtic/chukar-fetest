/**
 * Luna generated page
 * Page: WeekCalendarHistoricalPage
 * Route: /week-calendar-historical-view
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
"use client";

import { FigmaScreenDataProvider } from "@/components/luna-figma/useFigmaScreenData";
import { WeekCalendarHistoricalPage } from "@/components/luna-figma/WeekCalendarHistoricalPage";

export default function Page() {
  return (
    <FigmaScreenDataProvider routePath="week-calendar-historical-view">
      <WeekCalendarHistoricalPage />
    </FigmaScreenDataProvider>
  );
}
