import { AppShell } from "@/components/layout/AppShell";
import { HomePlaceholder } from "@/components/features/home/HomePlaceholder";
import { AuthGuard } from "@/lib/auth/auth-guard";

export default function HomePage() {
  return (
    <AuthGuard>
      <AppShell>
        <HomePlaceholder />
      </AppShell>
    </AuthGuard>
  );
}
