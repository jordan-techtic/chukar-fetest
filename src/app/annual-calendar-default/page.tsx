/**
 * Luna generated page
 * Page: AnnualCalendarDefaultPage
 * Route: /annual-calendar-default
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
"use client";

import { FigmaScreenDataProvider } from "@/components/luna-figma/useFigmaScreenData";
import { AuthGuard } from "@/lib/auth/AuthGuard";
import { AnnualCalendarDefaultPage } from "@/components/luna-figma/AnnualCalendarDefaultPage";

export default function Page() {
  return (
    <AuthGuard>
      <FigmaScreenDataProvider routePath="annual-calendar-default">
        <AnnualCalendarDefaultPage />
      </FigmaScreenDataProvider>
    </AuthGuard>
  );
}
