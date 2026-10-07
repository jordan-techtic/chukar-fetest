export const UNAUTHORIZED_EVENT = "mcc:unauthorized";

export function dispatchUnauthorizedEvent(): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(UNAUTHORIZED_EVENT));
}
