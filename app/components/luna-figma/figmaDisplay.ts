/** luna-spec-codegen: owned-layout */
// Figma display nodes bound to GET response fields (Luna display contract).
// The data hook calls publishReadPayload(method, path, body) after every read;
// bound copy then renders the response value and cards past the response
// array length are hidden. Before a response arrives the Figma copy shows.
import { useSyncExternalStore } from "react";

export type FigmaDisplayPathPart = string | number;

export interface FigmaDisplayBinding {
  readonly nodeId: string;
  readonly frameId: string;
  readonly operation: string;
  readonly responseUnwrap: string | null;
  readonly path: readonly FigmaDisplayPathPart[];
  readonly kind: "text" | "item";
  readonly valueType: "string" | "number" | "date" | null;
  readonly format: string | null;
  readonly evidence: string;
}

const ACTIVITIES_LIST_OP = "GET /api/v1/marketing-team-member/activities";
const CALENDAR_OP = "GET /api/v1/marketing-team-member/calendar";
const METRICS_OP = "GET /api/v1/marketing-team-member/performance-metrics";

const MANAGE_ACTIVITY_FRAME = "5359:17106";
const WEEK_CALENDAR_HISTORICAL_FRAME = "5584:26945";
const ANNUAL_CALENDAR_FRAME = "5645:60757";

function itemBinding(
  nodeId: string,
  frameId: string,
  operation: string,
  path: readonly FigmaDisplayPathPart[],
): FigmaDisplayBinding {
  return {
    nodeId,
    frameId,
    operation,
    responseUnwrap: "data",
    path,
    kind: "item",
    valueType: null,
    format: null,
    evidence: "explicit_binding",
  };
}

/** data-figma-node → the response field it renders. */
export const FIGMA_DISPLAY_BINDINGS: Readonly<Record<string, FigmaDisplayBinding>> = {
  "5359:17170": itemBinding("5359:17170", MANAGE_ACTIVITY_FRAME, ACTIVITIES_LIST_OP, ["items", 0]),
  "5359:17187": itemBinding("5359:17187", MANAGE_ACTIVITY_FRAME, ACTIVITIES_LIST_OP, ["items", 1]),
  "5359:17204": itemBinding("5359:17204", MANAGE_ACTIVITY_FRAME, ACTIVITIES_LIST_OP, ["items", 2]),
  "5359:17218": itemBinding("5359:17218", MANAGE_ACTIVITY_FRAME, ACTIVITIES_LIST_OP, ["items", 3]),
  "5359:17235": itemBinding("5359:17235", MANAGE_ACTIVITY_FRAME, ACTIVITIES_LIST_OP, ["items", 4]),
  "5359:17252": itemBinding("5359:17252", MANAGE_ACTIVITY_FRAME, ACTIVITIES_LIST_OP, ["items", 5]),
  "I5589:50622;5556:77452": itemBinding("I5589:50622;5556:77452", WEEK_CALENDAR_HISTORICAL_FRAME, CALENDAR_OP, ["activities", 0]),
  "I5589:50622;5589:48811": itemBinding("I5589:50622;5589:48811", WEEK_CALENDAR_HISTORICAL_FRAME, CALENDAR_OP, ["activities", 1]),
  "I5589:50622;5589:48828": itemBinding("I5589:50622;5589:48828", WEEK_CALENDAR_HISTORICAL_FRAME, CALENDAR_OP, ["activities", 2]),
  "I5645:60760;5589:50622;5556:77452": itemBinding("I5645:60760;5589:50622;5556:77452", ANNUAL_CALENDAR_FRAME, CALENDAR_OP, ["activities", 0]),
  "I5645:60760;5589:50622;5589:48811": itemBinding("I5645:60760;5589:50622;5589:48811", ANNUAL_CALENDAR_FRAME, CALENDAR_OP, ["activities", 1]),
  "I5645:60760;5589:50622;5589:48828": itemBinding("I5645:60760;5589:50622;5589:48828", ANNUAL_CALENDAR_FRAME, CALENDAR_OP, ["activities", 2]),
  "I5645:60759;5273:21173": itemBinding("I5645:60759;5273:21173", ANNUAL_CALENDAR_FRAME, CALENDAR_OP, ["activity_types", 0]),
  "I5645:60759;5273:21176": itemBinding("I5645:60759;5273:21176", ANNUAL_CALENDAR_FRAME, CALENDAR_OP, ["activity_types", 1]),
  "I5645:60759;5273:21179": itemBinding("I5645:60759;5273:21179", ANNUAL_CALENDAR_FRAME, CALENDAR_OP, ["activity_types", 2]),
  "I5584:26947;5273:21173": itemBinding("I5584:26947;5273:21173", WEEK_CALENDAR_HISTORICAL_FRAME, CALENDAR_OP, ["activity_types", 0]),
  "I5584:26947;5273:21176": itemBinding("I5584:26947;5273:21176", WEEK_CALENDAR_HISTORICAL_FRAME, CALENDAR_OP, ["activity_types", 1]),
  "I5584:26947;5273:21179": itemBinding("I5584:26947;5273:21179", WEEK_CALENDAR_HISTORICAL_FRAME, CALENDAR_OP, ["activity_types", 2]),
  "I5645:60760;5596:52901;5602:55917": itemBinding("I5645:60760;5596:52901;5602:55917", ANNUAL_CALENDAR_FRAME, METRICS_OP, ["metrics", 0]),
  "I5645:60760;5596:52901;5602:55918": itemBinding("I5645:60760;5596:52901;5602:55918", ANNUAL_CALENDAR_FRAME, METRICS_OP, ["metrics", 1]),
  "I5645:60760;5596:52901;5602:55919": itemBinding("I5645:60760;5596:52901;5602:55919", ANNUAL_CALENDAR_FRAME, METRICS_OP, ["metrics", 2]),
};

