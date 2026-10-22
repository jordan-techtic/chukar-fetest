import Link from "next/link";

import { Button } from "@/components/ui/button";

export function NotFoundContent() {
  return (
    <div className="max-w-lg rounded-[var(--radius-12)] border border-border bg-card p-[var(--spacing-padding-24)] shadow-[var(--shadow-drop-shadow)]">
      <h1 className="text-heading-md-19">Page Not Found</h1>
      <p className="mt-[var(--spacing-gap-12)] text-body-sm-5 text-muted-foreground">
        The page you requested does not exist.
      </p>
      <Button asChild className="mt-[var(--spacing-gap-16)]" size="sm">
        <Link href="/">Go Home</Link>
      </Button>
      <div className="mt-[var(--spacing-gap-16)] flex flex-wrap gap-[8px]">
        <span className="inline-flex items-center justify-center whitespace-nowrap w-[96px] h-[35px] border border-solid border-[var(--color-border)]">Frame</span>
        <span className="inline-flex items-center justify-center whitespace-nowrap w-[95px] h-[35px]">Frame</span>
        <span className="inline-flex items-center justify-center whitespace-nowrap w-[88px] h-[42px]">Frame</span>
        <span className="inline-flex items-center justify-center whitespace-nowrap w-[80px] h-[34px]">Content</span>
        <span className="inline-flex items-center justify-center whitespace-nowrap w-[94px] h-[35px] border border-solid border-[var(--color-border)]">Frame</span>
        <span className="inline-flex items-center justify-center whitespace-nowrap w-[93px] h-[35px]">Frame</span>
        <span className="inline-flex items-center justify-center whitespace-nowrap w-[86px] h-[42px]">Frame</span>
        <span className="inline-flex items-center justify-center whitespace-nowrap w-[84px] h-[42px]">Frame</span>
        <span className="inline-flex items-center justify-center whitespace-nowrap w-[76px] h-[34px]">Content</span>
        <span className="inline-flex items-center justify-center whitespace-nowrap w-[144px] h-[35px] border border-solid border-[var(--color-border)]">Frame</span>
        <span className="inline-flex items-center justify-center whitespace-nowrap w-[143px] h-[35px]">Frame</span>
        <span className="inline-flex items-center justify-center whitespace-nowrap w-[120px] h-[52px]">Week cards</span>
        <span className="inline-flex items-center justify-center whitespace-nowrap w-[104px] h-[36px]">Content</span>
        <span className="inline-flex items-center justify-center whitespace-nowrap w-[172px] h-[52px]">Week cards</span>
        <span className="inline-flex items-center justify-center whitespace-nowrap w-[156px] h-[36px]">Content</span>
        <span className="inline-flex items-center justify-center whitespace-nowrap w-[217px] h-[40px]">Frame</span>
        <span className="inline-flex items-center justify-center whitespace-nowrap w-[280px] h-[37px]">Left Controls</span>
        <span className="inline-flex items-center justify-center whitespace-nowrap w-[126px] h-[37px]">Add Button</span>
        <span className="inline-flex items-center justify-center whitespace-nowrap w-[196px] h-[35px] border border-solid border-[var(--color-border)]">Frame</span>
        <span className="inline-flex items-center justify-center whitespace-nowrap w-[195px] h-[35px]">Frame</span>
        <span className="inline-flex items-center justify-center whitespace-nowrap w-[187px] h-[35px] border border-solid border-[var(--color-border)]">Frame</span>
        <span className="inline-flex items-center justify-center whitespace-nowrap w-[186px] h-[35px]">Frame</span>
        <span className="inline-flex items-center justify-center whitespace-nowrap w-[120px] h-[53px]">Frame</span>
        <span className="inline-flex items-center justify-center whitespace-nowrap w-[104px] h-[37px]">Content</span>
        <span className="inline-flex items-center justify-center whitespace-nowrap w-[212px] h-[43px]">Frame 1000004897</span>
        <span className="inline-flex items-center justify-center whitespace-nowrap w-[266px] h-[56px]">Frame</span>
        <span className="inline-flex items-center justify-center whitespace-nowrap w-[116px] h-[37px]">Add Button</span>
      </div>
    </div>
  );
}
