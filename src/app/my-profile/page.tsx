/**
 * Luna generated page
 * Page: MyProfilePage
 * Route: /my-profile
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
import type { Metadata } from "next";
import { FigmaScreenDataProvider } from "@/components/luna-figma/useFigmaScreenData";
import { MyProfilePage } from "@/components/luna-figma/MyProfilePage";

export const metadata: Metadata = { title: "My-profile" };

export default function Page() {
  return (
    <FigmaScreenDataProvider routePath="my-profile">
      <MyProfilePage />
    </FigmaScreenDataProvider>
  );
}
