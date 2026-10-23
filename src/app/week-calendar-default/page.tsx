/**
 * Luna generated page
 * Page: WeekCalendarDefaultPage_n_5602_71490
 * Route: /week-calendar-default
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
import type { Metadata } from "next";
import { FigmaScreenDataProvider } from "@/components/luna-figma/useFigmaScreenData";
import { WeekCalendarDefaultPage_n_5602_71490 } from "@/components/luna-figma/WeekCalendarDefaultPage_n_5602_71490";

export const metadata: Metadata = { title: "Week-calendar-default" };

export default function Page() {
  return (
    <FigmaScreenDataProvider routePath="week-calendar-default">
      <WeekCalendarDefaultPage_n_5602_71490 />
    </FigmaScreenDataProvider>
  );
}
