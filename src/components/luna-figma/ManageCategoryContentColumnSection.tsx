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

import { Button } from "@/components/ui/button";
import { CategoryRowActions } from "./CategoryRowActions";
import { FigmaCollectionPagination } from "./FigmaCollectionPagination";
import { formatCategoryCreatedDate, isActiveStatus } from "./figmaListFormat";
import { StatusColumn05310C } from "./StatusColumn05310C";
import { StatusColumnA03B73 } from "./StatusColumnA03B73";
import { useFigmaScreenData } from "./useFigmaScreenData";

export function ManageCategoryContentColumnSection() {
  const {
    categories,
    usersLoading,
    usersError,
    loadReads,
    collectionKind,
    totalFiltered,
    clearFilters,
    beginEditCategory,
    deleteCategoryById,
    fieldValues,
    statusMessage,
    submitError,
  } = useFigmaScreenData();

  const filterActive = String(fieldValues["filter-categories"] ?? "").trim().length > 0;
  const showEmpty = collectionKind === "categories" && !usersLoading && !usersError && totalFiltered === 0;

  return (
    <section data-figma-node="5449:19142" className="relative box-border w-full min-w-0 min-h-[601px] flex flex-col items-start z-[2]">
      <div data-figma-node="5449:19143" className="box-border self-stretch min-w-0 h-[601px] max-[1439px]:h-auto max-[1439px]:min-h-[601px] shrink-0 relative flex flex-col items-start gap-6 pr-[40px] pb-[40px] pl-[40px]">
        {usersLoading && (
          <p className="sr-only" role="status">
            Loading categories…
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
        <div data-figma-node="5449:19144" role="table" className="box-border self-stretch min-w-0 h-auto shrink-0 rounded-[12px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.02)] relative flex flex-col items-start overflow-x-auto border-[#e2d9d0] border-[1px] bg-surface overflow-y-hidden max-w-full">
          <div data-figma-node="5449:19145" role="row" className="box-border self-stretch h-auto shrink-0 relative flex flex-row items-start gap-5 flex-wrap gap-y-3 border-b border-[#e2d9d0] pt-[14px] pr-[24px] pb-[13px] pl-[24px] bg-color-9 min-w-[1360px]">
            <p data-figma-node="5449:19146" role="columnheader" className="box-border w-[200px] shrink-0 h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] uppercase text-left min-[1440px]:whitespace-nowrap text-text-primary">Category Name</p>
            <p data-figma-node="5449:19147" role="columnheader" className="box-border flex-1 min-w-0 h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] uppercase text-left text-text-primary">Description</p>
            <p data-figma-node="5449:19148" role="columnheader" className="box-border w-[100px] shrink-0 h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] uppercase text-left whitespace-nowrap text-text-primary">Status</p>
            <p data-figma-node="5449:19149" role="columnheader" className="box-border w-[140px] shrink-0 h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] uppercase text-left whitespace-nowrap text-text-primary">Created Date</p>
            <p data-figma-node="5449:19150" role="columnheader" className="box-border w-[100px] shrink-0 h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] uppercase text-right whitespace-nowrap text-text-primary">Actions</p>
          </div>
          {showEmpty && (
            <div role="row" className="box-border self-stretch min-w-[1360px] pt-[24px] pr-[24px] pb-[24px] pl-[24px]">
              <p className="font-onest text-[14px] font-[400] leading-[18px] text-text-secondary">
                {filterActive ? "No categories match your filter." : "No categories yet."}
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
          {categories.map((item, index) => (
            <div
              key={item.id}
              role="row"
              className={`box-border self-stretch h-auto shrink-0 relative flex flex-row items-center gap-5 flex-wrap gap-y-3 border-b border-[#e2d9d0] pt-[16px] pr-[24px] pb-[15px] pl-[24px] min-w-[1360px]${index === categories.length - 1 ? " border-b-0" : ""}`}
            >
              <p role="cell" className="box-border w-[200px] shrink-0 h-auto min-h-[18px] font-onest text-[14px] font-[600] leading-[18px] text-left min-[1440px]:whitespace-nowrap text-text-primary">
                {item.title}
              </p>
              <p role="cell" className="box-border flex-1 min-w-0 h-auto min-h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left truncate text-text-secondary">
                {item.description ?? ""}
              </p>
              {isActiveStatus(item.status) ? (
                <StatusColumnA03B73 className="box-border w-[100px] shrink-0 h-auto" />
              ) : (
                <StatusColumn05310C className="box-border w-[100px] shrink-0 h-auto" />
              )}
              <p role="cell" className="box-border w-[140px] shrink-0 h-auto min-h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-secondary">
                {formatCategoryCreatedDate(item.created_at)}
              </p>
              <CategoryRowActions
                categoryId={item.id}
                onEdit={beginEditCategory}
                onDelete={deleteCategoryById}
                className="box-border w-[100px] shrink-0 h-auto"
              />
            </div>
          ))}
        </div>
        <FigmaCollectionPagination
          data-figma-node="5449:19184"
          summaryLabel="categories"
          className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-center justify-between"
        />
      </div>
    </section>
  );
}
