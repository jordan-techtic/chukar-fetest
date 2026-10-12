"use client";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { AppShell } from "@/components/layout/AppShell";
import { HomePlaceholder } from "@/components/features/home/HomePlaceholder";
import { NotFoundContent } from "@/components/NotFoundContent";
import { ProtectedLayout } from "@/lib/auth/ProtectedLayout";

function ProtectedPlaceholder() {
  return (
    <div className="rounded-[var(--radius-12)] border border-border bg-card p-[var(--spacing-padding-24)]">
      <h1 className="text-heading-md-21">Protected Area</h1>
      <p className="mt-[var(--spacing-gap-12)] text-body-sm-5 text-muted-foreground">
        Authenticated routes will render here after login is implemented.
      </p>
    </div>
  );
}

export function RootRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AppShell>
              <HomePlaceholder />
            </AppShell>
          }
        />
        <Route
          path="/workspace"
          element={
            <AppShell>
              <ProtectedLayout>
                <ProtectedPlaceholder />
              </ProtectedLayout>
            </AppShell>
          }
        />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route
          path="*"
          element={
            <AppShell>
              <NotFoundContent />
            </AppShell>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
