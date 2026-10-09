/** luna-spec-codegen: owned-layout */
// Figma display nodes bound to GET response fields (Luna display contract).
// The data hook calls publishReadPayload(method, path, body) after every read;
// bound copy then renders the response value and cards past the response
// array length are hidden. Before a response arrives the Figma copy shows.
/* eslint-disable react-hooks/rules-of-hooks */
// figmaTextContent and figmaItemProps call useSyncExternalStore internally so
// they re-render when payloads change. They must be called at component render
// level, not inside callbacks or conditionals — same rule as any hook.
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

const ACTIVITY_TYPES_LIST_OP = "GET /api/v1/marketing-team-member/activity-types";
const CREATE_ACTIVITY_TYPE_FRAME = "5449:18415";

const ACTIVITY_TYPE_TABLE_ROWS: readonly {
  rowNodeId: string;
  titleNodeId: string;
  descriptionNodeId: string;
  colorNodeId: string;
  createdNodeId: string;
}[] = [
  {
    rowNodeId: "5449:18441",
    titleNodeId: "5449:18442",
    descriptionNodeId: "5449:18443",
    colorNodeId: "5449:18446",
    createdNodeId: "5449:18449",
  },
  {
    rowNodeId: "5449:18455",
    titleNodeId: "5449:18456",
    descriptionNodeId: "5449:18457",
    colorNodeId: "5449:18460",
    createdNodeId: "5449:18463",
  },
  {
    rowNodeId: "5449:18469",
    titleNodeId: "5449:18470",
    descriptionNodeId: "5449:18471",
    colorNodeId: "5449:18474",
    createdNodeId: "5449:18477",
  },
  {
    rowNodeId: "5449:18483",
    titleNodeId: "5449:18484",
    descriptionNodeId: "5449:18485",
    colorNodeId: "5449:18488",
    createdNodeId: "5449:18491",
  },
  {
    rowNodeId: "5449:18497",
    titleNodeId: "5449:18498",
    descriptionNodeId: "5449:18499",
    colorNodeId: "5449:18502",
    createdNodeId: "5449:18505",
  },
  {
    rowNodeId: "5449:18511",
    titleNodeId: "5449:18512",
    descriptionNodeId: "5449:18513",
    colorNodeId: "5449:18516",
    createdNodeId: "5449:18519",
  },
];

function activityTypeListDisplayBindings(): Record<string, FigmaDisplayBinding> {
  const bindings: Record<string, FigmaDisplayBinding> = {};
  ACTIVITY_TYPE_TABLE_ROWS.forEach((row, index) => {
    const base = {
      frameId: CREATE_ACTIVITY_TYPE_FRAME,
      operation: ACTIVITY_TYPES_LIST_OP,
      responseUnwrap: "data" as const,
      evidence: "activity_type_list_row",
    };
    bindings[row.rowNodeId] = {
      ...base,
      nodeId: row.rowNodeId,
      kind: "item",
      path: ["items", index],
      valueType: null,
      format: null,
    };
    bindings[row.titleNodeId] = {
      ...base,
      nodeId: row.titleNodeId,
      kind: "text",
      path: ["items", index, "title"],
      valueType: "string",
      format: null,
    };
    bindings[row.descriptionNodeId] = {
      ...base,
      nodeId: row.descriptionNodeId,
      kind: "text",
      path: ["items", index, "description"],
      valueType: "string",
      format: null,
    };
    bindings[row.colorNodeId] = {
      ...base,
      nodeId: row.colorNodeId,
      kind: "text",
      path: ["items", index, "color_code"],
      valueType: "string",
      format: null,
    };
    bindings[row.createdNodeId] = {
      ...base,
      nodeId: row.createdNodeId,
      kind: "text",
      path: ["items", index, "created_at"],
      valueType: "date",
      format: "month_day",
    };
  });
  return bindings;
}

const HOLIDAYS_LIST_OP = "GET /api/v1/marketing-team-member/holidays";
const MANAGE_HOLIDAY_FRAME = "5621:28270";

const HOLIDAY_TABLE_ROWS: readonly {
  rowNodeId: string;
  nameNodeId: string;
  startNodeId: string;
  endNodeId: string;
}[] = [
  {
    rowNodeId: "5621:28304",
    nameNodeId: "5621:28307",
    startNodeId: "5621:28308",
    endNodeId: "5621:28498",
  },
  {
    rowNodeId: "5621:28319",
    nameNodeId: "5621:28322",
    startNodeId: "5621:28500",
    endNodeId: "5621:28501",
  },
  {
    rowNodeId: "5621:28334",
    nameNodeId: "5621:28337",
    startNodeId: "5621:28503",
    endNodeId: "5621:28504",
  },
  {
    rowNodeId: "5621:28349",
    nameNodeId: "5621:28352",
    startNodeId: "5621:28506",
    endNodeId: "5621:28507",
  },
  {
    rowNodeId: "5621:28364",
    nameNodeId: "5621:28367",
    startNodeId: "5621:28512",
    endNodeId: "5621:28513",
  },
  {
    rowNodeId: "5621:28379",
    nameNodeId: "5621:28382",
    startNodeId: "5621:28515",
    endNodeId: "5621:28516",
  },
];

