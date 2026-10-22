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
      className="relative max-w-full overflow-x-hidden"
      style={{ width: 520, height: 564 }}
    >
        <section data-figma-node="5449:19396" className="box-border h-[80px] overflow-hidden w-full pt-[15px] pr-[20px] pb-[15px] pl-[20px] border border-solid border-[#e2d9d0] bg-[#ffffff] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.059)]" />
        <section data-figma-node="5449:19594" className="pointer-events-none absolute left-[0px] top-0 z-0 h-[770px] w-[1440px] bg-[rgba(26, 32, 44, 0.584)] pt-[103px] pr-[460px] pb-[103px] pl-[460px]" />
        <section data-figma-node="5449:19397" className="absolute left-0 top-0 z-[2] box-border h-[89px] overflow-hidden w-full pt-[20px] pr-[40px] pb-[20px] pl-[40px]">
          <a data-figma-node="5449:19398" data-figma-action="act_3817c363078d" href="/manage-users">Manage users</a>
          <span className="whitespace-nowrap">Add User</span>
          <select data-figma-node="5449:19402" aria-label="Role" defaultValue="all" className="h-[37px] w-[96px] rounded-[var(--radius-6)] pt-[10px] pr-[14px] pb-[10px] pl-[14px] gap-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] text-caption-10 font-normal">
            <option value="all">Role</option>
          </select>
          <select data-figma-node="5449:19406" aria-label="Status" defaultValue="all" className="h-[37px] w-[110px] rounded-[var(--radius-6)] pt-[10px] pr-[14px] pb-[10px] pl-[14px] gap-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] text-caption-10 font-normal">
            <option value="all">Status</option>
          </select>
          <input data-figma-node="5449:19411" type="search" aria-label="Search" placeholder="Search" />
        </section>
        <InviteUserModalWindowSection />
    </div>
  );
}
