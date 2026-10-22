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
        <section data-figma-node="5449:19396" className="box-border w-full pt-[15px] pr-[20px] pb-[15px] pl-[20px]" />
        <section data-figma-node="5449:19594" className="box-border w-full pt-[103px] pr-[460px] pb-[103px] pl-[460px]" />
        <section data-figma-node="5449:19397" className="box-border w-full pt-[20px] pr-[40px] pb-[20px] pl-[40px]">
          <a data-figma-node="5449:19398" data-figma-action="act_3817c363078d" href="/manage-users">Manage users</a>
          <select data-figma-node="5449:19402" aria-label="Role" defaultValue="">
            <option value="">Role</option>
          </select>
          <select data-figma-node="5449:19406" aria-label="Status" defaultValue="">
            <option value="">Status</option>
          </select>
          <input data-figma-node="5449:19411" type="search" aria-label="Search" placeholder="Search" />
        </section>
        <InviteUserModalWindowSection />
    </div>
  );
}
