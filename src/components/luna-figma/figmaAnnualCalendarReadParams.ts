/** Annual calendar (5645:60757) query params for GET /calendar (full year when month omitted). */

export function annualCalendarQueryParams(year: number): Record<string, string> {
  return { year: String(year) };
}
