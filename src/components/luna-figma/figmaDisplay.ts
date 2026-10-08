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

const CATEGORIES_LIST_OP = "GET /api/v1/marketing-team-member/categories";
const MANAGE_CATEGORY_FRAME = "5449:19126";

function textBinding(
  nodeId: string,
  frameId: string,
  path: readonly FigmaDisplayPathPart[],
  valueType: FigmaDisplayBinding["valueType"] = "string",
  format: string | null = null,
): FigmaDisplayBinding {
  return {
    nodeId,
    frameId,
    operation: CATEGORIES_LIST_OP,
    responseUnwrap: "data",
    path,
    kind: "text",
    valueType,
    format,
    evidence: "explicit_binding",
  };
}

function itemBinding(
  nodeId: string,
  frameId: string,
  index: number,
): FigmaDisplayBinding {
  return {
    nodeId,
    frameId,
    operation: CATEGORIES_LIST_OP,
    responseUnwrap: "data",
    path: ["items", index],
    kind: "item",
    valueType: null,
    format: null,
    evidence: "explicit_binding",
  };
}

/** data-figma-node → the response field it renders. */
export const FIGMA_DISPLAY_BINDINGS: Readonly<Record<string, FigmaDisplayBinding>> = {
  "5449:19152": textBinding("5449:19152", MANAGE_CATEGORY_FRAME, ["items", 0, "title"]),
  "5449:19153": textBinding("5449:19153", MANAGE_CATEGORY_FRAME, ["items", 0, "description"]),
  "5449:19156": textBinding("5449:19156", MANAGE_CATEGORY_FRAME, ["items", 0, "created_at"], "date", "month_day"),
  "5449:19163": textBinding("5449:19163", MANAGE_CATEGORY_FRAME, ["items", 1, "title"]),
  "5449:19164": textBinding("5449:19164", MANAGE_CATEGORY_FRAME, ["items", 1, "description"]),
  "5449:19167": textBinding("5449:19167", MANAGE_CATEGORY_FRAME, ["items", 1, "created_at"], "date", "month_day"),
  "5449:19174": textBinding("5449:19174", MANAGE_CATEGORY_FRAME, ["items", 2, "title"]),
  "5449:19175": textBinding("5449:19175", MANAGE_CATEGORY_FRAME, ["items", 2, "description"]),
  "5449:19178": textBinding("5449:19178", MANAGE_CATEGORY_FRAME, ["items", 2, "created_at"], "date", "month_day"),
  "5449:19151": itemBinding("5449:19151", MANAGE_CATEGORY_FRAME, 0),
  "5449:19162": itemBinding("5449:19162", MANAGE_CATEGORY_FRAME, 1),
  "5449:19173": itemBinding("5449:19173", MANAGE_CATEGORY_FRAME, 2),
};

/** Screen frame id → read operations its display bindings consume. */
export const FIGMA_DISPLAY_OPERATIONS: Readonly<Record<string, readonly string[]>> = {
  [MANAGE_CATEGORY_FRAME]: [CATEGORIES_LIST_OP],
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
export function figmaTextContent(nodeId: string, fallback: string): string {
  // eslint-disable-next-line react-hooks/rules-of-hooks -- generated layout entry point
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
export function figmaItemProps(nodeId: string): FigmaItemBinding {
  // eslint-disable-next-line react-hooks/rules-of-hooks -- generated layout entry point
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

/** Raw published response body for a contract read (envelope included). */
export function readPublishedPayload(method: string, path: string): unknown {
  return payloads.get(`${method.toUpperCase()} ${path}`);
}

export type PublishedCategoryRow = {
  readonly id: string;
  readonly status: string;
};

/** Category list row from the last published GET /categories response. */
export function publishedCategoryAt(rowIndex: number): PublishedCategoryRow | null {
  const body = readPublishedPayload("GET", "/api/v1/marketing-team-member/categories");
  const envelope = asRecord(body);
  const data = asRecord(envelope?.data);
  const items = data?.items;
  if (!Array.isArray(items) || rowIndex < 0 || rowIndex >= items.length) {
    return null;
  }
  const item = asRecord(items[rowIndex]);
  if (!item || typeof item.id !== "string") {
    return null;
  }
  return {
    id: item.id,
    status: typeof item.status === "string" ? item.status : "active",
  };
}
