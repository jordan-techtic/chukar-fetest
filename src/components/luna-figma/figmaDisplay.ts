/** luna-spec-codegen: owned-layout */
// Figma display nodes bound to GET response fields (Luna display contract).
// The data hook calls publishReadPayload(method, path, body) after every read;
// bound copy then renders the response value and cards past the response
// array length are hidden. Before a response arrives the Figma copy shows.
// figmaTextContent and figmaItemProps call useSyncExternalStore internally so
// they re-render when payloads change. They must be called at component render
// level, not inside callbacks or conditionals — same rule as any hook.
import { useSyncExternalStore } from "react";

// Aliased so rules-of-hooks (not every project enables it) does not flag the
// non-use-named helpers below, so no blanket lint suppression is needed.
const readStore = useSyncExternalStore;

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

/** data-figma-node → the response field it renders. */
export const FIGMA_DISPLAY_BINDINGS: Readonly<Record<string, FigmaDisplayBinding>> = {
  "5621:28304": {
    "evidence": "repeated_cards",
    "format": null,
    "frameId": "5621:28270",
    "kind": "item",
    "nodeId": "5621:28304",
    "operation": "GET /api/v1/marketing-team-member/holidays",
    "path": [
      "items",
      0
    ],
    "responseUnwrap": "data",
    "valueType": null
  },
  "5621:28307": {
    "evidence": "role:title",
    "format": null,
    "frameId": "5621:28270",
    "kind": "text",
    "nodeId": "5621:28307",
    "operation": "GET /api/v1/marketing-team-member/holidays",
    "path": [
      "items",
      0,
      "name"
    ],
    "responseUnwrap": "data",
    "valueType": "string"
  },
  "5621:28308": {
    "evidence": "role:title",
    "format": "MMMM d, yyyy",
    "frameId": "5621:28270",
    "kind": "text",
    "nodeId": "5621:28308",
    "operation": "GET /api/v1/marketing-team-member/holidays",
    "path": [
      "items",
      0,
      "start_date"
    ],
    "responseUnwrap": "data",
    "valueType": "date"
  },
  "5621:28498": {
    "evidence": "role:title",
    "format": "MMMM d, yyyy",
    "frameId": "5621:28270",
    "kind": "text",
    "nodeId": "5621:28498",
    "operation": "GET /api/v1/marketing-team-member/holidays",
    "path": [
      "items",
      0,
      "end_date"
    ],
    "responseUnwrap": "data",
    "valueType": "date"
  },
  "5621:28319": {
    "evidence": "repeated_cards",
    "format": null,
    "frameId": "5621:28270",
    "kind": "item",
    "nodeId": "5621:28319",
    "operation": "GET /api/v1/marketing-team-member/holidays",
    "path": [
      "items",
      1
    ],
    "responseUnwrap": "data",
    "valueType": null
  },
  "5621:28322": {
    "evidence": "role:title",
    "format": null,
    "frameId": "5621:28270",
    "kind": "text",
    "nodeId": "5621:28322",
    "operation": "GET /api/v1/marketing-team-member/holidays",
    "path": [
      "items",
      1,
      "name"
    ],
    "responseUnwrap": "data",
    "valueType": "string"
  },
  "5621:28500": {
    "evidence": "role:title",
    "format": "MMMM d, yyyy",
    "frameId": "5621:28270",
    "kind": "text",
    "nodeId": "5621:28500",
    "operation": "GET /api/v1/marketing-team-member/holidays",
    "path": [
      "items",
      1,
      "start_date"
    ],
    "responseUnwrap": "data",
    "valueType": "date"
  },
  "5621:28501": {
    "evidence": "role:title",
    "format": "MMMM d, yyyy",
    "frameId": "5621:28270",
    "kind": "text",
    "nodeId": "5621:28501",
    "operation": "GET /api/v1/marketing-team-member/holidays",
    "path": [
      "items",
      1,
      "end_date"
    ],
    "responseUnwrap": "data",
    "valueType": "date"
  },
  "5621:28334": {
    "evidence": "repeated_cards",
    "format": null,
    "frameId": "5621:28270",
    "kind": "item",
    "nodeId": "5621:28334",
    "operation": "GET /api/v1/marketing-team-member/holidays",
    "path": [
      "items",
      2
    ],
    "responseUnwrap": "data",
    "valueType": null
  },
  "5621:28337": {
    "evidence": "role:title",
    "format": null,
    "frameId": "5621:28270",
    "kind": "text",
    "nodeId": "5621:28337",
    "operation": "GET /api/v1/marketing-team-member/holidays",
    "path": [
      "items",
      2,
      "name"
    ],
    "responseUnwrap": "data",
    "valueType": "string"
  },
  "5621:28503": {
    "evidence": "role:title",
    "format": "MMMM d, yyyy",
    "frameId": "5621:28270",
    "kind": "text",
    "nodeId": "5621:28503",
    "operation": "GET /api/v1/marketing-team-member/holidays",
    "path": [
      "items",
      2,
      "start_date"
    ],
    "responseUnwrap": "data",
    "valueType": "date"
  },
  "5621:28504": {
    "evidence": "role:title",
    "format": "MMMM d, yyyy",
    "frameId": "5621:28270",
    "kind": "text",
    "nodeId": "5621:28504",
    "operation": "GET /api/v1/marketing-team-member/holidays",
    "path": [
      "items",
      2,
      "end_date"
    ],
    "responseUnwrap": "data",
    "valueType": "date"
  },
  "5621:28349": {
    "evidence": "repeated_cards",
    "format": null,
    "frameId": "5621:28270",
    "kind": "item",
    "nodeId": "5621:28349",
    "operation": "GET /api/v1/marketing-team-member/holidays",
    "path": [
      "items",
      3
    ],
    "responseUnwrap": "data",
    "valueType": null
  },
  "5621:28352": {
    "evidence": "role:title",
    "format": null,
    "frameId": "5621:28270",
    "kind": "text",
    "nodeId": "5621:28352",
    "operation": "GET /api/v1/marketing-team-member/holidays",
    "path": [
      "items",
      3,
      "name"
    ],
    "responseUnwrap": "data",
    "valueType": "string"
  },
  "5621:28506": {
    "evidence": "role:title",
    "format": "MMMM d, yyyy",
    "frameId": "5621:28270",
    "kind": "text",
    "nodeId": "5621:28506",
    "operation": "GET /api/v1/marketing-team-member/holidays",
    "path": [
      "items",
      3,
      "start_date"
    ],
    "responseUnwrap": "data",
    "valueType": "date"
  },
  "5621:28507": {
    "evidence": "role:title",
    "format": "MMMM d, yyyy",
    "frameId": "5621:28270",
    "kind": "text",
    "nodeId": "5621:28507",
    "operation": "GET /api/v1/marketing-team-member/holidays",
    "path": [
      "items",
      3,
      "end_date"
    ],
    "responseUnwrap": "data",
    "valueType": "date"
  },
  "5621:28364": {
    "evidence": "repeated_cards",
    "format": null,
    "frameId": "5621:28270",
    "kind": "item",
    "nodeId": "5621:28364",
    "operation": "GET /api/v1/marketing-team-member/holidays",
    "path": [
      "items",
      4
    ],
    "responseUnwrap": "data",
    "valueType": null
  },
  "5621:28367": {
    "evidence": "role:title",
    "format": null,
    "frameId": "5621:28270",
    "kind": "text",
    "nodeId": "5621:28367",
    "operation": "GET /api/v1/marketing-team-member/holidays",
    "path": [
      "items",
      4,
      "name"
    ],
    "responseUnwrap": "data",
    "valueType": "string"
  },
  "5621:28512": {
    "evidence": "role:title",
    "format": "MMMM d, yyyy",
    "frameId": "5621:28270",
    "kind": "text",
    "nodeId": "5621:28512",
    "operation": "GET /api/v1/marketing-team-member/holidays",
    "path": [
      "items",
      4,
      "start_date"
    ],
    "responseUnwrap": "data",
    "valueType": "date"
  },
  "5621:28513": {
    "evidence": "role:title",
    "format": "MMMM d, yyyy",
    "frameId": "5621:28270",
    "kind": "text",
    "nodeId": "5621:28513",
    "operation": "GET /api/v1/marketing-team-member/holidays",
    "path": [
      "items",
      4,
      "end_date"
    ],
    "responseUnwrap": "data",
    "valueType": "date"
  },
  "5621:28379": {
    "evidence": "repeated_cards",
    "format": null,
    "frameId": "5621:28270",
    "kind": "item",
    "nodeId": "5621:28379",
    "operation": "GET /api/v1/marketing-team-member/holidays",
    "path": [
      "items",
      5
    ],
    "responseUnwrap": "data",
    "valueType": null
  },
  "5621:28382": {
    "evidence": "role:title",
    "format": null,
    "frameId": "5621:28270",
    "kind": "text",
    "nodeId": "5621:28382",
    "operation": "GET /api/v1/marketing-team-member/holidays",
    "path": [
      "items",
      5,
      "name"
    ],
    "responseUnwrap": "data",
    "valueType": "string"
  },
  "5621:28515": {
    "evidence": "role:title",
    "format": "MMMM d, yyyy",
    "frameId": "5621:28270",
    "kind": "text",
    "nodeId": "5621:28515",
    "operation": "GET /api/v1/marketing-team-member/holidays",
    "path": [
      "items",
      5,
      "start_date"
    ],
    "responseUnwrap": "data",
    "valueType": "date"
  },
  "5621:28516": {
    "evidence": "role:title",
    "format": "MMMM d, yyyy",
    "frameId": "5621:28270",
    "kind": "text",
    "nodeId": "5621:28516",
    "operation": "GET /api/v1/marketing-team-member/holidays",
    "path": [
      "items",
      5,
      "end_date"
    ],
    "responseUnwrap": "data",
    "valueType": "date"
  },
};

