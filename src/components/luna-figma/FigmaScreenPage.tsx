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
import { MyProfilePage } from "./MyProfilePage";
import { WeekCalendarDefaultPage } from "./WeekCalendarDefaultPage";

const routes: Record<string, () => ReactElement> = {
  "": MyProfilePage,
  "my-profile": MyProfilePage,
  calendar: WeekCalendarDefaultPage,
  "week-calendar-default": WeekCalendarDefaultPage,
};

// Project pages linked from this design whose screens are not built yet.
const PENDING_ROUTES: ReadonlySet<string> = new Set(["marketing-team-member-my-profile"]);

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

function normalizePath(pathname: string): string {
  return pathname.replace(/^\/+|\/+$/g, "");
}

export function FigmaScreenPage({ routePath }: { routePath?: string }) {
  const path =
    routePath ??
    (typeof window !== "undefined" ? normalizePath(window.location.pathname) : "");
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
