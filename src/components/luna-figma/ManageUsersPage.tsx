/**
 * Luna generated page
 * Figma frame: 5359:17424
 * Page: manage-users
 * Route: /manage-users
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
"use client";

import "./figma-theme.css";
import "./figma-responsive.css";
import { useFigmaScreenData, useDialogState } from "./useFigmaScreenData";
import { ManageUsersTitleRowSection } from "./ManageUsersTitleRowSection";
import { ManageUsersContentColumnSection } from "./ManageUsersContentColumnSection";
import { MonthlyCalendarProfileMenuModal } from "./MonthlyCalendarProfileMenuModal";
import { InviteUserModal } from "./InviteUserModal";
import { AnnualCalendarDefaultModal } from "./AnnualCalendarDefaultModal";

export function ManageUsersPage() {
  const screenData = useFigmaScreenData();
  const dialog_act_b05a5772e3b4 = useDialogState("act_b05a5772e3b4");
  const dialog_act_b53969b2b08b = useDialogState("act_b53969b2b08b");
  const dialog_act_6441534980cd = useDialogState("act_6441534980cd");
  return (
    <div data-figma-bound={screenData.bound}
      data-figma-frame="5359:17424" className="relative flex min-h-screen w-full min-w-0 flex-col bg-background">
      <main id="main-content" className="flex w-full min-w-0 flex-1 flex-col">
        <ManageUsersTitleRowSection />
        <ManageUsersContentColumnSection />
        <div className="pointer-events-none absolute inset-0 z-[0]">
          <div data-figma-node="5354:14284" data-figma-component="5273:20995" className="pointer-events-auto box-border w-full min-w-0 h-auto absolute left-[0px] top-[0px] z-[0] [--fx:0] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.059)] flex flex-row items-center justify-between pt-[15px] pb-[15px] pl-[20px] pr-[20px] border-b border-[#e2d9d0] bg-surface">
            <div data-figma-node="I5354:14284;5217:13714" className="box-border w-max max-w-[min(282px,100%)] h-auto relative flex flex-row items-center gap-[30px]">
              <div data-figma-node="I5354:14284;5217:13715" className="box-border w-max max-w-[min(282px,100%)] h-auto relative flex flex-row items-center gap-3">
                <img data-figma-node="I5354:14284;5217:13716" src="/assets/figma/I5354-14284-5217-13716.png" alt="" aria-hidden="true" width={54} height={50} decoding="async" onError={e => { const img = e.currentTarget as HTMLImageElement; img.onerror = null; img.src = "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Crect width='1' height='1' fill='%23e5e7eb'/%3E%3C/svg%3E"; }} className="box-border w-[54px] shrink-0 h-[50px] rounded-[10px] max-w-none object-cover object-top" />
                <div data-figma-node="I5354:14284;5217:13717" className="box-border w-max max-w-[min(216px,100%)] h-auto relative flex flex-col items-start gap-0.5">
                  <h2 data-figma-node="I5354:14284;5217:13718" className="box-border w-max max-w-[min(216px,100%)] h-auto min-h-[27px] shrink-0 font-inter text-[22px] font-[800] leading-[27px] text-left lg:whitespace-nowrap text-text-primary">Marketing Calendar </h2>
                  <p data-figma-node="I5354:14284;5217:13719" className="box-border w-max max-w-[min(171px,100%)] h-auto min-h-[14px] shrink-0 font-onest text-[11px] font-[600] leading-[14px] uppercase text-left lg:whitespace-nowrap text-text-secondary">Plan · Create · Track · Grow</p>
                </div>
              </div>
            </div>
            <div data-figma-node="I5354:14284;5217:13733" className="box-border w-max max-w-[min(217px,100%)] h-auto relative flex flex-row items-center gap-4">
              <a data-figma-node="I5354:14284;5217:13746" href="/week-calendar-default-1" className="box-border w-max h-[40px] rounded-[6px] min-w-[145px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] inline-flex items-center justify-start whitespace-nowrap bg-color-20 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"><span className="font-onest text-[13px] font-[700] leading-[17px] uppercase text-left whitespace-nowrap text-text-primary">oPEN CALANDER</span></a>
              <div data-figma-node="I5354:14284;5217:13749" className="box-border w-max max-w-[min(56px,100%)] h-auto flex flex-row items-center gap-2"><button type="button" aria-label="Avatar" className="inline-flex items-center justify-center"><div data-figma-node="I5354:14284;5217:13750" data-figma-component="5111:12456" className="box-border w-[32px] h-auto rounded-[32px] relative flex flex-row items-start gap-2" style={{backgroundColor: "rgba(0, 0, 0, 0.25)"}}>
  <img data-figma-node="I5354:14284;5217:13750;1002:172586" src="/assets/figma/I5354-14284-5217-13750-1002-172586.png" alt="" aria-hidden="true" width={32} height={32} decoding="async" onError={e => { const img = e.currentTarget as HTMLImageElement; img.onerror = null; img.src = "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Crect width='1' height='1' fill='%23e5e7eb'/%3E%3C/svg%3E"; }} className="box-border w-[32px] shrink-0 h-[32px] rounded-[32px] max-w-none object-cover object-top" />
</div></button><button type="button" aria-label="Expand oPEN CALANDER" className="inline-flex items-center justify-center"><div data-figma-node="I5354:14284;5217:13752" data-figma-component="5111:6287" className="box-border w-[16px] h-[16px] overflow-hidden relative">
  <span data-figma-node="I5354:14284;5217:13752;5111:6288" data-figma-unrendered="vector" data-figma-diagnostic="vector_geometry_unavailable" aria-hidden="true" className="box-border absolute [--fx:4] [--fww:8] left-[25%] w-[50%] top-[37.5%] h-[25%] inline-block pointer-events-none" />
</div></button></div>
            </div>
          </div>
        </div>
      </main>
      {dialog_act_b05a5772e3b4.isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          ref={(el) => { el?.focus(); }}
          onClick={dialog_act_b05a5772e3b4.close}
          onKeyDown={(e) => { if (e.key === "Escape") dialog_act_b05a5772e3b4.close(); }}
          data-figma-dialog="act_b05a5772e3b4"
        >
          <div
            className="relative max-h-[90vh] overflow-auto rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <MonthlyCalendarProfileMenuModal />
          </div>
        </div>
      )}

      {dialog_act_b53969b2b08b.isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center" style={{ backgroundColor: "rgba(26, 32, 44, 0.584)" }}
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          ref={(el) => { el?.focus(); }}
          onClick={dialog_act_b53969b2b08b.close}
          onKeyDown={(e) => { if (e.key === "Escape") dialog_act_b53969b2b08b.close(); }}
          data-figma-dialog="act_b53969b2b08b"
        >
          <div
            className="relative max-h-[90vh] overflow-auto rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <InviteUserModal />
          </div>
        </div>
      )}

      {dialog_act_6441534980cd.isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-stretch justify-end" style={{ backgroundColor: "rgba(26, 32, 44, 0.584)" }}
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
