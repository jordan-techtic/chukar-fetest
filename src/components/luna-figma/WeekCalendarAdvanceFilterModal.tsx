/**
 * Luna generated page
 * Figma frame: 5621:25767
 * Page: Week-calendar- Advance Filter
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
"use client";

import "./figma-theme.css";
import "./figma-responsive.css";
import { useFigmaScreenData } from "./useFigmaScreenData";
import { WeekCalendarAdvanceFilteSection_n_5621_25724 } from "./WeekCalendarAdvanceFilteSection_n_5621_25724";

export function WeekCalendarAdvanceFilterModal() {
  const screenData = useFigmaScreenData();
  return (
    <div
      data-figma-bound={screenData.bound}
      data-figma-frame="5621:25767"
      className="relative max-w-full"
      style={{ width: 420, height: 884 }}
    >
        <section data-figma-node="5621:25768" className="box-border w-full pt-[15px] pr-[20px] pb-[15px] pl-[20px]" />
        <section data-figma-node="5621:27979" className="box-border w-full pl-[1020px]" />
        <section data-figma-node="5621:25769" className="box-border w-full pt-[15px] pr-[20px] pb-[15px] pl-[20px]" />
        <WeekCalendarAdvanceFilteSection_n_5621_25724 />
    </div>
  );
}
