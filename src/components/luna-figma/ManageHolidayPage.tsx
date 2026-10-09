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

import "./figma-responsive.css";
import { FigmaFrameShell } from "./FigmaFrameShell";
import { useFigmaScreenData } from "./useFigmaScreenData";
import { ManageHolidayTitleRowSection } from "./ManageHolidayTitleRowSection";
import { ManageHolidayContentColumnSection } from "./ManageHolidayContentColumnSection";
import { useFigmaActionProps } from "./useFigmaScreenData";
import { ChevronDown_a4db42af } from "./ChevronDown_a4db42af";

export function ManageHolidayPage() {
  const screenData = useFigmaScreenData();
  return (
    <div
      data-figma-bound={screenData.bound}
      data-figma-frame="5621:28270"
      className="relative flex w-full flex-col"
      style={{ backgroundColor: "#fff9f3" }}
    >
      <main className="relative z-10 flex w-full flex-col">
        <FigmaFrameShell frameWidth={1440} frameHeight={770} nodeId="frame">
        <ManageHolidayTitleRowSection />
        <ManageHolidayContentColumnSection />
        <div className="pointer-events-none absolute inset-0 z-[0]">
          <div data-figma-node="5621:28271" data-figma-component="5273:20995" className="pointer-events-auto box-border w-full min-w-0 h-[80px] absolute left-[0px] top-[0px] z-[0] [--fx:0] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.059)] flex flex-row items-center justify-between bg-[#ffffff]">
            <div data-figma-node="I5621:28271;5217:13714" className="box-border w-max max-w-[282px] h-[50px] relative flex flex-row items-center gap-[30px]">
              <div data-figma-node="I5621:28271;5217:13715" className="box-border w-max max-w-[282px] h-[50px] relative flex flex-row items-center gap-3">
                <img data-figma-node="I5621:28271;5217:13716" src="/assets/figma/I5621-28271-5217-13716.png" alt="image 2" width={54} height={50} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[54px] h-[50px] rounded-[10px] max-w-none object-cover object-top" />
                <div data-figma-node="I5621:28271;5217:13717" className="box-border w-max max-w-[216px] h-[43px] relative flex flex-col items-start gap-0.5">
                  <p data-figma-node="I5621:28271;5217:13718" className="box-border w-max max-w-[216px] h-auto min-h-[27px] font-inter text-[22px] font-[800] leading-[27px] text-left whitespace-nowrap text-text-body-1">Marketing Calendar </p>
                  <p data-figma-node="I5621:28271;5217:13719" className="box-border w-max max-w-[171px] h-auto min-h-[14px] font-onest text-[11px] font-[600] leading-[14px] text-left whitespace-nowrap text-text-muted-1">Plan · Create · Track · Grow</p>
                </div>
              </div>
            </div>
            <div data-figma-node="I5621:28271;5217:13733" className="box-border w-max max-w-[217px] h-[40px] relative flex flex-row items-center gap-4">
              <button data-figma-node="I5621:28271;5217:13746" type="button" data-figma-action="act_7c0e3947d31d" {...useFigmaActionProps("act_7c0e3947d31d")} className="box-border w-max max-w-[145px] h-[40px] rounded-[6px] inline-flex items-center justify-center whitespace-nowrap bg-surface-light-1 hover:opacity-90 cursor-pointer"><span className="font-onest text-[13px] font-[700] leading-[17px] text-left whitespace-nowrap text-text-body-1 whitespace-nowrap">oPEN CALANDER</span></button>
              <button data-figma-node="I5621:28271;5217:13749" type="button" data-figma-action="act_e7348e9bef80" {...useFigmaActionProps("act_e7348e9bef80")} className="box-border w-max max-w-[56px] h-[32px] relative flex flex-row items-center gap-2 cursor-pointer block">
                <div data-figma-node="I5621:28271;5217:13750" data-figma-component="5111:12456" className="box-border w-[32px] h-[32px] rounded-[32px] relative flex flex-row items-start gap-2" style={{backgroundColor: "rgba(0, 0, 0, 0.25)"}}>
                  <img data-figma-node="I5621:28271;5217:13750;1002:172586" src="/assets/figma/I5621-28271-5217-13750-1002-172586.png" alt="Image" width={32} height={32} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[32px] h-[32px] rounded-[32px] max-w-none object-cover object-top" />
                </div>
                <ChevronDown_a4db42af data-figma-node="I5621:28271;5217:13752" data-figma-component="5111:6287" className="relative overflow-hidden rounded-[4px]" />
              </button>
            </div>
          </div>
        </div>
        </FigmaFrameShell>
      </main>
    </div>
  );
}