const ACTIVITIES_LIST_OP = "GET /api/v1/marketing-team-member/activities";
const MANAGE_ACTIVITY_FRAME = "5359:17106";

const ACTIVITY_TABLE_ROWS: readonly {
  rowNodeId: string;
  titleNodeId: string;
  descriptionNodeId: string;
  categoryNodeId: string;
  colorNodeId: string;
  createdNodeId: string;
}[] = [
  {
    rowNodeId: "5359:17170",
    titleNodeId: "5359:17171",
    descriptionNodeId: "5359:17172",
    categoryNodeId: "5725:67487",
    colorNodeId: "5364:8859",
    createdNodeId: "5359:17181",
  },
  {
    rowNodeId: "5359:17187",
    titleNodeId: "5359:17188",
    descriptionNodeId: "5359:17189",
    categoryNodeId: "5725:67489",
    colorNodeId: "5364:8863",
    createdNodeId: "5359:17198",
  },
  {
    rowNodeId: "5359:17204",
    titleNodeId: "5359:17205",
    descriptionNodeId: "5359:17206",
    categoryNodeId: "5725:67491",
    colorNodeId: "5364:8867",
    createdNodeId: "5359:17212",
  },
  {
    rowNodeId: "5359:17218",
    titleNodeId: "5359:17219",
    descriptionNodeId: "5359:17220",
    categoryNodeId: "5725:67493",
    colorNodeId: "5364:8871",
    createdNodeId: "5359:17229",
  },
  {
    rowNodeId: "5359:17235",
    titleNodeId: "5359:17236",
    descriptionNodeId: "5359:17237",
    categoryNodeId: "5725:67495",
    colorNodeId: "5364:8875",
    createdNodeId: "5359:17246",
  },
  {
    rowNodeId: "5359:17252",
    titleNodeId: "5359:17253",
    descriptionNodeId: "5359:17254",
    categoryNodeId: "5725:67497",
    colorNodeId: "5364:8879",
    createdNodeId: "5359:17260",
  },
];

const CATEGORIES_LIST_OP = "GET /api/v1/marketing-team-member/categories";
const MANAGE_CATEGORY_FRAME = "5449:19126";

const CATEGORY_TABLE_ROWS: readonly {
  rowNodeId: string;
  titleNodeId: string;
  descriptionNodeId: string;
  createdNodeId: string;
}[] = [
  {
    rowNodeId: "5449:19151",
    titleNodeId: "5449:19152",
    descriptionNodeId: "5449:19153",
    createdNodeId: "5449:19156",
  },
  {
    rowNodeId: "5449:19162",
    titleNodeId: "5449:19163",
    descriptionNodeId: "5449:19164",
    createdNodeId: "5449:19167",
  },
  {
    rowNodeId: "5449:19173",
    titleNodeId: "5449:19174",
    descriptionNodeId: "5449:19175",
    createdNodeId: "5449:19178",
  },
];

function categoryListDisplayBindings(): Record<string, FigmaDisplayBinding> {
  const bindings: Record<string, FigmaDisplayBinding> = {};
  CATEGORY_TABLE_ROWS.forEach((row, index) => {
    const base = {
      frameId: MANAGE_CATEGORY_FRAME,
      operation: CATEGORIES_LIST_OP,
      responseUnwrap: "data" as const,
      evidence: "category_list_row",
    };
    bindings[row.rowNodeId] = {
      ...base,
      nodeId: row.rowNodeId,
      kind: "item",
      path: ["items", index],
      valueType: null,
      format: null,
    };
    bindings[row.titleNodeId] = {
      ...base,
      nodeId: row.titleNodeId,
      kind: "text",
      path: ["items", index, "title"],
      valueType: "string",
      format: null,
    };
    bindings[row.descriptionNodeId] = {
      ...base,
      nodeId: row.descriptionNodeId,
      kind: "text",
      path: ["items", index, "description"],
      valueType: "string",
      format: null,
    };
    bindings[row.createdNodeId] = {
      ...base,
      nodeId: row.createdNodeId,
      kind: "text",
      path: ["items", index, "created_at"],
      valueType: "date",
      format: "month_day",
    };
  });
  return bindings;
}

