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
      className="box-border pt-[15px] pr-[20px] pb-[15px] pl-[20px]"
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
