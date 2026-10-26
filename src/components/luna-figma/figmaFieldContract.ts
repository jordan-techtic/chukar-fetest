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

/** Screen frame id → contract operations its form uses. */
export const FIGMA_OPERATIONS: Readonly<Record<string, readonly FigmaOperation[]>> = {
  "5329:12027": [
    {
      "fields": [
        {
          "apiField": "first_name",
          "figmaField": "first-name",
          "kind": "text",
          "maxLength": 50,
          "minLength": 1,
          "nodeId": "5335:4269",
          "required": true,
          "resolution": "api_schema_name"
        },
        {
          "apiField": "last_name",
          "figmaField": "last-name",
          "kind": "text",
          "maxLength": 50,
          "minLength": 1,
          "nodeId": "5337:4265",
          "required": true,
          "resolution": "api_schema_name"
        },
        {
          "apiField": "email",
          "figmaField": "email-address",
          "format": "email",
          "kind": "text",
          "maxLength": 255,
          "minLength": 1,
          "nodeId": "5335:4273",
          "required": true,
          "resolution": "api_schema_name"
        },
        {
          "apiField": "phone",
          "figmaField": "phone-number",
          "kind": "text",
          "maxLength": 32,
          "nodeId": "5337:4271",
          "required": false,
          "resolution": "api_schema_name"
        },
        {
          "apiField": "bio",
          "figmaField": "bio",
          "kind": "textarea",
          "maxLength": 500,
          "nodeId": "5335:4286",
          "required": false,
          "resolution": "api_schema_name"
        }
      ],
      "method": "PUT",
      "path": "/api/v1/marketing-team-member/profile",
      "responseUnwrap": "data",
      "role": "write",
      "submitNodeId": "5335:4291",
      "unboundRequired": []
    },
    {
      "fields": [
        {
          "apiField": "current_password",
          "figmaField": "current-password",
          "kind": "password",
          "maxLength": 128,
          "minLength": 8,
          "nodeId": "5337:4286",
          "required": true,
          "resolution": "api_schema_name"
        },
        {
          "apiField": "new_password",
          "figmaField": "new-password",
          "kind": "password",
          "maxLength": 128,
          "minLength": 8,
          "nodeId": "5337:4290",
          "required": true,
          "resolution": "api_schema_name"
        }
      ],
      "method": "POST",
      "path": "/api/v1/marketing-team-member/profile/password",
      "responseUnwrap": null,
      "role": "write",
      "submitNodeId": null,
      "unboundRequired": []
    },
    {
      "fields": [
        {
          "apiField": "first_name",
          "figmaField": "first-name",
          "kind": "text",
          "maxLength": 50,
          "minLength": 1,
          "nodeId": "5335:4269",
          "required": true,
          "resolution": "api_schema_name"
        },
        {
          "apiField": "last_name",
          "figmaField": "last-name",
          "kind": "text",
          "maxLength": 50,
          "minLength": 1,
          "nodeId": "5337:4265",
          "required": true,
          "resolution": "api_schema_name"
        },
        {
          "apiField": "email",
          "figmaField": "email-address",
          "format": "email",
          "kind": "text",
          "maxLength": 255,
          "minLength": 1,
          "nodeId": "5335:4273",
          "required": true,
          "resolution": "api_schema_name"
        },
        {
          "apiField": "phone",
          "figmaField": "phone-number",
          "kind": "text",
          "maxLength": 32,
          "nodeId": "5337:4271",
          "required": false,
          "resolution": "api_schema_name"
        },
        {
          "apiField": "bio",
          "figmaField": "bio",
          "kind": "textarea",
          "maxLength": 500,
          "nodeId": "5335:4286",
          "required": false,
          "resolution": "api_schema_name"
        }
      ],
      "method": "GET",
      "path": "/api/v1/marketing-team-member/profile",
      "responseUnwrap": "data",
      "role": "read",
      "submitNodeId": null,
      "unboundRequired": []
    }
  ],
  "5359:17106": [
    {
      "fields": [
        {
          "apiField": "id",
          "figmaField": "activity-id",
          "kind": "text",
          "nodeId": "5359:17169",
          "required": true,
          "resolution": "path_param"
        }
      ],
      "method": "DELETE",
      "path": "/api/v1/marketing-team-member/activities/{id}",
      "responseUnwrap": null,
      "role": "write",
      "submitNodeId": null,
      "unboundRequired": []
    },
    {
      "fields": [],
      "method": "GET",
      "path": "/api/v1/marketing-team-member/activities",
      "responseUnwrap": "data",
      "role": "read",
      "submitNodeId": null,
      "unboundRequired": []
    }
  ],
  "5449:18415": [
    {
      "fields": [
        {
          "apiField": "title",
          "figmaField": "activity-title",
          "kind": "text",
          "maxLength": 100,
          "minLength": 1,
          "nodeId": "5449:18614",
          "required": true,
          "resolution": "api_schema_name"
        },
        {
          "apiField": "start_date",
          "figmaField": "start-date",
          "kind": "text",
          "nodeId": "5449:18612",
          "required": true,
          "resolution": "api_schema_name"
        },
        {
          "apiField": "activity_type",
          "figmaField": "activity-type",
          "kind": "text",
          "minLength": 1,
          "nodeId": "5549:56813",
          "required": true,
          "resolution": "api_schema_name"
        },
        {
          "apiField": "details",
          "figmaField": "description",
          "kind": "textarea",
          "maxLength": 500,
          "nodeId": "5449:18648",
          "required": false,
          "resolution": "api_schema_name"
        },
        {
          "apiField": "additional_info",
          "figmaField": "additional-info",
          "kind": "text",
          "maxLength": 500,
          "nodeId": "5449:18653",
          "required": false,
          "resolution": "api_schema_name"
        },
        {
          "apiField": "id",
          "figmaField": "activity-id",
          "kind": "text",
          "nodeId": "5449:18668",
          "required": false,
          "resolution": "path_param"
        },
        {
          "apiField": "updated_at",
          "figmaField": "activity-updated-at",
          "kind": "text",
          "nodeId": "5449:18668",
          "required": false,
          "resolution": "api_schema_name"
        }
      ],
      "method": "POST",
      "path": "/api/v1/marketing-team-member/activities",
      "responseUnwrap": "data",
      "role": "write",
      "submitNodeId": "5449:18668",
      "unboundRequired": []
    },
    {
      "fields": [
        {
          "apiField": "title",
          "figmaField": "activity-title",
          "kind": "text",
          "maxLength": 100,
          "minLength": 1,
          "nodeId": "5449:18614",
          "required": true,
          "resolution": "api_schema_name"
        },
        {
          "apiField": "start_date",
          "figmaField": "start-date",
          "kind": "text",
          "nodeId": "5449:18612",
          "required": true,
          "resolution": "api_schema_name"
        },
        {
          "apiField": "activity_type",
          "figmaField": "activity-type",
          "kind": "text",
          "minLength": 1,
          "nodeId": "5549:56813",
          "required": true,
          "resolution": "api_schema_name"
        },
        {
          "apiField": "details",
          "figmaField": "description",
          "kind": "textarea",
          "maxLength": 500,
          "nodeId": "5449:18648",
          "required": false,
          "resolution": "api_schema_name"
        },
        {
          "apiField": "additional_info",
          "figmaField": "additional-info",
          "kind": "text",
          "maxLength": 500,
          "nodeId": "5449:18653",
          "required": false,
          "resolution": "api_schema_name"
        },
        {
          "apiField": "id",
          "figmaField": "activity-id",
          "kind": "text",
          "nodeId": "5449:18668",
          "required": true,
          "resolution": "path_param"
        },
        {
          "apiField": "updated_at",
          "figmaField": "activity-updated-at",
          "kind": "text",
          "nodeId": "5449:18668",
          "required": false,
          "resolution": "api_schema_name"
        }
      ],
      "method": "PUT",
      "path": "/api/v1/marketing-team-member/activities/{id}",
      "responseUnwrap": "data",
      "role": "write",
      "submitNodeId": null,
      "unboundRequired": []
    }
  ]
};

