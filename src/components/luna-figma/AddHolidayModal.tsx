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
      <section data-figma-node="5621:28801" className="relative box-border pt-[15px] pr-[20px] pb-[15px] pl-[20px]">
        <section data-figma-node="5621:28802" className="relative box-border pt-[20px] pr-[40px] pb-[20px] pl-[40px]">
          <AddHolidayModalWindowSection />
        </section>
      </section>
    </div>
  );
}
