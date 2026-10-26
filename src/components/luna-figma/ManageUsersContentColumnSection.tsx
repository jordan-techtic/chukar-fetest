/**
 * Luna generated layout
 * Figma node: 5359:17456
 * Section: Content Column
 * Route: /manage-users
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
"use client";

import { ManageUserTableRow } from "./ManageUserTableRow";
import { useFigmaScreenData } from "./useFigmaScreenData";

export function ManageUsersContentColumnSection() {
  const {
    users,
    usersLoading,
    usersError,
    loadReads,
    currentPage,
    setCurrentPage,
    totalPages,
    totalUsers,
    clearFilters,
    fieldValues,
  } = useFigmaScreenData();

  const hasFilters =
    Boolean(String(fieldValues["search-input"] ?? "").trim()) ||
    Boolean(String(fieldValues["role-filter"] ?? "").trim()) ||
    Boolean(String(fieldValues["status-filter"] ?? "").trim());

  const pageSize = 6;
  const rangeStart = totalUsers === 0 ? 0 : (currentPage - 1) * pageSize + 1;
  const rangeEnd = totalUsers === 0 ? 0 : Math.min(currentPage * pageSize, totalUsers);
  const showPagination = totalPages > 1;

  return (
    <section data-figma-node="5359:17456" className="relative box-border w-full min-w-0 min-h-[601px] flex flex-col items-start z-[2]">
      <div className="sr-only" aria-live="polite">
        {usersLoading ? "Loading users." : null}
        {usersError ? (
          <>
            {usersError}
            <button type="button" onClick={() => void loadReads()}>
              Retry
            </button>
          </>
        ) : null}
        {!usersLoading && !usersError && users.length === 0
          ? hasFilters
            ? "No users match your filters."
            : "No users to display."
          : null}
      </div>
      <div data-figma-node="5359:17472" className="box-border self-stretch min-w-0 flex-1 min-h-0 relative flex flex-col items-start gap-6 pr-[40px] pb-[40px] pl-[40px]">
        <div data-figma-node="5359:17487" className="box-border self-stretch min-w-0 h-auto shrink-0 overflow-hidden rounded-[12px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.02)] relative flex flex-col items-start border-[#e2d9d0] border-[1px] bg-surface">
          <div data-figma-node="5359:17488" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-start gap-5 pt-[14px] pr-[24px] pb-[14px] pl-[24px] border-b border-[#e2d9d0] bg-color-9">
            <p data-figma-node="5359:17489" className="box-border flex-1 min-w-0 h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] uppercase text-left text-text-primary">User Name</p>
            <p data-figma-node="5359:17490" className="box-border flex-1 min-w-0 h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] uppercase text-left text-text-primary">Email Address</p>
            <p data-figma-node="5359:17491" className="box-border w-[120px] shrink-0 h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] uppercase text-left whitespace-nowrap text-text-primary">Role</p>
            <p data-figma-node="5359:17492" className="box-border w-[140px] shrink-0 h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] uppercase text-left whitespace-nowrap text-text-primary">Last Active</p>
            <p data-figma-node="5359:17493" className="box-border w-[100px] shrink-0 h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] uppercase text-left whitespace-nowrap text-text-primary">Status</p>
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
            Array.from({ length: 6 }, (_, index) => (
              <div
                key={index}
                aria-hidden="true"
                className={`box-border self-stretch min-w-0 h-[56px] shrink-0 relative flex flex-row items-center gap-5 pt-[12px] pr-[24px] pb-[12px] pl-[24px] animate-pulse ${
                  index === 5 ? "border-[#e2d9d0] border-[0px]" : "border-b border-[#e2d9d0]"
                }`}
              >
                <div className="box-border flex-1 min-w-0 h-[18px] rounded bg-color-9" />
                <div className="box-border flex-1 min-w-0 h-[18px] rounded bg-color-9" />
                <div className="box-border w-[120px] shrink-0 h-[22px] rounded-full bg-color-9" />
                <div className="box-border w-[140px] shrink-0 h-[18px] rounded bg-color-9" />
                <div className="box-border w-[32px] shrink-0 h-[16px] rounded-[20px] bg-color-9" />
              </div>
            ))
          ) : !usersLoading && totalUsers === 0 ? (
            <div className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-center justify-center gap-3 pt-[24px] pr-[24px] pb-[24px] pl-[24px]">
              <p className="font-onest text-[14px] font-[400] leading-[18px] text-text-secondary">
                {hasFilters ? "No users match your search or filters." : "No users to display."}
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
            users.map((user, index) => (
              <ManageUserTableRow
                key={user.id}
                user={user}
                isLast={index === users.length - 1}
              />
            ))
          )}
        </div>
        {showPagination ? (
          <div data-figma-node="5359:17591" data-figma-pagination="true" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-center justify-between">
            <p data-figma-node="5359:17592" className="box-border w-max max-w-[min(149px,100%)] h-auto min-h-[17px] font-onest text-[13px] font-[400] leading-[17px] text-left whitespace-nowrap text-text-secondary">
              {`Showing ${rangeStart}-${rangeEnd} of ${totalUsers} users`}
            </p>
            <div data-figma-node="5359:17593" data-figma-pagination="true" className="box-border w-max max-w-[min(177px,100%)] h-auto relative flex flex-row items-start gap-1.5">
              <button
                type="button"
                data-figma-node="5359:17594"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage <= 1}
                className="box-border w-max max-w-[min(51px,100%)] h-auto rounded-[6px] relative flex flex-row items-start pt-[6px] pr-[10px] pb-[6px] pl-[10px] border-[#e2d9d0] border-[1px] bg-surface disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <p data-figma-node="5359:17595" className="box-border w-max max-w-[min(31px,100%)] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-primary">Prev</p>
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  type="button"
                  data-figma-node={pageNum === 1 ? "5359:17596" : "5359:17598"}
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
                data-figma-node="5359:17600"
                onClick={() => setCurrentPage((p) => p + 1)}
                disabled={currentPage >= totalPages}
                className="box-border w-max max-w-[min(52px,100%)] h-auto rounded-[6px] relative flex flex-row items-start pt-[6px] pr-[10px] pb-[6px] pl-[10px] border-[#e2d9d0] border-[1px] bg-surface disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <p data-figma-node="5359:17601" className="box-border w-max max-w-[min(32px,100%)] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-primary">Next</p>
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
