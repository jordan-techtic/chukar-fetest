interface AuthLayoutProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--color-background)] p-[var(--padding-16)]">
      <div className="w-full max-w-[400px]">{children}</div>
    </div>
  );
}
