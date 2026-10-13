/**
 * Luna generated page
 * Page: MyProfilePage
 * Route: /my-profile
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
"use client";

import { FigmaScreenDataProvider } from "@/components/luna-figma/useFigmaScreenData";
import { AuthGuard } from "@/lib/auth/AuthGuard";
import { MyProfilePage } from "@/components/luna-figma/MyProfilePage";

export default function Page() {
  return (
    <AuthGuard>
      <FigmaScreenDataProvider routePath="my-profile">
        <MyProfilePage />
      </FigmaScreenDataProvider>
    </AuthGuard>
  );
}
