"use client";

import type { ApiCategory } from "@/lib/api/categories";
import { StatusColumnA03B73 } from "./StatusColumnA03B73";
import { openFigmaDialog, useFigmaScreenData } from "./useFigmaScreenData";

function formatCreatedDate(iso: string | null | undefined): string {
  if (!iso) {
    return "—";
  }
  const date = new Date(iso.includes("T") ? iso : `${iso}T12:00:00`);
  if (Number.isNaN(date.getTime())) {
    return iso;
  }
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export type ManageCategoryTableRowProps = {
  category: ApiCategory;
  isLast?: boolean;
};

export function ManageCategoryTableRow({ category, isLast = false }: ManageCategoryTableRowProps) {
  const { deleteCategoryRow, beginEditCategory, deleteInProgressId } = useFigmaScreenData();
  const deleting = deleteInProgressId === category.id;

  return (
    <div
      role="row"
      className={`box-border self-stretch h-auto shrink-0 relative flex flex-row items-center gap-5 pt-[16px] pr-[24px] pb-[16px] pl-[24px] min-w-[1360px] ${
        isLast ? "border-[#e2d9d0] border-[0px]" : "border-b border-[#e2d9d0]"
      }`}
    >
      <p role="cell" className="box-border w-[200px] shrink-0 h-auto min-h-[18px] font-onest text-[14px] font-[600] leading-[18px] text-left lg:whitespace-nowrap text-text-primary">
        {category.title}
      </p>
      <p role="cell" className="box-border flex-1 min-w-0 h-auto min-h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left truncate text-text-secondary">
        {category.description || "—"}
      </p>
      {category.is_active ? (
        <StatusColumnA03B73 className="box-border w-[100px] shrink-0 h-auto" />
      ) : (
        <StatusColumnA03B73 className="box-border w-[100px] shrink-0 h-auto opacity-60" />
      )}
      <p role="cell" className="box-border w-[140px] shrink-0 h-auto min-h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-secondary">
        {formatCreatedDate(category.created_at)}
      </p>
      <div role="cell" className="box-border w-[100px] shrink-0 h-auto relative flex flex-row items-start justify-end gap-1.5">
        <div className="box-border w-[28px] shrink-0 h-[28px] rounded-[6px] pt-[6px] pr-[6px] pb-[6px] pl-[6px] bg-color-9 flex flex-row items-center justify-center">
          <button
            type="button"
            aria-label={`Edit ${category.title}`}
            disabled={deleting}
            onClick={() => {
              beginEditCategory(category);
              openFigmaDialog("act_9c6be34838f4");
            }}
            className="inline-flex items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50"
          >
            <div data-figma-component="5121:9154" className="box-border w-[16px] h-[16px] overflow-hidden relative block">
              <svg viewBox="0 0 15.94 15.94" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[16px] h-[16px] pointer-events-none overflow-visible">
                <path
                  d="M15.2353 0.706709C14.7821 0.254173 14.1678 1.4803e-16 13.5273 0C12.8869 8.51171e-16 12.2726 0.254173 11.8193 0.706709L0.976677 11.5494C0.666178 11.8581 0.419985 12.2254 0.252342 12.6299C0.0846994 13.0344 -0.00106532 13.4682 9.98748e-06 13.906L9.98748e-06 15.2747C9.98748e-06 15.4515 0.0702479 15.6211 0.195272 15.7461C0.320296 15.8711 0.489866 15.9414 0.666677 15.9414L2.03534 15.9414C2.47319 15.9426 2.90692 15.857 3.31145 15.6895C3.71597 15.5219 4.08325 15.2758 4.39201 14.9654L15.2353 4.12204C15.6877 3.66884 15.9417 3.05469 15.9417 2.41438C15.9417 1.77406 15.6877 1.15991 15.2353 0.706709L15.2353 0.706709ZM3.44934 14.0227C3.07335 14.3962 2.56532 14.6065 2.03534 14.608L1.33334 14.608L1.33334 13.906C1.33267 13.6433 1.38411 13.3831 1.4847 13.1403C1.58529 12.8976 1.73302 12.6773 1.91934 12.492L10.148 4.26337L11.6813 5.79671L3.44934 14.0227ZM14.292 3.17938L12.6213 4.85071L11.088 3.32071L12.7593 1.64938C12.86 1.54891 12.9795 1.46927 13.111 1.41498C13.2424 1.3607 13.3833 1.33284 13.5255 1.33299C13.6678 1.33314 13.8086 1.36131 13.9399 1.41588C14.0712 1.47045 14.1905 1.55036 14.291 1.65104C14.3915 1.75172 14.4711 1.8712 14.5254 2.00266C14.5797 2.13413 14.6076 2.27499 14.6074 2.41722C14.6072 2.55945 14.5791 2.70025 14.5245 2.8316C14.4699 2.96294 14.39 3.08225 14.2893 3.18271L14.292 3.17938Z"
                  fill="#231f20"
                />
              </svg>
            </div>
          </button>
        </div>
        <div className="box-border w-[28px] shrink-0 h-[28px] rounded-[6px] pt-[6px] pr-[6px] pb-[6px] pl-[6px] bg-color-9 flex flex-row items-center justify-center">
          <button
            type="button"
            aria-label={`Delete ${category.title}`}
            disabled={deleting}
            onClick={() => void deleteCategoryRow(category.id)}
            className="inline-flex items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50"
          >
            <div data-figma-component="5121:9660" className="box-border w-[16px] h-[16px] overflow-hidden relative block">
              <svg viewBox="0 0 13.33 16" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[16px] h-[16px] pointer-events-none overflow-visible">
                <path
                  d="M12.6667 2.66667L10.6 2.66667C10.4453 1.91428 10.0359 1.23823 9.44083 0.752479C8.84579 0.266727 8.10147 0.000969683 7.33333 8.88178e-16L6 0C5.23186 0.000969683 4.48755 0.266727 3.8925 0.752479C3.29745 1.23823 2.88806 1.91428 2.73333 2.66667L0.666667 2.666667C0.489856 2.66667 0.320286 2.7369 0.195262 2.86193C0.0702379 2.98695 5.92119e-16 3.15652 0 3.33333C2.96059e-16 3.51014 0.0702379 3.67971 0.195262 3.80474C0.320286 3.92976 0.489856 4 0.666667 4L1.33333 4L1.33333 12.6667C1.33439 13.5504 1.68592 14.3976 2.31081 15.0225C2.9357 15.6474 3.78294 15.9989 4.66667 16L8.66667 16C9.5504 15.9989 10.3976 15.6474 11.0225 15.0225C11.6474 14.3976 11.9989 13.5504 12 12.6667L12 4L12.6667 4C12.8435 4 13.013 3.92976 13.1381 3.80474C13.2631 3.67971 13.3333 3.51014 13.3333 3.33333C13.3333 3.15652 13.2631 2.98695 13.1381 2.86193C13.013 2.7369 12.8435 2.66667 12.6667 2.666667L12.6667 2.66667ZM6 1.33333L7.33333 1.33333C7.74685 1.33384 8.15008 1.46225 8.48774 1.70096C8.8254 1.93967 9.08094 2.27699 9.21933 2.66667L4.114 2.66667C4.25239 2.27699 4.50793 1.93967 4.84559 1.70096C5.18325 1.46225 5.58648 1.33384 6 1.33333L6 1.33333ZM10.6667 12.6667C10.6667 13.1971 10.456 13.7058 10.0809 14.0809C9.70581 14.456 9.1971 14.6667 8.66667 14.6667L4.66667 14.6667C4.13623 14.6667 3.62753 14.456 3.25245 14.0809C2.87738 13.7058 2.66667 13.1971 2.66667 12.6667L2.66667 4L10.6667 4L10.6667 12.6667Z"
                  fill="#a21d35"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
