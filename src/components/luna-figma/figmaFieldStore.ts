/** luna-spec-codegen: support file — form-state store shared by
 * useFigmaScreenData.ts (plain .ts) and the sr-only/error display components.
 * data-figma-field keys are Figma form-state keys, never API payload names.
 */

// ── Field values (local UI state) ───────────────────────────────────────────
const _fieldValues = new Map<string, string>();
let _fieldVersion = 0;
const _fieldListeners = new Set<() => void>();

export function subscribeFieldValues(listener: () => void): () => void {
  _fieldListeners.add(listener);
  return () => {
    _fieldListeners.delete(listener);
  };
}

export function getFieldValuesSnapshot(): number {
  return _fieldVersion;
}

export function setFieldValue(field: string, value: string): void {
  if (_fieldValues.get(field) === value) {
    return;
  }
  _fieldValues.set(field, value);
  _fieldVersion += 1;
  _fieldListeners.forEach((fn) => fn());
}

export function setFieldValues(values: Record<string, string>): void {
  let changed = false;
  for (const [field, value] of Object.entries(values)) {
    if (_fieldValues.get(field) !== value) {
      _fieldValues.set(field, value);
      changed = true;
    }
  }
  if (changed) {
    _fieldVersion += 1;
    _fieldListeners.forEach((fn) => fn());
  }
}

export function getFieldValue(field: string): string {
  return _fieldValues.get(field) ?? "";
}

export function collectFieldValues(): Record<string, string> {
  const values: Record<string, string> = {};
  for (const [field, value] of _fieldValues.entries()) {
    values[field] = value;
  }
  return values;
}

// ── Field errors (validation, rendered beside their field) ──────────────────
const _fieldErrors = new Map<string, string>();
let _fieldErrorVersion = 0;
const _fieldErrorListeners = new Set<() => void>();

export function subscribeFieldErrors(listener: () => void): () => void {
  _fieldErrorListeners.add(listener);
  return () => {
    _fieldErrorListeners.delete(listener);
  };
}

export function getFieldErrorSnapshot(): number {
  return _fieldErrorVersion;
}

export function applyFieldErrors(errors: Record<string, string>): void {
  _fieldErrors.clear();
  for (const [field, message] of Object.entries(errors)) {
    _fieldErrors.set(field, message);
  }
  _fieldErrorVersion += 1;
  _fieldErrorListeners.forEach((fn) => fn());
}

export function getFieldError(field: string): string {
  return _fieldErrors.get(field) ?? "";
}

export function collectFieldErrors(): Record<string, string> {
  const errors: Record<string, string> = {};
  for (const [field, message] of _fieldErrors.entries()) {
    errors[field] = message;
  }
  return errors;
}