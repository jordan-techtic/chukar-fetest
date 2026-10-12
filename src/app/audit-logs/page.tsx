/**
 * Luna generated page
 * Page: AuditLogsPage
 * Route: /audit-logs
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
"use client";

import { FigmaScreenDataProvider } from "@/components/luna-figma/useFigmaScreenData";
import { AuditLogsPage } from "@/components/luna-figma/AuditLogsPage";

export default function Page() {
  return (
    <FigmaScreenDataProvider routePath="audit-logs">
      <AuditLogsPage />
    </FigmaScreenDataProvider>
  );
}
