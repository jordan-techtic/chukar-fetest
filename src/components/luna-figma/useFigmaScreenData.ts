/** luna-spec-codegen: data-hook — wire API data here; do not restyle.
 * Consumed reads (role read, non-empty fields) use resolveBoundRead from
 * figmaMockReads.ts inside loadReads.
 */
"use client";

import {
  createContext,
  createElement,
  Fragment,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import { clearReadPayloads, publishReadPayload } from "./figmaDisplay";
import {
  fieldErrorsFromResponse,
  figmaReadOperations,
  figmaWriteOperation,
  requestBodyFor,
  validateValues,
  valuesFromResponse,
  type FigmaFieldValues,
  type FigmaOperation,
} from "./figmaFieldContract";
import { resolveBoundRead } from "./figmaMockReads";
import { figmaFieldErrorId, setFigmaFieldErrors, useFigmaFieldErrors } from "./figmaFieldErrors";

export type FigmaFieldBinding = {
  value?: string;
  onChange?: (event: { target: { value: string } }) => void;
  "aria-invalid"?: true;
  "aria-describedby"?: string;
};

export type FigmaActionBinding = {
  onClick?: (event: { preventDefault: () => void }) => void;
};

const ROUTE_FRAME: Readonly<Record<string, string>> = {
  "marketing-team-member/week-calendar-historical/2025-2026": "5584:26945",
  "manage-users": "5359:17424",
  "week-calendar-default": "5602:71490",
};

/** Navigate actions whose destination is one of the compiled routes. */
const NAVIGATE_DESTINATION: Readonly<Record<string, string>> = {
  act_3817c363078d: "/manage-users",
  act_608aa0d2e082: "/week-calendar-default",
  act_6460d2bfa6d4: "/week-calendar-default",
  act_682a7a535751: "/week-calendar-default",
  act_a9b8b4dbf4c5: "/week-calendar-default",
  act_ed2875c8f17c: "/marketing-team-member/week-calendar-historical/2025-2026",
  act_fda92fdd76ba: "/marketing-team-member/week-calendar-historical/2025-2026",
};

const OPEN_OVERLAY = new Set<string>([
  "act_02bcf34befab",
  "act_06c37940f54d",
  "act_0728381d9460",
  "act_0a4b299800c3",
  "act_0cb0a53c99a1",
  "act_0dd4ae302327",
  "act_0f667934c905",
  "act_10a2fe67aa7b",
  "act_1152a02fb987",
  "act_125a2d5d83d0",
  "act_170c35257b21",
  "act_1b4093185628",
  "act_2b946156f700",
  "act_338f72d538f4",
  "act_38036b80e77a",
  "act_4433dc6eadc2",
  "act_48a5327e3d01",
  "act_49b39d5596fc",
  "act_4b09b4303acd",
  "act_4ca62c4f178b",
  "act_5d3bddc2d00c",
  "act_60c0265d7824",
  "act_6334ed17b298",
  "act_6441534980cd",
  "act_6d9d2a8fbfdd",
  "act_705a66951665",
  "act_72722fda7d93",
  "act_7344e9e7880a",
  "act_8ab4e85a63ea",
  "act_8dfb23821c94",
  "act_9442c7c92558",
  "act_9608b00adea1",
  "act_9694fc31e322",
  "act_9e536ea73c9b",
  "act_a265bc8eaca0",
  "act_a268edc2f554",
  "act_af4484cd2ab8",
  "act_b05a5772e3b4",
  "act_b53969b2b08b",
  "act_c77f170c369e",
  "act_c7a26ac164e5",
  "act_c7ff9bcc9388",
  "act_cf995b38c14e",
  "act_d0efcf6abaae",
  "act_d59ad22ba149",
  "act_dc4af1ccd352",
  "act_e6a676c62e03",
  "act_e94d6603581d",
  "act_ea024ed0df4f",
  "act_eb03a5748bf5",
  "act_f090b2e84752",
]);

const CLOSE_OVERLAY = new Set<string>([
  "act_0405fb82335d",
  "act_4d0d41980c96",
  "act_843f9ef07e04",
  "act_8e7dfd94745a",
  "act_9167c77e843f",
  "act_be37233c02a1",
  "act_dc40cbd8e8b6",
  "act_e54eb5cc83d4",
  "act_fb19efc84982",
]);

const _dialogListeners = new Set<(actionId: string | null) => void>();

/** Open the dialog associated with an action id. Called by figmaActionProps. */
export function openFigmaDialog(actionId: string): void {
  _dialogListeners.forEach((fn) => fn(actionId));
}

/** Close any open dialog. Call from a dialog's close button or backdrop. */
export function closeFigmaDialog(): void {
  _dialogListeners.forEach((fn) => fn(null));
}

/**
 * Subscribe to dialog open/close state for one action id.
 * Returns { isOpen, close } for use in generated page components.
 */
export function useDialogState(actionId: string): { isOpen: boolean; close: () => void } {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const listener = (id: string | null) => setIsOpen(id === actionId);
    _dialogListeners.add(listener);
    return () => {
      _dialogListeners.delete(listener);
    };
  }, [actionId]);
  return { isOpen, close: closeFigmaDialog };
}

