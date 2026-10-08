/**
 * Luna generated page
 * Page: FigmaScreenPage
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
"use client";

import type { ReactElement } from "react";
import { FigmaScreenDataProvider } from "./useFigmaScreenData";
import { AddCategoryPage } from "./AddCategoryPage";
import { AddHolidayPage } from "./AddHolidayPage";
import { AuditLogsPage } from "./AuditLogsPage";
import { CreateActivityPopupPage } from "./CreateActivityPopupPage";
import { InviteUserPage } from "./InviteUserPage";
import { ManageActivityPage } from "./ManageActivityPage";
import { ManageCategoryPage } from "./ManageCategoryPage";
import { ManageHolidayPage } from "./ManageHolidayPage";
import { ManageUsersPage } from "./ManageUsersPage";
import { MyProfilePage } from "./MyProfilePage";
import { WeekCalendarAdvanceFilterPage } from "./WeekCalendarAdvanceFilterPage";
import { WeekCalendarDefaultPage } from "./WeekCalendarDefaultPage";
import { WeekCalendarHistoricalPage } from "./WeekCalendarHistoricalPage";
import { AnnualCalendarDefaultPage } from "./AnnualCalendarDefaultPage";

const routes: Record<string, () => ReactElement> = {
  "": AddHolidayPage,
  "add-holiday": AddHolidayPage,
  "manage-holiday": ManageHolidayPage,
  "week-calendar-advance-filter": WeekCalendarAdvanceFilterPage,
  "manage-users": ManageUsersPage,
  "invite-user": InviteUserPage,
  "audit-logs": AuditLogsPage,
  "add-category": AddCategoryPage,
  "manage-category": ManageCategoryPage,
  "create-activity-popup": CreateActivityPopupPage,
  calendar: WeekCalendarDefaultPage,
  "week-calendar-default": WeekCalendarDefaultPage,
  "week-calendar-historical-view": WeekCalendarHistoricalPage,
  "annual-calendar-default": AnnualCalendarDefaultPage,
  "manage-activity": ManageActivityPage,
  "my-profile": MyProfilePage,
};

// Project pages linked from this design whose screens are not built yet.
const PENDING_ROUTES: ReadonlySet<string> = new Set([]);

function FigmaRouteNotFound({ path }: { path: string }) {
  const pending = PENDING_ROUTES.has(path);
  return (
    <main
      role="alert"
      data-figma-route-error={pending ? "pending" : "not_found"}
      data-figma-route={path}
      className="flex min-h-screen items-center justify-center p-6 text-center"
    >
      <p>
        {pending
          ? `/${path} is a page that has not been built yet.`
          : `No page exists at /${path}.`}
      </p>
    </main>
  );
}

export function FigmaScreenPage({ routePath }: { routePath?: string } = {}) {
  const path =
    routePath ??
    (typeof window !== "undefined"
      ? window.location.pathname.replace(/^\/+|\/+$/g, "")
      : "");
  const Screen = routes[path];
  if (!Screen) {
    return <FigmaRouteNotFound path={path} />;
  }
  return (
    <FigmaScreenDataProvider routePath={path}>
      <Screen />
    </FigmaScreenDataProvider>
  );
}
