/** luna-spec-codegen: owned-layout */
// Figma field → API field bindings resolved from the live API contract.
// Request bodies use apiField names only; figmaField is the form-state key.

export type FigmaFieldValue = string | boolean;
export type FigmaFieldValues = Record<string, FigmaFieldValue | undefined>;

export interface FigmaFieldBinding {
  readonly figmaField: string;
  readonly apiField: string;
  readonly nodeId: string;
  readonly kind: string;
  readonly required: boolean;
  readonly resolution: string;
  readonly minLength?: number;
  readonly maxLength?: number;
  readonly pattern?: string;
  readonly format?: string;
}

export interface FigmaOperation {
  readonly method: string;
  readonly path: string;
  readonly role: "write" | "read";
  readonly fields: readonly FigmaFieldBinding[];
  readonly unboundRequired: readonly string[];
  readonly responseUnwrap: string | null;
  readonly submitNodeId: string | null;
}

const CREATE_ACTIVITY_FRAME_ID = "5217:16193";
const MANAGE_ACTIVITY_FRAME_ID = "5359:17106";
const WEEK_CALENDAR_DEFAULT_FRAME_ID = "5602:71490";
const WEEK_CALENDAR_HISTORICAL_FRAME_ID = "5584:26945";
const ANNUAL_CALENDAR_DEFAULT_FRAME_ID = "5645:60757";

const MARKETING_TEAM_MEMBER_CALENDAR_PATH =
  "/api/v1/marketing-team-member/calendar";
const MARKETING_TEAM_MEMBER_PERFORMANCE_METRICS_PATH =
  "/api/v1/marketing-team-member/performance-metrics";

const MARKETING_TEAM_MEMBER_ACTIVITIES_PATH =
  "/api/v1/marketing-team-member/activities";
const MARKETING_TEAM_MEMBER_ACTIVITY_BY_ID_PATH =
  "/api/v1/marketing-team-member/activities/{id}";

/** Screen frame id → contract operations its form uses. */
export const FIGMA_OPERATIONS: Readonly<Record<string, readonly FigmaOperation[]>> = {
  [CREATE_ACTIVITY_FRAME_ID]: [
    {
      fields: [],
      method: "POST",
      path: "/api/v1/marketing-team-member/activities",
      responseUnwrap: "data",
      role: "write",
      submitNodeId: null,
      unboundRequired: ["title", "start_date", "activity_type"],
    },
  ],
  [WEEK_CALENDAR_DEFAULT_FRAME_ID]: [
    {
      fields: [],
      method: "GET",
      path: MARKETING_TEAM_MEMBER_CALENDAR_PATH,
      responseUnwrap: "data",
      role: "read",
      submitNodeId: null,
      unboundRequired: [],
    },
  ],
  [WEEK_CALENDAR_HISTORICAL_FRAME_ID]: [
    {
      fields: [],
      method: "GET",
      path: MARKETING_TEAM_MEMBER_CALENDAR_PATH,
      responseUnwrap: "data",
      role: "read",
      submitNodeId: null,
      unboundRequired: [],
    },
  ],
  [ANNUAL_CALENDAR_DEFAULT_FRAME_ID]: [
    {
      fields: [],
      method: "GET",
      path: MARKETING_TEAM_MEMBER_CALENDAR_PATH,
      responseUnwrap: "data",
      role: "read",
      submitNodeId: null,
      unboundRequired: [],
    },
    {
      fields: [],
      method: "GET",
      path: MARKETING_TEAM_MEMBER_PERFORMANCE_METRICS_PATH,
      responseUnwrap: "data",
      role: "read",
      submitNodeId: null,
      unboundRequired: [],
    },
  ],
  [MANAGE_ACTIVITY_FRAME_ID]: [
    {
      fields: [],
      method: "GET",
      path: MARKETING_TEAM_MEMBER_ACTIVITIES_PATH,
      responseUnwrap: "data",
      role: "read",
      submitNodeId: null,
      unboundRequired: [],
    },
    {
      fields: [],
      method: "POST",
      path: MARKETING_TEAM_MEMBER_ACTIVITIES_PATH,
      responseUnwrap: "data",
      role: "write",
      submitNodeId: null,
      unboundRequired: ["title", "start_date", "activity_type"],
    },
    {
      fields: [],
      method: "PUT",
      path: MARKETING_TEAM_MEMBER_ACTIVITY_BY_ID_PATH,
      responseUnwrap: "data",
      role: "write",
      submitNodeId: null,
      unboundRequired: ["id"],
    },
    {
      fields: [],
      method: "DELETE",
      path: MARKETING_TEAM_MEMBER_ACTIVITY_BY_ID_PATH,
      responseUnwrap: "data",
      role: "write",
      submitNodeId: null,
      unboundRequired: ["id"],
    },
  ],
};

/** Figma fields no contract operation accepts: keep them local UI state, never send them. */
export const UNRESOLVED_FIGMA_FIELDS: Readonly<Record<string, readonly string[]>> = {
  "5217:16193": [
    "mon",
    "tue",
    "wed",
    "thu",
    "fri",
    "sat",
    "activity-category"
  ],
  "5359:17106": [
    "search-input"
  ],
  "5584:26945": [
    "mon",
    "tue",
    "wed",
    "thu",
    "fri",
    "sat",
    "field-5596-52876",
    "field-5596-52878",
    "field-5596-52880",
    "field-5596-52882",
    "field-5596-52884",
    "field-5596-52886"
  ],
  "5645:60757": [
    "mon",
    "tue",
    "wed",
    "thu",
    "fri",
    "sat",
    "field-i5645-60760-5596-52876",
    "field-i5645-60760-5596-52878",
    "field-i5645-60760-5596-52880",
    "field-i5645-60760-5596-52882",
    "field-i5645-60760-5596-52884",
    "field-i5645-60760-5596-52886"
  ]
};