function activityListDisplayBindings(): Record<string, FigmaDisplayBinding> {
  const bindings: Record<string, FigmaDisplayBinding> = {};
  ACTIVITY_TABLE_ROWS.forEach((row, index) => {
    const base = {
      frameId: MANAGE_ACTIVITY_FRAME,
      operation: ACTIVITIES_LIST_OP,
      responseUnwrap: "data" as const,
      evidence: "activity_list_row",
    };
    bindings[row.rowNodeId] = {
      ...base,
      nodeId: row.rowNodeId,
      kind: "item",
      path: ["items", index],
      valueType: null,
      format: null,
    };
    bindings[row.titleNodeId] = {
      ...base,
      nodeId: row.titleNodeId,
      kind: "text",
      path: ["items", index, "title"],
      valueType: "string",
      format: null,
    };
    bindings[row.descriptionNodeId] = {
      ...base,
      nodeId: row.descriptionNodeId,
      kind: "text",
      path: ["items", index, "additional_info"],
      valueType: "string",
      format: null,
    };
    bindings[row.categoryNodeId] = {
      ...base,
      nodeId: row.categoryNodeId,
      kind: "text",
      path: ["items", index, "category"],
      valueType: "string",
      format: null,
    };
    bindings[row.colorNodeId] = {
      ...base,
      nodeId: row.colorNodeId,
      kind: "text",
      path: ["items", index, "color"],
      valueType: "string",
      format: null,
    };
    bindings[row.createdNodeId] = {
      ...base,
      nodeId: row.createdNodeId,
      kind: "text",
      path: ["items", index, "created_at"],
      valueType: "date",
      format: "month_day",
    };
  });
  return bindings;
}

function holidayListDisplayBindings(): Record<string, FigmaDisplayBinding> {
  const bindings: Record<string, FigmaDisplayBinding> = {};
  HOLIDAY_TABLE_ROWS.forEach((row, index) => {
    const base = {
      frameId: MANAGE_HOLIDAY_FRAME,
      operation: HOLIDAYS_LIST_OP,
      responseUnwrap: "data" as const,
      evidence: "holiday_list_row",
    };
    bindings[row.rowNodeId] = {
      ...base,
      nodeId: row.rowNodeId,
      kind: "item",
      path: ["items", index],
      valueType: null,
      format: null,
    };
    bindings[row.nameNodeId] = {
      ...base,
      nodeId: row.nameNodeId,
      kind: "text",
      path: ["items", index, "name"],
      valueType: "string",
      format: null,
    };
    bindings[row.startNodeId] = {
      ...base,
      nodeId: row.startNodeId,
      kind: "text",
      path: ["items", index, "start_date"],
      valueType: "date",
      format: "month_day",
    };
    bindings[row.endNodeId] = {
      ...base,
      nodeId: row.endNodeId,
      kind: "text",
      path: ["items", index, "end_date"],
      valueType: "date",
      format: "month_day",
    };
  });
  return bindings;
}

/** data-figma-node → the response field it renders. */
export const FIGMA_DISPLAY_BINDINGS: Readonly<Record<string, FigmaDisplayBinding>> = {
  ...activityTypeListDisplayBindings(),
  ...activityListDisplayBindings(),
  ...categoryListDisplayBindings(),
  ...holidayListDisplayBindings(),
  "5329:12086": {
    "evidence": "profile_sidebar",
    "format": null,
    "frameId": "5329:12027",
    "kind": "text",
    "nodeId": "5329:12086",
    "operation": "GET /api/v1/marketing-team-member/profile",
    "path": [
      "email"
    ],
    "responseUnwrap": "data",
    "valueType": "string"
  },
  "5335:4278": {
    "evidence": "label_pair",
    "format": null,
    "frameId": "5329:12027",
    "kind": "text",
    "nodeId": "5335:4278",
    "operation": "GET /api/v1/marketing-team-member/profile",
    "path": [
      "role"
    ],
    "responseUnwrap": "data",
    "valueType": "string"
  }
};

/** Screen frame id → read operations its display bindings consume. */
export const FIGMA_DISPLAY_OPERATIONS: Readonly<Record<string, readonly string[]>> = {
  "5329:12027": [
    "GET /api/v1/marketing-team-member/profile"
  ],
  "5449:18415": [ACTIVITY_TYPES_LIST_OP],
  "5359:17106": [ACTIVITIES_LIST_OP],
  "5449:19126": [CATEGORIES_LIST_OP],
  "5621:28270": [HOLIDAYS_LIST_OP],
  "5645:60757": [
    "GET /api/v1/marketing-team-member/calendar"
  ],
  "5584:26945": [
    "GET /api/v1/marketing-team-member/calendar"
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