/** Screen frame id → read operations its display bindings consume. */
export const FIGMA_DISPLAY_OPERATIONS: Readonly<Record<string, readonly string[]>> = {
  [MANAGE_ACTIVITY_FRAME]: [ACTIVITIES_LIST_OP],
  [WEEK_CALENDAR_HISTORICAL_FRAME]: [CALENDAR_OP],
  [ANNUAL_CALENDAR_FRAME]: [CALENDAR_OP, METRICS_OP],
};

const payloads = new Map<string, unknown>();
const listeners = new Set<() => void>();
let version = 0;

/** Store one read response (raw body, envelope included) for the bindings that consume it. */
export function publishReadPayload(method: string, path: string, payload: unknown): void {
  payloads.set(`${method.toUpperCase()} ${path}`, payload);
  version += 1;
  listeners.forEach((listener) => listener());
}

/** Forget every stored response (sign-out); bound nodes show their Figma copy again. */
export function clearReadPayloads(): void {
  payloads.clear();
  version += 1;
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function snapshot(): number {
  return version;
}

function asRecord(value: unknown): Record<string, unknown> | null {
  return value !== null && typeof value === "object" && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : null;
}

function lookup(binding: FigmaDisplayBinding): { loaded: boolean; value: unknown } {
  if (!payloads.has(binding.operation)) {
    return { loaded: false, value: undefined };
  }
  let current: unknown = payloads.get(binding.operation);
  if (binding.responseUnwrap) {
    current = asRecord(current)?.[binding.responseUnwrap];
  }
  for (const part of binding.path) {
    if (current === undefined || current === null) {
      break;
    }
    current = typeof part === "number"
      ? (Array.isArray(current) ? current[part] : undefined)
      : asRecord(current)?.[part];
  }
  return { loaded: true, value: current };
}

const DAY_MS = 24 * 60 * 60 * 1000;

function relativeTime(date: Date): string {
  const seconds = Math.round((Date.now() - date.getTime()) / 1000);
  if (seconds < 60) {
    return "just now";
  }
  if (seconds < 3600) {
    return `${Math.floor(seconds / 60)}m ago`;
  }
  if (seconds < 86400) {
    return `${Math.floor(seconds / 3600)}h ago`;
  }
  const days = Math.floor((Date.now() - date.getTime()) / DAY_MS);
  if (days === 1) {
    return "Yesterday";
  }
  if (days < 7) {
    return `${days}d ago`;
  }
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function formatDate(value: unknown, format: string | null): string {
  const date = typeof value === "string" || typeof value === "number" ? new Date(value) : null;
  if (!date || Number.isNaN(date.getTime())) {
    return typeof value === "string" ? value : "";
  }
  switch (format) {
    case "weekday_short":
      return date.toLocaleDateString("en-US", { weekday: "short" });
    case "weekday_long":
      return date.toLocaleDateString("en-US", { weekday: "long" });
    case "month_day":
      return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
    case "day_month":
      return date.toLocaleDateString("en-GB", { day: "numeric", month: "short" });
    case "date_numeric":
      return date.toLocaleDateString("en-US");
    case "relative":
      return relativeTime(date);
    default:
      return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  }
}

/** A response value as display copy, in the format the Figma sample copy used. */
export function formatDisplayValue(value: unknown, binding: FigmaDisplayBinding): string {
  if (value === undefined || value === null) {
    return "";
  }
  if (binding.valueType === "date") {
    return formatDate(value, binding.format);
  }
  if (typeof value === "number") {
    return binding.format === "number_grouped" ? value.toLocaleString("en-US") : String(value);
  }
  if (typeof value === "string" || typeof value === "boolean") {
    return String(value);
  }
  return "";
}

/** Bound copy: the response value once its read is published, the Figma copy before. */
export function useFigmaTextContent(nodeId: string, fallback: string): string {
  useSyncExternalStore(subscribe, snapshot, snapshot);
  const binding = FIGMA_DISPLAY_BINDINGS[nodeId];
  if (!binding || binding.kind !== "text") {
    return fallback;
  }
  const { loaded, value } = lookup(binding);
  return loaded ? formatDisplayValue(value, binding) : fallback;
}

export type FigmaItemBinding = {
  hidden?: boolean;
  "aria-hidden"?: boolean;
  "data-figma-item-missing"?: "true";
};

/** A repeated card hides once its read is published without an item at its index. */
export function useFigmaItemProps(nodeId: string): FigmaItemBinding {
  useSyncExternalStore(subscribe, snapshot, snapshot);
  const binding = FIGMA_DISPLAY_BINDINGS[nodeId];
  if (!binding || binding.kind !== "item") {
    return {};
  }
  const { loaded, value } = lookup(binding);
  if (!loaded || (value !== undefined && value !== null)) {
    return {};
  }
  return { hidden: true, "aria-hidden": true, "data-figma-item-missing": "true" };
}

/** Read operations ("METHOD /path") whose responses feed this frame's display bindings. */
export function figmaDisplayOperations(frameId: string): readonly string[] {
  return FIGMA_DISPLAY_OPERATIONS[frameId] ?? [];
}
