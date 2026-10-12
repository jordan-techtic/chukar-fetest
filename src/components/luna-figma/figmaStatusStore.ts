/** luna-spec-codegen: support file — off-canvas screen status (sr-only/toast).
 * Loading, error, and empty states stay out of the Figma page flow: they are
 * announced through this store and rendered as an sr-only live region.
 */
export type FigmaScreenStatusSeverity = "idle" | "loading" | "error";

export interface FigmaScreenStatus {
  message: string;
  severity: FigmaScreenStatusSeverity;
}

let status: FigmaScreenStatus = { message: "", severity: "idle" };
let _version = 0;
const listeners = new Set<() => void>();

export function publishScreenStatus(
  message: string,
  severity: FigmaScreenStatusSeverity = "error",
): void {
  if (status.message === message && status.severity === severity) {
    return;
  }
  status = { message, severity };
  _version += 1;
  listeners.forEach((listener) => listener());
}

export function clearScreenStatus(): void {
  publishScreenStatus("", "idle");
}

export function subscribeScreenStatus(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function getScreenStatusSnapshot(): FigmaScreenStatus {
  return status;
}