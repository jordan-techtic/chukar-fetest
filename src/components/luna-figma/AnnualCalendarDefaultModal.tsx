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
      className="relative max-w-full"
      style={{ width: 652, height: 940 }}
    >
      <div data-figma-node="5279:24733" className="box-border h-full w-full pt-[15px] pb-[15px] pl-[20px] pr-[20px]">
        <div data-figma-node="5279:24734" className="box-border h-full w-full pt-[15px] pb-[15px] pl-[20px] pr-[20px]">
          <AnnualCalendarDefaultSection_n_5279_24939 />
        </div>
      </div>
    </div>
  );
}
