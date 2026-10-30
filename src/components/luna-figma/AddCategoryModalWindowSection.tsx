/**
 * Luna generated layout
 * Figma node: 5449:19239
 * Section: Modal Window
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
"use client";

import { useCallback } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { figmaFieldProps, useFigmaScreenData } from "./useFigmaScreenData";
import {
  FigmaFieldError,
  figmaFieldA11y,
  setFigmaFieldErrors,
  useFigmaFieldErrors,
} from "./figmaFieldErrors";
import { figmaOperations, validateValues } from "./figmaFieldContract";
import { FiRrCrossSmall } from "./FiRrCrossSmall";
import { PenField } from "./PenField";

const CATEGORY_ICON_OPTIONS = [
  { value: "", label: "Selected icon:" },
  { value: "FaCalendar", label: "FaCalendar" },
  { value: "FaEnvelope", label: "FaEnvelope" },
  { value: "FaMegaphone", label: "FaMegaphone" },
  { value: "FaTarget", label: "FaTarget" },
];

export function AddCategoryModalWindowSection() {
  const figmaErrors = useFigmaFieldErrors();
  const { submit, submitting, closeCategoryModal, fieldValues, submitError, editingCategoryId } =
    useFigmaScreenData();

  const validateFieldOnBlur = useCallback(
    (field: string) => {
      const targetMethod = editingCategoryId ? "PUT" : "POST";
      const writeOp =
        figmaOperations("5359:17278")
          .filter((w) => w.role === "write")
          .find((w) => w.method === targetMethod) ??
        figmaOperations("5359:17278").find((w) => w.role === "write");
      if (!writeOp) {
        return;
      }
      const errors = validateValues(writeOp, fieldValues);
      const message = errors[field];
      const next = { ...figmaErrors };
      if (message) {
        next[field] = message;
      } else {
        delete next[field];
      }
      setFigmaFieldErrors(next);
    },
    [fieldValues, figmaErrors, editingCategoryId],
  );

  return (
    <form
      data-figma-frame="5359:17278"
      onSubmit={(e) => {
        e.preventDefault();
        void submit("5359:17278");
      }}
    >
      <section data-figma-node="5449:19239" className="relative box-border w-full min-w-0 min-h-[509px] pt-[24px] pr-[24px] pb-[24px] pl-[24px] rounded-[12px] flex flex-col items-start gap-6 bg-surface shadow-[0px_10px_20px_0px_rgba(0,0,0,0.141)]">
        <div data-figma-node="5449:19240" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-center justify-between">
          <div data-figma-node="5449:19241" className="box-border w-max max-w-[min(181px,100%)] h-auto relative flex flex-row items-center gap-2">
            <PenField data-figma-node="5449:19242" data-figma-component="5111:7679" className="box-border w-[24px] shrink-0 h-[24px] overflow-hidden" />
            <h1 id="category-modal-title" data-figma-node="5449:19243" className="box-border w-max max-w-[min(149px,100%)] h-auto min-h-[23px] font-onest text-[18px] font-[700] leading-[23px] text-left whitespace-nowrap text-text-primary">Create Category</h1>
          </div>
          <div data-figma-node="5449:19244" className="box-border w-max max-w-[min(36px,100%)] h-auto relative flex flex-row items-center gap-3">
            <Button data-figma-node="5449:19245" type="button" onClick={(e) => { e.preventDefault(); closeCategoryModal(); }} className="p-0 box-border w-max max-w-[min(36px,100%)] h-auto rounded-[6px] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] bg-background cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current disabled:cursor-not-allowed disabled:opacity-50 gap-0 justify-start hover:bg-background shadow-none">
              <FiRrCrossSmall data-figma-node="5449:19246" data-figma-component="5121:8491" className="box-border w-[24px] shrink-0 h-[24px] overflow-hidden" />
            </Button>
          </div>
        </div>
        {submitError && (
          <p className="sr-only" role="alert">
            {submitError}
          </p>
        )}
        <div data-figma-node="5449:19247" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-col items-start gap-4">
          <div data-figma-node="5449:19248" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-col items-start gap-1.5">
            <label htmlFor="figma-field-title" data-figma-node="5449:19249" className="box-border w-max max-w-[min(39px,100%)] h-auto min-h-[15px] shrink-0 font-onest text-[12px] font-[700] leading-[15px] tracking-[0.48px] uppercase text-left whitespace-nowrap text-color-11">Title</label>
            <div className="box-border self-stretch min-w-0 h-[44px] max-[519px]:h-auto max-[519px]:min-h-[44px] shrink-0 rounded-[8px] relative border-[#e2d9d0] border-[1px] bg-surface">
              <Input
                id="figma-field-title"
                data-figma-node="5449:19250"
                name="title"
                data-figma-field="title"
                data-figma-field-origin="design_text"
                data-figma-api-field="title"
                {...figmaFieldProps("title")}
                aria-required="true"
                {...figmaFieldA11y(figmaErrors, "title")}
                onBlur={() => validateFieldOnBlur("title")}
                type="text"
                placeholder="e.g., Q4 Product Launch Campaign"
                autoComplete="off"
                className="absolute inset-0 h-full w-full appearance-none bg-transparent shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary border-0 text-color-27 placeholder:text-color-27 font-onest text-[14px] font-[400] leading-[18px] text-left pt-[10px] pr-[12px] pb-[10px] pl-[12px] rounded-[8px]"
              />
              <FigmaFieldError errors={figmaErrors} field="title" />
            </div>
          </div>
          <div data-figma-node="5908:36968" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-col items-start gap-1.5">
            <p data-figma-node="5908:36969" className="box-border w-max max-w-[min(37px,100%)] h-auto min-h-[15px] shrink-0 font-onest text-[12px] font-[700] leading-[15px] tracking-[0.48px] uppercase text-left whitespace-nowrap text-color-11">Icon</p>
            <div className="box-border self-stretch min-w-0 shrink-0 rounded-[8px] relative border-[#e2d9d0] border-[1px] bg-surface h-[44px]"><select data-figma-node="5908:36970" name="icon" data-figma-field="icon" data-figma-field-origin="design_text" data-figma-api-field="icon" {...figmaFieldProps("icon")} {...figmaFieldA11y(figmaErrors, "icon")} onBlur={() => validateFieldOnBlur("icon")} aria-label="Selected icon:" className="absolute inset-0 h-full w-full appearance-none bg-transparent shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary cursor-pointer text-text-primary font-onest text-[14px] font-[600] leading-[18px] text-left whitespace-nowrap pt-[10px] pr-[12px] pb-[10px] pl-[12px]">{CATEGORY_ICON_OPTIONS.map((opt) => (
              <option key={opt.value || "empty"} value={opt.value}>
                {opt.label}
              </option>
            ))}</select><FigmaFieldError errors={figmaErrors} field="icon" /><div className="pointer-events-none absolute inset-0"><div data-figma-node="5908:36971" className="box-border w-max max-w-[min(125px,100%)] h-auto absolute left-[12px] top-[13px] flex flex-row items-center gap-2.5">
  <div data-figma-node="5908:36973" className="box-border w-max max-w-[min(20px,100%)] h-auto flex flex-row items-center gap-2"><Button type="button" aria-label="Edit" className="p-0 inline-flex items-center justify-center gap-0 bg-transparent hover:bg-transparent rounded-none shadow-none"><div data-figma-node="5908:36975" data-figma-component="5121:9154" className="box-border w-[16px] h-[16px] overflow-hidden relative block">
  <svg data-figma-node="I5908:36975;403:839" viewBox="0 0 15.94 15.94" preserveAspectRatio="none" aria-hidden="true" className="box-border absolute left-[0%] w-[100%] top-[0%] h-[100%] pointer-events-none overflow-visible"><path d="M15.2353 0.706709C14.7821 0.254173 14.1678 1.4803e-16 13.5273 0C12.8869 8.51171e-16 12.2726 0.254173 11.8193 0.706709L0.976677 11.5494C0.666178 11.8581 0.419985 12.2254 0.252342 12.6299C0.0846994 13.0344 -0.00106532 13.4682 9.98748e-06 13.906L9.98748e-06 15.2747C9.98748e-06 15.4515 0.0702479 15.6211 0.195272 15.7461C0.320296 15.8711 0.489866 15.9414 0.666677 15.9414L2.03534 15.9414C2.47319 15.9426 2.90692 15.857 3.31145 15.6895C3.71597 15.5219 4.08325 15.2758 4.39201 14.9654L15.2353 4.12204C15.6877 3.66884 15.9417 3.05469 15.9417 2.41438C15.9417 1.77406 15.6877 1.15991 15.2353 0.706709L15.2353 0.706709ZM3.44934 14.0227C3.07335 14.3962 2.56532 14.6065 2.03534 14.608L1.33334 14.608L1.33334 13.906C1.33267 13.6433 1.38411 13.3831 1.4847 13.1403C1.58529 12.8976 1.73302 12.6773 1.91934 12.492L10.148 4.26337L11.6813 5.79671L3.44934 14.0227ZM14.292 3.17938L12.6213 4.85071L11.088 3.32071L12.7593 1.64938C12.86 1.54891 12.9795 1.46927 13.111 1.41498C13.2424 1.3607 13.3833 1.33284 13.5255 1.33299C13.6678 1.33314 13.8086 1.36131 13.9399 1.41588C14.0712 1.47045 14.1905 1.55036 14.291 1.65104C14.3915 1.75172 14.4711 1.8712 14.5254 2.00266C14.5797 2.13413 14.6076 2.27499 14.6074 2.41722C14.6072 2.55945 14.5791 2.70025 14.5245 2.8316C14.4699 2.96294 14.39 3.08225 14.2893 3.18271L14.292 3.17938Z" fill="#231f20" /></svg>
</div></Button></div>
</div><div data-figma-node="5908:36976" data-figma-component="5111:6287" className="box-border w-[24px] h-[24px] absolute left-[436px] top-[10px] overflow-hidden block">
  <svg data-figma-node="I5908:36976;5111:6288" viewBox="0 0 12 6" preserveAspectRatio="none" aria-hidden="true" className="box-border absolute left-[25%] w-[50%] top-[37.5%] h-[25%] pointer-events-none overflow-visible"><path d="M-0.53033 5.46967C-0.823223 5.76256 -0.823223 6.23744 -0.53033 6.53033C-0.237437 6.82322 0.237437 6.82322 0.53033 6.53033L0 6L-0.53033 5.46967ZM6 0L6.53033 -0.53033C6.38968 -0.670982 6.19891 -0.75 6 -0.75C5.80109 -0.75 5.61032 -0.670982 5.46967 -0.53033L6 0ZM11.4697 6.53033C11.7626 6.82322 12.2374 6.82322 12.5303 6.53033C12.8232 6.23744 12.8232 5.76256 12.5303 5.46967L12 6L11.4697 6.53033ZM0 6L0.53033 6.53033L6.53033 0.53033L6 0L5.46967 -0.53033L-0.53033 5.46967L0 6ZM6 0L5.46967 0.53033L11.4697 6.53033L12 6L12.5303 5.46967L6.53033 -0.53033L6 0Z" fill="#000000" transform="matrix(1 0 0 -1 0 6)" /></svg>
</div></div></div>
          </div>
          <div data-figma-node="5449:19253" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-col items-start gap-1.5">
            <label htmlFor="figma-field-description" data-figma-node="5449:19254" className="box-border w-max max-w-[min(91px,100%)] h-auto min-h-[15px] shrink-0 font-onest text-[12px] font-[700] leading-[15px] tracking-[0.48px] uppercase text-left whitespace-nowrap text-color-11">Description</label>
            <div data-figma-node="5449:19255" className="box-border self-stretch min-w-0 h-[136px] max-[519px]:h-auto max-[519px]:min-h-[136px] shrink-0 rounded-[8px] relative flex flex-col items-start gap-1 border-[#e2d9d0] border-[1px] pr-[11px] pb-[11px] bg-surface">
              <textarea
                id="figma-field-description"
                name="description"
                data-figma-field="description"
                data-figma-field-origin="design_text"
                data-figma-api-field="description"
                {...figmaFieldProps("description")}
                {...figmaFieldA11y(figmaErrors, "description")}
                onBlur={() => validateFieldOnBlur("description")}
                placeholder="Describe key objectives, milestones and channels..."
                rows={4}
                className="box-border self-stretch min-w-0 min-h-[114px] resize-none shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary border-0 bg-transparent text-color-27 placeholder:text-color-27 font-onest text-[14px] font-[400] leading-[18px] text-left pt-[10px] pr-[9px] pb-[10px] pl-[20px]"
              />
              <FigmaFieldError errors={figmaErrors} field="description" />
            </div>
          </div>
        </div>
        <div data-figma-node="5449:19298" className="box-border self-stretch min-w-0 h-[1px] shrink-0 bg-border" />
        <div data-figma-node="5449:19299" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-start justify-end gap-3">
          <Button data-figma-node="5449:19300" type="button" onClick={(e) => { e.preventDefault(); closeCategoryModal(); }} className="p-0 box-border w-max h-auto rounded-[6px] min-w-[78px] border-[#e2d9d0] border-[1px] pt-[10px] pr-[16px] pb-[10px] pl-[16px] inline-flex items-center justify-start whitespace-nowrap bg-transparent hover:bg-[#ffffff] hover:text-[#0b0b0b] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current disabled:cursor-not-allowed disabled:opacity-50 gap-0 shadow-none"><span className="font-onest text-[14px] font-[700] leading-[18px] text-left whitespace-nowrap text-color-11">Cancel</span></Button>
          <Button data-figma-node="5449:19302" type="submit" disabled={submitting} aria-busy={submitting} className="p-0 box-border w-max h-auto rounded-[6px] min-w-[153px] pt-[10px] pr-[20px] pb-[10px] pl-[20px] inline-flex items-center justify-start whitespace-nowrap bg-primary hover:opacity-90 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current disabled:cursor-not-allowed disabled:opacity-50 gap-0 hover:bg-primary shadow-none"><span className="font-onest text-[14px] font-[700] leading-[18px] text-left whitespace-nowrap text-surface">{submitting ? "Creating…" : "Create Category"}</span></Button>
        </div>
      </section>
    </form>
  );
}
