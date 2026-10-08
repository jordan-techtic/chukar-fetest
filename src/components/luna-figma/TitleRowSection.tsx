/**
 * Luna generated layout
 * Figma node: TitleRow variants
 * Section: title row
 * Ownership: Figma-owned layout
 * luna-spec-codegen: owned-layout
 */
import Link from "next/link";
import { figmaFieldProps } from "./useFigmaScreenData";

function AddHolidayCtaLink({
  buttonNodeId,
  plusNodeId,
  vectorNodeId,
  labelNodeId,
}: {
  buttonNodeId: string;
  plusNodeId: string;
  vectorNodeId: string;
  labelNodeId: string;
}) {
  return (
    <Link
      data-figma-node={buttonNodeId}
      href="/add-holiday"
      className="box-border inline-flex h-[37px] w-[135px] items-center justify-center gap-[8px] rounded-[6px] bg-[#a21d35] pt-[10px] pr-[18px] pb-[10px] pl-[18px]"
    >
      <span
        data-figma-node={plusNodeId}
        className="box-border relative h-[14px] w-[14px] overflow-hidden rounded-[0px]"
      >
        <svg
          data-figma-node={vectorNodeId}
          viewBox="0 0 8.17 8.17"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="absolute left-[2.9px] top-[2.9px] h-[8.17px] w-[8.17px]"
        >
          <path
            d="M4.085 0V8.17M0 4.085H8.17"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span
        data-figma-node={labelNodeId}
        className="font-onest text-[13px] font-[700] leading-[17px] text-[#ffffff] whitespace-nowrap"
      >
        Add Holiday
      </span>
    </Link>
  );
}

export function TitleRow_5354_14363() {
  return (
    <section data-figma-node="5354:14363" className="absolute box-border left-[0px] top-[80px] w-[1440px] h-[89px] [--fx:0] [--fww:1440] pt-[20px] pr-[40px] pb-[20px] pl-[40px] flex flex-row items-center justify-between z-[1]">
      <div className="box-border flex flex-col items-start gap-[4px]">
        <p className="font-onest text-[22px] font-[700] leading-[28px] text-[#231f20]">Manage Users</p>
        <p className="font-onest text-[13px] font-[400] leading-[17px] text-[#686868]">Invite people and turn their accounts on or off.</p>
      </div>
      
      <div className="box-border flex items-center gap-[20px]">
        <button type="button" data-figma-node="5359:17478" className="box-border w-[96px] h-[37px] whitespace-nowrap rounded-[6px] border-[#e2d9d0] border-[1px] bg-[#ffffff] inline-flex items-center justify-center"><span className="font-onest text-[13px] font-[400] text-[#231f20]">Role: All</span></button>
        <button type="button" data-figma-node="5359:17481" className="box-border w-[110px] h-[37px] whitespace-nowrap rounded-[6px] border-[#e2d9d0] border-[1px] bg-[#ffffff] inline-flex items-center justify-center"><span className="font-onest text-[13px] font-[400] text-[#231f20]">Status: All</span></button>
        <div className="box-border w-[280px] h-[37px] rounded-[6px] border-[#e2d9d0] border-[1px] bg-[#ffffff] relative">
          <input data-figma-node="5354:14369" name="search-users" type="search" placeholder="Search users..." aria-label="Search users..." className="absolute inset-0 h-full w-full appearance-none bg-transparent border-0 pl-[38px] pr-[16px] font-onest text-[13px] text-[#686868] placeholder:text-[#686868]" />
        </div>
        <Link data-figma-node="5354:14373" href="/invite-user" className="box-border w-[126px] h-[37px] whitespace-nowrap rounded-[6px] bg-[#a21d35] inline-flex items-center justify-center"><span className="font-onest text-[13px] font-[700] text-[#ffffff]">Invite User</span></Link>
      </div>
    </section>
  );
}


export function TitleRow_5339_8822() {
  return (
    <section data-figma-node="5339:8822" className="absolute box-border left-[0px] top-[80px] w-[1440px] h-[89px] [--fx:0] [--fww:1440] pt-[20px] pr-[40px] pb-[20px] pl-[40px] flex flex-row items-center justify-between z-[1]">
      <div className="box-border flex flex-col items-start gap-[4px]">
        <p className="font-onest text-[22px] font-[700] leading-[28px] text-[#231f20]">Audit Logs</p>
        <p className="font-onest text-[13px] font-[400] leading-[17px] text-[#686868]">Review system access, modifications, and exports.</p>
      </div>
      
      <button data-figma-node="5339:8827" type="button" className="box-border w-[116px] h-[37px] whitespace-nowrap rounded-[6px] bg-[#a21d35] inline-flex items-center justify-center"><span className="font-onest text-[13px] font-[700] text-[#ffffff]">Export Logs</span></button>
    </section>
  );
}


