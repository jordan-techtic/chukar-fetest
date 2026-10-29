/**
 * Luna generated layout
 * Figma node: 5449:19239
 * Section: Modal Window
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
"use client";

import { closeFigmaDialog, figmaFieldProps, useFigmaScreenData } from "./useFigmaScreenData";
import { Button } from "@/components/ui/button";
import { FiRrCrossSmall2 } from "./FiRrCrossSmall2";

const CATEGORY_FRAME_ID = "5359:17278";

export function AddCategoryModalWindowSection() {
  const { submit, submitting, fieldErrors, submitError, resetCategoryForm, isEditingCategory } =
    useFigmaScreenData();

  return (
    <section data-figma-node="5449:19239" className="relative box-border w-full min-w-0 min-h-[509px] pt-[24px] pr-[24px] pb-[24px] pl-[24px] rounded-[12px] flex flex-col items-start gap-6 bg-surface shadow-[0px_10px_20px_0px_rgba(0,0,0,0.141)]">
      <form
        className="box-border self-stretch min-w-0 flex flex-col items-start gap-6"
        onSubmit={(event) => {
          event.preventDefault();
          void submit(CATEGORY_FRAME_ID);
        }}
      >
        <section data-figma-node="5354:14348" className="box-border self-stretch min-w-0 pt-[20px] pr-[40px] pb-[20px] pl-[40px] flex flex-col items-start">
        <div data-figma-node="5449:19240" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-center justify-between">
          <div data-figma-node="5449:19241" className="box-border w-max max-w-[min(181px,100%)] h-auto relative flex flex-row items-center gap-2">
            <div data-figma-node="5449:19242" data-figma-component="5111:7679" className="box-border w-[24px] shrink-0 h-[24px] overflow-hidden relative block">
              <svg data-figma-node="I5449:19242;5111:7680" viewBox="0 0 18.78 18.27" preserveAspectRatio="none" aria-hidden="true" className="box-border absolute left-[12.5%] w-[79.167%] top-[12.5%] h-[75%] pointer-events-none overflow-visible"><path d="M5 7.27106C5.55228 7.27106 6 6.82334 6 6.27106C6 5.71877 5.55228 5.27106 5 5.27106L5 6.27106L5 7.27106Z" fill="#a21d35" /></svg>
            </div>
            <h1 data-figma-node="5449:19243" className="box-border w-max max-w-[min(149px,100%)] h-auto min-h-[23px] font-onest text-[18px] font-[700] leading-[23px] text-left whitespace-nowrap text-text-primary">{isEditingCategory ? "Edit Category" : "Create Category"}</h1>
          </div>
          <div data-figma-node="5449:19244" className="box-border w-max max-w-[min(36px,100%)] h-auto relative flex flex-row items-center gap-3">
            <Button
              data-figma-node="5449:19245"
              type="button"
              data-figma-action="act_084002b35e7a"
              onClick={(e) => {
                e.preventDefault();
                resetCategoryForm();
                closeFigmaDialog();
              }}
              className="p-0 box-border w-max max-w-[min(36px,100%)] h-auto rounded-[6px] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] bg-background cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current disabled:cursor-not-allowed disabled:opacity-50 gap-0 justify-start hover:bg-background shadow-none"
            >
              <FiRrCrossSmall2 data-figma-node="5449:19246" data-figma-component="5121:8491" className="box-border w-[24px] shrink-0 h-[24px] overflow-hidden" />
            </Button>
          </div>
        </div>
        </section>
        <div data-figma-node="5449:19247" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-col items-start gap-4">
          <div data-figma-node="5449:19248" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-col items-start gap-1.5">
            <p data-figma-node="5449:19249" className="box-border w-max max-w-[min(39px,100%)] h-auto min-h-[15px] shrink-0 font-onest text-[12px] font-[700] leading-[15px] tracking-[0.48px] uppercase text-left whitespace-nowrap text-color-11">Title</p>
            <div className="box-border self-stretch min-w-0 h-[44px] shrink-0 rounded-[8px] border-[#e2d9d0] border-[1px] pt-[10px] pr-[12px] pb-[10px] pl-[12px] bg-surface">
              <input
                data-figma-node="5449:19250"
                name="category-title"
                data-figma-field="category-title"
                data-figma-field-origin="design_text"
                {...figmaFieldProps("category-title")}
                type="text"
                placeholder="e.g., Q4 Product Launch Campaign"
                aria-label="Title"
                aria-invalid={Boolean(fieldErrors["category-title"])}
                className="box-border w-full h-auto font-onest text-[14px] font-[400] leading-[18px] text-left text-text-primary placeholder:text-color-27 bg-transparent border-0 shadow-none ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              />
            </div>
            {fieldErrors["category-title"] ? (
              <p className="font-onest text-[12px] font-[400] leading-[15px] text-primary">{fieldErrors["category-title"]}</p>
            ) : null}
          </div>
          <div data-figma-node="5908:36968" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-col items-start gap-1.5">
            <p data-figma-node="5908:36969" className="box-border w-max max-w-[min(37px,100%)] h-auto min-h-[15px] shrink-0 font-onest text-[12px] font-[700] leading-[15px] tracking-[0.48px] uppercase text-left whitespace-nowrap text-color-11">Icon</p>
            <div className="box-border self-stretch min-w-0 shrink-0 rounded-[8px] relative border-[#e2d9d0] border-[1px] bg-surface h-[44px]">
              <select
                data-figma-node="5908:36970"
                name="icon"
                data-figma-field="icon"
                data-figma-field-origin="design_text"
                {...figmaFieldProps("icon")}
                aria-label="Selected icon:"
                className="absolute inset-0 h-full w-full appearance-none bg-transparent shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary cursor-pointer text-text-primary font-onest text-[14px] font-[600] leading-[18px] text-left whitespace-nowrap pt-[10px] pr-[12px] pb-[10px] pl-[12px]"
              >
                <option value="">Selected icon:</option>
              </select>
            </div>
          </div>
          <div data-figma-node="5449:19253" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-col items-start gap-1.5">
            <p data-figma-node="5449:19254" className="box-border w-max max-w-[min(91px,100%)] h-auto min-h-[15px] shrink-0 font-onest text-[12px] font-[700] leading-[15px] tracking-[0.48px] uppercase text-left whitespace-nowrap text-color-11">Description</p>
            <div data-figma-node="5449:19255" className="box-border self-stretch min-w-0 h-[136px] shrink-0 rounded-[8px] relative flex flex-col items-start gap-1 pr-[12px] pb-[12px] border-[#e2d9d0] border-[1px] bg-surface">
              <textarea
                data-figma-node="5449:19260"
                name="category-description"
                data-figma-field="category-description"
                data-figma-field-origin="design_text"
                {...figmaFieldProps("category-description")}
                placeholder="Describe key objectives, milestones and channels..."
                aria-label="Description"
                aria-invalid={Boolean(fieldErrors["category-description"])}
                className="box-border self-stretch min-w-0 flex-1 resize-none bg-transparent border-0 font-onest text-[14px] font-[400] leading-[18px] text-left text-text-primary placeholder:text-color-27 pt-[10px] pr-[8px] pb-[10px] pl-[20px] shadow-none ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              />
            </div>
            {fieldErrors["category-description"] ? (
              <p className="font-onest text-[12px] font-[400] leading-[15px] text-primary">{fieldErrors["category-description"]}</p>
            ) : null}
          </div>
        </div>
        <div className="sr-only" aria-live="polite">
          {submitError ? submitError : null}
        </div>
        <div data-figma-node="5449:19298" className="box-border self-stretch min-w-0 h-[1px] shrink-0 bg-border" />
        <div data-figma-node="5449:19299" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-start justify-end gap-3">
          <Button
            data-figma-node="5449:19300"
            type="button"
            data-figma-action="act_47a65406f291"
            onClick={(e) => {
              e.preventDefault();
              resetCategoryForm();
              closeFigmaDialog();
            }}
            className="p-0 box-border w-max h-auto rounded-[6px] min-w-[78px] border-[#e2d9d0] border-[1px] pt-[10px] pr-[16px] pb-[10px] pl-[16px] inline-flex items-center justify-start whitespace-nowrap bg-transparent hover:bg-[#ffffff] hover:text-text-primary cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current disabled:cursor-not-allowed disabled:opacity-50 gap-0 shadow-none"
          >
            <span className="font-onest text-[14px] font-[700] leading-[18px] text-left whitespace-nowrap text-color-11">Cancel</span>
          </Button>
          <Button
            data-figma-node="5449:19302"
            type="submit"
            data-figma-action="act_4acaeab4fb49"
            disabled={submitting}
            aria-busy={submitting}
            className="p-0 box-border w-max h-auto rounded-[6px] min-w-[153px] pt-[10px] pr-[20px] pb-[10px] pl-[20px] inline-flex items-center justify-center whitespace-nowrap bg-primary hover:opacity-90 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current disabled:cursor-not-allowed disabled:opacity-50 gap-2 hover:bg-primary shadow-none"
          >
            {submitting ? (
              <span
                aria-hidden="true"
                className="box-border h-[14px] w-[14px] shrink-0 animate-spin rounded-full border-2 border-surface border-t-transparent"
              />
            ) : null}
            <span className="font-onest text-[14px] font-[700] leading-[18px] text-left whitespace-nowrap text-surface">
              {submitting
                ? isEditingCategory
                  ? "Saving…"
                  : "Creating…"
                : isEditingCategory
                  ? "Save Category"
                  : "Create Category"}
            </span>
          </Button>
        </div>
      </form>
    </section>
  );
}
