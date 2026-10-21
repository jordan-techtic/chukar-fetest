/** luna-spec-codegen: data-hook — maps prototype action ids to application IR metadata. */
import applicationIr from "./application-ir.json";

export type FigmaApplicationActionKind =
  | "navigate"
  | "open_dialog"
  | "close_dialog"
  | "prototype";

export type FigmaApplicationAction = {
  readonly kind: FigmaApplicationActionKind;
  readonly destination_route?: string;
  readonly source_node_id?: string;
};

type IrAction = {
  readonly prototype_action_id?: string;
  readonly kind?: string;
  readonly destination_route?: string;
  readonly source_node_id?: string;
};

const ACTION_BY_ID = new Map<string, FigmaApplicationAction>();

for (const entry of Object.values(applicationIr.actions as Record<string, IrAction>)) {
  const id = entry.prototype_action_id;
  if (!id) {
    continue;
  }
  const kind = entry.kind;
  if (
    kind !== "navigate" &&
    kind !== "open_dialog" &&
    kind !== "close_dialog" &&
    kind !== "prototype"
  ) {
    continue;
  }
  ACTION_BY_ID.set(id, {
    kind,
    destination_route: entry.destination_route,
    source_node_id: entry.source_node_id,
  });
}

export function figmaApplicationAction(actionId: string): FigmaApplicationAction | undefined {
  return ACTION_BY_ID.get(actionId);
}
