/**
 * Luna generated page
 * Page: AnnualCalendarDefaultPage_n_5524_33463
 * Route: /annual-calendar-default-1
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
import type { Metadata } from "next";
import { FigmaScreenDataProvider } from "@/components/luna-figma/useFigmaScreenData";
import { AnnualCalendarDefaultPage_n_5524_33463 } from "@/components/luna-figma/AnnualCalendarDefaultPage_n_5524_33463";

export const metadata: Metadata = { title: "Annual-calendar-default" };

export default function Page() {
  return (
    <FigmaScreenDataProvider routePath="annual-calendar-default-1">
      <AnnualCalendarDefaultPage_n_5524_33463 />
    </FigmaScreenDataProvider>
  );
}
