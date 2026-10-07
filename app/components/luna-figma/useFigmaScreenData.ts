/** luna-spec-codegen: data-hook — wire API data here; do not restyle.
 * Consumed reads (role read, non-empty fields) use resolveBoundRead from
 * figmaMockReads.ts inside loadReads. This stub does not fetch.
 */
import { createElement, Fragment, type ReactNode } from "react";

export type FigmaFieldBinding = {
  value?: string;
  onChange?: (event: { target: { value: string } }) => void;
};

export type FigmaActionBinding = {
  onClick?: (event: { preventDefault: () => void }) => void;
};

/**
 * Mounted around every screen by FigmaScreenPage. Put screen state,
 * API loading, and submit handlers here so the owned layout files never
 * need behavior edits.
 */
export function FigmaScreenDataProvider({
  children,
}: {
  routePath?: string;
  children?: ReactNode;
}) {
  return createElement(Fragment, null, children);
}

/** Default bindings add no DOM props, so the compiled frame stays unchanged. */
export function figmaFieldProps(_field: string): FigmaFieldBinding {
  return {};
}

/**
 * Semantic actions from Figma prototype reactions and field-contract
 * submits. The action id is stamped as data-figma-action. Navigation
 * destinations assign a route; submit action ids must call submit()
 * from the provider. The default records which action fired and does
 * not navigate or invent a destination.
 */
export function figmaActionProps(action: string): FigmaActionBinding {
  return {
    onClick: () => {
      document.documentElement.setAttribute("data-figma-action-fired", action);
    },
  };
}

export function useFigmaScreenData() {
  return {
    bound: "",
    values: {} as Record<string, string>,
    submit: async () => {},
  };
}
