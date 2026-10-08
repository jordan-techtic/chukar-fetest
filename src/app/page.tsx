/**
 * Luna generated page
 * Page: MyProfilePage
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
"use client";

import { FigmaScreenDataProvider } from "@/components/luna-figma/useFigmaScreenData";
import { MyProfilePage } from "@/components/luna-figma/MyProfilePage";

export default function Page() {
  return (
    <FigmaScreenDataProvider routePath="my-profile">
      <MyProfilePage />
    </FigmaScreenDataProvider>
  );
}
