/**
 * Application-owned row for manage-users list (GET /api/v1/users).
 */
"use client";

import type { ApiUser } from "@/lib/api/users";
import { StatusColumn } from "./StatusColumn";
import { StatusColumn2 } from "./StatusColumn2";
import { useFigmaScreenData } from "./useFigmaScreenData";

const AVATAR_FALLBACK =
  "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Crect width='1' height='1' fill='%23e5e7eb'/%3E%3C/svg%3E";

function formatRoleLabel(role: string): string {
  const normalized = role.replace(/_/g, " ").trim();
  if (!normalized) {
    return "Admin";
  }
  return normalized
    .split(/\s+/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(" ");
}

function roleBadgeClass(role: string): { wrap: string; text: string } {
  const key = role.toLowerCase();
  if (key.includes("super")) {
    return {
      wrap: "bg-color-18",
      text: "text-primary max-w-[min(72px,100%)]",
    };
  }
  return {
    wrap: "bg-color-42",
    text: "text-color-22 max-w-[min(38px,100%)]",
  };
}

function formatLastActive(iso: string | null | undefined): string {
  if (!iso) {
    return "—";
  }
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) {
    return "—";
  }
  const seconds = Math.round((Date.now() - date.getTime()) / 1000);
  if (seconds < 60) {
    return "just now";
  }
  if (seconds < 3600) {
    const mins = Math.floor(seconds / 60);
    return mins === 1 ? "1 min ago" : `${mins} mins ago`;
  }
  if (seconds < 86400) {
    const hours = Math.floor(seconds / 3600);
    return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
  }
  const days = Math.floor(seconds / 86400);
  if (days === 1) {
    return "1 day ago";
  }
  if (days < 7) {
    return `${days} days ago`;
  }
  if (days < 14) {
    return "1 week ago";
  }
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export type ManageUserTableRowProps = {
  user: ApiUser;
  isLast?: boolean;
};

export function ManageUserTableRow({ user, isLast = false }: ManageUserTableRowProps) {
  const { toggleUserStatus, statusTogglingId } = useFigmaScreenData();
  const toggling = statusTogglingId === user.id;
  const name = `${user.first_name} ${user.last_name}`.trim() || user.email;
  const roleLabel = formatRoleLabel(user.role);
  const badge = roleBadgeClass(user.role);
  const avatarSrc = user.avatar_url?.trim() || AVATAR_FALLBACK;
  const borderClass = isLast ? "border-[#e2d9d0] border-[0px]" : "border-b border-[#e2d9d0]";

  return (
    <div
      className={`box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-center gap-5 pt-[12px] pr-[24px] pb-[12px] pl-[24px] ${borderClass}`}
    >
      <div className="box-border flex-1 min-w-0 h-auto relative flex flex-row items-center gap-3">
        <img
          src={avatarSrc}
          alt={user.avatar_url?.trim() ? `${name} profile photo` : ""}
          aria-hidden={!user.avatar_url?.trim()}
          width={32}
          height={32}
          decoding="async"
          onError={(e) => {
            const img = e.currentTarget;
            img.onerror = null;
            img.src = AVATAR_FALLBACK;
          }}
          className="box-border w-[32px] shrink-0 h-[32px] rounded-[16px] max-w-none object-cover object-top"
        />
        <p className="box-border flex-1 min-w-0 h-auto min-h-[18px] font-onest text-[14px] font-[600] leading-[18px] text-left text-text-primary">
          {name}
        </p>
      </div>
      <p className="box-border flex-1 min-w-0 h-auto min-h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left text-text-secondary">
        {user.email}
      </p>
      <div
        className={`box-border w-[120px] shrink-0 h-auto rounded-[100px] relative flex flex-row items-start justify-center pt-[4px] pr-[10px] pb-[4px] pl-[10px] ${badge.wrap}`}
      >
        <p
          className={`box-border w-max h-auto min-h-[14px] font-onest text-[11px] font-[700] leading-[14px] text-left whitespace-nowrap ${badge.text}`}
        >
          {roleLabel}
        </p>
      </div>
      <p className="box-border w-[140px] shrink-0 h-auto min-h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-secondary">
        {formatLastActive(user.last_active_at)}
      </p>
      {user.is_active ? (
        <StatusColumn
          className="box-border w-[100px] shrink-0 h-auto"
          disabled={toggling}
          onToggle={() => void toggleUserStatus(user.id, false)}
        />
      ) : (
        <StatusColumn2
          className="box-border w-[100px] shrink-0 h-auto"
          disabled={toggling}
          onToggle={() => void toggleUserStatus(user.id, true)}
        />
      )}
    </div>
  );
}
