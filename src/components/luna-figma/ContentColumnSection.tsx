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

import { ActiveTrueSizeDefault_ddd4f79d } from "./ActiveTrueSizeDefault_ddd4f79d";
import { FiRrPencil_93ff9a17 } from "./FiRrPencil_93ff9a17";
import { FiRrTrash_ffb59942 } from "./FiRrTrash_ffb59942";
import { figmaItemProps, figmaTextContent } from "./figmaDisplay";
import { figmaActionProps, useCategoryRowVisible } from "./useFigmaScreenData";

function CategoryTableRow({
  rowIndex,
  rowNodeId,
  titleNodeId,
  titleFallback,
  descriptionNodeId,
  descriptionFallback,
  statusWrapperNodeId,
  statusBadgeNodeId,
  dateNodeId,
  dateFallback,
  actionsNodeId,
  editNodeId,
  pencilNodeId,
  editActionId,
  deleteNodeId,
  trashNodeId,
  deleteActionId,
}: {
  rowIndex: number;
  rowNodeId: string;
  titleNodeId: string;
  titleFallback: string;
  descriptionNodeId: string;
  descriptionFallback: string;
  statusWrapperNodeId: string;
  statusBadgeNodeId: string;
  dateNodeId: string;
  dateFallback: string;
  actionsNodeId: string;
  editNodeId: string;
  pencilNodeId: string;
  editActionId: string;
  deleteNodeId: string;
  trashNodeId: string;
  deleteActionId: string;
}) {
  const itemProps = figmaItemProps(rowNodeId);
  const filterVisible = useCategoryRowVisible(rowIndex);
  const hidden = Boolean(itemProps.hidden) || !filterVisible;

  return (
    <div
      data-figma-node={rowNodeId}
      {...itemProps}
      hidden={hidden}
      aria-hidden={hidden ? true : itemProps["aria-hidden"]}
      className="box-border w-[1360px] h-[60px] relative gap-5 pt-[16px] pr-[24px] pb-[16px] pl-[24px] border-[#e2d9d0] border-[1px]"
    >
      <p
        data-figma-node={titleNodeId}
        className="box-border w-[200px] h-[18px] absolute left-[24px] top-[21px] font-onest text-[14px] font-[600] leading-[18px] text-left whitespace-nowrap text-[#231f20]"
      >
        {figmaTextContent(titleNodeId, titleFallback)}
      </p>
      <p
        data-figma-node={descriptionNodeId}
        className="box-border w-[692px] h-[18px] absolute left-[244px] top-[21px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-[#686868]"
      >
        {figmaTextContent(descriptionNodeId, descriptionFallback)}
      </p>
      <div
        data-figma-node={statusWrapperNodeId}
        className="box-border w-[100px] h-[16px] absolute left-[956px] top-[22px]"
      >
        <ActiveTrueSizeDefault_ddd4f79d
          data-figma-node={statusBadgeNodeId}
          data-figma-component="5111:12391"
          className="absolute left-[0px] top-[0px]"
        />
      </div>
      <p
        data-figma-node={dateNodeId}
        className="box-border w-[140px] h-[18px] absolute left-[1076px] top-[21px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-[#686868]"
      >
        {figmaTextContent(dateNodeId, dateFallback)}
      </p>
      <div
        data-figma-node={actionsNodeId}
        className="box-border w-[100px] h-[28px] absolute left-[1236px] top-[16px] flex items-center gap-[6px] gap-1.5"
      >
        <button
          data-figma-node={editNodeId}
          type="button"
          data-figma-action={editActionId}
          {...figmaActionProps(editActionId)}
          className="box-border w-[28px] h-[28px] rounded-[6px] relative pt-[6px] pr-[6px] pb-[6px] pl-[6px] bg-[#faf3e8] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FiRrPencil_93ff9a17
            data-figma-node={pencilNodeId}
            data-figma-component="5121:9154"
            className="absolute left-[6px] top-[6px]"
          />
        </button>
        <button
          data-figma-node={deleteNodeId}
          type="button"
          data-figma-action={deleteActionId}
          {...figmaActionProps(deleteActionId)}
          className="box-border w-[28px] h-[28px] rounded-[6px] relative pt-[6px] pr-[6px] pb-[6px] pl-[6px] bg-[#faf3e8] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FiRrTrash_ffb59942
            data-figma-node={trashNodeId}
            data-figma-component="5121:9660"
            className="absolute left-[6px] top-[6px]"
          />
        </button>
      </div>
    </div>
  );
}

