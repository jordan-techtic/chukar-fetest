import { AppShell } from "@/components/layout/AppShell";

export default function WorkspacePage() {
  return (
    <AppShell>
      <div className="max-w-2xl rounded-[var(--radius-12)] border border-border bg-card p-[var(--spacing-padding-24)] shadow-[var(--shadow-drop-shadow)]">
        <h1 className="text-heading-md-19">Workspace</h1>
        <p className="mt-[var(--spacing-gap-12)] text-body-sm-5 text-muted-foreground">
          You reached a protected route. Authenticated product screens will render here in
          upcoming tickets.
        </p>
      </div>
    </AppShell>
  );
}
