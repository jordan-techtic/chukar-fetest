/**
 * Luna generated page
 * Figma frame: 5279:24732
 * Page: annual-calendar-default
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
"use client";

import "./figma-theme.css";
import "./figma-responsive.css";
import { useFigmaScreenData } from "./useFigmaScreenData";
import { AnnualCalendarDefaultSection_n_5279_24939 } from "./AnnualCalendarDefaultSection_n_5279_24939";

export function AnnualCalendarDefaultModal() {
  const screenData = useFigmaScreenData();
  return (
    <div
      data-figma-bound={screenData.bound}
      data-figma-frame="5279:24732"
      className="relative max-w-full overflow-x-hidden"
      style={{ width: 652, height: 940 }}
    >
        <section data-figma-node="5279:24733" data-figma-action="act_navigate" className="absolute left-0 top-0 z-[2] box-border h-[80px] overflow-hidden w-full pt-[15px] pr-[20px] pb-[15px] pl-[20px] border border-solid border-[#e2d9d0] bg-[#ffffff] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.059)]" /><span data-figma-node="I5279:24733;5217:13742" data-figma-action="act_87aa11910314" className="contents pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[8px] rounded-[6px] border border-solid border-[#e2d9d0] bg-[#faf3e8]" />
        <section data-figma-node="5279:24938" className="pointer-events-none absolute left-[0px] top-0 z-0 h-[940px] w-[1440px] bg-[rgba(26, 32, 44, 0.584)] pl-[788px]" />
        <section data-figma-node="5279:24734" className="absolute left-0 top-[80px] z-[2] box-border h-[59px] overflow-hidden w-full pt-[15px] pr-[20px] pb-[15px] pl-[20px] bg-[#faf3e8] border-solid border-[#e2d9d0]" />
        <AnnualCalendarDefaultSection_n_5279_24939 />
    </div>
  );
}
