import Link from "next/link";

type DevNavCta = {
  href: string;
  label: string;
  className: string;
};

const DEV_NAV_CTAS: DevNavCta[] = [
  { href: "/", label: "Frame", className: "box-border inline-flex items-center justify-center w-[144px] h-[35px] whitespace-nowrap border border-[#e2d9d0]" },
  { href: "/marketing-calendar/week", label: "Frame", className: "box-border inline-flex items-center justify-center w-[143px] h-[35px] whitespace-nowrap" },
  { href: "/week-calendar-default-1", label: "Week cards", className: "box-border inline-flex items-center justify-center w-[120px] h-[52px] whitespace-nowrap" },
  { href: "/marketing-calendar/week", label: "Content", className: "box-border inline-flex items-center justify-center w-[104px] h-[36px] whitespace-nowrap" },
  { href: "/week-calendar-default-2", label: "Week cards", className: "box-border inline-flex items-center justify-center w-[172px] h-[52px] whitespace-nowrap" },
  { href: "/week-calendar-historical-view", label: "Content", className: "box-border inline-flex items-center justify-center w-[156px] h-[36px] whitespace-nowrap" },
  { href: "/manage-holiday", label: "Frame", className: "box-border inline-flex items-center justify-center w-[88px] h-[42px] whitespace-nowrap" },
  { href: "/marketing-calendar/week", label: "Content", className: "box-border inline-flex items-center justify-center w-[80px] h-[34px] whitespace-nowrap" },
  { href: "/manage-holiday", label: "Frame", className: "box-border inline-flex items-center justify-center w-[217px] h-[40px] whitespace-nowrap" },
  { href: "/", label: "Left Controls", className: "box-border inline-flex items-center justify-center w-[280px] h-[37px] whitespace-nowrap" },
  { href: "/manage-holiday", label: "upload-btn", className: "box-border inline-flex items-center justify-center w-[126px] h-[37px] whitespace-nowrap border border-[#e2d9d0]" },
  { href: "/manage-holiday", label: "Add Button", className: "box-border inline-flex items-center justify-center w-[135px] h-[37px] whitespace-nowrap" },
  { href: "/", label: "Frame", className: "box-border inline-flex items-center justify-center w-[96px] h-[35px] whitespace-nowrap border border-[#e2d9d0]" },
  { href: "/marketing-calendar/week", label: "Frame", className: "box-border inline-flex items-center justify-center w-[95px] h-[35px] whitespace-nowrap" },
  { href: "/week-calendar-default-1", label: "Frame", className: "box-border inline-flex items-center justify-center w-[94px] h-[35px] whitespace-nowrap border border-[#e2d9d0]" },
  { href: "/week-calendar-historical-view", label: "Frame", className: "box-border inline-flex items-center justify-center w-[93px] h-[35px] whitespace-nowrap" },
  { href: "/manage-holiday", label: "Frame", className: "box-border inline-flex items-center justify-center w-[86px] h-[42px] whitespace-nowrap" },
  { href: "/marketing-calendar/week", label: "Content", className: "box-border inline-flex items-center justify-center w-[78px] h-[34px] whitespace-nowrap" },
  { href: "/", label: "Frame", className: "box-border inline-flex items-center justify-center w-[84px] h-[42px] whitespace-nowrap" },
  { href: "/week-calendar-default-2", label: "Content", className: "box-border inline-flex items-center justify-center w-[76px] h-[34px] whitespace-nowrap" },
  { href: "/manage-holiday", label: "Frame 1000004897", className: "box-border inline-flex items-center justify-center w-[212px] h-[43px] whitespace-nowrap" },
  { href: "/marketing-calendar/week", label: "Frame", className: "box-border inline-flex items-center justify-center w-[266px] h-[56px] whitespace-nowrap" },
  { href: "/", label: "Frame", className: "box-border inline-flex items-center justify-center w-[196px] h-[35px] whitespace-nowrap border border-[#e2d9d0]" },
  { href: "/week-calendar-default-1", label: "Frame", className: "box-border inline-flex items-center justify-center w-[195px] h-[35px] whitespace-nowrap" },
  { href: "/week-calendar-historical-view", label: "Frame", className: "box-border inline-flex items-center justify-center w-[187px] h-[35px] whitespace-nowrap border border-[#e2d9d0]" },
  { href: "/manage-holiday", label: "Frame", className: "box-border inline-flex items-center justify-center w-[186px] h-[35px] whitespace-nowrap" },
  { href: "/week-calendar-default-2", label: "Frame", className: "box-border inline-flex items-center justify-center w-[120px] h-[53px] whitespace-nowrap" },
  { href: "/marketing-calendar/week", label: "Content", className: "box-border inline-flex items-center justify-center w-[104px] h-[37px] whitespace-nowrap" },
];

export function NotFoundContent() {
  return (
    <div className="max-w-3xl rounded-[var(--radius-12)] border border-border bg-card p-[var(--spacing-padding-24)] shadow-[var(--shadow-drop-shadow)]">
      <h1 className="text-heading-md-19">Page Not Found</h1>
      <p className="mt-[var(--spacing-gap-12)] text-body-sm-5 text-muted-foreground">
        The page you requested does not exist. Use the links below to open a generated screen.
      </p>
      <nav className="mt-[var(--spacing-gap-16)] flex flex-wrap gap-2" aria-label="Development routes">
        {DEV_NAV_CTAS.map((cta) => (
          <Link
            key={`${cta.href}-${cta.label}-${cta.className}`}
            href={cta.href}
            className={`rounded-[6px] bg-background-tinted-faf3e8 px-2 text-sm font-medium text-text-body-231f20 hover:opacity-90 ${cta.className}`}
          >
            {cta.label}
          </Link>
        ))}
      </nav>
      <Link
        href="/"
        className="mt-[var(--spacing-gap-16)] inline-flex box-border items-center justify-center rounded-[6px] bg-brand-primary-a21d35 px-4 py-2 text-sm font-bold text-background-ffffff hover:opacity-90"
      >
        Go Home
      </Link>
    </div>
  );
}
