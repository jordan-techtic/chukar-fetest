/**
 * Luna generated layout
 * Figma node: 5621:28294
 * Section: Content Column
 * Route: /manage-holiday
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
"use client";

import { ManageHolidayTableRow } from "./ManageHolidayTableRow";
import { useFigmaScreenData } from "./useFigmaScreenData";

export function ManageHolidayContentColumnSection() {
  const {
    holidays,
    holidaysLoading,
    holidaysError,
    loadReads,
    currentPage,
    setCurrentPage,
    totalPages,
    totalHolidays,
    clearFilters,
    fieldValues,
    pageSize,
    holidayImportSummary,
  } = useFigmaScreenData();

  const hasFilters = Boolean(String(fieldValues["search-users"] ?? "").trim());
  const rangeStart = totalHolidays === 0 ? 0 : (currentPage - 1) * pageSize + 1;
  const rangeEnd = totalHolidays === 0 ? 0 : Math.min(currentPage * pageSize, totalHolidays);
  const showPagination = totalPages > 1;

  return (
    <section data-figma-node="5621:28294" className="relative box-border w-full min-w-0 min-h-[601px] flex flex-col items-start z-[2]">
      <div className="sr-only" aria-live="polite">
        {holidaysLoading ? "Loading holidays." : null}
        {holidaysError ? (
          <>
            {holidaysError}
            <button type="button" onClick={() => void loadReads()}>
              Retry
            </button>
          </>
        ) : null}
        {!holidaysLoading && !holidaysError && holidays.length === 0
          ? hasFilters
            ? "No holidays match your search."
            : "No holidays to display."
          : null}
      </div>
      <div data-figma-node="5621:28295" className="box-border self-stretch min-w-0 flex-1 min-h-0 relative flex flex-col items-start gap-6 pr-[40px] pb-[40px] pl-[40px]">
        {holidayImportSummary ? (
          <div
            role="status"
            aria-live="polite"
            className="box-border self-stretch min-w-0 rounded-[8px] border-[#e2d9d0] border-[1px] bg-surface pt-[12px] pr-[16px] pb-[12px] pl-[16px] flex flex-col gap-2"
          >
            <p className="font-onest text-[13px] font-[600] leading-[17px] text-text-primary">
              {`Import complete: ${holidayImportSummary.created} created`}
              {holidayImportSummary.failed > 0 ? `, ${holidayImportSummary.failed} failed` : ""}
              {holidayImportSummary.message ? `. ${holidayImportSummary.message}` : ""}
            </p>
            {holidayImportSummary.errors?.length ? (
              <ul className="font-onest text-[12px] font-[400] leading-[15px] text-text-secondary list-disc pl-[18px]">
                {holidayImportSummary.errors.slice(0, 5).map((entry) => (
                  <li key={`${entry.row}-${entry.message}`}>{`Row ${entry.row}: ${entry.message}`}</li>
                ))}
                {holidayImportSummary.errors.length > 5 ? (
                  <li>{`…and ${holidayImportSummary.errors.length - 5} more`}</li>
                ) : null}
              </ul>
            ) : null}
          </div>
        ) : null}
        <div data-figma-node="5621:28296" role="table" className="box-border self-stretch min-w-0 h-auto shrink-0 rounded-[12px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.02)] relative flex flex-col items-start border-[#e2d9d0] border-[1px] bg-surface overflow-x-auto overflow-y-hidden max-w-full">
          <div data-figma-node="5621:28297" role="row" className="box-border self-stretch h-auto shrink-0 relative flex flex-row items-start gap-5 pt-[14px] pr-[24px] pb-[14px] pl-[24px] border-b border-[#e2d9d0] bg-color-9 min-w-[1360px]">
            <p data-figma-node="5621:28298" role="columnheader" className="box-border flex-1 min-w-0 h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] uppercase text-left text-text-primary">Holiday Name</p>
            <p data-figma-node="5621:28299" role="columnheader" className="box-border w-[150px] shrink-0 h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] uppercase text-left whitespace-nowrap text-text-primary">START DATE</p>
            <p data-figma-node="5621:28300" role="columnheader" className="box-border w-[150px] shrink-0 h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] uppercase text-left whitespace-nowrap text-text-primary">END DATE</p>
            <p data-figma-node="5621:28301" role="columnheader" className="box-border w-[100px] shrink-0 h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] uppercase text-left whitespace-nowrap text-text-primary">Status</p>
            <p data-figma-node="5621:28303" role="columnheader" className="box-border w-[100px] shrink-0 h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] uppercase text-right whitespace-nowrap text-text-primary">Actions</p>
          </div>
          {holidaysError ? (
            <div
              role="alert"
              className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-center justify-center gap-3 pt-[24px] pr-[24px] pb-[24px] pl-[24px] min-w-[1360px]"
            >
              <p className="font-onest text-[14px] font-[400] leading-[18px] text-text-secondary">{holidaysError}</p>
              <button
                type="button"
                onClick={() => void loadReads()}
                className="font-onest text-[13px] font-[700] leading-[17px] text-primary underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Retry
              </button>
            </div>
          ) : holidaysLoading ? (
            Array.from({ length: pageSize }, (_, index) => (
              <div
                key={index}
                aria-hidden="true"
                className={`box-border self-stretch min-w-0 h-[56px] shrink-0 relative flex flex-row items-center gap-5 pt-[12px] pr-[24px] pb-[12px] pl-[24px] animate-pulse min-w-[1360px] ${
                  index === pageSize - 1 ? "border-[#e2d9d0] border-[0px]" : "border-b border-[#e2d9d0]"
                }`}
              >
                <div className="box-border flex-1 min-w-0 h-[18px] rounded bg-color-9" />
                <div className="box-border w-[150px] shrink-0 h-[18px] rounded bg-color-9" />
                <div className="box-border w-[150px] shrink-0 h-[18px] rounded bg-color-9" />
                <div className="box-border w-[100px] shrink-0 h-[22px] rounded-full bg-color-9" />
                <div className="box-border w-[100px] shrink-0 h-[28px] rounded bg-color-9" />
              </div>
            ))
          ) : !holidaysLoading && totalHolidays === 0 ? (
            <div className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-center justify-center gap-3 pt-[24px] pr-[24px] pb-[24px] pl-[24px] min-w-[1360px]">
              <p className="font-onest text-[14px] font-[400] leading-[18px] text-text-secondary">
                {hasFilters ? "No holidays match your search." : "No holidays to display."}
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
            holidays.map((holiday, index) => (
              <ManageHolidayTableRow
                key={holiday.id}
                holiday={holiday}
                isLast={index === holidays.length - 1}
              />
            ))
          )}
        </div>
        {showPagination ? (
          <div data-figma-node="5621:28394" data-figma-pagination="true" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-center justify-between">
            <p data-figma-node="5621:28395" className="box-border w-max max-w-[min(149px,100%)] h-auto min-h-[17px] font-onest text-[13px] font-[400] leading-[17px] text-left whitespace-nowrap text-text-secondary">
              {`Showing ${rangeStart}-${rangeEnd} of ${totalHolidays} users`}
            </p>
            <div data-figma-node="5621:28396" data-figma-pagination="true" className="box-border w-max max-w-[min(177px,100%)] h-auto relative flex flex-row items-start gap-1.5">
              <button
                type="button"
                data-figma-node="5621:28397"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage <= 1}
                className="box-border w-max max-w-[min(51px,100%)] h-auto rounded-[6px] relative flex flex-row items-start pt-[6px] pr-[10px] pb-[6px] pl-[10px] border-[#e2d9d0] border-[1px] bg-surface disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <p data-figma-node="5621:28398" className="box-border w-max max-w-[min(31px,100%)] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-primary">Prev</p>
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  type="button"
                  data-figma-node={pageNum === 1 ? "5621:28399" : "5621:28401"}
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
                data-figma-node="5621:28403"
                onClick={() => setCurrentPage((p) => p + 1)}
                disabled={currentPage >= totalPages}
                className="box-border w-max max-w-[min(52px,100%)] h-auto rounded-[6px] relative flex flex-row items-start pt-[6px] pr-[10px] pb-[6px] pl-[10px] border-[#e2d9d0] border-[1px] bg-surface disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <p data-figma-node="5621:28404" className="box-border w-max max-w-[min(32px,100%)] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-primary">Next</p>
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
