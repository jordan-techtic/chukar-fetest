/** luna-spec-codegen: data-hook — wire API data here; do not restyle. */
"use client";

import {
  createContext,
  createElement,
  startTransition,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ChangeEvent,
  type MouseEvent,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";

import { fetchContractRead, fetchContractWrite } from "@/lib/api/contract-api";
import { ApiRequestError } from "@/lib/api/client";
import {
  getMarketingTeamMemberCalendar,
  MARKETING_TEAM_MEMBER_CALENDAR_PATH,
} from "@/lib/api/marketing-team-member-calendar";
import {
  getMarketingTeamMemberPerformanceMetrics,
  MARKETING_TEAM_MEMBER_PERFORMANCE_METRICS_PATH,
} from "@/lib/api/marketing-team-member-performance-metrics";
import {
  getMarketingTeamMemberProfile,
  updateMarketingTeamMemberProfile,
} from "@/lib/api/marketing-team-member-profile";
import { clearAccessToken, getAccessToken } from "@/lib/auth/token-storage";

import { FIGMA_ACTIONS } from "./figmaActions";
import { clearReadPayloads, publishReadPayload } from "./figmaDisplay";
import {
  fieldErrorsFromResponse,
  figmaReadOperation,
  figmaReadOperations,
  figmaWriteOperation,
  requestBodyFor,
  type FigmaFieldValues,
  validateValues,
  valuesFromResponse,
} from "./figmaFieldContract";
import { resolveBoundRead } from "./figmaMockReads";

export type FigmaFieldBinding = {
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  disabled?: boolean;
  readOnly?: boolean;
  "aria-invalid"?: boolean;
  "aria-describedby"?: string;
  title?: string;
};

export type FigmaActionBinding = {
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  disabled?: boolean;
  "aria-pressed"?: boolean;
};

const MY_PROFILE_FRAME_ID = "5329:12027";
const CREATE_ACTIVITY_FRAME_ID = "5217:16193";

const CREATE_ACTIVITY_CATEGORY_ACTIONS: Readonly<
  Record<string, { readonly nodeId: string; readonly category: string }>
> = {
  act_9a5165463dd2: { nodeId: "5217:17063", category: "promotions" },
  act_7b13b11585e8: { nodeId: "5217:17064", category: "content" },
  act_fd861928229b: { nodeId: "5217:17065", category: "focuses" },
};

const CREATE_ACTIVITY_TYPE_NODE_IDS = [
  "5217:17063",
  "5217:17064",
  "5217:17065",
] as const;

const ROUTE_TO_FRAME: Readonly<Record<string, string>> = {
  "": "5217:16193",
  "create-activity-popup": "5217:16193",
  "week-calendar-historical-view": "5584:26945",
  "annual-calendar-default": "5645:60757",
  "manage-activity": "5359:17106",
  "my-profile": MY_PROFILE_FRAME_ID,
  calendar: "5602:71490",
  "week-calendar-default": "5602:71490",
};

type ScreenDataContextValue = {
  bound: string;
  values: FigmaFieldValues;
  fieldErrors: Record<string, string>;
  variantStates: Record<string, boolean>;
  submitting: boolean;
  loading: boolean;
  statusMessage: string;
  profileLoadError: string;
  setFieldValue: (field: string, value: string) => void;
  setStatusMessage: (message: string) => void;
  toggleVariant: (nodeId: string) => void;
  submit: () => Promise<void>;
  retryProfileLoad: () => Promise<void>;
};

const ScreenDataContext = createContext<ScreenDataContextValue | null>(null);

function unwrapPayload(payload: unknown, unwrapKey: string | null): unknown {
  if (!unwrapKey || payload === null || typeof payload !== "object") {
    return payload;
  }
  const record = payload as Record<string, unknown>;
  return record[unwrapKey] ?? payload;
}

function frameIdForRoute(routePath?: string): string {
  return ROUTE_TO_FRAME[routePath ?? ""] ?? "";
}

function cardRootForVariantNode(nodeId: string): HTMLElement | null {
  const node = document.querySelector(`[data-figma-node="${nodeId}"]`);
  return node?.closest('[data-figma-component="5602:68955"]') as HTMLElement | null;
}

function applyVariantDom(nodeId: string, active: boolean): void {
  const target = document.querySelector(`[data-figma-node="${nodeId}"]`);
  if (target instanceof HTMLElement) {
    target.setAttribute("data-figma-variant-active", active ? "true" : "false");
  }
  const card = cardRootForVariantNode(nodeId);
  if (card) {
    card.setAttribute("data-figma-variant-active", active ? "true" : "false");
  }
}

function applyCategorySelection(selectedNodeId: string): void {
  for (const nodeId of CREATE_ACTIVITY_TYPE_NODE_IDS) {
    const target = document.querySelector(`[data-figma-node="${nodeId}"]`);
    if (target instanceof HTMLElement) {
      const selected = nodeId === selectedNodeId;
      target.setAttribute("data-figma-category-selected", selected ? "true" : "false");
      target.setAttribute("aria-pressed", selected ? "true" : "false");
    }
  }
}

export function FigmaScreenDataProvider({
  routePath = "",
  children,
}: {
  routePath?: string;
  children?: ReactNode;
}) {
  const router = useRouter();
  const frameId = frameIdForRoute(routePath);
  const [values, setValues] = useState<FigmaFieldValues>({});
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [variantStates, setVariantStates] = useState<Record<string, boolean>>({});
  const [submitting, setSubmitting] = useState(false);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [profileLoadError, setProfileLoadError] = useState("");

  const redirectToLogin = useCallback(() => {
    clearAccessToken();
    clearReadPayloads();
    const redirect = encodeURIComponent(
      `${window.location.pathname}${window.location.search}`,
    );
    router.replace(`/login?redirect=${redirect}`);
  }, [router]);

  const setFieldValue = useCallback((field: string, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setFieldErrors((current) => {
      if (!current[field]) {
        return current;
      }
      const next = { ...current };
      delete next[field];
      return next;
    });
  }, []);

  const toggleVariant = useCallback((nodeId: string) => {
    setVariantStates((current) => {
      const nextActive = !current[nodeId];
      applyVariantDom(nodeId, nextActive);
      return { ...current, [nodeId]: nextActive };
    });
  }, []);

  const loadProfileRead = useCallback(async () => {
    const readOp = figmaReadOperation(MY_PROFILE_FRAME_ID);
    if (!readOp) {
      return;
    }

    setProfileLoadError("");
    const token = getAccessToken();

    try {
      const response = await getMarketingTeamMemberProfile(token);
      publishReadPayload(readOp.method, readOp.path, response.body);
      const merged = valuesFromResponse(
        readOp,
        unwrapPayload(response.body, readOp.responseUnwrap),
      );
      if (Object.keys(merged).length > 0) {
        setValues((current) => ({ ...current, ...merged }));
      }
    } catch (error) {
      if (error instanceof ApiRequestError && error.status === 401) {
        redirectToLogin();
        return;
      }
      setProfileLoadError(
        error instanceof ApiRequestError
          ? error.message
          : "Unable to load profile.",
      );
    }
  }, [redirectToLogin]);

  const loadReads = useCallback(async (activeFrameId: string) => {
    if (!activeFrameId) {
      return;
    }
    setLoading(true);
    setStatusMessage("");
    const token = getAccessToken();
    const readOps = figmaReadOperations(activeFrameId);

    try {
      for (const op of readOps) {
        const resolution = resolveBoundRead(op);

        if (resolution.mode === "missing") {
          setStatusMessage(resolution.diagnostic);
          continue;
        }

        let body: unknown;
        if (resolution.mode === "mock") {
          body = resolution.body;
        } else if (
          activeFrameId === MY_PROFILE_FRAME_ID &&
          op.path === "/api/v1/marketing-team-member/profile"
        ) {
          try {
            const response = await getMarketingTeamMemberProfile(token);
            body = response.body;
            setProfileLoadError("");
          } catch (error) {
            if (error instanceof ApiRequestError && error.status === 401) {
              redirectToLogin();
              return;
            }
            setProfileLoadError(
              error instanceof ApiRequestError
                ? error.message
                : "Unable to load profile.",
            );
            continue;
          }
        } else if (op.method === "GET" && op.path === MARKETING_TEAM_MEMBER_CALENDAR_PATH) {
          try {
            const response = await getMarketingTeamMemberCalendar(undefined, token);
            body = response.body;
          } catch (error) {
            if (error instanceof ApiRequestError && error.status === 401) {
              redirectToLogin();
              return;
            }
            setStatusMessage(
              error instanceof ApiRequestError
                ? error.message
                : "Unable to load data.",
            );
            continue;
          }
        } else if (
          op.method === "GET" &&
          op.path === MARKETING_TEAM_MEMBER_PERFORMANCE_METRICS_PATH
        ) {
          try {
            const response = await getMarketingTeamMemberPerformanceMetrics(
              undefined,
              token,
            );
            body = response.body;
          } catch (error) {
            if (error instanceof ApiRequestError && error.status === 401) {
              redirectToLogin();
              return;
            }
            setStatusMessage(
              error instanceof ApiRequestError
                ? error.message
                : "Unable to load data.",
            );
            continue;
          }
        } else {
          try {
            const response = await fetchContractRead(op.method, op.path, token);
            body = response.body;
          } catch (error) {
            if (error instanceof ApiRequestError && error.status === 401) {
              redirectToLogin();
              return;
            }
            setStatusMessage(
              error instanceof ApiRequestError
                ? error.message
                : "Unable to load data.",
            );
            continue;
          }
        }

        publishReadPayload(op.method, op.path, body);
        const merged = valuesFromResponse(op, unwrapPayload(body, op.responseUnwrap));
        if (Object.keys(merged).length > 0) {
          setValues((current) => ({ ...current, ...merged }));
        }
      }
    } finally {
      setLoading(false);
    }
  }, [redirectToLogin]);

  useEffect(() => {
    startTransition(() => {
      void loadReads(frameId);
    });
  }, [frameId, loadReads]);

  useEffect(() => {
    for (const [nodeId, active] of Object.entries(variantStates)) {
      applyVariantDom(nodeId, active);
    }
  }, [variantStates]);

  const submit = useCallback(async () => {
    const writeOp = figmaWriteOperation(frameId);
    if (!writeOp) {
      return;
    }

    const clientErrors = validateValues(writeOp, values);
    if (Object.keys(clientErrors).length > 0) {
      setFieldErrors(clientErrors);
      return;
    }

    if (writeOp.unboundRequired.length > 0) {
      setStatusMessage(
        `Cannot create activity from this step: ${writeOp.unboundRequired.join(", ")} are not bound in the design.`,
      );
      return;
    }

    setSubmitting(true);
    setFieldErrors({});
    setStatusMessage("");

    try {
      const token = getAccessToken();
      const payload = requestBodyFor(writeOp, values);
      const response =
        frameId === MY_PROFILE_FRAME_ID
          ? await updateMarketingTeamMemberProfile(payload, token)
          : await fetchContractWrite(writeOp.method, writeOp.path, payload, token);

      publishReadPayload(writeOp.method, writeOp.path, response.body);
      const readOp = figmaReadOperation(frameId);
      if (readOp) {
        publishReadPayload(readOp.method, readOp.path, response.body);
      }
      const merged = valuesFromResponse(
        writeOp,
        unwrapPayload(response.body, writeOp.responseUnwrap),
      );
      setValues((current) => ({ ...current, ...merged }));
      setStatusMessage(
        typeof response.body === "object" &&
          response.body !== null &&
          "message" in response.body &&
          typeof (response.body as { message: unknown }).message === "string"
          ? (response.body as { message: string }).message
          : "Saved.",
      );
      if (frameId === MY_PROFILE_FRAME_ID) {
        const readOpAfterSave = figmaReadOperation(frameId);
        if (readOpAfterSave) {
          const refreshed = await getMarketingTeamMemberProfile(token);
          publishReadPayload(readOpAfterSave.method, readOpAfterSave.path, refreshed.body);
          const mergedAfterRefresh = valuesFromResponse(
            readOpAfterSave,
            unwrapPayload(refreshed.body, readOpAfterSave.responseUnwrap),
          );
          setValues((current) => ({ ...current, ...mergedAfterRefresh }));
        }
      } else {
        await loadReads(frameId);
      }
    } catch (error) {
      if (error instanceof ApiRequestError) {
        if (error.status === 401) {
          redirectToLogin();
          return;
        }
        setFieldErrors(fieldErrorsFromResponse(writeOp, error.body));
        setStatusMessage(error.message);
      } else {
        setStatusMessage("Request failed.");
      }
    } finally {
      setSubmitting(false);
    }
  }, [frameId, loadReads, redirectToLogin, values]);

  const contextValue = useMemo<ScreenDataContextValue>(
    () => ({
      bound: frameId,
      values,
      fieldErrors,
      variantStates,
      submitting,
      loading,
      statusMessage,
      profileLoadError,
      setFieldValue,
      setStatusMessage,
      toggleVariant,
      submit,
      retryProfileLoad: loadProfileRead,
    }),
    [
      fieldErrors,
      frameId,
      loadProfileRead,
      loading,
      profileLoadError,
      setFieldValue,
      setStatusMessage,
      statusMessage,
      submit,
      submitting,
      toggleVariant,
      values,
      variantStates,
    ],
  );

  return createElement(
    ScreenDataContext.Provider,
    { value: contextValue },
    createElement(
      "div",
      { className: "contents", "data-figma-provider-root": "true" },
      createElement(
        "p",
        {
          className: "sr-only",
          role: "status",
          "aria-live": "polite",
          "aria-atomic": "true",
        },
        statusMessage,
      ),
      loading ? createElement("p", { className: "sr-only", role: "status" }, "Loading") : null,
      children,
    ),
  );
}

function useScreenData(): ScreenDataContextValue {
  const context = useContext(ScreenDataContext);
  if (!context) {
    return {
      bound: "",
      values: {},
      fieldErrors: {},
      variantStates: {},
      submitting: false,
      loading: false,
      statusMessage: "",
      profileLoadError: "",
      setFieldValue: () => {},
      setStatusMessage: () => {},
      toggleVariant: () => {},
      submit: async () => {},
      retryProfileLoad: async () => {},
    };
  }
  return context;
}

export function useFigmaFieldProps(field: string): FigmaFieldBinding {
  const { values, fieldErrors, submitting, loading, setFieldValue } = useScreenData();
  const error = fieldErrors[field];
  const errorId = error ? `figma-field-error-${field}` : undefined;
  const busy = submitting || loading;

  return {
    value: typeof values[field] === "boolean" ? String(values[field]) : (values[field] ?? ""),
    onChange: (event) => {
      setFieldValue(field, event.target.value);
    },
    disabled: busy,
    readOnly: busy,
    "aria-invalid": Boolean(error),
    "aria-describedby": errorId,
    title: error,
  };
}

export function useFigmaFieldError(field: string): string | undefined {
  const { fieldErrors } = useScreenData();
  return fieldErrors[field];
}

function actionTriggersSubmit(action: string, frameId: string): boolean {
  const contract = FIGMA_ACTIONS[action];
  if (contract?.kind === "submit") {
    return true;
  }
  const writeOp = figmaWriteOperation(frameId);
  return Boolean(
    writeOp?.submitNodeId &&
      contract?.sourceNodeId &&
      contract.sourceNodeId === writeOp.submitNodeId,
  );
}

export function useFigmaActionProps(action: string): FigmaActionBinding {
  const {
    bound,
    values,
    submitting,
    loading,
    submit,
    toggleVariant,
    setFieldValue,
    setStatusMessage,
  } = useScreenData();
  const contract = FIGMA_ACTIONS[action];
  const busy = submitting || loading;
  const categoryPick = CREATE_ACTIVITY_CATEGORY_ACTIONS[action];

  return {
    disabled: busy,
    "aria-pressed":
      categoryPick && values["activity-category"] === categoryPick.category
        ? true
        : undefined,
    onClick: (event) => {
      if (categoryPick && bound === CREATE_ACTIVITY_FRAME_ID) {
        event.preventDefault();
        setFieldValue("activity-category", categoryPick.category);
        applyCategorySelection(categoryPick.nodeId);
        return;
      }

      if (
        action === "act_0290919bbc04" &&
        bound === CREATE_ACTIVITY_FRAME_ID
      ) {
        event.preventDefault();
        if (!values["activity-category"]) {
          setStatusMessage("Select an activity type to continue.");
        }
        return;
      }

      if (!contract) {
        event.preventDefault();
        return;
      }

      if (contract.kind === "change_variant") {
        event.preventDefault();
        event.stopPropagation();
        toggleVariant(contract.sourceNodeId);
        return;
      }

      if (contract.kind === "submit" || actionTriggersSubmit(action, bound)) {
        event.preventDefault();
        void submit();
        return;
      }

      if (contract.destination) {
        event.preventDefault();
        window.location.assign(contract.destination);
        return;
      }

      event.preventDefault();
    },
  };
}

export function useFigmaScreenData() {
  return useScreenData();
}

/** Layout files call these during render; they delegate to the screen data context. */
export function figmaFieldProps(field: string): FigmaFieldBinding {
  // eslint-disable-next-line react-hooks/rules-of-hooks -- generated layout entry point
  return useFigmaFieldProps(field);
}

export function figmaActionProps(action: string): FigmaActionBinding {
  // eslint-disable-next-line react-hooks/rules-of-hooks -- generated layout entry point
  return useFigmaActionProps(action);
}
