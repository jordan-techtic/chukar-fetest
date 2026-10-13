/**
 * Luna generated page
 * Page: ManageHolidayPage
 * Route: /manage-holiday
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
"use client";

import { FigmaScreenDataProvider } from "@/components/luna-figma/useFigmaScreenData";
import { AuthGuard } from "@/lib/auth/AuthGuard";
import { ManageHolidayPage } from "@/components/luna-figma/ManageHolidayPage";

export default function Page() {
  return (
    <AuthGuard>
      <FigmaScreenDataProvider routePath="manage-holiday">
        <ManageHolidayPage />
      </FigmaScreenDataProvider>
    </AuthGuard>
  );
}
