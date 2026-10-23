/** ISO date (YYYY-MM-DD) for Monday of the week containing `date`. */
export function mondayIsoWeekStart(date: Date = new Date()): string {
  const d = new Date(date);
  const day = d.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  d.setDate(d.getDate() + diff);
  return d.toISOString().slice(0, 10);
}

export function parseMondayWeekStartId(id: string): Date | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(id)) {
    return null;
  }
  const parsed = new Date(`${id}T00:00:00`);
  if (Number.isNaN(parsed.getTime()) || parsed.getDay() !== 1) {
    return null;
  }
  return parsed;
}

export function weekRangeFromMondayStart(monday: Date): { start_date: string; end_date: string } {
  const start = monday.toISOString().slice(0, 10);
  const endDate = new Date(monday);
  endDate.setDate(endDate.getDate() + 6);
  return { start_date: start, end_date: endDate.toISOString().slice(0, 10) };
}
