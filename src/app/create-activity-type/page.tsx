/**
 * Luna generated page
 * Page: CreateActivityTypePage
 * Route: /create-activity-type
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
"use client";

import { FigmaScreenDataProvider } from "@/components/luna-figma/useFigmaScreenData";
import { CreateActivityTypePage } from "@/components/luna-figma/CreateActivityTypePage";

export default function Page() {
  return (
    <FigmaScreenDataProvider routePath="create-activity-type">
      <CreateActivityTypePage />
    </FigmaScreenDataProvider>
  );
}
