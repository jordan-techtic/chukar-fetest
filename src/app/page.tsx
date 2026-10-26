/**
 * Luna generated page
 * Page: WeekCalendarHistoricalPage
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
import type { Metadata } from "next";
import { FigmaScreenDataProvider } from "@/components/luna-figma/useFigmaScreenData";
import { WeekCalendarHistoricalPage } from "@/components/luna-figma/WeekCalendarHistoricalPage";

export const metadata: Metadata = { title: "Week-calendar-Historical view" };

export default function Page() {
  return (
    <FigmaScreenDataProvider routePath="">
      <WeekCalendarHistoricalPage />
    </FigmaScreenDataProvider>
  );
}
