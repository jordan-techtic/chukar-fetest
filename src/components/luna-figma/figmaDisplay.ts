/** luna-spec-codegen: owned-layout */
// Figma display nodes bound to GET response fields (Luna display contract).
// The data hook calls publishReadPayload(method, path, body) after every read;
// bound copy then renders the response value and cards past the response
// array length are hidden. Before a response arrives the Figma copy shows.
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

/** data-figma-node → the response field it renders. */
export const FIGMA_DISPLAY_BINDINGS: Readonly<Record<string, FigmaDisplayBinding>> = {
  "5329:12086": {
    "evidence": "label_pair",
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
  },
  "5359:17170": {
    "evidence": "repeated_cards",
    "format": null,
    "frameId": "5359:17106",
    "kind": "item",
    "nodeId": "5359:17170",
    "operation": "GET /api/v1/marketing-team-member/activities",
    "path": [
      "items",
      0
    ],
    "responseUnwrap": "data",
    "valueType": null
  },
  "5359:17172": {
    "evidence": "role:title",
    "format": null,
    "frameId": "5359:17106",
    "kind": "text",
    "nodeId": "5359:17172",
    "operation": "GET /api/v1/marketing-team-member/activities",
    "path": [
      "items",
      0,
      "title"
    ],
    "responseUnwrap": "data",
    "valueType": "string"
  },
  "5359:17187": {
    "evidence": "repeated_cards",
    "format": null,
    "frameId": "5359:17106",
    "kind": "item",
    "nodeId": "5359:17187",
    "operation": "GET /api/v1/marketing-team-member/activities",
    "path": [
      "items",
      1
    ],
    "responseUnwrap": "data",
    "valueType": null
  },
  "5359:17189": {
    "evidence": "role:title",
    "format": null,
    "frameId": "5359:17106",
    "kind": "text",
    "nodeId": "5359:17189",
    "operation": "GET /api/v1/marketing-team-member/activities",
    "path": [
      "items",
      1,
      "title"
    ],
    "responseUnwrap": "data",
    "valueType": "string"
  },
  "5359:17204": {
    "evidence": "repeated_cards",
    "format": null,
    "frameId": "5359:17106",
    "kind": "item",
    "nodeId": "5359:17204",
    "operation": "GET /api/v1/marketing-team-member/activities",
    "path": [
      "items",
      2
    ],
    "responseUnwrap": "data",
    "valueType": null
  },
  "5359:17206": {
    "evidence": "role:title",
    "format": null,
    "frameId": "5359:17106",
    "kind": "text",
    "nodeId": "5359:17206",
    "operation": "GET /api/v1/marketing-team-member/activities",
    "path": [
      "items",
      2,
      "title"
    ],
    "responseUnwrap": "data",
    "valueType": "string"
  },
  "5359:17218": {
    "evidence": "repeated_cards",
    "format": null,
    "frameId": "5359:17106",
    "kind": "item",
    "nodeId": "5359:17218",
    "operation": "GET /api/v1/marketing-team-member/activities",
    "path": [
      "items",
      3
    ],
    "responseUnwrap": "data",
    "valueType": null
  },
  "5359:17220": {
    "evidence": "role:title",
    "format": null,
    "frameId": "5359:17106",
    "kind": "text",
    "nodeId": "5359:17220",
    "operation": "GET /api/v1/marketing-team-member/activities",
    "path": [
      "items",
      3,
      "title"
    ],
    "responseUnwrap": "data",
    "valueType": "string"
  },
  "5359:17235": {
    "evidence": "repeated_cards",
    "format": null,
    "frameId": "5359:17106",
    "kind": "item",
    "nodeId": "5359:17235",
    "operation": "GET /api/v1/marketing-team-member/activities",
    "path": [
      "items",
      4
    ],
    "responseUnwrap": "data",
    "valueType": null
  },
  "5359:17237": {
    "evidence": "role:title",
    "format": null,
    "frameId": "5359:17106",
    "kind": "text",
    "nodeId": "5359:17237",
    "operation": "GET /api/v1/marketing-team-member/activities",
    "path": [
      "items",
      4,
      "title"
    ],
    "responseUnwrap": "data",
    "valueType": "string"
  },
  "5359:17252": {
    "evidence": "repeated_cards",
    "format": null,
    "frameId": "5359:17106",
    "kind": "item",
    "nodeId": "5359:17252",
    "operation": "GET /api/v1/marketing-team-member/activities",
    "path": [
      "items",
      5
    ],
    "responseUnwrap": "data",
    "valueType": null
  },
  "5359:17254": {
    "evidence": "role:title",
    "format": null,
    "frameId": "5359:17106",
    "kind": "text",
    "nodeId": "5359:17254",
    "operation": "GET /api/v1/marketing-team-member/activities",
    "path": [
      "items",
      5,
      "title"
    ],
    "responseUnwrap": "data",
    "valueType": "string"
  },
  "5449:19151": {
    "evidence": "repeated_cards",
    "format": null,
    "frameId": "5449:19126",
    "kind": "item",
    "nodeId": "5449:19151",
    "operation": "GET /api/v1/marketing-team-member/categories",
    "path": [
      "items",
      0
    ],
    "responseUnwrap": "data",
    "valueType": null
  },
  "5449:19153": {
    "evidence": "role:title",
    "format": null,
    "frameId": "5449:19126",
    "kind": "text",
    "nodeId": "5449:19153",
    "operation": "GET /api/v1/marketing-team-member/categories",
    "path": [
      "items",
      0,
      "title"
    ],
    "responseUnwrap": "data",
    "valueType": "string"
  },
  "5449:19162": {
    "evidence": "repeated_cards",
    "format": null,
    "frameId": "5449:19126",
    "kind": "item",
    "nodeId": "5449:19162",
    "operation": "GET /api/v1/marketing-team-member/categories",
    "path": [
      "items",
      1
    ],
    "responseUnwrap": "data",
    "valueType": null
  },
  "5449:19164": {
    "evidence": "role:title",
    "format": null,
    "frameId": "5449:19126",
    "kind": "text",
    "nodeId": "5449:19164",
    "operation": "GET /api/v1/marketing-team-member/categories",
    "path": [
      "items",
      1,
      "title"
    ],
    "responseUnwrap": "data",
    "valueType": "string"
  },
  "5449:19173": {
    "evidence": "repeated_cards",
    "format": null,
    "frameId": "5449:19126",
    "kind": "item",
    "nodeId": "5449:19173",
    "operation": "GET /api/v1/marketing-team-member/categories",
    "path": [
      "items",
      2
    ],
    "responseUnwrap": "data",
    "valueType": null
  },
  "5449:19175": {
    "evidence": "role:title",
    "format": null,
    "frameId": "5449:19126",
    "kind": "text",
    "nodeId": "5449:19175",
    "operation": "GET /api/v1/marketing-team-member/categories",
    "path": [
      "items",
      2,
      "title"
    ],
    "responseUnwrap": "data",
    "valueType": "string"
  },
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
  "5359:17495": {
    "evidence": "repeated_cards",
    "format": null,
    "frameId": "5359:17424",
    "kind": "item",
    "nodeId": "5359:17495",
    "operation": "GET /api/v1/users",
    "path": [
      "items",
      0
    ],
    "responseUnwrap": "data",
    "valueType": null
  },
  "5359:17498": {
    "evidence": "role:title",
    "format": null,
    "frameId": "5359:17424",
    "kind": "text",
    "nodeId": "5359:17498",
    "operation": "GET /api/v1/users",
    "path": [
      "items",
      0,
      "name"
    ],
    "responseUnwrap": "data",
    "valueType": "string"
  },
  "5359:17499": {
    "evidence": "role:description",
    "format": null,
    "frameId": "5359:17424",
    "kind": "text",
    "nodeId": "5359:17499",
    "operation": "GET /api/v1/users",
    "path": [
      "items",
      0,
      "email"
    ],
    "responseUnwrap": "data",
    "valueType": "string"
  },
  "5359:17501": {
    "evidence": "role:badge",
    "format": null,
    "frameId": "5359:17424",
    "kind": "text",
    "nodeId": "5359:17501",
    "operation": "GET /api/v1/users",
    "path": [
      "items",
      0,
      "role"
    ],
    "responseUnwrap": "data",
    "valueType": "string"
  },
  "5359:17502": {
    "evidence": "role:timestamp",
    "format": "relative",
    "frameId": "5359:17424",
    "kind": "text",
    "nodeId": "5359:17502",
    "operation": "GET /api/v1/users",
    "path": [
      "items",
      0,
      "last_active"
    ],
    "responseUnwrap": "data",
    "valueType": "date"
  },
  "5359:17511": {
    "evidence": "repeated_cards",
    "format": null,
    "frameId": "5359:17424",
    "kind": "item",
    "nodeId": "5359:17511",
    "operation": "GET /api/v1/users",
    "path": [
      "items",
      1
    ],
    "responseUnwrap": "data",
    "valueType": null
  },
  "5359:17514": {
    "evidence": "role:title",
    "format": null,
    "frameId": "5359:17424",
    "kind": "text",
    "nodeId": "5359:17514",
    "operation": "GET /api/v1/users",
    "path": [
      "items",
      1,
      "name"
    ],
    "responseUnwrap": "data",
    "valueType": "string"
  },
  "5359:17515": {
    "evidence": "role:description",
    "format": null,
    "frameId": "5359:17424",
    "kind": "text",
    "nodeId": "5359:17515",
    "operation": "GET /api/v1/users",
    "path": [
      "items",
      1,
      "email"
    ],
    "responseUnwrap": "data",
    "valueType": "string"
  },
  "5359:17517": {
    "evidence": "role:badge",
    "format": null,
    "frameId": "5359:17424",
    "kind": "text",
    "nodeId": "5359:17517",
    "operation": "GET /api/v1/users",
    "path": [
      "items",
      1,
      "role"
    ],
    "responseUnwrap": "data",
    "valueType": "string"
  },
  "5359:17518": {
    "evidence": "role:timestamp",
    "format": "relative",
    "frameId": "5359:17424",
    "kind": "text",
    "nodeId": "5359:17518",
    "operation": "GET /api/v1/users",
    "path": [
      "items",
      1,
      "last_active"
    ],
    "responseUnwrap": "data",
    "valueType": "date"
  },
  "5359:17527": {
    "evidence": "repeated_cards",
    "format": null,
    "frameId": "5359:17424",
    "kind": "item",
    "nodeId": "5359:17527",
    "operation": "GET /api/v1/users",
    "path": [
      "items",
      2
    ],
    "responseUnwrap": "data",
    "valueType": null
  },
  "5359:17530": {
    "evidence": "role:title",
    "format": null,
    "frameId": "5359:17424",
    "kind": "text",
    "nodeId": "5359:17530",
    "operation": "GET /api/v1/users",
    "path": [
      "items",
      2,
      "name"
    ],
    "responseUnwrap": "data",
    "valueType": "string"
  },
  "5359:17531": {
    "evidence": "role:description",
    "format": null,
    "frameId": "5359:17424",
    "kind": "text",
    "nodeId": "5359:17531",
    "operation": "GET /api/v1/users",
    "path": [
      "items",
      2,
      "email"
    ],
    "responseUnwrap": "data",
    "valueType": "string"
  },
  "5359:17533": {
    "evidence": "role:badge",
    "format": null,
    "frameId": "5359:17424",
    "kind": "text",
    "nodeId": "5359:17533",
    "operation": "GET /api/v1/users",
    "path": [
      "items",
      2,
      "role"
    ],
    "responseUnwrap": "data",
    "valueType": "string"
  },
  "5359:17534": {
    "evidence": "role:timestamp",
    "format": "relative",
    "frameId": "5359:17424",
    "kind": "text",
    "nodeId": "5359:17534",
    "operation": "GET /api/v1/users",
    "path": [
      "items",
      2,
      "last_active"
    ],
    "responseUnwrap": "data",
    "valueType": "date"
  },
  "5359:17543": {
    "evidence": "repeated_cards",
    "format": null,
    "frameId": "5359:17424",
    "kind": "item",
    "nodeId": "5359:17543",
    "operation": "GET /api/v1/users",
    "path": [
      "items",
      3
    ],
    "responseUnwrap": "data",
    "valueType": null
  },
  "5359:17546": {
    "evidence": "role:title",
    "format": null,
    "frameId": "5359:17424",
    "kind": "text",
    "nodeId": "5359:17546",
    "operation": "GET /api/v1/users",
    "path": [
      "items",
      3,
      "name"
    ],
    "responseUnwrap": "data",
    "valueType": "string"
  },
  "5359:17547": {
    "evidence": "role:description",
    "format": null,
    "frameId": "5359:17424",
    "kind": "text",
    "nodeId": "5359:17547",
    "operation": "GET /api/v1/users",
    "path": [
      "items",
      3,
      "email"
    ],
    "responseUnwrap": "data",
    "valueType": "string"
  },
  "5359:17549": {
    "evidence": "role:badge",
    "format": null,
    "frameId": "5359:17424",
    "kind": "text",
    "nodeId": "5359:17549",
    "operation": "GET /api/v1/users",
    "path": [
      "items",
      3,
      "role"
    ],
    "responseUnwrap": "data",
    "valueType": "string"
  },
  "5359:17550": {
    "evidence": "role:timestamp",
    "format": "relative",
    "frameId": "5359:17424",
    "kind": "text",
    "nodeId": "5359:17550",
    "operation": "GET /api/v1/users",
    "path": [
      "items",
      3,
      "last_active"
    ],
    "responseUnwrap": "data",
    "valueType": "date"
  },
  "5359:17559": {
    "evidence": "repeated_cards",
    "format": null,
    "frameId": "5359:17424",
    "kind": "item",
    "nodeId": "5359:17559",
    "operation": "GET /api/v1/users",
    "path": [
      "items",
      4
    ],
    "responseUnwrap": "data",
    "valueType": null
  },
  "5359:17562": {
    "evidence": "role:title",
    "format": null,
    "frameId": "5359:17424",
    "kind": "text",
    "nodeId": "5359:17562",
    "operation": "GET /api/v1/users",
    "path": [
      "items",
      4,
      "name"
    ],
    "responseUnwrap": "data",
    "valueType": "string"
  },
  "5359:17563": {
    "evidence": "role:description",
    "format": null,
    "frameId": "5359:17424",
    "kind": "text",
    "nodeId": "5359:17563",
    "operation": "GET /api/v1/users",
    "path": [
      "items",
      4,
      "email"
    ],
    "responseUnwrap": "data",
    "valueType": "string"
  },
  "5359:17565": {
    "evidence": "role:badge",
    "format": null,
    "frameId": "5359:17424",
    "kind": "text",
    "nodeId": "5359:17565",
    "operation": "GET /api/v1/users",
    "path": [
      "items",
      4,
      "role"
    ],
    "responseUnwrap": "data",
    "valueType": "string"
  },
  "5359:17566": {
    "evidence": "role:timestamp",
    "format": "relative",
    "frameId": "5359:17424",
    "kind": "text",
    "nodeId": "5359:17566",
    "operation": "GET /api/v1/users",
    "path": [
      "items",
      4,
      "last_active"
    ],
    "responseUnwrap": "data",
    "valueType": "date"
  },
  "5359:17575": {
    "evidence": "repeated_cards",
    "format": null,
    "frameId": "5359:17424",
    "kind": "item",
    "nodeId": "5359:17575",
    "operation": "GET /api/v1/users",
    "path": [
      "items",
      5
    ],
    "responseUnwrap": "data",
    "valueType": null
  },
  "5359:17578": {
    "evidence": "role:title",
    "format": null,
    "frameId": "5359:17424",
    "kind": "text",
    "nodeId": "5359:17578",
    "operation": "GET /api/v1/users",
    "path": [
      "items",
      5,
      "name"
    ],
    "responseUnwrap": "data",
    "valueType": "string"
  },
  "5359:17579": {
    "evidence": "role:description",
    "format": null,
    "frameId": "5359:17424",
    "kind": "text",
    "nodeId": "5359:17579",
    "operation": "GET /api/v1/users",
    "path": [
      "items",
      5,
      "email"
    ],
    "responseUnwrap": "data",
    "valueType": "string"
  },
  "5359:17581": {
    "evidence": "role:badge",
    "format": null,
    "frameId": "5359:17424",
    "kind": "text",
    "nodeId": "5359:17581",
    "operation": "GET /api/v1/users",
    "path": [
      "items",
      5,
      "role"
    ],
    "responseUnwrap": "data",
    "valueType": "string"
  },
  "5359:17582": {
    "evidence": "role:timestamp",
    "format": "relative",
    "frameId": "5359:17424",
    "kind": "text",
    "nodeId": "5359:17582",
    "operation": "GET /api/v1/users",
    "path": [
      "items",
      5,
      "last_active"
    ],
    "responseUnwrap": "data",
    "valueType": "date"
  },
  "5329:12286": {
    "evidence": "repeated_cards",
    "format": null,
    "frameId": "5329:12177",
    "kind": "item",
    "nodeId": "5329:12286",
    "operation": "GET /api/v1/marketing-team-member/audit-log?limit=6&page=1",
    "path": [
      "items",
      0
    ],
    "responseUnwrap": "data",
    "valueType": null
  },
  "5329:12287": {
    "evidence": "role:timestamp",
    "format": "timestamp_short",
    "frameId": "5329:12177",
    "kind": "text",
    "nodeId": "5329:12287",
    "operation": "GET /api/v1/marketing-team-member/audit-log?limit=6&page=1",
    "path": [
      "items",
      0,
      "created_at"
    ],
    "responseUnwrap": "data",
    "valueType": "date"
  },
  "5329:12290": {
    "evidence": "role:actor",
    "format": null,
    "frameId": "5329:12177",
    "kind": "text",
    "nodeId": "5329:12290",
    "operation": "GET /api/v1/marketing-team-member/audit-log?limit=6&page=1",
    "path": [
      "items",
      0,
      "user_name"
    ],
    "responseUnwrap": "data",
    "valueType": "string"
  },
  "5329:12291": {
    "evidence": "role:action",
    "format": null,
    "frameId": "5329:12177",
    "kind": "text",
    "nodeId": "5329:12291",
    "operation": "GET /api/v1/marketing-team-member/audit-log?limit=6&page=1",
    "path": [
      "items",
      0,
      "action"
    ],
    "responseUnwrap": "data",
    "valueType": "string"
  },
  "5329:12292": {
    "evidence": "role:resource",
    "format": null,
    "frameId": "5329:12177",
    "kind": "text",
    "nodeId": "5329:12292",
    "operation": "GET /api/v1/marketing-team-member/audit-log?limit=6&page=1",
    "path": [
      "items",
      0,
      "title"
    ],
    "responseUnwrap": "data",
    "valueType": "string"
  },
  "5329:12296": {
    "evidence": "repeated_cards",
    "format": null,
    "frameId": "5329:12177",
    "kind": "item",
    "nodeId": "5329:12296",
    "operation": "GET /api/v1/marketing-team-member/audit-log?limit=6&page=1",
    "path": [
      "items",
      1
    ],
    "responseUnwrap": "data",
    "valueType": null
  },
  "5329:12297": {
    "evidence": "role:timestamp",
    "format": "timestamp_short",
    "frameId": "5329:12177",
    "kind": "text",
    "nodeId": "5329:12297",
    "operation": "GET /api/v1/marketing-team-member/audit-log?limit=6&page=1",
    "path": [
      "items",
      1,
      "created_at"
    ],
    "responseUnwrap": "data",
    "valueType": "date"
  },
  "5329:12300": {
    "evidence": "role:actor",
    "format": null,
    "frameId": "5329:12177",
    "kind": "text",
    "nodeId": "5329:12300",
    "operation": "GET /api/v1/marketing-team-member/audit-log?limit=6&page=1",
    "path": [
      "items",
      1,
      "user_name"
    ],
    "responseUnwrap": "data",
    "valueType": "string"
  },
  "5329:12301": {
    "evidence": "role:action",
    "format": null,
    "frameId": "5329:12177",
    "kind": "text",
    "nodeId": "5329:12301",
    "operation": "GET /api/v1/marketing-team-member/audit-log?limit=6&page=1",
    "path": [
      "items",
      1,
      "action"
    ],
    "responseUnwrap": "data",
    "valueType": "string"
  },
  "5329:12302": {
    "evidence": "role:resource",
    "format": null,
    "frameId": "5329:12177",
    "kind": "text",
    "nodeId": "5329:12302",
    "operation": "GET /api/v1/marketing-team-member/audit-log?limit=6&page=1",
    "path": [
      "items",
      1,
      "title"
    ],
    "responseUnwrap": "data",
    "valueType": "string"
  },
  "5329:12306": {
    "evidence": "repeated_cards",
    "format": null,
    "frameId": "5329:12177",
    "kind": "item",
    "nodeId": "5329:12306",
    "operation": "GET /api/v1/marketing-team-member/audit-log?limit=6&page=1",
    "path": [
      "items",
      2
    ],
    "responseUnwrap": "data",
    "valueType": null
  },
  "5329:12307": {
    "evidence": "role:timestamp",
    "format": "timestamp_short",
    "frameId": "5329:12177",
    "kind": "text",
    "nodeId": "5329:12307",
    "operation": "GET /api/v1/marketing-team-member/audit-log?limit=6&page=1",
    "path": [
      "items",
      2,
      "created_at"
    ],
    "responseUnwrap": "data",
    "valueType": "date"
  },
  "5329:12310": {
    "evidence": "role:actor",
    "format": null,
    "frameId": "5329:12177",
    "kind": "text",
    "nodeId": "5329:12310",
    "operation": "GET /api/v1/marketing-team-member/audit-log?limit=6&page=1",
    "path": [
      "items",
      2,
      "user_name"
    ],
    "responseUnwrap": "data",
    "valueType": "string"
  },
  "5329:12311": {
    "evidence": "role:action",
    "format": null,
    "frameId": "5329:12177",
    "kind": "text",
    "nodeId": "5329:12311",
    "operation": "GET /api/v1/marketing-team-member/audit-log?limit=6&page=1",
    "path": [
      "items",
      2,
      "action"
    ],
    "responseUnwrap": "data",
    "valueType": "string"
  },
  "5329:12312": {
    "evidence": "role:resource",
    "format": null,
    "frameId": "5329:12177",
    "kind": "text",
    "nodeId": "5329:12312",
    "operation": "GET /api/v1/marketing-team-member/audit-log?limit=6&page=1",
    "path": [
      "items",
      2,
      "title"
    ],
    "responseUnwrap": "data",
    "valueType": "string"
  },
  "5329:12316": {
    "evidence": "repeated_cards",
    "format": null,
    "frameId": "5329:12177",
    "kind": "item",
    "nodeId": "5329:12316",
    "operation": "GET /api/v1/marketing-team-member/audit-log?limit=6&page=1",
    "path": [
      "items",
      3
    ],
    "responseUnwrap": "data",
    "valueType": null
  },
  "5329:12317": {
    "evidence": "role:timestamp",
    "format": "timestamp_short",
    "frameId": "5329:12177",
    "kind": "text",
    "nodeId": "5329:12317",
    "operation": "GET /api/v1/marketing-team-member/audit-log?limit=6&page=1",
    "path": [
      "items",
      3,
      "created_at"
    ],
    "responseUnwrap": "data",
    "valueType": "date"
  },
  "5329:12320": {
    "evidence": "role:actor",
    "format": null,
    "frameId": "5329:12177",
    "kind": "text",
    "nodeId": "5329:12320",
    "operation": "GET /api/v1/marketing-team-member/audit-log?limit=6&page=1",
    "path": [
      "items",
      3,
      "user_name"
    ],
    "responseUnwrap": "data",
    "valueType": "string"
  },
  "5329:12321": {
    "evidence": "role:action",
    "format": null,
    "frameId": "5329:12177",
    "kind": "text",
    "nodeId": "5329:12321",
    "operation": "GET /api/v1/marketing-team-member/audit-log?limit=6&page=1",
    "path": [
      "items",
      3,
      "action"
    ],
    "responseUnwrap": "data",
    "valueType": "string"
  },
  "5329:12322": {
    "evidence": "role:resource",
    "format": null,
    "frameId": "5329:12177",
    "kind": "text",
    "nodeId": "5329:12322",
    "operation": "GET /api/v1/marketing-team-member/audit-log?limit=6&page=1",
    "path": [
      "items",
      3,
      "title"
    ],
    "responseUnwrap": "data",
    "valueType": "string"
  },
  "5329:12326": {
    "evidence": "repeated_cards",
    "format": null,
    "frameId": "5329:12177",
    "kind": "item",
    "nodeId": "5329:12326",
    "operation": "GET /api/v1/marketing-team-member/audit-log?limit=6&page=1",
    "path": [
      "items",
      4
    ],
    "responseUnwrap": "data",
    "valueType": null
  },
  "5329:12327": {
    "evidence": "role:timestamp",
    "format": "timestamp_short",
    "frameId": "5329:12177",
    "kind": "text",
    "nodeId": "5329:12327",
    "operation": "GET /api/v1/marketing-team-member/audit-log?limit=6&page=1",
    "path": [
      "items",
      4,
      "created_at"
    ],
    "responseUnwrap": "data",
    "valueType": "date"
  },
  "5329:12330": {
    "evidence": "role:actor",
    "format": null,
    "frameId": "5329:12177",
    "kind": "text",
    "nodeId": "5329:12330",
    "operation": "GET /api/v1/marketing-team-member/audit-log?limit=6&page=1",
    "path": [
      "items",
      4,
      "user_name"
    ],
    "responseUnwrap": "data",
    "valueType": "string"
  },
  "5329:12331": {
    "evidence": "role:action",
    "format": null,
    "frameId": "5329:12177",
    "kind": "text",
    "nodeId": "5329:12331",
    "operation": "GET /api/v1/marketing-team-member/audit-log?limit=6&page=1",
    "path": [
      "items",
      4,
      "action"
    ],
    "responseUnwrap": "data",
    "valueType": "string"
  },
  "5329:12332": {
    "evidence": "role:resource",
    "format": null,
    "frameId": "5329:12177",
    "kind": "text",
    "nodeId": "5329:12332",
    "operation": "GET /api/v1/marketing-team-member/audit-log?limit=6&page=1",
    "path": [
      "items",
      4,
      "title"
    ],
    "responseUnwrap": "data",
    "valueType": "string"
  },
  "5329:12336": {
    "evidence": "repeated_cards",
    "format": null,
    "frameId": "5329:12177",
    "kind": "item",
    "nodeId": "5329:12336",
    "operation": "GET /api/v1/marketing-team-member/audit-log?limit=6&page=1",
    "path": [
      "items",
      5
    ],
    "responseUnwrap": "data",
    "valueType": null
  },
  "5329:12337": {
    "evidence": "role:timestamp",
    "format": "timestamp_short",
    "frameId": "5329:12177",
    "kind": "text",
    "nodeId": "5329:12337",
    "operation": "GET /api/v1/marketing-team-member/audit-log?limit=6&page=1",
    "path": [
      "items",
      5,
      "created_at"
    ],
    "responseUnwrap": "data",
    "valueType": "date"
  },
  "5329:12340": {
    "evidence": "role:actor",
    "format": null,
    "frameId": "5329:12177",
    "kind": "text",
    "nodeId": "5329:12340",
    "operation": "GET /api/v1/marketing-team-member/audit-log?limit=6&page=1",
    "path": [
      "items",
      5,
      "user_name"
    ],
    "responseUnwrap": "data",
    "valueType": "string"
  },
  "5329:12341": {
    "evidence": "role:action",
    "format": null,
    "frameId": "5329:12177",
    "kind": "text",
    "nodeId": "5329:12341",
    "operation": "GET /api/v1/marketing-team-member/audit-log?limit=6&page=1",
    "path": [
      "items",
      5,
      "action"
    ],
    "responseUnwrap": "data",
    "valueType": "string"
  },
  "5329:12342": {
    "evidence": "role:resource",
    "format": null,
    "frameId": "5329:12177",
    "kind": "text",
    "nodeId": "5329:12342",
    "operation": "GET /api/v1/marketing-team-member/audit-log?limit=6&page=1",
    "path": [
      "items",
      5,
      "title"
    ],
    "responseUnwrap": "data",
    "valueType": "string"
  },
  "I5645:60760;5589:52798": {
    "evidence": "calendar:panel_title",
    "format": "month_year",
    "frameId": "5645:60757",
    "kind": "text",
    "nodeId": "I5645:60760;5589:52798",
    "operation": "GET /api/v1/marketing-team-member/calendar?year=2025",
    "path": [
      "month"
    ],
    "responseUnwrap": "data",
    "valueType": "number"
  },
  "I5645:60760;5596:52816": {
    "evidence": "calendar:panel_title",
    "format": "month_year",
    "frameId": "5645:60757",
    "kind": "text",
    "nodeId": "I5645:60760;5596:52816",
    "operation": "GET /api/v1/marketing-team-member/calendar?year=2026",
    "path": [
      "month"
    ],
    "responseUnwrap": "data",
    "valueType": "number"
  },
  "I5645:60760;5589:52803": {
    "evidence": "calendar:activity_count",
    "format": "activities_count",
    "frameId": "5645:60757",
    "kind": "text",
    "nodeId": "I5645:60760;5589:52803",
    "operation": "GET /api/v1/marketing-team-member/calendar?year=2025",
    "path": [
      "activities"
    ],
    "responseUnwrap": "data",
    "valueType": null
  },
  "I5645:60760;5596:52821": {
    "evidence": "calendar:activity_count",
    "format": "activities_count",
    "frameId": "5645:60757",
    "kind": "text",
    "nodeId": "I5645:60760;5596:52821",
    "operation": "GET /api/v1/marketing-team-member/calendar?year=2026",
    "path": [
      "activities"
    ],
    "responseUnwrap": "data",
    "valueType": null
  }
};

