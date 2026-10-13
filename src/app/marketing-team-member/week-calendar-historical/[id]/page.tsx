/**
 * Luna generated page
 * Page: WeekCalendarHistoricalPage
 * Route: /marketing-team-member/week-calendar-historical/[id]
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
"use client";

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

import { FigmaScreenDataProvider } from "@/components/luna-figma/useFigmaScreenData";
import { AuthGuard } from "@/lib/auth/AuthGuard";
import { WeekCalendarHistoricalPage } from "@/components/luna-figma/WeekCalendarHistoricalPage";

/**
 * CF-123: the :id route param is the calendar week (1–53). It is validated
 * and passed to the screen provider, which scopes the calendar read to the
 * week's Monday-start date range and stamps date_from/date_to on the
 * export-calendar request body. Out-of-range ids redirect to the unscoped
 * historical view.
 */
export default function Page() {
  const params = useParams<{ id?: string | string[] }>();
  const router = useRouter();
  const rawId = Array.isArray(params?.id) ? params?.id[0] : params?.id;
  const week = typeof rawId === "string" ? Number.parseInt(rawId, 10) : Number.NaN;
  const valid = Number.isInteger(week) && week >= 1 && week <= 53;

  useEffect(() => {
    if (!valid) {
      router.replace("/week-calendar-historical-view");
    }
  }, [valid, router]);

  if (!valid) {
    return null;
  }

  return (
    <AuthGuard>
      <FigmaScreenDataProvider routePath="week-calendar-historical-view" weekNumber={week}>
        <WeekCalendarHistoricalPage />
      </FigmaScreenDataProvider>
    </AuthGuard>
  );
}