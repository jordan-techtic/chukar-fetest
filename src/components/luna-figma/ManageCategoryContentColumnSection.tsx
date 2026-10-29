/**
 * Luna generated layout
 * Figma node: 5449:19142
 * Section: Content Column
 * Route: /manage-category
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
"use client";

import { ManageCategoryTableRow } from "./ManageCategoryTableRow";
import { useFigmaScreenData } from "./useFigmaScreenData";

export function ManageCategoryContentColumnSection() {
  const {
    categories,
    categoriesLoading,
    categoriesError,
    loadReads,
    currentPage,
    setCurrentPage,
    totalPages,
    totalCategories,
    clearFilters,
    fieldValues,
    pageSize,
  } = useFigmaScreenData();

  const filterText = String(fieldValues["filter-categories"] ?? "").trim();
  const hasFilters = filterText.length > 0;
  const rangeStart = totalCategories === 0 ? 0 : (currentPage - 1) * pageSize + 1;
  const rangeEnd = totalCategories === 0 ? 0 : Math.min(currentPage * pageSize, totalCategories);
  const showPagination = totalPages > 1;

  return (
    <section data-figma-node="5449:19142" className="relative box-border w-full min-w-0 min-h-[601px] flex flex-col items-start z-[2]">
      <div className="sr-only" aria-live="polite">
        {categoriesLoading ? "Loading categories." : null}
        {categoriesError ? (
          <>
            {categoriesError}
            <button type="button" onClick={() => void loadReads()}>
              Retry
            </button>
          </>
        ) : null}
        {!categoriesLoading && !categoriesError && categories.length === 0
          ? hasFilters
            ? "No categories match your filters."
            : "No categories to display."
          : null}
      </div>
      <div data-figma-node="5449:19143" className="box-border self-stretch min-w-0 h-[601px] shrink-0 relative flex flex-col items-start gap-6 pr-[40px] pb-[40px] pl-[40px]">
        <div data-figma-node="5449:19144" role="table" className="box-border self-stretch min-w-0 h-auto shrink-0 rounded-[12px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.02)] relative flex flex-col items-start border-[#e2d9d0] border-[1px] bg-surface overflow-x-auto overflow-y-hidden max-w-full">
          <div data-figma-node="5449:19145" role="row" className="box-border self-stretch h-auto shrink-0 relative flex flex-row items-start gap-5 pt-[14px] pr-[24px] pb-[14px] pl-[24px] border-b border-[#e2d9d0] bg-color-9 min-w-[1360px]">
            <p data-figma-node="5449:19146" role="columnheader" className="box-border w-[200px] shrink-0 h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] uppercase text-left lg:whitespace-nowrap text-text-primary">Category Name</p>
            <p data-figma-node="5449:19147" role="columnheader" className="box-border flex-1 min-w-0 h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] uppercase text-left text-text-primary">Description</p>
            <p data-figma-node="5449:19148" role="columnheader" className="box-border w-[100px] shrink-0 h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] uppercase text-left whitespace-nowrap text-text-primary">Status</p>
            <p data-figma-node="5449:19149" role="columnheader" className="box-border w-[140px] shrink-0 h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] uppercase text-left whitespace-nowrap text-text-primary">Created Date</p>
            <p data-figma-node="5449:19150" role="columnheader" className="box-border w-[100px] shrink-0 h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] uppercase text-right whitespace-nowrap text-text-primary">Actions</p>
          </div>
          {categoriesError ? (
            <div
              role="alert"
              className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-center justify-center gap-3 pt-[24px] pr-[24px] pb-[24px] pl-[24px] min-w-[1360px]"
            >
              <p className="font-onest text-[14px] font-[400] leading-[18px] text-text-secondary">{categoriesError}</p>
              <button
                type="button"
                onClick={() => void loadReads()}
                className="font-onest text-[13px] font-[700] leading-[17px] text-primary underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Retry
              </button>
            </div>
          ) : categoriesLoading ? (
            Array.from({ length: pageSize }, (_, index) => (
              <div
                key={index}
                aria-hidden="true"
                className={`box-border self-stretch min-w-0 h-[56px] shrink-0 relative flex flex-row items-center gap-5 pt-[16px] pr-[24px] pb-[16px] pl-[24px] animate-pulse min-w-[1360px] ${
                  index === pageSize - 1 ? "border-[#e2d9d0] border-[0px]" : "border-b border-[#e2d9d0]"
                }`}
              >
                <div className="box-border w-[200px] shrink-0 h-[18px] rounded bg-color-9" />
                <div className="box-border flex-1 min-w-0 h-[18px] rounded bg-color-9" />
                <div className="box-border w-[100px] shrink-0 h-[22px] rounded-full bg-color-9" />
                <div className="box-border w-[140px] shrink-0 h-[18px] rounded bg-color-9" />
                <div className="box-border w-[100px] shrink-0 h-[28px] rounded bg-color-9" />
              </div>
            ))
          ) : !categoriesLoading && totalCategories === 0 ? (
            <div className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-center justify-center gap-3 pt-[24px] pr-[24px] pb-[24px] pl-[24px] min-w-[1360px]">
              <p className="font-onest text-[14px] font-[400] leading-[18px] text-text-secondary">
                {hasFilters ? "No categories match your search." : "No categories to display."}
              </p>
              {hasFilters ? (
                <button
                  type="button"
                  onClick={() => clearFilters()}
                  className="font-onest text-[13px] font-[700] leading-[17px] text-primary underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Clear filters
                </button>
              ) : null}
            </div>
          ) : (
            categories.map((category, index) => (
              <ManageCategoryTableRow
                key={category.id}
                category={category}
                isLast={index === categories.length - 1}
              />
            ))
          )}
        </div>
        {showPagination ? (
          <div data-figma-node="5449:19184" data-figma-pagination="true" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-center justify-between">
            <p data-figma-node="5449:19185" className="box-border w-max max-w-[min(179px,100%)] h-auto min-h-[17px] font-onest text-[13px] font-[400] leading-[17px] text-left lg:whitespace-nowrap text-text-secondary">
              {`Showing ${rangeStart}-${rangeEnd} of ${totalCategories} categories`}
            </p>
            <div data-figma-node="5449:19186" data-figma-pagination="true" className="box-border w-max max-w-[min(177px,100%)] h-auto relative flex flex-row items-start gap-1.5">
              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage <= 1}
                className="box-border w-max max-w-[min(51px,100%)] h-auto rounded-[6px] relative flex flex-row items-start pt-[6px] pr-[10px] pb-[6px] pl-[10px] border-[#e2d9d0] border-[1px] bg-surface disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <p className="box-border w-max max-w-[min(31px,100%)] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-primary">Prev</p>
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  type="button"
                  onClick={() => setCurrentPage(pageNum)}
                  className={`box-border w-max h-auto rounded-[6px] relative flex flex-row items-start pt-[6px] pr-[12px] pb-[6px] pl-[12px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                    pageNum === currentPage
                      ? "bg-primary"
                      : "border-[#e2d9d0] border-[1px] bg-surface"
                  }`}
                >
                  <p
                    className={`box-border w-max h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap ${
                      pageNum === currentPage ? "text-surface" : "text-text-primary"
                    }`}
                  >
                    {pageNum}
                  </p>
                </button>
              ))}
              <button
                type="button"
                onClick={() => setCurrentPage((p) => p + 1)}
                disabled={currentPage >= totalPages}
                className="box-border w-max max-w-[min(52px,100%)] h-auto rounded-[6px] relative flex flex-row items-start pt-[6px] pr-[10px] pb-[6px] pl-[10px] border-[#e2d9d0] border-[1px] bg-surface disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <p className="box-border w-max max-w-[min(32px,100%)] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-primary">Next</p>
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