/** Figma fields no contract operation accepts: keep them local UI state, never send them. */
export const UNRESOLVED_FIGMA_FIELDS: Readonly<Record<string, readonly string[]>> = {
  "5329:12027": [
    "confirm-password"
  ],
  "5359:17106": [
    "search-input"
  ],
  "5449:18415": [
    "icon",
    "color"
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

/** Resolve a write operation by API path (e.g. password POST vs profile PUT). */
export function figmaWriteOperationForPath(
  frameId: string,
  path: string,
): FigmaOperation | undefined {
  return figmaOperations(frameId).find((op) => op.role === "write" && op.path === path);
}

/** Substitute `{id}` / `{apiField}` segments from path-param bindings. */
export function resolveContractPath(
  path: string,
  op: FigmaOperation,
  values: FigmaFieldValues,
): string {
  let resolved = path;
  for (const field of op.fields) {
    if (field.resolution !== "path_param") {
      continue;
    }
    const raw = String(values[field.figmaField] ?? "").trim();
    resolved = resolved.replace(`{${field.apiField}}`, encodeURIComponent(raw));
  }
  return resolved;
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
    if (field.resolution === "path_param") {
      continue;
    }
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
    if (field.resolution === "path_param") {
      continue;
    }
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
  const nestedError = asRecord(record?.error);
  const raw =
    record?.errors ??
    nestedError?.details ??
    record?.details ??
    (Array.isArray(record?.detail) ? record.detail : record?.message);
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