export function TitleRow_5354_14348() {
  return (
    <section data-figma-node="5354:14348" className="absolute box-border left-[0px] top-[80px] w-[1440px] h-[89px] [--fx:0] [--fww:1440] pt-[20px] pr-[40px] pb-[20px] pl-[40px] flex flex-row items-center justify-between z-[1]">
      <div className="box-border flex flex-col items-start gap-[4px]">
        <p className="font-onest text-[22px] font-[700] leading-[28px] text-[#231f20]">Manage Category</p>
        <p className="font-onest text-[13px] font-[400] leading-[17px] text-[#686868]">Create and manage the categories used when creating marketing calendar activities.</p>
      </div>
      
      <div className="box-border flex items-center gap-[20px]">
        <div className="box-border w-[280px] h-[37px] rounded-[6px] border-[#e2d9d0] border-[1px] bg-[#ffffff] relative">
          <input data-figma-node="5354:14354" name="search-users" type="search" placeholder="Filter categories..." aria-label="Filter categories..." className="absolute inset-0 h-full w-full appearance-none bg-transparent border-0 pl-[38px] pr-[16px] font-onest text-[13px] text-[#686868] placeholder:text-[#686868]" />
        </div>
        <Link data-figma-node="5354:14358" href="/add-category" className="box-border w-[116px] h-[37px] whitespace-nowrap rounded-[6px] bg-[#a21d35] inline-flex items-center justify-center"><span className="font-onest text-[13px] font-[700] text-[#ffffff]">Add Category</span></Link>
      </div>
    </section>
  );
}


export function TitleRow_5449_19397() {
  return (
    <section data-figma-node="5449:19397" className="absolute box-border left-[0px] top-[80px] w-[1440px] h-[89px] [--fx:0] [--fww:1440] pt-[20px] pr-[40px] pb-[20px] pl-[40px] flex flex-row items-center justify-between z-[1]">
      <div className="box-border flex flex-col items-start gap-[4px]">
        <p className="font-onest text-[22px] font-[700] leading-[28px] text-[#231f20]">Manage Users</p>
        <p className="font-onest text-[13px] font-[400] leading-[17px] text-[#686868]">Invite people and turn their accounts on or off.</p>
      </div>
      
      <div className="box-border flex items-center gap-[20px]">
        <button type="button" data-figma-node="5359:17478" className="box-border w-[96px] h-[37px] whitespace-nowrap rounded-[6px] border-[#e2d9d0] border-[1px] bg-[#ffffff] inline-flex items-center justify-center"><span className="font-onest text-[13px] font-[400] text-[#231f20]">Role: All</span></button>
        <button type="button" data-figma-node="5359:17481" className="box-border w-[110px] h-[37px] whitespace-nowrap rounded-[6px] border-[#e2d9d0] border-[1px] bg-[#ffffff] inline-flex items-center justify-center"><span className="font-onest text-[13px] font-[400] text-[#231f20]">Status: All</span></button>
        <div className="box-border w-[280px] h-[37px] rounded-[6px] border-[#e2d9d0] border-[1px] bg-[#ffffff] relative">
          <input data-figma-node="5449:19411" name="search-users" type="search" placeholder="Search users..." aria-label="Search users..." className="absolute inset-0 h-full w-full appearance-none bg-transparent border-0 pl-[38px] pr-[16px] font-onest text-[13px] text-[#686868] placeholder:text-[#686868]" />
        </div>
        <Link data-figma-node="5449:19427" href="/manage-users" className="box-border w-[126px] h-[37px] whitespace-nowrap rounded-[6px] bg-[#a21d35] inline-flex items-center justify-center"><span className="font-onest text-[13px] font-[700] text-[#ffffff]">Add User</span></Link>
      </div>
    </section>
  );
}


