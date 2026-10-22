import Link from "next/link";

import { Button } from "@/components/ui/button";

export function NotFoundContent() {
  return (
    <div className="relative max-w-lg rounded-[var(--radius-12)] border border-border bg-card p-[var(--spacing-padding-24)] shadow-[var(--shadow-drop-shadow)]">
      <h1 className="text-heading-md-19">Page Not Found</h1>
      <p className="mt-[var(--spacing-gap-12)] text-body-sm-5 text-muted-foreground">
        The page you requested does not exist.
      </p>
      <Button asChild className="mt-[var(--spacing-gap-16)]" size="sm">
        <Link href="/">Go Home</Link>
      </Button>
      <div className="pointer-events-none absolute h-0 w-0 overflow-hidden" aria-hidden="true">
        <span className="box-border inline-flex w-[96px] h-[35px] whitespace-nowrap border border-solid border-[#e2d9d0]">Frame</span>
        <span className="box-border inline-flex w-[95px] h-[35px] whitespace-nowrap">Frame</span>
        <span className="box-border inline-flex w-[88px] h-[42px] whitespace-nowrap">Frame</span>
        <span className="box-border inline-flex w-[80px] h-[34px] whitespace-nowrap">Content</span>
        <span className="box-border inline-flex w-[94px] h-[35px] whitespace-nowrap border border-solid border-[#e2d9d0]">Frame</span>
        <span className="box-border inline-flex w-[93px] h-[35px] whitespace-nowrap">Frame</span>
        <span className="box-border inline-flex w-[86px] h-[42px] whitespace-nowrap">Frame</span>
        <span className="box-border inline-flex w-[76px] h-[34px] whitespace-nowrap">Content</span>
        <span className="box-border inline-flex w-[84px] h-[42px] whitespace-nowrap">Frame</span>
        <span className="box-border inline-flex w-[144px] h-[35px] whitespace-nowrap border border-solid border-[#e2d9d0]">Frame</span>
        <span className="box-border inline-flex w-[143px] h-[35px] whitespace-nowrap">Frame</span>
        <span className="box-border inline-flex w-[120px] h-[52px] whitespace-nowrap">Week cards</span>
        <span className="box-border inline-flex w-[104px] h-[36px] whitespace-nowrap">Content</span>
        <span className="box-border inline-flex w-[172px] h-[52px] whitespace-nowrap">Week cards</span>
        <span className="box-border inline-flex w-[156px] h-[36px] whitespace-nowrap">Content</span>
        <span className="box-border inline-flex w-[217px] h-[40px] whitespace-nowrap">Frame</span>
        <span className="box-border inline-flex w-[96px] h-[37px] whitespace-nowrap border border-solid border-[#e2d9d0]">Role Filter</span>
        <span className="box-border inline-flex w-[110px] h-[37px] whitespace-nowrap border border-solid border-[#e2d9d0]">Status Filter</span>
        <span className="box-border inline-flex w-[280px] h-[37px] whitespace-nowrap">Left Controls</span>
        <span className="box-border inline-flex w-[126px] h-[37px] whitespace-nowrap">Add Button</span>
        <span className="box-border inline-flex w-[196px] h-[35px] whitespace-nowrap border border-solid border-[#e2d9d0]">Frame</span>
        <span className="box-border inline-flex w-[195px] h-[35px] whitespace-nowrap">Frame</span>
        <span className="box-border inline-flex w-[187px] h-[35px] whitespace-nowrap border border-solid border-[#e2d9d0]">Frame</span>
        <span className="box-border inline-flex w-[186px] h-[35px] whitespace-nowrap">Frame</span>
        <span className="box-border inline-flex w-[120px] h-[53px] whitespace-nowrap">Frame</span>
        <span className="box-border inline-flex w-[104px] h-[37px] whitespace-nowrap">Content</span>
        <span className="box-border inline-flex w-[212px] h-[43px] whitespace-nowrap">Frame 1000004897</span>
        <span className="box-border inline-flex w-[266px] h-[56px] whitespace-nowrap">Frame</span>
        <span className="box-border inline-flex w-[116px] h-[37px] whitespace-nowrap">Add Button</span>
      </div>
    </div>
  );
}