/** Screen frame id → read operations its display bindings consume. */
export const FIGMA_DISPLAY_OPERATIONS: Readonly<Record<string, readonly string[]>> = {
  "5329:12027": [
    "GET /api/v1/marketing-team-member/profile"
  ],
  "5359:17106": [
    "GET /api/v1/marketing-team-member/activities"
  ],
  "5449:19126": [
    "GET /api/v1/marketing-team-member/categories"
  ],
  "5621:28270": [
    "GET /api/v1/marketing-team-member/holidays"
  ],
  "5329:12177": [
    "GET /api/v1/marketing-team-member/audit-log?limit=6&page=1"
  ],
  "5359:17424": [
    "GET /api/v1/users"
  ],
  "5645:60757": [
    "GET /api/v1/marketing-team-member/calendar?year=2026",
    "GET /api/v1/marketing-team-member/calendar?year=2025",
    "GET /api/v1/marketing-team-member/performance-metrics"
  ],
  "5584:26945": [
    "GET /api/v1/marketing-team-member/activities",
    "GET /api/v1/marketing-team-member/calendar?year=2026",
    "GET /api/v1/marketing-team-member/calendar?year=2025",
    "GET /api/v1/marketing-team-member/performance-metrics"
  ],
  "5645:33753": [
    "GET /api/v1/marketing-team-member/calendar?year=2026",
    "GET /api/v1/marketing-team-member/calendar?year=2025",
    "GET /api/v1/marketing-team-member/performance-metrics"
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
  listOffsets.clear();
  version += 1;
  listeners.forEach((listener) => listener());
}

// ── Client-side list paging ──────────────────────────────────────────────────
// The painted frames show one page of repeated cards (e.g. 6 holiday rows).
// For lists the API serves unpaged (no page/limit params), the pagination bar
// slices the full response client-side: numeric item indices in binding paths
// are shifted by the operation's offset, so card N renders items[offset + N].
const listOffsets = new Map<string, number>();

/** Shift repeated-card indices for one operation (client-side pagination). */
export function setListOffset(operation: string, offset: number): void {
  const normalized = Math.max(0, Math.floor(offset));
  if ((listOffsets.get(operation) ?? 0) === normalized) {
    return;
  }
  listOffsets.set(operation, normalized);
  version += 1;
  listeners.forEach((listener) => listener());
}

export function getListOffset(operation: string): number {
  return listOffsets.get(operation) ?? 0;
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
  const offset = listOffsets.get(binding.operation) ?? 0;
  for (const part of binding.path) {
    if (current === undefined || current === null) {
      break;
    }
    current = typeof part === "number"
      ? (Array.isArray(current) ? current[part + offset] : undefined)
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
    case "timestamp_short":
      return `${date.toLocaleDateString("en-US", { month: "short", day: "numeric" })}, ${date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true })}`;
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
  if (binding.format === "month_year" || binding.format === "activities_count") {
    const { loaded, value } = lookup({ ...binding, path: [] });
    if (!loaded || value === undefined || value === null) {
      return fallback;
    }
    if (binding.format === "month_year") {
      const record = (value ?? {}) as { month?: number; year?: number };
      const month = typeof record.month === "number" ? record.month : 1;
      const year = typeof record.year === "number" ? record.year : 2026;
      return `${MONTH_NAMES[(month - 1) % 12]} ${year}`;
    }
    const activities = Array.isArray(value)
      ? value
      : ((value as { activities?: unknown[] } | null)?.activities ?? null);
    return Array.isArray(activities) ? `${activities.length} activities` : fallback;
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

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/** React hook: re-render when any published payload, select option, or offset changes. */
export function useFigmaPayloadVersion(): number {
  return useSyncExternalStore(subscribe, snapshot, snapshot);
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
  useSyncExternalStore(subscribe, snapshot, snapshot);
  return selectOptions.get(nodeId) ?? [];
}
