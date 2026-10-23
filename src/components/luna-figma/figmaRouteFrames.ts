/** Route path (as passed to FigmaScreenDataProvider) → root Figma frame id. */
export const ROUTE_PATH_TO_FRAME_ID: Readonly<Record<string, string>> = {
  "week-calendar-historical-view": "5584:26945",
  "week-calendar-default": "5602:71490",
  "week-calendar-default-1": "5602:62165",
  "marketing-calendar/annual": "5645:60757",
  "annual-calendar-default": "5645:60757",
  "monthly-calendar-historical-view": "5645:33753",
  "manage-users": "5359:17424",
  "annual-calendar-default-1": "5524:33463",
};

export function frameIdForRoutePath(routePath: string | undefined): string {
  return ROUTE_PATH_TO_FRAME_ID[routePath ?? ""] ?? "";
}
