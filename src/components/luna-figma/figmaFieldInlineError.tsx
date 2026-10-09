"use client";

import { useFigmaFieldError } from "./useFigmaScreenData";

export function FigmaFieldInlineError({ field }: { field: string }) {
  const message = useFigmaFieldError(field);
  if (!message) {
    return null;
  }
  return (
    <p
      id={`figma-field-error-${field}`}
      className="font-onest text-[11px] font-[400] leading-[14px] text-[#a21d35]"
    >
      {message}
    </p>
  );
}
