/**
 * Luna generated page
 * Figma frame: 5645:60757
 * Page: annual-calendar-default
 * Route: /marketing-calendar/annual
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
"use client";

import "./figma-theme.css";
import "./figma-responsive.css";
import { useFigmaScreenData } from "./useFigmaScreenData";
import { AnnualCalendarDefaultMarketingCalendarSection } from "./AnnualCalendarDefaultMarketingCalendarSection";
import { AnnualCalendarDefaultN20252026Section } from "./AnnualCalendarDefaultN20252026Section";
import { AnnualCalendarDefaultSection_n_5645_60760 } from "./AnnualCalendarDefaultSection_n_5645_60760";
import { AnnualCalendarDefaultProfileCardSection } from "./AnnualCalendarDefaultProfileCardSection";
import { closeFigmaDialog } from "./useFigmaScreenData";
import { Button } from "@/components/ui/button";
import { PenField } from "./PenField";

export function AnnualCalendarDefaultPage() {
  const screenData = useFigmaScreenData();
  return (
    <div data-figma-bound={screenData.bound}
      data-figma-frame="5645:60757" className="relative flex min-h-screen w-full min-w-0 flex-col bg-background">
      <main id="main-content" className="flex w-full min-w-0 flex-1 flex-col">
        <AnnualCalendarDefaultMarketingCalendarSection />
        <AnnualCalendarDefaultN20252026Section />
        <div className="flex w-full min-w-0 flex-col items-start md:flex-row">
        <AnnualCalendarDefaultSection_n_5645_60760 />
        <AnnualCalendarDefaultProfileCardSection />
        </div>
        <div className="pointer-events-none absolute inset-0 z-[4]">
          <div data-figma-node="5645:65073" className="pointer-events-auto box-border w-[1440px] h-[954px] absolute left-[0px] top-[0px] z-[4] [--fx:0] [--fww:1440] flex flex-row items-center justify-center pt-[104px] pr-[460px] pb-[104px] pl-[460px]" style={{backgroundColor: "rgba(26, 32, 44, 0.584)"}}>
            <div data-figma-node="5645:65074" className="box-border w-[520px] shrink-0 h-auto rounded-[12px] shadow-[0px_10px_20px_0px_rgba(0,0,0,0.141)] relative flex flex-col items-start gap-6 pt-[24px] pr-[24px] pb-[24px] pl-[24px] bg-surface">
              <div data-figma-node="5645:65075" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-center justify-between">
                <div data-figma-node="5645:65076" className="box-border w-max max-w-[min(189px,100%)] h-auto relative flex flex-row items-center gap-2">
                  <PenField data-figma-node="5645:65077" data-figma-component="5111:7679" className="box-border w-[24px] shrink-0 h-[24px] overflow-hidden" />
                  <h3 data-figma-node="5645:65078" className="box-border w-max max-w-[min(157px,100%)] h-auto min-h-[23px] font-onest text-[18px] font-[700] leading-[23px] text-left whitespace-nowrap text-text-primary">Schedule Activity</h3>
                </div>
                <div data-figma-node="5645:65079" className="box-border w-max max-w-[min(36px,100%)] h-auto relative flex flex-row items-center gap-3">
                  <div data-figma-node="5645:65080" className="box-border w-max max-w-[min(36px,100%)] h-auto rounded-[6px] pt-[4px] pr-[4px] pb-[4px] pl-[4px] bg-background flex flex-row items-start"><button type="button" aria-label="fi-rr-cross-small" className="inline-flex items-center justify-center"><div data-figma-node="5645:65081" data-figma-component="5121:8491" className="box-border w-[24px] h-[24px] overflow-hidden relative block">
  <svg data-figma-node="I5645:65081;403:359" viewBox="0 0 12.59 12.59" preserveAspectRatio="none" aria-hidden="true" className="box-border absolute [--fx:6] [--fww:13] left-[25%] w-[54.167%] top-[25%] h-[54.167%] pointer-events-none overflow-visible"><path d="M12.2928 0.292787C12.1053 0.105316 11.851 0 11.5858 0C11.3206 0 11.0663 0.105316 10.8788 0.292787L6.29279 4.87879L1.70679 0.292787C1.51926 0.105316 1.26495 0 0.999786 0C0.734622 0 0.480314 0.105316 0.292787 0.292787C0.105316 0.480314 0 0.734622 0 0.999786C0 1.26495 0.105316 1.51926 0.292787 1.70679L4.87879 6.29279L0.292787 10.8788C0.105316 11.0663 8.88179e-16 11.3206 0 11.5858C8.88179e-16 11.851 0.105316 12.1053 0.292787 12.2928C0.480314 12.4803 0.734622 12.5856 0.999786 12.5856C1.26495 12.5856 1.51926 12.4803 1.70679 12.2928L6.29279 7.70679L10.8788 12.2928C11.0663 12.4803 11.3206 12.5856 11.5858 12.5856C11.851 12.5856 12.1053 12.4803 12.2928 12.2928C12.4803 12.1053 12.5856 11.851 12.5856 11.5858C12.5856 11.3206 12.4803 11.0663 12.2928 10.8788L7.70679 6.29279L12.2928 1.70679C12.4803 1.51926 12.5856 1.26495 12.5856 0.999786C12.5856 0.734622 12.4803 0.480314 12.2928 0.292787L12.2928 0.292787Z" fill="#231f20" /></svg>
</div></button></div>
                </div>
              </div>
              <p data-figma-node="5645:65082" className="box-border self-stretch min-w-0 h-auto min-h-[40px] shrink-0 font-onest text-[14px] font-[400] leading-[20px] text-left text-color-22">Choose the date for the copied activity. We suggested the same date one year later.</p>
              <div data-figma-node="5645:65083" className="box-border self-stretch min-w-0 h-auto shrink-0 rounded-[6px] relative flex flex-row items-center gap-2 pt-[12px] pr-[12px] pb-[12px] pl-[12px] border-[#a21d35] border-[1px] bg-color-28">
                <div data-figma-node="5645:65084" className="box-border w-max max-w-[min(160px,100%)] h-auto relative flex flex-col items-start gap-0.5">
                  <div data-figma-node="5645:65085" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-center justify-between gap-[55px]">
                    <div data-figma-node="5645:65086" className="box-border w-max max-w-[min(48px,100%)] h-auto relative flex flex-row items-center gap-1">
                      <div data-figma-node="5645:65087" className="box-border w-[6px] shrink-0 h-[6px] rounded-[3px] relative block bg-primary"></div>
                      <p data-figma-node="5645:65088" className="box-border w-max max-w-[min(38px,100%)] h-auto min-h-[13px] font-onest text-[10px] font-[700] leading-[13px] tracking-[0.6px] uppercase text-left whitespace-nowrap text-primary">Email</p>
                    </div>
                  </div>
                  <p data-figma-node="5645:65089" className="box-border w-max max-w-[min(160px,100%)] h-auto min-h-[15px] shrink-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-primary">Great Prosser Balloon Rally</p>
                  <p data-figma-node="5645:65090" className="box-border w-max max-w-[min(118px,100%)] h-auto min-h-[13px] shrink-0 font-onest text-[10px] font-[400] leading-[13px] text-left whitespace-nowrap text-text-secondary">Original Duration: 1 Days</p>
                </div>
              </div>
              <div data-figma-node="5645:65091" className="box-border self-stretch min-w-0 h-auto shrink-0 rounded-[8px] relative flex flex-col items-start gap-5 pt-[24px] pr-[24px] pb-[24px] pl-[24px] border-[#e5e7eb] border-[1px]">
                <div data-figma-node="5645:65092" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-center justify-between">
                  <div data-figma-node="5645:65093" className="box-border w-[16px] shrink-0 h-[16px] overflow-hidden relative block">
                    <svg data-figma-node="5645:65094" viewBox="0 0 4 8" preserveAspectRatio="none" aria-hidden="true" className="box-border absolute [--fx:6] [--fww:4] left-[37.5%] w-[25%] top-[25%] h-[50%] pointer-events-none overflow-visible"><path d="M3.29289 8.70711C3.68342 9.09763 4.31658 9.09763 4.70711 8.70711C5.09763 8.31658 5.09763 7.68342 4.70711 7.29289L4 8L3.29289 8.70711ZM0 4L-0.707107 3.29289L-1.41421 4L-0.707107 4.70711L0 4ZM4.70711 0.707107C5.09763 0.316583 5.09763 -0.316583 4.70711 -0.707107C4.31658 -1.09763 3.68342 -1.09763 3.29289 -0.707107L4 0L4.70711 0.707107ZM4 8L4.70711 7.29289L0.707107 3.29289L0 4L-0.707107 4.70711L3.29289 8.70711L4 8ZM0 4L0.707107 4.70711L4.70711 0.707107L4 0L3.29289 -0.707107L-0.707107 3.29289L0 4Z" fill="#111827" /></svg>
                  </div>
                  <p data-figma-node="5645:65095" className="box-border w-max max-w-[min(132px,100%)] h-auto min-h-[20px] font-onest text-[16px] font-[700] leading-[20px] text-left whitespace-nowrap text-color-12">September 2026</p>
                  <div data-figma-node="5645:65096" className="box-border w-[16px] shrink-0 h-[16px] overflow-hidden relative block">
                    <svg data-figma-node="5645:65097" viewBox="0 0 4 8" preserveAspectRatio="none" aria-hidden="true" className="box-border absolute [--fx:6] [--fww:4] left-[37.5%] w-[25%] top-[25%] h-[50%] pointer-events-none overflow-visible"><path d="M-0.707107 7.29289C-1.09763 7.68342 -1.09763 8.31658 -0.707107 8.70711C-0.316583 9.09763 0.316583 9.09763 0.707107 8.70711L0 8L-0.707107 7.29289ZM4 4L4.70711 4.70711L5.41421 4L4.70711 3.29289L4 4ZM0.707107 -0.707107C0.316583 -1.09763 -0.316583 -1.09763 -0.707107 -0.707107C-1.09763 -0.316583 -1.09763 0.316583 -0.707107 0.707107L0 0L0.707107 -0.707107ZM0 8L0.707107 8.70711L4.70711 4.70711L4 4L3.29289 3.29289L-0.707107 7.29289L0 8ZM4 4L4.70711 3.29289L0.707107 -0.707107L0 0L-0.707107 0.707107L3.29289 4.70711L4 4Z" fill="#111827" /></svg>
                  </div>
                </div>
                <div data-figma-node="5645:65098" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-col items-start gap-3">
                  <img data-figma-node="5645:65099" src="/assets/figma/5645-65099.png" alt="Week Header Row" width={424} height={24} decoding="async" onError={e => { const img = e.currentTarget as HTMLImageElement; img.onerror = null; img.src = "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Crect width='1' height='1' fill='%23e5e7eb'/%3E%3C/svg%3E"; }} className="box-border self-stretch min-w-0 h-auto shrink-0 max-w-none object-cover object-top" />
                  <img data-figma-node="5645:65114" src="/assets/figma/5645-65114.png" alt="Week row 1" width={424} height={36} decoding="async" onError={e => { const img = e.currentTarget as HTMLImageElement; img.onerror = null; img.src = "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Crect width='1' height='1' fill='%23e5e7eb'/%3E%3C/svg%3E"; }} className="box-border self-stretch min-w-0 h-auto shrink-0 max-w-none object-cover object-top" />
                  <img data-figma-node="5645:65129" src="/assets/figma/5645-65129.png" alt="Week row 2" width={424} height={36} decoding="async" onError={e => { const img = e.currentTarget as HTMLImageElement; img.onerror = null; img.src = "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Crect width='1' height='1' fill='%23e5e7eb'/%3E%3C/svg%3E"; }} className="box-border self-stretch min-w-0 h-auto shrink-0 max-w-none object-cover object-top" />
                  <img data-figma-node="5645:65144" src="/assets/figma/5645-65144.png" alt="Week row 3" width={424} height={36} decoding="async" onError={e => { const img = e.currentTarget as HTMLImageElement; img.onerror = null; img.src = "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Crect width='1' height='1' fill='%23e5e7eb'/%3E%3C/svg%3E"; }} className="box-border self-stretch min-w-0 h-auto shrink-0 max-w-none object-cover object-top" />
                  <img data-figma-node="5645:65159" src="/assets/figma/5645-65159.png" alt="Week row 4" width={424} height={36} decoding="async" onError={e => { const img = e.currentTarget as HTMLImageElement; img.onerror = null; img.src = "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Crect width='1' height='1' fill='%23e5e7eb'/%3E%3C/svg%3E"; }} className="box-border self-stretch min-w-0 h-auto shrink-0 max-w-none object-cover object-top" />
                  <img data-figma-node="5645:65174" src="/assets/figma/5645-65174.png" alt="Week row 5" width={424} height={36} decoding="async" onError={e => { const img = e.currentTarget as HTMLImageElement; img.onerror = null; img.src = "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Crect width='1' height='1' fill='%23e5e7eb'/%3E%3C/svg%3E"; }} className="box-border self-stretch min-w-0 h-auto shrink-0 max-w-none object-cover object-top" />
                </div>
              </div>
              <p data-figma-node="5645:65189" className="box-border self-stretch min-w-0 h-auto min-h-[22px] shrink-0 font-inter text-[14px] font-[400] leading-[22px] text-left text-color-12"><span className="font-onest">Will be scheduled on </span><span className="font-onest font-[700]">Sunday, September 13, 2026</span><span className="font-onest"> as a Draft.</span></p>
              <div data-figma-node="5645:65190" className="box-border self-stretch min-w-0 h-[1px] shrink-0 bg-border" />
              <div data-figma-node="5645:65191" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-start justify-end gap-3">
                <Button data-figma-node="5645:65192" type="button" onClick={(e) => { e.preventDefault(); closeFigmaDialog(); }} className="p-0 box-border w-max h-auto rounded-[6px] min-w-[78px] border-[#e2d9d0] border-[1px] pt-[10px] pr-[16px] pb-[10px] pl-[16px] inline-flex items-center justify-start whitespace-nowrap bg-transparent hover:bg-[#ffffff] hover:text-[#0b0b0b] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current disabled:cursor-not-allowed disabled:opacity-50 gap-0 shadow-none"><span className="font-onest text-[14px] font-[700] leading-[18px] text-left whitespace-nowrap text-color-11">Cancel</span></Button>
                <Button data-figma-node="5645:65194" type="button" onClick={(e) => { e.preventDefault(); closeFigmaDialog(); }} className="p-0 box-border w-max h-auto rounded-[6px] min-w-[135px] pt-[10px] pr-[20px] pb-[10px] pl-[20px] inline-flex items-center justify-start whitespace-nowrap bg-primary hover:opacity-90 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current disabled:cursor-not-allowed disabled:opacity-50 gap-0 hover:bg-primary shadow-none"><span className="font-onest text-[14px] font-[700] leading-[18px] text-left whitespace-nowrap text-surface">Paste Activity</span></Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
