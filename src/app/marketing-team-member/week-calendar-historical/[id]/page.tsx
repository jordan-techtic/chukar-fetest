import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: PageProps) {
  await params;
  if (process.env.NODE_ENV === "production") {
    notFound();
  }
  return (
    <main
      data-figma-route-pending="true"
      data-figma-route="marketing-team-member/week-calendar-historical"
      className="flex min-h-screen flex-col items-center justify-center gap-2 p-6 text-center"
    >
      <h1 className="text-xl font-semibold">Week calendar historical</h1>
      <p className="text-sm text-muted-foreground">Not yet implemented.</p>
    </main>
  );
}
