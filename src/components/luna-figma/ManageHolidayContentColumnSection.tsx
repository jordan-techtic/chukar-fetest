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

import { Button } from "@/components/ui/button";
import { Calendar } from "./Calendar";
import { FigmaCollectionPagination } from "./FigmaCollectionPagination";
import { formatHolidayDate, isActiveStatus } from "./figmaListFormat";
import { HolidayRowActions } from "./HolidayRowActions";
import { StatusColumn05310C } from "./StatusColumn05310C";
import { StatusColumnA03B73 } from "./StatusColumnA03B73";
import { useFigmaScreenData } from "./useFigmaScreenData";

export function ManageHolidayContentColumnSection() {
  const {
    holidays,
    usersLoading,
    usersError,
    loadReads,
    collectionKind,
    totalFiltered,
    clearFilters,
    beginEditHoliday,
    deleteHolidayById,
    fieldValues,
    statusMessage,
    submitError,
  } = useFigmaScreenData();

  const filterActive = String(fieldValues["search-users"] ?? "").trim().length > 0;
  const showEmpty = collectionKind === "holidays" && !usersLoading && !usersError && totalFiltered === 0;

  return (
    <section data-figma-node="5621:28294" className="relative box-border w-full min-w-0 min-h-[601px] flex flex-col items-start z-[2]">
      <div data-figma-node="5621:28295" className="box-border self-stretch min-w-0 flex-1 min-h-0 relative flex flex-col items-start gap-6 pr-[40px] pb-[40px] pl-[40px]">
        {usersLoading && (
          <p className="sr-only" role="status">
            Loading holidays…
          </p>
        )}
        {usersError && (
          <div className="sr-only" role="alert">
            <p>{usersError}</p>
            <Button type="button" onClick={() => void loadReads()}>
              Retry
            </Button>
          </div>
        )}
        {(statusMessage || submitError) && (
          <p className="sr-only" role="status">
            {statusMessage || submitError}
          </p>
        )}
        <div data-figma-node="5621:28296" role="table" className="box-border self-stretch min-w-0 h-auto shrink-0 rounded-[12px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.02)] relative flex flex-col items-start overflow-x-auto border-[#e2d9d0] border-[1px] bg-surface overflow-y-hidden max-w-full">
          <div data-figma-node="5621:28297" role="row" className="box-border self-stretch h-auto shrink-0 relative flex flex-row items-start gap-5 flex-wrap gap-y-3 border-b border-[#e2d9d0] pt-[14px] pr-[24px] pb-[13px] pl-[24px] bg-color-9 min-w-[1360px]">
            <p data-figma-node="5621:28298" role="columnheader" className="box-border flex-1 min-w-0 h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] uppercase text-left text-text-primary">Holiday Name</p>
            <p data-figma-node="5621:28299" role="columnheader" className="box-border w-[150px] shrink-0 h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] uppercase text-left whitespace-nowrap text-text-primary">START DATE</p>
            <p data-figma-node="5621:28300" role="columnheader" className="box-border w-[150px] shrink-0 h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] uppercase text-left whitespace-nowrap text-text-primary">END DATE</p>
            <p data-figma-node="5621:28301" role="columnheader" className="box-border w-[100px] shrink-0 h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] uppercase text-left whitespace-nowrap text-text-primary">Status</p>
            <p data-figma-node="5621:28303" role="columnheader" className="box-border w-[100px] shrink-0 h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] uppercase text-right whitespace-nowrap text-text-primary">Actions</p>
          </div>
          {showEmpty && (
            <div role="row" className="box-border self-stretch min-w-[1360px] pt-[24px] pr-[24px] pb-[24px] pl-[24px]">
              <p className="font-onest text-[14px] font-[400] leading-[18px] text-text-secondary">
                {filterActive ? "No holidays match your search." : "No holidays yet."}
              </p>
              {filterActive && (
                <Button
                  type="button"
                  onClick={clearFilters}
                  className="mt-3 p-0 h-auto bg-transparent shadow-none hover:bg-transparent font-onest text-[13px] font-[700] text-primary"
                >
                  Clear filters
                </Button>
              )}
            </div>
          )}
          {holidays.map((item, index) => (
            <div
              key={item.id}
              role="row"
              className={`box-border self-stretch h-auto shrink-0 relative flex flex-row items-center gap-5 flex-wrap gap-y-3 border-b border-[#e2d9d0] pt-[12px] pr-[24px] pb-[11px] pl-[24px] min-w-[1360px]${index === holidays.length - 1 ? " border-b-0" : ""}`}
            >
              <div role="cell" className="box-border flex-1 min-w-0 h-auto relative flex flex-row items-center gap-3">
                <div className="box-border w-[32px] shrink-0 h-[32px] rounded-[20px] relative flex flex-row items-center justify-center bg-color-18">
                  <Calendar data-figma-component="5111:8245" aria-hidden="true" className="box-border w-[16px] shrink-0 h-[16px] overflow-hidden" />
                </div>
                <p className="box-border flex-1 min-w-0 h-auto min-h-[18px] font-onest text-[14px] font-[600] leading-[18px] text-left text-text-primary">
                  {item.name}
                </p>
              </div>
              <p role="cell" className="box-border w-[150px] shrink-0 h-auto min-h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-secondary">
                {formatHolidayDate(item.start_date)}
              </p>
              <p role="cell" className="box-border w-[150px] shrink-0 h-auto min-h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-secondary">
                {formatHolidayDate(item.end_date)}
              </p>
              {isActiveStatus(item.status) ? (
                <StatusColumnA03B73 className="box-border w-[100px] shrink-0 h-auto" />
              ) : (
                <StatusColumn05310C className="box-border w-[100px] shrink-0 h-auto" />
              )}
              <HolidayRowActions
                holidayId={item.id}
                onEdit={beginEditHoliday}
                onDelete={deleteHolidayById}
                className="box-border w-[100px] shrink-0 h-auto"
              />
            </div>
          ))}
        </div>
        <FigmaCollectionPagination
          data-figma-node="5621:28394"
          summaryLabel="holidays"
          className="box-border self-stretch min-w-0 h-auto shrink-0"
        />
      </div>
    </section>
  );
}
