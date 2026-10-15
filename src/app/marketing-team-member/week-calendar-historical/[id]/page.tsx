/**
 * Luna generated page
 * Page: FigmaRouteAlias
 * Route: /marketing-team-member/week-calendar-historical/:id
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
import type { Metadata } from "next";
import { AppShell } from "@/components/layout/AppShell";
import { FigmaScreenDataProvider } from "@/components/luna-figma/useFigmaScreenData";
import { WeekCalendarHistoricalPage } from "@/components/luna-figma/WeekCalendarHistoricalPage";

export const metadata: Metadata = { title: "Week calendar historical" };

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: PageProps) {
  await params;
  return (
    <AppShell>
      <FigmaScreenDataProvider routePath="week-calendar-historical-view">
        <WeekCalendarHistoricalPage />
      </FigmaScreenDataProvider>
    </AppShell>
  );
}
