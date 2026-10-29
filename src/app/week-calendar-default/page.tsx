"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/marketing-team-member-week-calendar-default");
  }, [router]);

  return <div className="w-full flex flex-col" aria-busy="true" />;
}
