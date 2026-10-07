interface AuthLayoutProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="figma-gradient-shell relative min-h-screen">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{ backgroundImage: "var(--gradient)" }}
      />
      <div className="relative grid min-h-screen lg:grid-cols-2">
        <aside className="hidden flex-col justify-center gap-[var(--gap-24)] border-r border-[var(--color-border)] bg-[var(--color-16)] p-[var(--padding-24)] lg:flex">
          <div className="space-y-[var(--gap-12)]">
            <h2 className="type-heading-lg-31 text-[var(--color-15)]">
              Marketing Content Calendar
            </h2>
            <p className="type-body-sm-27 max-w-md text-[var(--color-14)]">
              Plan, schedule, and track marketing activities across your annual calendar.
            </p>
          </div>
          <p className="type-body-sm-29 text-[var(--color-13)]">
            Authorized marketing team members only.
          </p>
        </aside>
        <div className="flex items-center justify-center p-[var(--padding-16)]">
          <div className="w-full max-w-[400px]">{children}</div>
        </div>
      </div>
    </div>
  );
}
