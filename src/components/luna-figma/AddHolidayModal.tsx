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
      className="relative box-border h-[334px] w-[520px] max-w-full"
    >
      <section
        data-figma-node="5621:28801"
        className="relative box-border h-[80px] overflow-hidden bg-[#ffffff] pt-[15px] pr-[20px] pb-[15px] pl-[20px] border-[#e2d9d0] border-[1px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.059)]"
      />
      <section
        data-figma-node="5621:28802"
        className="pointer-events-none absolute left-0 top-0 box-border h-[89px] w-full overflow-hidden pt-[20px] pr-[40px] pb-[20px] pl-[40px]"
        aria-hidden
      />
      <AddHolidayModalWindowSection />
    </div>
  );
}