export function ContentColumnSection() {
  return (
    <section data-figma-node="5449:19142" className="absolute box-border left-[0px] top-[169px] w-[1440px] h-[601px] [--fx:0] [--fww:1440] flex flex-col items-start z-[2]">
      <div data-figma-node="5449:19143" className="box-border w-[1360px] h-[601px] relative flex flex-col items-center gap-[24px] gap-6 pr-[40px] pb-[40px] pl-[40px]">
        <div data-figma-node="5449:19144" className="box-border w-[1360px] h-[223px] overflow-hidden rounded-[12px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.02)] relative flex flex-col items-center border-[#e2d9d0] border-[1px] bg-[#ffffff]">
          <div data-figma-node="5449:19145" className="box-border w-[1360px] h-[43px] relative flex items-center gap-[20px] gap-5 pt-[14px] pr-[24px] pb-[14px] pl-[24px] border-[#e2d9d0] border-[1px] bg-[#faf3e8]">
            <p data-figma-node="5449:19146" className="box-border w-[200px] h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Category Name</p>
            <p data-figma-node="5449:19147" className="box-border w-[692px] h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Description</p>
            <p data-figma-node="5449:19148" className="box-border w-[100px] h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Status</p>
            <p data-figma-node="5449:19149" className="box-border w-[140px] h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Created Date</p>
            <p data-figma-node="5449:19150" className="box-border w-[100px] h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-right whitespace-nowrap text-[#231f20]">Actions</p>
          </div>
          <CategoryTableRow
            rowIndex={0}
            rowNodeId="5449:19151"
            titleNodeId="5449:19152"
            titleFallback="Promotions"
            descriptionNodeId="5449:19153"
            descriptionFallback="Email, SMS, and other promotional sends"
            statusWrapperNodeId="5449:19154"
            statusBadgeNodeId="5449:19155"
            dateNodeId="5449:19156"
            dateFallback="Aug 12, 2026"
            actionsNodeId="5449:19157"
            editNodeId="5449:19158"
            pencilNodeId="5449:19159"
            editActionId="act_cf28_cat_edit_0"
            deleteNodeId="5449:19160"
            trashNodeId="5449:19161"
            deleteActionId="act_cf28_cat_del_0"
          />
          <CategoryTableRow
            rowIndex={1}
            rowNodeId="5449:19162"
            titleNodeId="5449:19163"
            titleFallback="Content"
            descriptionNodeId="5449:19164"
            descriptionFallback="Blog posts, social posts, and other content"
            statusWrapperNodeId="5449:19165"
            statusBadgeNodeId="5449:19166"
            dateNodeId="5449:19167"
            dateFallback="Aug 15, 2026"
            actionsNodeId="5449:19168"
            editNodeId="5449:19169"
            pencilNodeId="5449:19170"
            editActionId="act_cf28_cat_edit_1"
            deleteNodeId="5449:19171"
            trashNodeId="5449:19172"
            deleteActionId="act_cf28_cat_del_1"
          />
          <CategoryTableRow
            rowIndex={2}
            rowNodeId="5449:19173"
            titleNodeId="5449:19174"
            titleFallback="Focuses"
            descriptionNodeId="5449:19175"
            descriptionFallback="Product and seasonal campaign focuses"
            statusWrapperNodeId="5449:19176"
            statusBadgeNodeId="5449:19177"
            dateNodeId="5449:19178"
            dateFallback="Aug 20, 2026"
            actionsNodeId="5449:19179"
            editNodeId="5449:19180"
            pencilNodeId="5449:19181"
            editActionId="act_cf28_cat_edit_2"
            deleteNodeId="5449:19182"
            trashNodeId="5449:19183"
            deleteActionId="act_cf28_cat_del_2"
          />
        </div>
        <div data-figma-node="5449:19184" className="box-border w-[1360px] h-[27px] relative">
          <p data-figma-node="5449:19185" className="box-border w-[175px] h-[17px] absolute left-[0px] top-[5px] font-onest text-[13px] font-[400] leading-[17px] text-left whitespace-nowrap text-[#686868]">Showing 1-5 of 12 categories</p>
          <div data-figma-node="5449:19186" className="box-border w-[173px] h-[27px] absolute left-[1187px] top-[0px] flex items-center gap-[6px] gap-1.5">
            <div data-figma-node="5449:19187" className="box-border w-[47px] h-[27px] rounded-[6px] relative pt-[6px] pr-[10px] pb-[6px] pl-[10px] border-[#e2d9d0] border-[1px] bg-[#ffffff]">
              <p data-figma-node="5449:19188" className="box-border w-[27px] h-[15px] absolute left-[10px] top-[6px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Prev</p>
            </div>
            <div data-figma-node="5449:19189" className="box-border w-[29px] h-[27px] rounded-[6px] relative pt-[6px] pr-[12px] pb-[6px] pl-[12px] bg-[#a21d35]">
              <p data-figma-node="5449:19190" className="box-border w-[5px] h-[15px] absolute left-[12px] top-[6px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-[#ffffff]">1</p>
            </div>
            <div data-figma-node="5449:19191" className="box-border w-[31px] h-[27px] rounded-[6px] relative pt-[6px] pr-[12px] pb-[6px] pl-[12px] border-[#e2d9d0] border-[1px] bg-[#ffffff]">
              <p data-figma-node="5449:19192" className="box-border w-[7px] h-[15px] absolute left-[12px] top-[6px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-[#231f20]">2</p>
            </div>
            <div data-figma-node="5449:19193" className="box-border w-[48px] h-[27px] rounded-[6px] relative pt-[6px] pr-[10px] pb-[6px] pl-[10px] border-[#e2d9d0] border-[1px] bg-[#ffffff]">
              <p data-figma-node="5449:19194" className="box-border w-[28px] h-[15px] absolute left-[10px] top-[6px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Next</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
