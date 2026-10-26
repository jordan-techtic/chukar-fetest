/**
 * Luna generated page
 * Figma frame: 5449:18415
 * Page: Create-Activity-Type
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
"use client";

import "./figma-theme.css";
import "./figma-responsive.css";
import { useFigmaScreenData } from "./useFigmaScreenData";
import { CreateActivityTypeModalWindowSection } from "./CreateActivityTypeModalWindowSection";
import { Input } from "@/components/ui/input";

export function CreateActivityTypeModal() {
  const screenData = useFigmaScreenData();
  return (
    <div
      data-figma-bound={screenData.bound}
      data-figma-frame="5449:18415"
      data-figma-node="5449:18416"
      className="relative box-border max-w-full pt-[15px] pr-[20px] pb-[15px] pl-[20px]"
      style={{ width: 520, height: 700 }}
    >
      <section
        data-figma-node="5449:18417"
        className="box-border w-full pt-[20px] pr-[40px] pb-[20px] pl-[40px] flex flex-row items-center justify-end"
      >
        <div className="box-border w-[280px] shrink-0 rounded-[6px] relative border-[#e2d9d0] border-[1px] bg-surface h-[37px]">
          <Input
            data-figma-node="5449:18423"
            name="search-input"
            type="search"
            placeholder="Filter activities..."
            aria-label="Filter activities..."
            className="absolute inset-0 h-full w-full appearance-none bg-transparent shadow-none ring-0 focus-visible:ring-0 border-0 text-text-secondary placeholder:text-[#686868] font-onest text-[13px] font-[400] leading-[17px] pl-[16px] pr-[16px]"
          />
        </div>
      </section>
      <CreateActivityTypeModalWindowSection />
    </div>
  );
}
