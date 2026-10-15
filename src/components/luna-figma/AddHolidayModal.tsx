/**
 * Luna generated page
 * Figma frame: 5621:28800
 * Page: Add Holiday
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
"use client";

import "./figma-theme.css";
import "./figma-responsive.css";
import { useFigmaScreenData } from "./useFigmaScreenData";
import { AddHolidayModalWindowSection } from "./AddHolidayModalWindowSection";

export function AddHolidayModal() {
  const screenData = useFigmaScreenData();
  return (
    <div
      data-figma-bound={screenData.bound}
      data-figma-frame="5621:28800"
      className="relative max-w-full"
      style={{ width: 520, height: 334 }}
    >
      <div data-figma-node="5621:28801" className="box-border h-full w-full pt-[15px] pb-[15px] pl-[20px] pr-[20px]">
        <div data-figma-node="5621:28802" className="box-border h-full w-full pt-[20px] pr-[40px] pb-[20px] pl-[40px]">
          <div className="box-border w-full rounded-[6px] border-[#e2d9d0] border-[1px] bg-background-ffffff mb-4">
            <input
              data-figma-node="5621:28808"
              name="search-input"
              data-figma-field="search-input"
              type="search"
              placeholder="Search holidays..."
              aria-label="Search holidays..."
              className="box-border h-[40px] w-full appearance-none bg-transparent px-[16px] font-onest text-[13px] font-[400] leading-[17px] text-text-body-231f20 placeholder:text-[#686868]"
            />
          </div>
          <AddHolidayModalWindowSection />
        </div>
      </div>
    </div>
  );
}
