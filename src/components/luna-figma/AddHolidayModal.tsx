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
      data-figma-node="5621:28801"
      className="relative max-w-full box-border min-h-[80px] rounded-[12px] border-[#e2d9d0] border-[1px] bg-[#ffffff] pt-[15px] pr-[20px] pb-[15px] pl-[20px] shadow-[0px_10px_20px_0px_rgba(0,0,0,0.141)]"
      style={{ width: 520, height: 334 }}
    >
        <AddHolidayModalWindowSection />
    </div>
  );
}
