/**
 * Application-owned row for manage-activity list (GET /api/v1/marketing-team-member/activities).
 */
"use client";

import type { MarketingActivity } from "@/lib/api/marketing-team-member-activities";
import { figmaItemProps, figmaTextContent } from "./figmaDisplay";
import { Actions } from "./Actions";
import { Actions2 } from "./Actions2";
import { StatusColumn } from "./StatusColumn";
import { StatusColumn2 } from "./StatusColumn2";

const ROW_ITEM_NODE_IDS = [
  "5359:17170",
  "5359:17187",
  "5359:17204",
  "5359:17218",
  "5359:17235",
  "5359:17252",
] as const;

const ROW_TITLE_NODE_IDS = [
  "5359:17172",
  "5359:17189",
  "5359:17206",
  "5359:17220",
  "5359:17237",
  "5359:17254",
] as const;

const ROW_FALLBACK_COLORS = ["#A21D35", "#9b51e0", "#2a9d8f", "#0083ba", "#a21d35", "#72516a"] as const;

function formatCategoryLabel(category: string): string {
  if (!category) {
    return "—";
  }
  return category.charAt(0).toUpperCase() + category.slice(1);
}

function formatCreatedDate(iso: string | undefined): string {
  if (!iso) {
    return "—";
  }
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) {
    return "—";
  }
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function formatColorHex(color: string | undefined): string {
  if (!color) {
    return "—";
  }
  const normalized = color.startsWith("#") ? color : `#${color}`;
  return normalized.toUpperCase();
}

function isPublishedStatus(status: string): boolean {
  const key = status.toLowerCase();
  return key === "published" || key === "active";
}

export type ManageActivityTableRowProps = {
  activity: MarketingActivity;
  rowIndex: number;
  isLast?: boolean;
  onEdit?: (activity: MarketingActivity) => void;
  onDelete?: (id: string) => void;
};

export function ManageActivityTableRow({
  activity,
  rowIndex,
  isLast = false,
  onEdit,
  onDelete,
}: ManageActivityTableRowProps) {
  const itemNodeId = ROW_ITEM_NODE_IDS[rowIndex] ?? ROW_ITEM_NODE_IDS[0];
  const titleNodeId = ROW_TITLE_NODE_IDS[rowIndex] ?? ROW_TITLE_NODE_IDS[0];
  const description =
    activity.description ?? activity.details ?? activity.notes ?? "—";
  const color =
    activity.color ?? ROW_FALLBACK_COLORS[rowIndex % ROW_FALLBACK_COLORS.length];
  const published = isPublishedStatus(activity.status);
  const borderClass = isLast ? "border-[#e2d9d0] border-[0px]" : "border-b border-[#e2d9d0]";
  const itemBinding = figmaItemProps(itemNodeId);

  if (itemBinding.hidden) {
    return null;
  }

  return (
    <div
      data-figma-node={itemNodeId}
      {...itemBinding}
      className={`box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-center gap-5 pt-[16px] pr-[24px] pb-[16px] pl-[24px] ${borderClass}`}
    >
      <div
        data-figma-component="5121:8577"
        className="box-border w-[16px] shrink-0 h-[16px] overflow-hidden relative block"
        aria-hidden="true"
      />
      <p
        data-figma-node={titleNodeId}
        className="box-border flex-1 min-w-0 h-auto min-h-[18px] font-onest text-[14px] font-[600] leading-[18px] text-left text-text-primary"
      >
        {figmaTextContent(titleNodeId, activity.title)}
      </p>
      <p className="box-border flex-1 min-w-0 h-auto min-h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left truncate text-text-secondary">
        {description}
      </p>
      <p className="box-border flex-1 min-w-0 h-auto min-h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left truncate text-text-secondary">
        {formatCategoryLabel(activity.category)}
      </p>
      <div className="box-border w-[100px] shrink-0 h-auto relative flex flex-row items-center gap-2">
        <svg
          viewBox="0 0 12 12"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="box-border w-[12px] shrink-0 h-[12px] pointer-events-none overflow-visible"
        >
          <path
            d="M12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6Z"
            fill={color}
          />
        </svg>
        <p className="box-border w-max max-w-[min(59px,100%)] h-auto min-h-[15px] font-onest text-[12px] font-[400] leading-[15px] text-left whitespace-nowrap text-text-secondary">
          {formatColorHex(color)}
        </p>
      </div>
      {published ? (
        <StatusColumn className="box-border w-[100px] shrink-0 h-auto" />
      ) : (
        <StatusColumn2 className="box-border w-[100px] shrink-0 h-auto" />
      )}
      <p className="box-border w-[140px] shrink-0 h-auto min-h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-secondary">
        {formatCreatedDate(activity.created_at ?? activity.start_date)}
      </p>
      {published ? (
        <Actions
          className="box-border w-[100px] shrink-0 h-auto"
          onEdit={() => onEdit?.(activity)}
          onDelete={() => onDelete?.(activity.id)}
        />
      ) : (
        <Actions2
          className="box-border w-[100px] shrink-0 h-auto"
          onEdit={() => onEdit?.(activity)}
          onDelete={() => onDelete?.(activity.id)}
        />
      )}
    </div>
  );
}