export function figmaOperations(frameId: string): readonly FigmaOperation[] {
  return FIGMA_OPERATIONS[frameId] ?? [];
}

/** The operation a screen's form submits (the one with a resolved submit control first). */
export function figmaWriteOperation(frameId: string): FigmaOperation | undefined {
  const writes = figmaOperations(frameId).filter((op) => op.role === "write");
  return writes.find((op) => op.submitNodeId !== null) ?? writes[0];
}

/** The operation whose response initialises a screen's form values. */
export function figmaReadOperation(frameId: string): FigmaOperation | undefined {
  return figmaOperations(frameId).find((op) => op.role === "read");
}

/** Every read a screen loads: form initial values and display bindings (figmaDisplay.ts). */
export function figmaReadOperations(frameId: string): readonly FigmaOperation[] {
  return figmaOperations(frameId).filter((op) => op.role === "read");
}

function asRecord(value: unknown): Record<string, unknown> | null {
  return value !== null && typeof value === "object" && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : null;
}

/** Request body keyed by API field names. Fields without a contract binding are never sent. */
export function requestBodyFor(
  op: FigmaOperation,
  values: FigmaFieldValues,
): Record<string, string | boolean> {
  const body: Record<string, string | boolean> = {};
  for (const field of op.fields) {
    const value = values[field.figmaField];
    if (typeof value === "boolean") {
      body[field.apiField] = value;
      continue;
    }
    if (value === undefined || (value.trim() === "" && !field.required)) {
      continue;
    }
    body[field.apiField] = value;
  }
  return body;
}

/** Form values keyed by Figma field, read from a response (envelope unwrapped). */
export function valuesFromResponse(op: FigmaOperation, payload: unknown): FigmaFieldValues {
  const outer = asRecord(payload);
  const record = (op.responseUnwrap && outer ? asRecord(outer[op.responseUnwrap]) : null) ?? outer;
  const values: FigmaFieldValues = {};
  if (!record) {
    return values;
  }
  for (const field of op.fields) {
    const value = record[field.apiField];
    if (typeof value === "boolean") {
      values[field.figmaField] = value;
    } else if (typeof value === "string" || typeof value === "number") {
      values[field.figmaField] = String(value);
    } else if (value === null) {
      values[field.figmaField] = "";
    }
  }
  return values;
}

/** Checks the request schema states (required, length, pattern, email format). */
export function validateValues(
  op: FigmaOperation,
  values: FigmaFieldValues,
): Record<string, string> {
  const errors: Record<string, string> = {};
  for (const field of op.fields) {
    const value = values[field.figmaField];
    if (typeof value === "boolean" || field.kind === "checkbox" || field.kind === "switch") {
      continue;
    }
    const text = (value ?? "").trim();
    if (!text) {
      if (field.required) {
        errors[field.figmaField] = "This field is required.";
      }
      continue;
    }
    if (field.minLength !== undefined && text.length < field.minLength) {
      errors[field.figmaField] = `Use at least ${field.minLength} characters.`;
    } else if (field.maxLength !== undefined && text.length > field.maxLength) {
      errors[field.figmaField] = `Use at most ${field.maxLength} characters.`;
    } else if (field.format === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text)) {
      errors[field.figmaField] = "Enter a valid email address.";
    } else if (field.pattern !== undefined) {
      try {
        if (!new RegExp(field.pattern).test(text)) {
          errors[field.figmaField] = "This value is not in the expected format.";
        }
      } catch {
        // A server-side pattern JavaScript cannot compile is left to the server.
      }
    }
  }
  return errors;
}

function messageText(value: unknown): string | null {
  if (typeof value === "string") {
    return value;
  }
  if (Array.isArray(value)) {
    const parts = value.filter((part): part is string => typeof part === "string");
    return parts.length > 0 ? parts.join(" ") : null;
  }
  const record = asRecord(value);
  if (record) {
    return messageText(record.message ?? Object.values(record));
  }
  return null;
}

/** Server validation errors mapped from API field names onto Figma fields. */
export function fieldErrorsFromResponse(
  op: FigmaOperation,
  body: unknown,
): Record<string, string> {
  const errors: Record<string, string> = {};
  const byApi = new Map(op.fields.map((field) => [field.apiField, field.figmaField]));
  const record = asRecord(body);
  const errorEnvelope = asRecord(record?.error);
  const raw =
    record?.errors ??
    record?.details ??
    errorEnvelope?.details ??
    record?.message;
  const assign = (apiField: unknown, message: unknown): void => {
    const figmaField = typeof apiField === "string" ? byApi.get(apiField) : undefined;
    const text = messageText(message);
    if (figmaField && text && !errors[figmaField]) {
      errors[figmaField] = text;
    }
  };
  const entries = Array.isArray(raw) ? raw : raw !== undefined ? [raw] : [];
  for (const entry of entries) {
    const item = asRecord(entry);
    if (item && !("message" in item) && !("field" in item) && !("property" in item)) {
      for (const [key, value] of Object.entries(item)) {
        assign(key, value);
      }
      continue;
    }
    if (item) {
      assign(item.field ?? item.property ?? item.path, item.message ?? item.constraints);
      continue;
    }
    if (typeof entry === "string") {
      const apiField = op.fields
        .map((field) => field.apiField)
        .find((name) => entry === name || entry.startsWith(`${name} `));
      assign(apiField, entry);
    }
  }
  return errors;
}
