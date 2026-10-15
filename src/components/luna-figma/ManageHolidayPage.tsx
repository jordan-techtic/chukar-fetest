/**
 * Luna generated page
 * Figma frame: 5621:28270
 * Page: Manage-holiday
 * Route: /manage-holiday
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
"use client";

import "./figma-theme.css";
import "./figma-responsive.css";
import { openFigmaDialog, useDialogState, useFigmaScreenData } from "./useFigmaScreenData";
import { ManageHolidayTitleRowSection } from "./ManageHolidayTitleRowSection";
import { ManageHolidayContentColumnSection } from "./ManageHolidayContentColumnSection";
import { MonthlyCalendarProfileMenuModal } from "./MonthlyCalendarProfileMenuModal";
import { AddHolidayModal } from "./AddHolidayModal";
import { AnnualCalendarDefaultModal } from "./AnnualCalendarDefaultModal";

export function ManageHolidayPage() {
  const screenData = useFigmaScreenData();
  const dialog_act_0e7f4be472d9 = useDialogState("act_0e7f4be472d9");
  const dialog_act_8e0ab36f39bd = useDialogState("act_8e0ab36f39bd");
  const dialog_act_6441534980cd = useDialogState("act_6441534980cd");
  return (
    <div
      data-figma-bound={screenData.bound}
      data-figma-frame="5621:28270"
      aria-busy={screenData.loadingReads || undefined}
      className="relative flex min-h-screen w-full min-w-0 flex-col overflow-x-hidden bg-background-tinted-fff9f3"
    >
      <main id="main-content" className="relative flex min-h-0 w-full min-w-0 flex-1 flex-col">
        <ManageHolidayTitleRowSection />
        <ManageHolidayContentColumnSection />
        <div className="pointer-events-none absolute inset-0 z-[0]">
          <a data-figma-node="5621:28271" data-figma-component="5273:20995" href="/marketing-calendar/week" className="pointer-events-auto box-border w-full min-w-0 h-[80px] absolute left-[0px] top-[0px] z-[0] [--fx:0] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.059)] flex flex-row items-center justify-between pt-[15px] pb-[15px] pl-[20px] pr-[20px] border-b border-[#e2d9d0] bg-background-ffffff focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current overflow-hidden bg-[#ffffff]">
            <div data-figma-node="I5621:28271;5217:13714" className="box-border w-max max-w-[min(282px,100%)] h-auto relative flex flex-row items-center gap-[30px]">
              <div data-figma-node="I5621:28271;5217:13715" className="box-border w-max max-w-[min(282px,100%)] h-auto relative flex flex-row items-center gap-3">
                <img data-figma-node="I5621:28271;5217:13716" src="/assets/figma/I5621-28271-5217-13716.png" alt="" aria-hidden="true" width={54} height={50} decoding="async" onError={e => { const img = e.currentTarget as HTMLImageElement; img.onerror = null; img.src = "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Crect width='1' height='1' fill='%23e5e7eb'/%3E%3C/svg%3E"; }} className="box-border w-[54px] shrink-0 h-[50px] rounded-[10px] max-w-none object-cover object-top" />
                <div data-figma-node="I5621:28271;5217:13717" className="box-border w-max max-w-[min(216px,100%)] h-auto relative flex flex-col items-start gap-0.5">
                  <h2 data-figma-node="I5621:28271;5217:13718" className="box-border w-max max-w-[min(216px,100%)] h-auto min-h-[27px] shrink-0 font-inter text-[22px] font-[800] leading-[27px] text-left lg:whitespace-nowrap text-text-body-231f20">Marketing Calendar </h2>
                  <p data-figma-node="I5621:28271;5217:13719" className="box-border w-max max-w-[min(171px,100%)] h-auto min-h-[14px] shrink-0 font-onest text-[11px] font-[600] leading-[14px] uppercase text-left lg:whitespace-nowrap text-text-muted-686868">Plan · Create · Track · Grow</p>
                </div>
              </div>
            </div>
            <div data-figma-node="I5621:28271;5217:13733" className="box-border w-max max-w-[min(217px,100%)] h-auto relative flex flex-row items-center gap-4">
              <a data-figma-node="I5621:28271;5217:13746" href="/week-calendar-default-1" className="box-border w-max h-[40px] rounded-[6px] min-w-[145px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] inline-flex items-center justify-start whitespace-nowrap bg-surface-light-f2f1dd hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"><span className="font-onest text-[13px] font-[700] leading-[17px] uppercase text-left whitespace-nowrap text-text-body-231f20">oPEN CALANDER</span></a>
              <div data-figma-node="I5621:28271;5217:13749" data-figma-action="act_0e7f4be472d9" data-figma-overlay-opens="5327:3852" role="button" tabIndex={0} onKeyDown={(e) => { if (e.target === e.currentTarget && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); openFigmaDialog("act_0e7f4be472d9"); } }} onClick={(e) => { e.preventDefault(); openFigmaDialog("act_0e7f4be472d9"); }} className="box-border w-max max-w-[min(56px,100%)] h-auto flex cursor-pointer flex-row items-center gap-2"><button type="button" aria-label="Avatar" className="inline-flex items-center justify-center"><div data-figma-node="I5621:28271;5217:13750" data-figma-component="5111:12456" className="box-border w-[32px] h-auto rounded-[32px] relative flex flex-row items-start gap-2" style={{backgroundColor: "rgba(0, 0, 0, 0.25)"}}>
  <img data-figma-node="I5621:28271;5217:13750;1002:172586" src="/assets/figma/I5621-28271-5217-13750-1002-172586.png" alt="" aria-hidden="true" width={32} height={32} decoding="async" onError={e => { const img = e.currentTarget as HTMLImageElement; img.onerror = null; img.src = "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Crect width='1' height='1' fill='%23e5e7eb'/%3E%3C/svg%3E"; }} className="box-border w-[32px] shrink-0 h-[32px] rounded-[32px] max-w-none object-cover object-top" />
</div></button><button type="button" aria-label="Expand oPEN CALANDER" className="inline-flex items-center justify-center"><div data-figma-node="I5621:28271;5217:13752" data-figma-component="5111:6287" className="box-border w-[16px] h-[16px] overflow-hidden relative">
  <span data-figma-node="I5621:28271;5217:13752;5111:6288" data-figma-unrendered="vector" data-figma-diagnostic="vector_geometry_unavailable" aria-hidden="true" className="box-border absolute [--fx:4] [--fww:8] left-[25%] w-[50%] top-[37.5%] h-[25%] inline-block pointer-events-none" />
</div></button></div>
            </div>
          </a>
        </div>
      </main>
      {dialog_act_0e7f4be472d9.isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          ref={(el) => { el?.focus(); }}
          onClick={dialog_act_0e7f4be472d9.close}
          onKeyDown={(e) => { if (e.key === "Escape") dialog_act_0e7f4be472d9.close(); }}
          data-figma-dialog="act_0e7f4be472d9"
        >
          <div
            className="relative max-h-[90vh] overflow-auto rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <MonthlyCalendarProfileMenuModal />
          </div>
        </div>
      )}

      {dialog_act_8e0ab36f39bd.isOpen && (
        <div
          data-figma-node="5621:29002"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm pt-[218px] pr-[460px] pb-[218px] pl-[460px]"
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          ref={(el) => { el?.focus(); }}
          onClick={dialog_act_8e0ab36f39bd.close}
          onKeyDown={(e) => { if (e.key === "Escape") dialog_act_8e0ab36f39bd.close(); }}
          data-figma-dialog="act_8e0ab36f39bd"
        >
          <div
            className="relative max-h-[90vh] overflow-auto rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <AddHolidayModal />
          </div>
        </div>
      )}

      {dialog_act_6441534980cd.isOpen && (
        <div
          data-figma-node="5279:24938"
          className="fixed left-[0px] top-[0px] z-[9999] flex h-[940px] w-[1440px] max-w-none items-stretch justify-end bg-[rgba(26,32,44,0.584)] pl-[788px]"
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          ref={(el) => { el?.focus(); }}
          onClick={dialog_act_6441534980cd.close}
          onKeyDown={(e) => { if (e.key === "Escape") dialog_act_6441534980cd.close(); }}
          data-figma-dialog="act_6441534980cd"
        >
          <div
            className="relative h-full max-h-full overflow-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <AnnualCalendarDefaultModal />
          </div>
        </div>
      )}
    </div>
  );
}
