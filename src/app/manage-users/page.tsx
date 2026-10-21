/**
 * Luna generated page
 * Page: ManageUsersPage
 * Route: /manage-users
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
import type { Metadata } from "next";
import { FigmaScreenDataProvider } from "@/components/luna-figma/useFigmaScreenData";
import { ManageUsersPage } from "@/components/luna-figma/ManageUsersPage";

export const metadata: Metadata = { title: "Manage-users" };

export default function Page() {
  return (
    <FigmaScreenDataProvider routePath="manage-users">
      <ManageUsersPage />
    </FigmaScreenDataProvider>
  );
}
