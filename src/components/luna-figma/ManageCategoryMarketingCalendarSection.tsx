/**
 * Luna generated layout
 * Figma node: 5449:19127
 * Section: Marketing Calendar
 * Route: /manage-category
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
"use client";

import { openFigmaDialog } from "./useFigmaScreenData";

export function ManageCategoryMarketingCalendarSection() {
  return (
    <section data-figma-node="5449:19127" data-figma-component="5273:20995" className="relative box-border h-[80px] w-full min-w-0 overflow-hidden bg-[#ffffff] pt-[15px] pr-[20px] pb-[15px] pl-[20px] border-b border-[#e2d9d0] flex flex-row items-center justify-between shadow-[0px_4px_10px_0px_rgba(0,0,0,0.059)] z-[0]">
      <div data-figma-node="I5449:19127;5217:13714" className="box-border w-max max-w-[min(286px,100%)] h-auto relative flex flex-row items-center gap-[30px]">
        <div data-figma-node="I5449:19127;5217:13715" className="box-border w-max max-w-[min(286px,100%)] h-auto relative flex flex-row items-center gap-3">
          <img data-figma-node="I5449:19127;5217:13716" src="/assets/figma/I5449-19127-5217-13716.png" alt="" aria-hidden="true" width={54} height={50} decoding="async" onError={e => { const img = e.currentTarget as HTMLImageElement; img.onerror = null; img.src = "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Crect width='1' height='1' fill='%23e5e7eb'/%3E%3C/svg%3E"; }} className="box-border w-[54px] shrink-0 h-[50px] rounded-[10px] max-w-none object-cover object-top" />
          <div data-figma-node="I5449:19127;5217:13717" className="box-border w-max max-w-[min(220px,100%)] h-auto relative flex flex-col items-start gap-0.5">
            <h1 data-figma-node="I5449:19127;5217:13718" className="box-border w-max max-w-[min(220px,100%)] h-auto min-h-[27px] shrink-0 font-inter text-[22px] font-[800] leading-[27px] text-left lg:whitespace-nowrap text-text-primary">Marketing Calendar </h1>
            <p data-figma-node="I5449:19127;5217:13719" className="box-border w-max max-w-[min(175px,100%)] h-auto min-h-[14px] shrink-0 font-onest text-[11px] font-[600] leading-[14px] uppercase text-left lg:whitespace-nowrap text-text-secondary">Plan · Create · Track · Grow</p>
          </div>
        </div>
      </div>
      <div data-figma-node="I5449:19127;5217:13733" className="box-border w-max max-w-[min(221px,100%)] h-auto relative flex flex-row items-center gap-4">
        <a data-figma-node="I5449:19127;5217:13746" href="/week-calendar-default" className="box-border w-max h-[40px] rounded-[6px] min-w-[145px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] inline-flex items-center justify-start gap-2 whitespace-nowrap bg-color-20 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"><span className="font-onest text-[13px] font-[700] leading-[17px] uppercase text-left whitespace-nowrap text-text-primary">oPEN CALANDER</span></a>
        <button
          type="button"
          data-figma-node="I5449:19127;5217:13749"
          data-figma-action="act_302ca0c59c1b"
          onClick={(event) => {
            event.preventDefault();
            openFigmaDialog("act_302ca0c59c1b");
          }}
          className="box-border w-max max-w-[min(60px,100%)] h-auto flex flex-row items-center gap-2 border-0 bg-transparent p-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          aria-label="Open profile menu"
        >
          <span className="inline-flex items-center justify-center" aria-hidden="true"><div data-figma-node="I5449:19127;5217:13750" data-figma-component="5111:12456" className="box-border w-[32px] h-auto rounded-[32px] relative flex flex-row items-start gap-2" style={{backgroundColor: "rgba(0, 0, 0, 0.25)"}}>
  <img data-figma-node="I5449:19127;5217:13750;1002:172586" src="/assets/figma/I5449-19127-5217-13750-1002-172586.png" alt="" aria-hidden="true" width={32} height={32} decoding="async" onError={e => { const img = e.currentTarget as HTMLImageElement; img.onerror = null; img.src = "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Crect width='1' height='1' fill='%23e5e7eb'/%3E%3C/svg%3E"; }} className="box-border w-[32px] shrink-0 h-[32px] rounded-[32px] max-w-none object-cover object-top" />
</div></span><span className="inline-flex items-center justify-center" aria-hidden="true"><div data-figma-node="I5449:19127;5217:13752" data-figma-component="5111:6287" className="box-border w-[16px] h-[16px] overflow-hidden relative block">
  <span data-figma-node="I5449:19127;5217:13752;5111:6288" data-figma-unrendered="vector" data-figma-diagnostic="vector_geometry_unavailable" aria-hidden="true" className="box-border absolute left-[25%] w-[50%] top-[37.5%] h-[25%] inline-block pointer-events-none" />
</div></span>
        </button>
      </div>
    </section>
  );
}
