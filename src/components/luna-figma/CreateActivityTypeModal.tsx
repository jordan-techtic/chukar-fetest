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

export function CreateActivityTypeModal() {
  const screenData = useFigmaScreenData();
  return (
    <div
      data-figma-bound={screenData.bound}
      data-figma-frame="5449:18415"
      className="relative max-w-full"
      style={{ width: 520, height: 700 }}
    >
        <CreateActivityTypeModalWindowSection />
    </div>
  );
}
