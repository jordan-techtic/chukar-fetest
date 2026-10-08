/**
 * Luna generated page
 * Page: InviteUserPage
 * Route: /invite-user
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
"use client";

import { FigmaScreenDataProvider } from "@/components/luna-figma/useFigmaScreenData";
import { InviteUserPage } from "@/components/luna-figma/InviteUserPage";

export default function Page() {
  return (
    <FigmaScreenDataProvider routePath="invite-user">
      <InviteUserPage />
    </FigmaScreenDataProvider>
  );
}
