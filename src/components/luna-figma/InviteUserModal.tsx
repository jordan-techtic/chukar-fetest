/**
 * Luna generated page
 * Figma frame: 5449:19395
 * Page: Invite-user
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
"use client";

import "./figma-theme.css";
import "./figma-responsive.css";
import { useFigmaScreenData } from "./useFigmaScreenData";
import { InviteUserModalWindowSection } from "./InviteUserModalWindowSection";

export function InviteUserModal() {
  const screenData = useFigmaScreenData();
  return (
    <div
      data-figma-bound={screenData.bound}
      data-figma-frame="5449:19395"
      className="relative max-w-full"
      style={{ width: 520, height: 564 }}
    >
        <InviteUserModalWindowSection />
    </div>
  );
}
