/**
 * Luna generated page
 * Page: ManageUsersPage
 * Route: /manage-users
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
"use client";

import { FigmaScreenDataProvider } from "@/components/luna-figma/useFigmaScreenData";
import { AuthGuard } from "@/lib/auth/AuthGuard";
import { ManageUsersPage } from "@/components/luna-figma/ManageUsersPage";

export default function Page() {
  return (
    <AuthGuard>
      <FigmaScreenDataProvider routePath="manage-users">
        <ManageUsersPage />
      </FigmaScreenDataProvider>
    </AuthGuard>
  );
}
