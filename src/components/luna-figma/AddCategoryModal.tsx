/**
 * Luna generated page
 * Figma frame: 5359:17278
 * Page: Add-category
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
"use client";

import "./figma-theme.css";
import "./figma-responsive.css";
import { useFigmaScreenData } from "./useFigmaScreenData";
import { AddCategoryModalWindowSection } from "./AddCategoryModalWindowSection";

export function AddCategoryModal() {
  const screenData = useFigmaScreenData();
  return (
    <div
      data-figma-node="5354:14252"
      className="box-border min-h-[80px] rounded-[12px] border-[#e2d9d0] border-[1px] bg-[#ffffff] pt-[15px] pr-[20px] pb-[15px] pl-[20px] shadow-[0px_10px_20px_0px_rgba(0,0,0,0.141)]"
    >
      <div
        data-figma-bound={screenData.bound}
        data-figma-frame="5359:17278"
        className="relative max-w-full"
        style={{ width: 520, height: 509 }}
      >
        <AddCategoryModalWindowSection />
      </div>
    </div>
  );
}