/**
 * No profile/me read is bound in the generated field or display contract,
 * so this stays empty until one is.
 */
export function useCurrentUser(): { name: string; avatarUrl: string } {
  return { name: "", avatarUrl: "" };
}

type ScreenContextValue = {
  bound: string;
  values: FigmaFieldValues;
  setField: (field: string, value: string) => void;
  submit: () => Promise<void>;
  submitting: boolean;
  statusMessage: string;
  totalPages: number | null;
  currentPage: number;
  setCurrentPage: (page: number | ((page: number) => number)) => void;
};

const ScreenContext = createContext<ScreenContextValue | null>(null);

function apiUrl(path: string): string {
  const base = (process.env.NEXT_PUBLIC_API_BASE_URL ?? "").replace(/\/+$/, "");
  return `${base}${path}`;
}

function authHeaders(): Record<string, string> {
  if (typeof window === "undefined") {
    return {};
  }
  const token = window.sessionStorage.getItem("mcc_access_token");
  const kind = window.sessionStorage.getItem("mcc_token_kind");
  if (!token || kind !== "api") {
    return {};
  }
  return { Authorization: `Bearer ${token}` };
}

function unwrapPayload(op: FigmaOperation, body: unknown): unknown {
  if (!op.responseUnwrap || body === null || typeof body !== "object" || Array.isArray(body)) {
    return body;
  }
  const inner = (body as Record<string, unknown>)[op.responseUnwrap];
  return inner === undefined ? body : inner;
}

function readTotalPages(body: unknown): number | null {
  const record = body !== null && typeof body === "object" && !Array.isArray(body)
    ? (body as Record<string, unknown>)
    : null;
  const data = record && record.data !== null && typeof record.data === "object" && !Array.isArray(record.data)
    ? (record.data as Record<string, unknown>)
    : record;
  const raw = data?.totalPages ?? data?.total_pages;
  return typeof raw === "number" && Number.isFinite(raw) ? raw : null;
}

async function loadReads(
  frameId: string,
  applyValues: (values: FigmaFieldValues) => void,
  setStatus: (message: string) => void,
  setTotalPages: (total: number | null) => void,
): Promise<void> {
  const ops = figmaReadOperations(frameId);
  await Promise.all(
    ops.map(async (op) => {
      let body: unknown;
      if (op.fields.length > 0) {
        const resolution = resolveBoundRead(op);
        if (resolution.mode === "missing") {
          setStatus(resolution.diagnostic);
          return;
        }
        if (resolution.mode === "mock") {
          body = resolution.body;
          publishReadPayload(op.method, op.path, body);
          applyValues(valuesFromResponse(op, unwrapPayload(op, body)));
          return;
        }
      }
      const response = await fetch(apiUrl(op.path), {
        method: op.method,
        headers: { Accept: "application/json", ...authHeaders() },
      });
      if (response.status === 401) {
        clearReadPayloads();
        return;
      }
      body = await response.json().catch(() => null);
      publishReadPayload(op.method, op.path, body);
      if (op.fields.length > 0) {
        applyValues(valuesFromResponse(op, unwrapPayload(op, body)));
      }
      const pages = readTotalPages(body);
      if (pages !== null) {
        setTotalPages(pages);
      }
    }),
  );
}

