/**
 * Luna generated page
 * Page: FigmaScreenPage
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
import type { ReactElement } from "react";
import { FigmaScreenDataProvider } from "./useFigmaScreenData";
import { CreateActivityPopupPage } from "./CreateActivityPopupPage";
import { WeekCalendarHistoricalPage } from "./WeekCalendarHistoricalPage";
import { AnnualCalendarDefaultPage } from "./AnnualCalendarDefaultPage";
import { ManageActivityPage } from "./ManageActivityPage";

const routes: Record<string, () => ReactElement> = {
  "": CreateActivityPopupPage,
  "create-activity-popup": CreateActivityPopupPage,
  "week-calendar-historical-view": WeekCalendarHistoricalPage,
  "annual-calendar-default": AnnualCalendarDefaultPage,
  "manage-activity": ManageActivityPage
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

export function FigmaScreenPage() {
  const path = window.location.pathname.replace(/^\/+|\/+$/g, "");
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
