/**
 * Luna generated layout
 * Figma node: 5359:17138
 * Section: Content Column
 * Route: /manage-activity
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
"use client";

import { ManageActivityTableRow } from "./ManageActivityTableRow";
import { useFigmaScreenData } from "./useFigmaScreenData";

const PAGE_SIZE = 6;

export function ManageActivityContentColumnSection() {
  const {
    activities,
    usersLoading,
    usersError,
    loadReads,
    currentPage,
    setCurrentPage,
    totalPages,
    totalUsers,
    clearFilters,
    fieldValues,
    deleteActivity,
    openEditActivity,
    statusMessage,
    submitting,
  } = useFigmaScreenData();

  const search = String(fieldValues["search-input"] ?? "").trim();
  const hasFilters = Boolean(search);
  const rangeStart = totalUsers === 0 ? 0 : (currentPage - 1) * PAGE_SIZE + 1;
  const rangeEnd = totalUsers === 0 ? 0 : Math.min(currentPage * PAGE_SIZE, totalUsers);
  const showPagination = totalPages > 1;

  return (
    <section data-figma-node="5359:17138" id="contact" className="relative box-border w-full min-w-0 min-h-[601px] flex flex-col items-start z-[2]">
      <div data-figma-node="5359:17154" className="box-border self-stretch min-w-0 h-[601px] shrink-0 relative flex flex-col items-start gap-6 pr-[40px] pb-[40px] pl-[40px]">
        <div className="sr-only" aria-live="polite">
          {usersLoading ? "Loading activities." : null}
          {statusMessage ? statusMessage : null}
          {submitting ? "Saving activity." : null}
          {usersError ? (
            <>
              {usersError}
              <button type="button" onClick={() => void loadReads()}>
                Retry
              </button>
            </>
          ) : null}
          {!usersLoading && !usersError && activities.length === 0
            ? hasFilters
              ? "No activities match your filters."
              : "No activities to display."
            : null}
        </div>
        <div data-figma-node="5359:17163" className="box-border self-stretch min-w-0 h-auto shrink-0 overflow-hidden rounded-[12px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.02)] relative flex flex-col items-start border-[#e2d9d0] border-[1px] bg-surface">
          <div data-figma-node="5359:17164" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-start gap-5 pt-[14px] pr-[24px] pb-[14px] pl-[24px] border-b border-[#e2d9d0] bg-color-9">
            <p data-figma-node="5359:17165" className="box-border flex-1 min-w-0 h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] uppercase text-left text-text-primary">Activity Name</p>
            <p data-figma-node="5359:17166" className="box-border flex-1 min-w-0 h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] uppercase text-left text-text-primary">Description</p>
            <p data-figma-node="5725:67485" className="box-border flex-1 min-w-0 h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] uppercase text-left text-text-primary">Category</p>
            <p data-figma-node="5364:8881" className="box-border w-[100px] shrink-0 h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] uppercase text-left whitespace-nowrap text-text-primary">Color</p>
            <p data-figma-node="5359:17167" className="box-border w-[100px] shrink-0 h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] uppercase text-left whitespace-nowrap text-text-primary">Status</p>
            <p data-figma-node="5359:17168" className="box-border w-[140px] shrink-0 h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] uppercase text-left whitespace-nowrap text-text-primary">Created Date</p>
            <p data-figma-node="5359:17169" className="box-border w-[100px] shrink-0 h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] uppercase text-right whitespace-nowrap text-text-primary">Actions</p>
          </div>
          {usersError ? (
            <div
              role="alert"
              className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-center justify-center gap-3 pt-[24px] pr-[24px] pb-[24px] pl-[24px]"
            >
              <p className="font-onest text-[14px] font-[400] leading-[18px] text-text-secondary">{usersError}</p>
              <button
                type="button"
                onClick={() => void loadReads()}
                className="font-onest text-[13px] font-[700] leading-[17px] text-primary underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Retry
              </button>
            </div>
          ) : usersLoading ? (
            Array.from({ length: PAGE_SIZE }, (_, index) => (
              <div
                key={index}
                aria-hidden="true"
                className={`box-border self-stretch min-w-0 h-[56px] shrink-0 relative flex flex-row items-center gap-5 pt-[12px] pr-[24px] pb-[12px] pl-[24px] animate-pulse ${
                  index === PAGE_SIZE - 1 ? "border-[#e2d9d0] border-[0px]" : "border-b border-[#e2d9d0]"
                }`}
              >
                <div className="box-border flex-1 min-w-0 h-[18px] rounded bg-color-9" />
                <div className="box-border flex-1 min-w-0 h-[18px] rounded bg-color-9" />
                <div className="box-border flex-1 min-w-0 h-[18px] rounded bg-color-9" />
                <div className="box-border w-[100px] shrink-0 h-[18px] rounded bg-color-9" />
                <div className="box-border w-[100px] shrink-0 h-[22px] rounded-full bg-color-9" />
                <div className="box-border w-[140px] shrink-0 h-[18px] rounded bg-color-9" />
                <div className="box-border w-[100px] shrink-0 h-[18px] rounded bg-color-9" />
              </div>
            ))
          ) : activities.length === 0 ? (
            <div className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-center justify-center gap-3 pt-[24px] pr-[24px] pb-[24px] pl-[24px]">
              <p className="font-onest text-[14px] font-[400] leading-[18px] text-text-secondary">
                {hasFilters ? "No activities match your search." : "No activities to display."}
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
            activities.map((activity, index) => (
              <ManageActivityTableRow
                key={activity.id}
                activity={activity}
                isLast={index === activities.length - 1}
                onEdit={openEditActivity}
                onDelete={(id) => void deleteActivity(id)}
              />
            ))
          )}
        </div>
        {showPagination ? (
          <div data-figma-node="5359:17266" data-figma-pagination="true" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-center justify-between">
            <p data-figma-node="5359:17267" className="box-border w-max max-w-[min(161px,100%)] h-auto min-h-[17px] font-onest text-[13px] font-[400] leading-[17px] text-left whitespace-nowrap text-text-secondary">
              {`Showing ${rangeStart}-${rangeEnd} of ${totalUsers} entries`}
            </p>
            <div data-figma-node="5359:17268" data-figma-pagination="true" className="box-border w-max max-w-[min(177px,100%)] h-auto relative flex flex-row items-start gap-1.5">
              <button
                type="button"
                data-figma-node="5359:17269"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage <= 1}
                className="box-border w-max max-w-[min(51px,100%)] h-auto rounded-[6px] relative flex flex-row items-start pt-[6px] pr-[10px] pb-[6px] pl-[10px] border-[#e2d9d0] border-[1px] bg-surface disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <p data-figma-node="5359:17270" className="box-border w-max max-w-[min(31px,100%)] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-primary">Prev</p>
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  type="button"
                  data-figma-node={pageNum === 1 ? "5359:17271" : "5359:17273"}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`box-border w-max h-auto rounded-[6px] relative flex flex-row items-start pt-[6px] pr-[12px] pb-[6px] pl-[12px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                    pageNum === currentPage
                      ? "bg-primary"
                      : "border-[#e2d9d0] border-[1px] bg-surface"
                  }`}
                >
                  <p
                    data-figma-node={pageNum === 1 ? "5359:17272" : "5359:17274"}
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
                data-figma-node="5359:17275"
                onClick={() => setCurrentPage((p) => p + 1)}
                disabled={currentPage >= totalPages}
                className="box-border w-max max-w-[min(52px,100%)] h-auto rounded-[6px] relative flex flex-row items-start pt-[6px] pr-[10px] pb-[6px] pl-[10px] border-[#e2d9d0] border-[1px] bg-surface disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <p data-figma-node="5359:17276" className="box-border w-max max-w-[min(32px,100%)] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-primary">Next</p>
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
