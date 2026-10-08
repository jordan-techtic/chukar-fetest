/**
 * Luna generated page
 * Page: WeekCalendarDefaultPage
 * Route: /calendar
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
"use client";

import { FigmaScreenDataProvider } from "@/components/luna-figma/useFigmaScreenData";
import { WeekCalendarDefaultPage } from "@/components/luna-figma/WeekCalendarDefaultPage";

export default function Page() {
  return (
    <FigmaScreenDataProvider routePath="calendar">
      <WeekCalendarDefaultPage />
    </FigmaScreenDataProvider>
  );
}