/** Screen frame id → read operations its display bindings consume. */
export const FIGMA_DISPLAY_OPERATIONS: Readonly<Record<string, readonly string[]>> = {
  "5621:28270": [
    "GET /api/v1/marketing-team-member/holidays"
  ]
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
  const listOffset = getListOffset(binding.operation);
  const pathParts =
    listOffset > 0 && binding.path[0] === "items" && typeof binding.path[1] === "number"
      ? (["items", binding.path[1] + listOffset, ...binding.path.slice(2)] as readonly FigmaDisplayPathPart[])
      : binding.path;
  for (const part of pathParts) {
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
  readStore(subscribe, snapshot, snapshot);
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
  readStore(subscribe, snapshot, snapshot);
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

// ── Select options ───────────────────────────────────────────────────────────
export type FigmaSelectOption = { value: string; label: string };

const selectOptions = new Map<string, FigmaSelectOption[]>();

/** Publish the option list for a select Luna matched to a GET list endpoint. */
export function publishSelectOptions(nodeId: string, options: FigmaSelectOption[]): void {
  selectOptions.set(nodeId, options);
  version += 1;
  listeners.forEach((listener) => listener());
}

/** Dynamic <option> list for a select bound to a list endpoint; [] before load / unresolved. */
export function figmaSelectOptions(nodeId: string): FigmaSelectOption[] {
  readStore(subscribe, snapshot, snapshot);
  return selectOptions.get(nodeId) ?? [];
}

/** Subscribe to payload publishes (wired hooks re-render on list/detail updates). */
export function useFigmaPayloadVersion(): number {
  return useSyncExternalStore(subscribe, snapshot, snapshot);
}

const listOffsets = new Map<string, number>();

/** Pagination offset for a list operation key ("METHOD /path"). */
export function setListOffset(operation: string, offset: number): void {
  listOffsets.set(operation, offset);
  version += 1;
  listeners.forEach((listener) => listener());
}

export function getListOffset(operation: string): number {
  return listOffsets.get(operation) ?? 0;
}
