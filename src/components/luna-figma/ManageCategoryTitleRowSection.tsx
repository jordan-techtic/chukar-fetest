/**
 * Luna generated layout
 * Figma node: 5449:19128
 * Section: TitleRow
 * Route: /manage-category
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
"use client";

import { Loader2 } from "lucide-react";
import { figmaFieldProps, useFigmaScreenData } from "./useFigmaScreenData";
import { Button } from "@/components/ui/button";

export function ManageCategoryTitleRowSection() {
  const { openAddCategoryDialog, submitting, fieldErrors } = useFigmaScreenData();

  return (
    <section data-figma-node="5449:19128" className="absolute left-0 right-0 top-0 z-[3] box-border h-[89px] w-full min-w-0 overflow-hidden pt-[20px] pr-[40px] pb-[20px] pl-[40px] flex flex-row items-center justify-between">
      <div data-figma-node="5449:19129" className="box-border w-max max-w-[min(518px,100%)] h-auto relative flex flex-col items-start gap-1">
        <h2 data-figma-node="5449:19130" className="box-border w-max max-w-[min(194px,100%)] h-auto min-h-[28px] shrink-0 font-onest text-[22px] font-[700] leading-[28px] text-left lg:whitespace-nowrap text-text-primary">Manage Category</h2>
        <p data-figma-node="5449:19131" className="box-border w-max max-w-[min(518px,100%)] h-auto min-h-[17px] shrink-0 font-onest text-[13px] font-[400] leading-[17px] text-left lg:whitespace-nowrap text-text-secondary">Create and manage the categories used when creating marketing calendar activities.</p>
      </div>
      <div data-figma-node="5449:19132" data-figma-pagination="true" className="box-border flex-1 min-w-0 h-auto relative flex flex-row items-center justify-end gap-5">
        <div data-figma-node="5449:19133" data-figma-pagination="true" className="box-border w-max max-w-[min(284px,100%)] h-auto relative flex flex-col items-start gap-1">
          <div className="box-border flex h-[37px] w-[280px] shrink-0 flex-row items-center rounded-[6px] border-[#e2d9d0] border-[1px] bg-surface"><div data-figma-node="5449:19135" className="box-border ml-[16px] h-[14px] w-[14px] shrink-0 overflow-hidden block">
  <svg data-figma-node="5449:19136" viewBox="0 0 10.5 10.5" preserveAspectRatio="none" aria-hidden="true" className="box-border absolute left-[14.286%] w-[78.571%] top-[14.286%] h-[78.571%] pointer-events-none overflow-visible"><path d="M9.79298 11.2072C10.1835 11.5977 10.8167 11.5977 11.2072 11.2072C11.5977 10.8167 11.5977 10.1835 11.2072 9.79298L10.5001 10.5001L9.79298 11.2072ZM8.67553 7.26132C8.28501 6.87079 7.65184 6.87079 7.26132 7.26132C6.87079 7.65184 6.87079 8.28501 7.26132 8.67553L7.96842 7.96842L8.67553 7.26132ZM10.5001 10.5001L11.2072 9.79298L8.67553 7.26132L7.96842 7.96842L7.26132 8.67553L9.79298 11.2072L10.5001 10.5001ZM9.33333 4.66667L8.33333 4.66667C8.33333 6.69171 6.69171 8.33333 4.66667 8.33333L4.66667 9.33333L4.66667 10.3333C7.79628 10.3333 10.3333 7.79628 10.3333 4.66667L9.33333 4.66667ZM4.66667 9.33333L4.66667 8.33333C2.64162 8.33333 1 6.69171 1 4.66667L0 4.66667L-1 4.66667C-1 7.79628 1.53705 10.3333 4.66667 10.3333L4.66667 9.33333ZM0 4.66667L1 4.66667C1 2.64162 2.64162 1 4.66667 1L4.66667 0L4.66667 -1C1.53705 -1 -1 1.53705 -1 4.66667L0 4.66667ZM4.66667 0L4.66667 1C6.69171 1 8.33333 2.64162 8.33333 4.66667L9.33333 4.66667L10.3333 4.66667C10.3333 1.53705 7.79628 -1 4.66667 -1L4.66667 0Z" fill="#686868" /></svg>
</div><input data-figma-node="5449:19134" name="filter-categories" data-figma-field="filter-categories" data-figma-field-origin="design_text" {...figmaFieldProps("filter-categories")} type="search" inputMode="search" placeholder="Filter categories..." aria-label="Filter categories..." aria-invalid={Boolean(fieldErrors["filter-categories"])} aria-describedby={fieldErrors["filter-categories"] ? "filter-categories-error" : undefined} className="min-w-0 flex-1 appearance-none bg-transparent shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary border-0 text-text-secondary placeholder:text-[#686868] font-onest text-[13px] font-[400] leading-[17px] text-left pr-[16px]" /></div>
          {fieldErrors["filter-categories"] ? (
            <p id="filter-categories-error" className="sr-only" role="alert">
              {fieldErrors["filter-categories"]}
            </p>
          ) : null}
        </div>
        <Button data-figma-node="5449:19138" type="button" data-figma-action="act_9c6be34838f4" data-figma-overlay-opens="5359:17278" disabled={submitting} aria-busy={submitting} onClick={(e) => { e.preventDefault(); openAddCategoryDialog(); }} className="p-0 box-border w-max h-auto rounded-[6px] min-w-[146px] pt-[10px] pr-[18px] pb-[10px] pl-[18px] inline-flex items-center justify-start whitespace-nowrap bg-primary hover:opacity-90 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current disabled:cursor-not-allowed disabled:opacity-50 gap-0 hover:bg-primary shadow-none gap-2">
          {submitting ? (
            <Loader2 className="h-[14px] w-[14px] shrink-0 animate-spin text-surface motion-reduce:animate-none" aria-hidden />
          ) : (
            <div data-figma-node="5449:19139" className="box-border w-[14px] h-[14px] overflow-hidden relative block">
  <svg data-figma-node="5449:19140" viewBox="0 0 8.17 8.17" preserveAspectRatio="none" aria-hidden="true" className="box-border absolute left-[21.429%] w-[57.143%] top-[21.429%] h-[57.143%] pointer-events-none overflow-visible"><path d="M0 3.0838C-0.552285 3.0838 -1 3.53152 -1 4.0838C-1 4.63609 -0.552285 5.0838 0 5.0838L0 4.0838L0 3.0838ZM8.1676 5.0838C8.71989 5.0838 9.1676 4.63609 9.1676 4.0838C9.1676 3.53152 8.71989 3.0838 8.1676 3.0838L8.1676 4.0838L8.1676 5.0838ZM5.0838 0C5.0838 -0.552285 4.63609 -1 4.0838 -1C3.53152 -1 3.0838 -0.552285 3.0838 0L4.0838 0L5.0838 0ZM3.0838 8.1676C3.0838 8.71989 3.53152 9.1676 4.0838 9.1676C4.63609 9.1676 5.0838 8.71989 5.0838 8.1676L4.0838 8.1676L3.0838 8.1676ZM0 4.0838L0 5.0838L8.1676 5.0838L8.1676 4.0838L8.1676 3.0838L0 3.0838L0 4.0838ZM4.0838 0L3.0838 0L3.0838 8.1676L4.0838 8.1676L5.0838 8.1676L5.0838 0L4.0838 0Z" fill="#ffffff" /></svg>
</div>
          )}
          <span className="font-onest text-[13px] font-[700] leading-[17px] text-left whitespace-nowrap text-surface">Add Category</span></Button>
      </div>
    </section>
  );
}
