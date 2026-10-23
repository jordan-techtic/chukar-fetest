/** Week-calendar-default (5602:71490) query params for GET activities. */

function formatDateLocal(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

/** Monday-start week containing the first day of the given month. */
export function weekActivitiesQueryParams(
  year: number,
  month: number,
): Record<string, string | number> {
  const first = new Date(year, month - 1, 1);
  const weekday = first.getDay();
  const mondayOffset = weekday === 0 ? -6 : 1 - weekday;
  const monday = new Date(first);
  monday.setDate(first.getDate() + mondayOffset);
  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);
  return {
    year: String(year),
    month: String(month),
    date_from: formatDateLocal(monday),
    date_to: formatDateLocal(sunday),
    page: 1,
    limit: 100,
  };
}
