/**
 * Luna generated page
 * Page: WeekCalendarDefaultPage_n_5602_62165
 * Route: /week-calendar-default-1
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
import type { Metadata } from "next";

import { AppShell } from "@/components/layout/AppShell";
import { FigmaScreenDataProvider } from "@/components/luna-figma/useFigmaScreenData";
import { WeekCalendarDefaultPage_n_5602_62165 } from "@/components/luna-figma/WeekCalendarDefaultPage_n_5602_62165";

export const metadata: Metadata = { title: "Week-calendar-default" };

export default function Page() {
  return (
    <AppShell>
      <div className="w-full flex flex-col">
        <FigmaScreenDataProvider routePath="week-calendar-default-1">
          <WeekCalendarDefaultPage_n_5602_62165 />
        </FigmaScreenDataProvider>
      </div>
    </AppShell>
  );
}