export function FigmaScreenDataProvider({
  routePath,
  children,
}: {
  routePath?: string;
  children?: ReactNode;
}) {
  const frameId = ROUTE_FRAME[routePath ?? ""] ?? "";
  const [values, setValues] = useState<FigmaFieldValues>({});
  const valuesRef = useRef(values);
  valuesRef.current = values;
  const [submitting, setSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [totalPages, setTotalPages] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const applyValues = useCallback((next: FigmaFieldValues) => {
    setValues((prev) => ({ ...prev, ...next }));
  }, []);

  const setField = useCallback((field: string, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  }, []);

  const submit = useCallback(async () => {
    const op = figmaWriteOperation(frameId);
    if (!op || submitting) {
      return;
    }
    const errors = validateValues(op, valuesRef.current);
    setFigmaFieldErrors(errors);
    if (Object.keys(errors).length > 0) {
      return;
    }
    setSubmitting(true);
    try {
      const response = await fetch(apiUrl(op.path), {
        method: op.method,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          ...authHeaders(),
        },
        body: JSON.stringify(requestBodyFor(op, valuesRef.current)),
      });
      const payload = await response.json().catch(() => null);
      if (response.status === 401) {
        clearReadPayloads();
        return;
      }
      if (!response.ok) {
        setFigmaFieldErrors(fieldErrorsFromResponse(op, payload));
      }
    } finally {
      setSubmitting(false);
    }
  }, [frameId, submitting]);

  useEffect(() => {
    let cancelled = false;
    if (!frameId) {
      return () => {
        clearReadPayloads();
      };
    }
    void loadReads(
      frameId,
      (next) => {
        if (!cancelled) {
          applyValues(next);
        }
      },
      (message) => {
        if (!cancelled) {
          setStatusMessage(message);
        }
      },
      (pages) => {
        if (!cancelled) {
          setTotalPages(pages);
        }
      },
    );
    return () => {
      cancelled = true;
      clearReadPayloads();
    };
  }, [frameId, applyValues]);

  const contextValue = useMemo<ScreenContextValue>(
    () => ({
      bound: "",
      values,
      setField,
      submit,
      submitting,
      statusMessage,
      totalPages,
      currentPage,
      setCurrentPage,
    }),
    [values, setField, submit, submitting, statusMessage, totalPages, currentPage],
  );

  return createElement(
    ScreenContext.Provider,
    { value: contextValue },
    createElement(Fragment, null,
      createElement("p", { className: "sr-only", role: "status" }, statusMessage),
      children,
    ),
  );
}

export function useFigmaScreenData() {
  const ctx = useContext(ScreenContext);
  return {
    bound: ctx?.bound ?? "",
    values: (ctx?.values ?? {}) as Record<string, string>,
    submit: ctx?.submit ?? (async () => {}),
    submitting: ctx?.submitting ?? false,
    totalPages: ctx?.totalPages ?? null,
    currentPage: ctx?.currentPage ?? 1,
    setCurrentPage: ctx?.setCurrentPage ?? (() => {}),
  };
}

export function useFigmaSubmitHandler(): (event: FormEvent<HTMLFormElement>) => void {
  const ctx = useContext(ScreenContext);
  const submit = ctx?.submit;
  return useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submit) {
      void submit();
    }
  }, [submit]);
}

/** Default bindings keep unresolved fields as local form state. */
export function useFigmaFieldProps(field: string): FigmaFieldBinding {
  const ctx = useContext(ScreenContext);
  const errors = useFigmaFieldErrors();
  const value = ctx?.values[field];
  return {
    value: typeof value === "string" ? value : "",
    onChange: (event) => {
      ctx?.setField(field, event.target.value);
    },
    ...(errors[field] ? { "aria-invalid": true as const } : {}),
    "aria-describedby": figmaFieldErrorId(field),
  };
}

export const figmaFieldProps = useFigmaFieldProps;

/** Visible field error, rendered only after validateValues or a server field error. */
export function FigmaFieldMessage({ field }: { field: string }) {
  const errors = useFigmaFieldErrors();
  const message = errors[field];
  if (!message) {
    return null;
  }
  return createElement(
    "span",
    {
      id: figmaFieldErrorId(field),
      role: "alert",
      className: "font-onest text-[12px] leading-[15px] text-[#a21d35]",
    },
    message,
  );
}

/**
 * Semantic actions from Figma prototype reactions.
 * Navigate only when the action names a compiled route.
 */
export function useFigmaActionProps(action: string): FigmaActionBinding {
  const router = useRouter();
  const onClick = useCallback((event: { preventDefault: () => void }) => {
    const destination = NAVIGATE_DESTINATION[action];
    if (destination) {
      event.preventDefault();
      router.push(destination);
      return;
    }
    if (OPEN_OVERLAY.has(action)) {
      event.preventDefault();
      openFigmaDialog(action);
      return;
    }
    if (CLOSE_OVERLAY.has(action)) {
      event.preventDefault();
      closeFigmaDialog();
    }
  }, [action, router]);
  return { onClick };
}

export const figmaActionProps = useFigmaActionProps;

/**
 * LUNA-UNRESOLVED-ACTION stub: this control has no Figma prototype
 * reaction and no field-contract submit binding, so Luna could not wire
 * any behavior for it.
 */
export function figmaUnresolvedActionProps(actionId: string): FigmaActionBinding {
  return {
    onClick: () => {
      if (process.env.NODE_ENV !== "production") {
        globalThis.console.warn(
          "[luna] unresolved action clicked:",
          actionId,
          "— no prototype reaction or submit binding found; wire manually.",
        );
      }
    },
  };
}
