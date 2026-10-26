/**
 * Luna generated layout
 * Figma node: 5354:14221
 * Section: TitleRow
 * Route: /manage-activity
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
"use client";

import { figmaFieldProps, openFigmaDialog, useFigmaScreenData } from "./useFigmaScreenData";
import { FigmaFieldError, figmaFieldA11y } from "./figmaFieldErrors";
import { Button } from "@/components/ui/button";

const SEARCH_MAX = 100;

export function ManageActivityTitleRowSection() {
  const { prepareCreateActivityForm, submitting, fieldErrors, setFieldErrors, fieldValues } =
    useFigmaScreenData();

  const validateSearchOnBlur = () => {
    const search = String(fieldValues["search-input"] ?? "");
    setFieldErrors((prev) => {
      const next = { ...prev };
      if (search.length > SEARCH_MAX) {
        next["search-input"] = "Use at most 100 characters.";
      } else {
        delete next["search-input"];
      }
      return next;
    });
  };

  return (
    <section data-figma-node="5354:14221" className="relative box-border w-full min-w-0 min-h-[89px] pt-[20px] pr-[clamp(16px,2.778vw,40px)] pb-[20px] pl-[clamp(16px,2.778vw,40px)] flex flex-row items-center justify-between z-[1]">
      <div data-figma-node="5354:14222" className="box-border w-max max-w-[min(312px,100%)] h-auto relative flex flex-col items-start gap-1">
        <h2 data-figma-node="5354:14223" className="box-border w-max max-w-[min(237px,100%)] h-auto min-h-[28px] shrink-0 font-onest text-[22px] font-[700] leading-[28px] text-left lg:whitespace-nowrap text-text-primary">Manage Activity Type</h2>
        <p data-figma-node="5354:14224" className="box-border w-max max-w-[min(312px,100%)] h-auto min-h-[17px] shrink-0 font-onest text-[13px] font-[400] leading-[17px] text-left lg:whitespace-nowrap text-text-secondary">Review system access, modifications, and exports.</p>
      </div>
      <div data-figma-node="5359:17155" data-figma-pagination="true" className="box-border flex-1 min-w-0 h-auto relative flex flex-row items-center justify-end gap-5">
        <div data-figma-node="5359:17156" data-figma-pagination="true" className="box-border w-max max-w-[min(284px,100%)] h-auto relative flex flex-col items-end gap-1">
          <div className="box-border w-[280px] shrink-0 rounded-[6px] relative border-[#e2d9d0] border-[1px] bg-surface h-[37px]"><input data-figma-node="5359:17157" name="search-input" data-figma-field="search-input" data-figma-field-origin="layer_metadata" {...figmaFieldProps("search-input")} onBlur={validateSearchOnBlur} type="search" inputMode="search" maxLength={100} placeholder="Filter activities..." aria-label="Filter activities..." {...figmaFieldA11y(fieldErrors, "search-input")} className="absolute inset-0 h-full w-full appearance-none bg-transparent shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary border-0 text-text-secondary placeholder:text-[#686868] font-onest text-[13px] font-[400] leading-[17px] text-left pl-[38px] pr-[16px]" /><div className="pointer-events-none absolute inset-0"><div data-figma-node="5359:17773" className="box-border w-[14px] h-[14px] absolute left-[16px] top-[12px] overflow-hidden block">
  <svg data-figma-node="5359:17774" viewBox="0 0 10.5 10.5" preserveAspectRatio="none" aria-hidden="true" className="box-border absolute left-[14.286%] w-[78.571%] top-[14.286%] h-[78.571%] pointer-events-none overflow-visible"><path d="M9.79298 11.2072C10.1835 11.5977 10.8167 11.5977 11.2072 11.2072C11.5977 10.8167 11.5977 10.1835 11.2072 9.79298L10.5001 10.5001L9.79298 11.2072ZM8.67553 7.26132C8.28501 6.87079 7.65184 6.87079 7.26132 7.26132C6.87079 7.65184 6.87079 8.28501 7.26132 8.67553L7.96842 7.96842L8.67553 7.26132ZM10.5001 10.5001L11.2072 9.79298L8.67553 7.26132L7.96842 7.96842L7.26132 8.67553L9.79298 11.2072L10.5001 10.5001ZM9.33333 4.66667L8.33333 4.66667C8.33333 6.69171 6.69171 8.33333 4.66667 8.33333L4.66667 9.33333L4.66667 10.3333C7.79628 10.3333 10.3333 7.79628 10.3333 4.66667L9.33333 4.66667ZM4.66667 9.33333L4.66667 8.33333C2.64162 8.33333 1 6.69171 1 4.66667L0 4.66667L-1 4.66667C-1 7.79628 1.53705 10.3333 4.66667 10.3333L4.66667 9.33333ZM0 4.66667L1 4.66667C1 2.64162 2.64162 1 4.66667 1L4.66667 0L4.66667 -1C1.53705 -1 -1 1.53705 -1 4.66667L0 4.66667ZM4.66667 0L4.66667 1C6.69171 1 8.33333 2.64162 8.33333 4.66667L9.33333 4.66667L10.3333 4.66667C10.3333 1.53705 7.79628 -1 4.66667 -1L4.66667 0Z" fill="#686868" /></svg>
</div></div></div>
          <FigmaFieldError errors={fieldErrors} field="search-input" />
        </div>
        <Button data-figma-node="5359:17160" type="button" data-figma-action="act_3e47c2f5e482" data-figma-overlay-opens="5449:18415" disabled={submitting} onClick={(e) => { e.preventDefault(); prepareCreateActivityForm(); openFigmaDialog("act_3e47c2f5e482"); }} className="p-0 box-border w-max h-auto rounded-[6px] min-w-[136px] pt-[10px] pr-[18px] pb-[10px] pl-[18px] inline-flex items-center justify-start whitespace-nowrap bg-primary hover:opacity-90 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current disabled:cursor-not-allowed disabled:opacity-50 gap-0 hover:bg-primary shadow-none gap-2"><div data-figma-node="5359:17776" className="box-border w-[14px] h-[14px] overflow-hidden relative block">
  <svg data-figma-node="5359:17777" viewBox="0 0 8.17 8.17" preserveAspectRatio="none" aria-hidden="true" className="box-border absolute left-[21.429%] w-[57.143%] top-[21.429%] h-[57.143%] pointer-events-none overflow-visible"><path d="M0 3.0838C-0.552285 3.0838 -1 3.53152 -1 4.0838C-1 4.63609 -0.552285 5.0838 0 5.0838L0 4.0838L0 3.0838ZM8.1676 5.0838C8.71989 5.0838 9.1676 4.63609 9.1676 4.0838C9.1676 3.53152 8.71989 3.0838 8.1676 3.0838L8.1676 4.0838L8.1676 5.0838ZM5.0838 0C5.0838 -0.552285 4.63609 -1 4.0838 -1C3.53152 -1 3.0838 -0.552285 3.0838 0L4.0838 0L5.0838 0ZM3.0838 8.1676C3.0838 8.71989 3.53152 9.1676 4.0838 9.1676C4.63609 9.1676 5.0838 8.71989 5.0838 8.1676L4.0838 8.1676L3.0838 8.1676ZM0 4.0838L0 5.0838L8.1676 5.0838L8.1676 4.0838L8.1676 3.0838L0 3.0838L0 4.0838ZM4.0838 0L3.0838 0L3.0838 8.1676L4.0838 8.1676L5.0838 8.1676L5.0838 0L4.0838 0Z" fill="#ffffff" /></svg>
</div><span className="font-onest text-[13px] font-[700] leading-[17px] text-left whitespace-nowrap text-surface">{submitting ? "Saving…" : "Add Activity"}</span></Button>
      </div>
    </section>
  );
}
