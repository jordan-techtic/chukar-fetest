/** Row-level mutations for Manage Holiday (frame 5621:28270). */

export const HOLIDAY_LIST_OPERATION = "GET /api/v1/marketing-team-member/holidays";

export type HolidayRowMutationKind = "delete" | "status_toggle";

export interface HolidayRowMutationBinding {
  readonly actionNodeId: string;
  readonly displayRowIndex: number;
  readonly kind: HolidayRowMutationKind;
}

/** Delete icon nodes → display row index (0–5 on current page). */
export const HOLIDAY_ROW_MUTATIONS: readonly HolidayRowMutationBinding[] = [
  { actionNodeId: "5621:28318", displayRowIndex: 0, kind: "delete" },
  { actionNodeId: "5621:28333", displayRowIndex: 1, kind: "delete" },
  { actionNodeId: "5621:28348", displayRowIndex: 2, kind: "delete" },
  { actionNodeId: "5621:28363", displayRowIndex: 3, kind: "delete" },
  { actionNodeId: "5621:28378", displayRowIndex: 4, kind: "delete" },
  { actionNodeId: "5621:28393", displayRowIndex: 5, kind: "delete" },
  { actionNodeId: "5621:28312", displayRowIndex: 0, kind: "status_toggle" },
  { actionNodeId: "5621:28327", displayRowIndex: 1, kind: "status_toggle" },
  { actionNodeId: "5621:28342", displayRowIndex: 2, kind: "status_toggle" },
  { actionNodeId: "5621:28357", displayRowIndex: 3, kind: "status_toggle" },
  { actionNodeId: "5621:28372", displayRowIndex: 4, kind: "status_toggle" },
  { actionNodeId: "5621:28387", displayRowIndex: 5, kind: "status_toggle" },
];

const mutationByNode = new Map(
  HOLIDAY_ROW_MUTATIONS.map((entry) => [entry.actionNodeId, entry] as const),
);

export function holidayRowMutationForNode(
  actionNodeId: string,
): HolidayRowMutationBinding | undefined {
  return mutationByNode.get(actionNodeId);
}

/** Upload List control (multipart import). */
export const HOLIDAY_IMPORT_SUBMIT_NODE = "5621:28192";
