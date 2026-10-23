/** Manage-users (5359:17424) query params for GET /api/v1/users. */

import type { FigmaFieldValues } from "./figmaFieldContract";

export function manageUsersListQueryParams(
  values: FigmaFieldValues,
): Record<string, string> | undefined {
  const params: Record<string, string> = {};
  const search = values["search-input"];
  if (typeof search === "string" && search.trim() !== "") {
    params.search = search.trim();
  }
  const status = values["status-filter"];
  if (typeof status === "string" && status.trim() !== "") {
    params.status = status.trim();
  }
  const role = values["role-filter"];
  if (typeof role === "string" && role.trim() !== "") {
    params.role = role.trim();
  }
  return Object.keys(params).length > 0 ? params : undefined;
}
