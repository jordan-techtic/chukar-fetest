"use client";

import { useState } from "react";

import { Header } from "@/components/layout/header";
import { MainSlot } from "@/components/layout/main-slot";
import { Sidebar } from "@/components/layout/sidebar";

interface AppShellProps {
  children: React.ReactNode;
  title?: string;
}

export function AppShell({ children, title }: AppShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-background)]">
      <Header
        title={title}
        sidebarOpen={sidebarOpen}
        onMenuClick={() => setSidebarOpen((open) => !open)}
      />
      <div className="flex min-h-0 flex-1">
        <Sidebar open={sidebarOpen} onNavigate={() => setSidebarOpen(false)} />
        <MainSlot>{children}</MainSlot>
      </div>
    </div>
  );
}
