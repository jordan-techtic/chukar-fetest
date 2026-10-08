/**
 * Luna generated page
 * Page: WeekCalendarAdvanceFilterPage
 * Route: /week-calendar-advance-filter
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
"use client";

import { FigmaScreenDataProvider } from "@/components/luna-figma/useFigmaScreenData";
import { WeekCalendarAdvanceFilterPage } from "@/components/luna-figma/WeekCalendarAdvanceFilterPage";

export default function Page() {
  return (
    <div className="w-full flex flex-col">
      <FigmaScreenDataProvider routePath="week-calendar-advance-filter">
        <WeekCalendarAdvanceFilterPage />
      </FigmaScreenDataProvider>
    </div>
  );
}
