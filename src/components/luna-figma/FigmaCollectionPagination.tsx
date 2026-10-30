"use client";

import { useFigmaScreenData } from "./useFigmaScreenData";

export function FigmaCollectionPagination({
  summaryLabel,
  className = "",
  prevNodeId,
  nextNodeId,
  ...rest
}: {
  summaryLabel: string;
  className?: string;
  prevNodeId?: string;
  nextNodeId?: string;
  [key: string]: unknown;
}) {
  const { currentPage, setCurrentPage, totalPages, pageItemsCount, totalFiltered, pageSize } =
    useFigmaScreenData();

  if (totalPages <= 1) {
    return null;
  }

  const start = totalFiltered <= 0 ? 0 : (currentPage - 1) * pageSize + 1;
  const end = totalFiltered <= 0 ? 0 : start + pageItemsCount - 1;
  const summary = `Showing ${start}-${end} of ${totalFiltered} ${summaryLabel}`;

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1).filter(
    (n) => n === 1 || n === totalPages || Math.abs(n - currentPage) <= 1,
  );

  return (
    <div
      data-figma-pagination="true"
      className={`box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-center justify-between ${className}`}
      {...rest}
    >
      <p className="box-border w-max max-w-[min(220px,100%)] h-auto min-h-[17px] font-onest text-[13px] font-[400] leading-[17px] text-left min-[1440px]:whitespace-nowrap text-text-secondary">
        {summary}
      </p>
      <div
        data-figma-pagination="true"
        className="box-border w-max max-w-[min(177px,100%)] h-auto relative flex flex-row items-start gap-1.5"
      >
        <button
          type="button"
          disabled={currentPage <= 1}
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          className="box-border w-max max-w-[min(51px,100%)] h-auto rounded-[6px] relative flex flex-row items-start border-[#e2d9d0] border-[1px] pt-[5px] pr-[9px] pb-[5px] pl-[9px] bg-surface cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <p data-figma-node={prevNodeId} className="box-border w-max max-w-[min(31px,100%)] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-primary">
            Prev
          </p>
        </button>
        {pageNumbers.map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => setCurrentPage(n)}
            className={
              n === currentPage
                ? "box-border w-max max-w-[min(33px,100%)] h-auto rounded-[6px] relative flex flex-row items-start pt-[6px] pr-[12px] pb-[6px] pl-[12px] bg-primary cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                : "box-border w-max max-w-[min(35px,100%)] h-auto rounded-[6px] relative flex flex-row items-start border-[#e2d9d0] border-[1px] pt-[5px] pr-[11px] pb-[5px] pl-[11px] bg-surface cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            }
          >
            <p
              className={
                n === currentPage
                  ? "box-border w-max max-w-[min(9px,100%)] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-surface"
                  : "box-border w-max max-w-[min(11px,100%)] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-primary"
              }
            >
              {n}
            </p>
          </button>
        ))}
        <button
          type="button"
          disabled={currentPage >= totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
          className="box-border w-max max-w-[min(52px,100%)] h-auto rounded-[6px] relative flex flex-row items-start border-[#e2d9d0] border-[1px] pt-[5px] pr-[9px] pb-[5px] pl-[9px] bg-surface cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <p data-figma-node={nextNodeId} className="box-border w-max max-w-[min(32px,100%)] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-primary">
            Next
          </p>
        </button>
      </div>
    </div>
  );
}
