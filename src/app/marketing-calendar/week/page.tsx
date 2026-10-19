/**
 * Luna generated page
 * Page: WeekCalendarDefaultPage
 * Route: /marketing-calendar/week
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
import type { Metadata } from "next";
import { FigmaScreenDataProvider } from "@/components/luna-figma/useFigmaScreenData";
import { WeekCalendarDefaultPage } from "@/components/luna-figma/WeekCalendarDefaultPage";

export const metadata: Metadata = { title: "Week-calendar-default" };

export default function Page() {
  return (
    <FigmaScreenDataProvider routePath="marketing-calendar/week">
      <WeekCalendarDefaultPage />
    </FigmaScreenDataProvider>
  );
}
