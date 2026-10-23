/**
 * Luna generated page
 * Page: AnnualCalendarDefaultPage_n_5645_60757
 * Route: /marketing-calendar/annual
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
import type { Metadata } from "next";
import { FigmaScreenDataProvider } from "@/components/luna-figma/useFigmaScreenData";
import { AnnualCalendarDefaultPage_n_5645_60757 } from "@/components/luna-figma/AnnualCalendarDefaultPage_n_5645_60757";

export const metadata: Metadata = { title: "Annual-calendar-default" };

export default function Page() {
  return (
    <FigmaScreenDataProvider routePath="marketing-calendar/annual">
      <AnnualCalendarDefaultPage_n_5645_60757 />
    </FigmaScreenDataProvider>
  );
}
