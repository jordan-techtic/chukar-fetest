const SESSION_RESET_EVENT = "luna:session-reset";

/** Notify UI layers (e.g. Figma read cache) that auth/session was cleared. */
export function notifySessionReset(): void {
  if (typeof window === "undefined") {
    return;
  }
  window.dispatchEvent(new Event(SESSION_RESET_EVENT));
}

export function onSessionReset(handler: () => void): () => void {
  if (typeof window === "undefined") {
    return () => {};
  }
  window.addEventListener(SESSION_RESET_EVENT, handler);
  return () => window.removeEventListener(SESSION_RESET_EVENT, handler);
}
