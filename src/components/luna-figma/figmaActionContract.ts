/** luna-spec-codegen: data-hook — Figma prototype actions → runtime behavior. */
import applicationIr from "./application-ir.json";

export type FigmaActionKind =
  | "navigate"
  | "open_overlay"
  | "close_overlay"
  | "change_variant"
  | "unknown";

export interface FigmaActionDefinition {
  readonly kind: FigmaActionKind;
  readonly destination?: string;
}

type IrAction = {
  readonly kind?: string;
  readonly prototype_action_id?: string;
  readonly name?: string;
  readonly destination_route?: string;
};

/** Prompt-resolved navigations (project route list / explicit bindings). */
const NAVIGATE_DESTINATION_OVERRIDES: Readonly<Record<string, string>> = {
  act_69b390d9873b: "/marketing-calendar/annual",
  act_734b79aed13d: "/marketing-calendar/annual",
  act_074093d5d23b: "/marketing-calendar/annual",
  act_84f87b00141c: "/marketing-calendar/annual",
  act_25da6f6eb3f0: "/marketing-calendar/annual",
  act_bf0d875e4a2e: "/marketing-calendar/annual",
  act_ad9200300fa8: "/marketing-calendar/annual",
  act_19328ad96367: "/marketing-calendar/annual",
  act_7200e1107db0: "/marketing-calendar/annual",
  act_fa7ae9e7ecde: "/marketing-calendar/annual",
  act_bb1b838c2ccd: "/marketing-calendar/annual",
  act_3817c363078d: "/manage-users",
  act_682a7a535751: "/week-calendar-default",
  act_608aa0d2e082: "/week-calendar-default",
  act_5dacece3ba1d: "/week-calendar-default",
  act_6460d2bfa6d4: "/week-calendar-default-1",
  act_a9b8b4dbf4c5: "/week-calendar-default-1",
  act_ed2875c8f17c: "/week-calendar-historical-view",
  act_fda92fdd76ba: "/week-calendar-historical-view",
  act_580733380960: "/monthly-calendar-historical-view",
  act_860bce35c6ee: "/monthly-calendar-historical-view",
  act_499abfb5824f: "/monthly-calendar-historical-view",
  act_73c9bf7907ce: "/monthly-calendar-historical-view",
  act_caaf16a118b9: "/monthly-calendar-historical-view",
};

function mapIrKind(kind: string | undefined): FigmaActionKind {
  switch (kind) {
    case "navigate":
      return "navigate";
    case "open_dialog":
      return "open_overlay";
    case "close_dialog":
      return "close_overlay";
    case "prototype":
      return "change_variant";
    default:
      return "unknown";
  }
}

function normalizeDestination(route: string): string {
  const trimmed = route.trim();
  if (!trimmed) {
    return "/";
  }
  return trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
}

function buildActionMap(): Readonly<Record<string, FigmaActionDefinition>> {
  const map: Record<string, FigmaActionDefinition> = {};
  const actions = applicationIr.actions as Record<string, IrAction>;
  for (const entry of Object.values(actions)) {
    const id = entry.prototype_action_id ?? entry.name;
    if (!id) {
      continue;
    }
    const kind = mapIrKind(entry.kind);
    map[id] =
      kind === "navigate" && entry.destination_route
        ? { kind, destination: normalizeDestination(entry.destination_route) }
        : { kind };
  }
  for (const [actionId, destination] of Object.entries(NAVIGATE_DESTINATION_OVERRIDES)) {
    map[actionId] = { kind: "navigate", destination };
  }
  return map;
}

export const FIGMA_ACTION_DEFINITIONS: Readonly<Record<string, FigmaActionDefinition>> =
  buildActionMap();

export function figmaActionDefinition(actionId: string): FigmaActionDefinition | undefined {
  return FIGMA_ACTION_DEFINITIONS[actionId];
}
