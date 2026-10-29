/**
 * Luna generated layout
 * Figma node: 5621:29003
 * Section: Modal Window
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
"use client";

import { closeFigmaDialog, figmaFieldProps, useFigmaScreenData } from "./useFigmaScreenData";
import { Button } from "@/components/ui/button";
import { FiRrCrossSmall2 } from "./FiRrCrossSmall2";
import { Shared5B5A48 } from "./Shared5B5A48";

const HOLIDAY_FRAME_ID = "5621:28800";

export function AddHolidayModalWindowSection() {
  const { submit, submitting, fieldErrors, submitError, resetHolidayForm } = useFigmaScreenData();

  return (
    <section data-figma-node="5621:29003" className="relative box-border w-full min-w-0 min-h-[334px] pt-[24px] pr-[24px] pb-[24px] pl-[24px] rounded-[12px] flex flex-col items-start gap-6 bg-surface shadow-[0px_10px_20px_0px_rgba(0,0,0,0.141)]">
      <form
        className="box-border self-stretch min-w-0 flex flex-col items-start gap-6"
        onSubmit={(event) => {
          event.preventDefault();
          void submit(HOLIDAY_FRAME_ID);
        }}
      >
        <div data-figma-node="5621:28802" className="box-border self-stretch min-w-0 min-h-[89px] h-auto shrink-0 relative flex flex-row items-center justify-between pt-[20px] pr-[40px] pb-[20px] pl-[40px]">
        <div data-figma-node="5621:29004" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-center justify-between">
          <div data-figma-node="5621:29005" className="box-border w-max max-w-[min(210px,100%)] h-auto relative flex flex-row items-center gap-2">
            <div data-figma-node="5621:29006" data-figma-component="5111:8263" className="box-border w-[24px] shrink-0 h-[24px] overflow-hidden relative block">
              <svg data-figma-node="I5621:29006;5111:8264" viewBox="0 0 18 18" preserveAspectRatio="none" aria-hidden="true" className="box-border absolute left-[12.5%] w-[75%] top-[12.5%] h-[75%] pointer-events-none overflow-visible"><path d="M0 5C-0.552285 5 -1 5.44772 -1 6C-1 6.55228 -0.552285 7 0 7L0 6L0 5ZM18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5L18 6L18 7ZM1.09202 17.782L1.54601 16.891L1.09202 17.782ZM0.217987 16.908L1.10899 16.454L0.217987 16.908ZM17.782 16.908L16.891 16.454L17.782 16.908ZM16.908 17.782L16.454 16.891L16.908 17.782ZM16.908 2.21799L16.454 3.10899L16.908 2.21799ZM17.782 3.09202L16.891 3.54601L17.782 3.09202ZM1.09202 2.21799L1.54601 3.10899L1.09202 2.21799ZM0.217987 3.09202L1.10899 3.54601L0.217987 3.09202ZM5 0C5 -0.552285 4.55228 -1 4 -1C3.44772 -1 3 -0.552285 3 0L4 0L5 0ZM3 2C3 2.55228 3.44772 3 4 3C4.55228 3 5 2.55228 5 2L4 2L3 2ZM15 0C15 -0.552285 14.5523 -1 14 -1C13.4477 -1 13 -0.552285 13 0L14 0L15 0ZM13 2C13 2.55228 13.4477 3 14 3C14.5523 3 15 2.55228 15 2L14 2L13 2ZM3 8C2.44772 8 2 8.44771 2 9C2 9.55229 2.44772 10 3 10L3 9L3 8ZM5 10C5.55228 10 6 9.55229 6 9C6 8.44771 5.55228 8 5 8L5 9L5 10ZM8 8C7.44772 8 7 8.44771 7 9C7 9.55229 7.44772 10 8 10L8 9L8 8ZM10 10C10.5523 10 11 9.55229 11 9C11 8.44771 10.5523 8 10 8L10 9L10 10ZM13 8C12.4477 8 12 8.44771 12 9C12 9.55229 12.4477 10 13 10L13 9L13 8ZM15 10C15.5523 10 16 9.55229 16 9C16 8.44771 15.5523 8 15 8L15 9L15 10ZM3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13L3 12L3 11ZM5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11L5 12L5 13ZM8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13L8 12L8 11ZM10 13C10.5523 13 11 12.5523 11 12C11 11.4477 10.5523 11 10 11L10 12L10 13ZM13 11C12.4477 11 12 11.4477 12 12C12 12.5523 12.4477 13 13 13L13 12L13 11ZM15 13C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11L15 12L15 13ZM3 14C2.44772 14 2 14.4477 2 15C2 15.5523 2.44772 16 3 16L3 15L3 14ZM5 16C5.55228 16 6 15.5523 6 15C6 14.4477 5.55228 14 5 14L5 15L5 16ZM8 14C7.44772 14 7 14.4477 7 15C7 15.5523 7.44772 16 8 16L8 15L8 14ZM10 16C10.5523 16 11 15.5523 11 15C11 14.4477 10.5523 14 10 14L10 15L10 16ZM13 14C12.4477 14 12 14.4477 12 15C12 15.5523 12.4477 16 13 16L13 15L13 14ZM15 16C15.5523 16 16 15.5523 16 15C16 14.4477 15.5523 14 15 14L15 15L15 16ZM0 6L0 7L18 7L18 6L18 5L0 5L0 6ZM3.2 2L3.2 3L14.8 3L14.8 2L14.8 1L3.2 1L3.2 2ZM18 5.2L17 5.2L17 14.8L18 14.8L19 14.8L19 5.2L18 5.2ZM14.8 18L14.8 17L3.2 17L3.2 18L3.2 19L14.8 19L14.8 18ZM0 14.8L1 14.8L1 5.2L0 5.2L-1 5.2L-1 14.8L0 14.8Z" fill="#a21d35" /></svg>
            </div>
            <h1 data-figma-node="5621:29007" className="box-border w-max max-w-[min(178px,100%)] h-auto min-h-[23px] font-onest text-[18px] font-[700] leading-[23px] text-left lg:whitespace-nowrap text-text-primary">Create New Holiday</h1>
          </div>
          <div data-figma-node="5621:29008" className="box-border w-max max-w-[min(36px,100%)] h-auto relative flex flex-row items-center gap-3">
            <Button
              data-figma-node="5621:29009"
              type="button"
              data-figma-action="act_0b52f00d4464"
              onClick={(e) => {
                e.preventDefault();
                resetHolidayForm();
                closeFigmaDialog();
              }}
              className="p-0 box-border w-max max-w-[min(36px,100%)] h-auto rounded-[6px] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] bg-background cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current disabled:cursor-not-allowed disabled:opacity-50 gap-0 justify-start hover:bg-background shadow-none"
            >
              <FiRrCrossSmall2 data-figma-node="5621:29010" data-figma-component="5121:8491" className="box-border w-[24px] shrink-0 h-[24px] overflow-hidden" />
            </Button>
          </div>
        </div>
        </div>
        <div data-figma-node="5621:29011" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-col items-start gap-4">
          <div data-figma-node="5621:29022" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-col items-start gap-4">
            <div data-figma-node="5621:29023" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-start gap-4">
              <div data-figma-node="5621:29024" className="box-border flex-1 min-w-0 h-auto relative flex flex-col items-start gap-1.5">
                <p data-figma-node="5621:29025" className="box-border w-max max-w-[min(97px,100%)] h-auto min-h-[15px] shrink-0 font-onest text-[12px] font-[700] leading-[15px] uppercase text-left whitespace-nowrap text-color-11">Holiday name</p>
                <div className="box-border self-stretch min-w-0 h-auto shrink-0 rounded-[8px] border-[#e2d9d0] border-[1px] pt-[12px] pr-[14px] pb-[12px] pl-[14px] bg-surface">
                  <input
                    data-figma-node="5621:29026"
                    name="holiday-name"
                    data-figma-field="holiday-name"
                    data-figma-field-origin="design_text"
                    {...figmaFieldProps("holiday-name")}
                    type="text"
                    placeholder="e.g. Thanksgiving Day"
                    aria-label="Holiday name"
                    aria-invalid={Boolean(fieldErrors["holiday-name"])}
                    className="box-border w-full h-auto font-onest text-[14px] font-[400] leading-[18px] text-left text-text-primary placeholder:text-color-10 bg-transparent border-0 shadow-none ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  />
                </div>
                {fieldErrors["holiday-name"] ? (
                  <p className="font-onest text-[12px] font-[400] leading-[15px] text-primary">{fieldErrors["holiday-name"]}</p>
                ) : null}
              </div>
            </div>
            <div data-figma-node="5621:29028" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-start gap-4">
              <div data-figma-node="5621:29029" className="box-border flex-1 min-w-0 h-auto relative flex flex-col items-start gap-1.5">
                <p data-figma-node="5621:29030" className="box-border w-max max-w-[min(81px,100%)] h-auto min-h-[15px] shrink-0 font-onest text-[12px] font-[700] leading-[15px] tracking-[0.48px] uppercase text-left whitespace-nowrap text-color-11">Start Date</p>
                <div className="box-border self-stretch min-w-0 shrink-0 rounded-[8px] relative border-[#e2d9d0] border-[1px] bg-surface h-[44px]">
                  <input
                    data-figma-node="5621:29031"
                    name="start-date"
                    data-figma-field="start-date"
                    data-figma-field-origin="design_text"
                    {...figmaFieldProps("start-date")}
                    type="date"
                    aria-label="Start Date"
                    aria-invalid={Boolean(fieldErrors["start-date"])}
                    className="absolute inset-0 h-full w-full appearance-none bg-transparent shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary cursor-pointer text-text-primary font-onest text-[14px] font-[400] leading-[18px] text-left pt-[10px] pr-[12px] pb-[10px] pl-[12px]"
                  />
                  <div className="pointer-events-none absolute inset-0">
                    <Shared5B5A48 data-figma-node="5621:29033" className="box-border w-[24px] h-[24px] absolute left-[192px] top-[10px]" />
                  </div>
                </div>
                {fieldErrors["start-date"] ? (
                  <p className="font-onest text-[12px] font-[400] leading-[15px] text-primary">{fieldErrors["start-date"]}</p>
                ) : null}
              </div>
              <div data-figma-node="5621:29035" className="box-border flex-1 min-w-0 h-auto relative flex flex-col items-start gap-1.5">
                <p data-figma-node="5621:29036" className="box-border w-max max-w-[min(68px,100%)] h-auto min-h-[15px] shrink-0 font-onest text-[12px] font-[700] leading-[15px] tracking-[0.48px] uppercase text-left whitespace-nowrap text-color-11">End Date</p>
                <div className="box-border self-stretch min-w-0 shrink-0 rounded-[8px] relative border-[#e2d9d0] border-[1px] bg-surface h-[44px]">
                  <input
                    data-figma-node="5621:29037"
                    name="end-date"
                    data-figma-field="end-date"
                    data-figma-field-origin="design_text"
                    {...figmaFieldProps("end-date")}
                    type="date"
                    aria-label="End Date"
                    aria-invalid={Boolean(fieldErrors["end-date"])}
                    className="absolute inset-0 h-full w-full appearance-none bg-transparent shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary cursor-pointer text-text-primary font-onest text-[14px] font-[400] leading-[18px] text-left pt-[10px] pr-[12px] pb-[10px] pl-[12px]"
                  />
                  <div className="pointer-events-none absolute inset-0">
                    <Shared5B5A48 data-figma-node="5621:29039" className="box-border w-[24px] h-[24px] absolute left-[192px] top-[10px]" />
                  </div>
                </div>
                {fieldErrors["end-date"] ? (
                  <p className="font-onest text-[12px] font-[400] leading-[15px] text-primary">{fieldErrors["end-date"]}</p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <div className="sr-only" aria-live="polite">
          {submitError ? submitError : null}
        </div>
        <div data-figma-node="5621:29041" className="box-border self-stretch min-w-0 h-[1px] shrink-0 bg-border" />
        <div data-figma-node="5621:29042" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-start justify-end gap-3">
          <Button
            data-figma-node="5621:29043"
            type="button"
            data-figma-action="act_3e52a9e8a905"
            onClick={(e) => {
              e.preventDefault();
              resetHolidayForm();
              closeFigmaDialog();
            }}
            className="p-0 box-border w-max h-auto rounded-[6px] min-w-[78px] border-[#e2d9d0] border-[1px] pt-[10px] pr-[16px] pb-[10px] pl-[16px] inline-flex items-center justify-start whitespace-nowrap bg-transparent hover:bg-[#ffffff] hover:text-text-primary cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current disabled:cursor-not-allowed disabled:opacity-50 gap-0 shadow-none"
          >
            <span className="font-onest text-[14px] font-[700] leading-[18px] text-left whitespace-nowrap text-color-11">Cancel</span>
          </Button>
          <Button
            data-figma-node="5621:29045"
            type="submit"
            data-figma-action="act_9cb2d6ba2b8b"
            disabled={submitting}
            className="p-0 box-border w-max h-auto rounded-[6px] min-w-[129px] pt-[10px] pr-[20px] pb-[10px] pl-[20px] inline-flex items-center justify-start whitespace-nowrap bg-primary hover:opacity-90 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current disabled:cursor-not-allowed disabled:opacity-50 gap-0 hover:bg-primary shadow-none"
          >
            <span className="font-onest text-[14px] font-[700] leading-[18px] text-left whitespace-nowrap text-surface">
              {submitting ? "Saving…" : "Save Holiday"}
            </span>
          </Button>
        </div>
      </form>
    </section>
  );
}