export function TitleRow_5621_28272() {
  return (
    <section data-figma-node="5621:28272" className="absolute box-border left-[0px] top-[80px] w-[1440px] h-[89px] [--fx:0] [--fww:1440] pt-[20px] pr-[40px] pb-[20px] pl-[40px] flex flex-row items-center justify-between z-[1]">
      <div className="box-border flex flex-col items-start gap-[4px]">
        <p className="font-onest text-[22px] font-[700] leading-[28px] text-[#231f20]">Holiday Management</p>
        <p className="font-onest text-[13px] font-[400] leading-[17px] text-[#686868]">Manage company-wide holidays and observances.</p>
      </div>
      
      <div className="box-border flex items-center gap-[20px]">
        <div className="box-border w-[280px] h-[37px] rounded-[6px] border-[#e2d9d0] border-[1px] bg-[#ffffff] relative">
          <input data-figma-node="5621:28286" name="search-users" type="search" placeholder="Search users..." aria-label="Search users..." className="absolute inset-0 h-full w-full appearance-none bg-transparent border-0 pl-[38px] pr-[16px] font-onest text-[13px] text-[#686868] placeholder:text-[#686868]" />
        </div>
        <button type="button" className="box-border w-[126px] h-[37px] whitespace-nowrap rounded-[6px] border-[#e2d9d0] border-[1px] bg-[#ffffff]">Upload List</button>
        <AddHolidayCtaLink buttonNodeId="5621:28290" plusNodeId="5621:28291" vectorNodeId="5621:28292" labelNodeId="5621:28293" />
      </div>
    </section>
  );
}


export function TitleRow_5449_19128() {
  return (
    <section data-figma-node="5449:19128" className="absolute box-border left-[0px] top-[80px] w-[1440px] h-[89px] [--fx:0] [--fww:1440] pt-[20px] pr-[40px] pb-[20px] pl-[40px] flex flex-row items-center justify-between z-[1]">
      <div className="box-border flex flex-col items-start gap-[4px]">
        <p className="font-onest text-[22px] font-[700] leading-[28px] text-[#231f20]">Manage Category</p>
        <p className="font-onest text-[13px] font-[400] leading-[17px] text-[#686868]">Create and manage the categories used when creating marketing calendar activities.</p>
      </div>
      
      <div className="box-border flex items-center gap-[20px]">
        <div className="box-border w-[280px] h-[37px] rounded-[6px] border-[#e2d9d0] border-[1px] bg-[#ffffff] relative">
          <input data-figma-node="5449:19134" name="search-users" type="search" placeholder="Filter categories..." aria-label="Filter categories..." className="absolute inset-0 h-full w-full appearance-none bg-transparent border-0 pl-[38px] pr-[16px] font-onest text-[13px] text-[#686868] placeholder:text-[#686868]" />
        </div>
        <Link data-figma-node="5449:19138" href="/add-category" className="box-border w-[116px] h-[37px] whitespace-nowrap rounded-[6px] bg-[#a21d35] inline-flex items-center justify-center"><span className="font-onest text-[13px] font-[700] text-[#ffffff]">Add Category</span></Link>
      </div>
    </section>
  );
}


export function TitleRowSection() {
  return (
    <section data-figma-node="5621:28802" className="absolute box-border left-[0px] top-[80px] w-[1440px] h-[89px] pt-[20px] pr-[40px] pb-[20px] pl-[40px] flex flex-row items-center justify-between z-[1]">
      <div className="flex flex-col gap-[4px]">
        <p data-figma-node="5621:28804" className="font-onest text-[22px] font-[700] text-[#231f20]">Holiday Management</p>
        <p data-figma-node="5621:28805" className="font-onest text-[13px] text-[#686868]">Manage company-wide holidays and observances.</p>
      </div>
      <div className="flex items-center gap-[20px]">
        <div className="box-border w-[280px] h-[37px] rounded-[6px] border-[#e2d9d0] border-[1px] bg-[#ffffff] relative">
          <input data-figma-node="5621:28808" name="search-users" {...figmaFieldProps("search-users")} type="search" placeholder="Search users..." aria-label="Search users..." className="absolute inset-0 h-full w-full appearance-none bg-transparent border-0 pl-[38px] font-onest text-[13px]" />
        </div>
        <button type="button" className="box-border w-[126px] h-[37px] whitespace-nowrap rounded-[6px] border-[#e2d9d0] border-[1px] bg-[#ffffff]">Upload List</button>
        <AddHolidayCtaLink buttonNodeId="5621:28815" plusNodeId="5621:28816" vectorNodeId="5621:28817" labelNodeId="5621:28818" />
      </div>
    </section>
  );
}
