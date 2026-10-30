/** luna-spec-codegen: data-hook helpers */
export function formatCategoryCreatedDate(iso: string | null | undefined): string {
  if (!iso) {
    return "";
  }
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) {
    return iso;
  }
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export function formatHolidayDate(iso: string | null | undefined): string {
  if (!iso) {
    return "";
  }
  const date = new Date(iso.includes("T") ? iso : `${iso}T00:00:00`);
  if (Number.isNaN(date.getTime())) {
    return iso;
  }
  return date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export function isActiveStatus(status: string | null | undefined): boolean {
  if (!status) {
    return true;
  }
  const normalized = status.toLowerCase();
  return normalized === "active" || normalized === "enabled" || normalized === "true";
}
