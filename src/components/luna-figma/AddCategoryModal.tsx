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
import { figmaFieldProps, useFigmaScreenData } from "./useFigmaScreenData";
import { AddCategoryModalWindowSection } from "./AddCategoryModalWindowSection";

export function AddCategoryModal() {
  const screenData = useFigmaScreenData();
  return (
    <div
      data-figma-bound={screenData.bound}
      data-figma-frame="5359:17278"
      className="relative max-w-full"
      style={{ width: 520, height: 509 }}
    >
      <section
        data-figma-node="5354:14252"
        className="relative box-border h-[80px] overflow-hidden bg-[#ffffff] pt-[15px] pr-[20px] pb-[15px] pl-[20px] border-[#e2d9d0] border-[1px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.059)]"
      >
        <section
          data-figma-node="5354:14348"
          className="relative box-border h-[89px] overflow-hidden pt-[20px] pr-[40px] pb-[20px] pl-[40px]"
        >
          <a
            data-figma-node="5354:14349"
            href="/manage-category"
            data-figma-action="act_9916cd70561d"
            className="sr-only"
          >
            Manage Category
          </a>
          <input
            data-figma-node="5354:14354"
            name="filter-categories"
            data-figma-field="filter-categories"
            data-figma-field-origin="design_text"
            {...figmaFieldProps("filter-categories")}
            type="search"
            inputMode="search"
            placeholder="Filter categories..."
            aria-label="Filter categories..."
            className="sr-only"
          />
          <AddCategoryModalWindowSection />
        </section>
      </section>
    </div>
  );
}
