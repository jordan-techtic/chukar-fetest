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
      data-figma-bound={screenData.bound}
      data-figma-frame="5359:17278"
      className="relative box-border h-[509px] w-[520px] max-w-full"
    >
      <section
        data-figma-node="5354:14252"
        className="relative box-border h-[80px] overflow-hidden bg-[#ffffff] pt-[15px] pr-[20px] pb-[15px] pl-[20px] border-[#e2d9d0] border-[1px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.059)]"
      />
      <section
        data-figma-node="5354:14348"
        className="pointer-events-none absolute left-0 top-0 box-border h-[89px] w-full overflow-hidden pt-[20px] pr-[40px] pb-[20px] pl-[40px]"
        aria-hidden
      >
        <a
          data-figma-node="5354:14349"
          href="/manage-category"
          data-figma-action="act_9916cd70561d"
          className="inline-flex flex-row items-center gap-1 font-onest text-[13px] font-[400] leading-[17px] text-text-secondary"
          tabIndex={-1}
        >
          Manage Category
        </a>
      </section>
      <AddCategoryModalWindowSection />
    </div>
  );
}
