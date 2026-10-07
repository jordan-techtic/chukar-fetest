"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { LogOut, Menu, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSyncExternalStore } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";
import { clearTokens, isAuthenticated } from "@/lib/auth/token-storage";

interface HeaderProps {
  title?: string;
  onMenuClick?: () => void;
  sidebarOpen?: boolean;
  className?: string;
}

function AccountMenu() {
  const router = useRouter();
  const signedIn = useSyncExternalStore(
    () => () => {},
    () => isAuthenticated(),
    () => false,
  );

  if (!signedIn) {
    return null;
  }

  const handleSignOut = () => {
    clearTokens();
    router.replace("/login");
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="rounded-full"
          aria-label="Open account menu"
        >
          <User className="h-5 w-5" aria-hidden="true" />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={8}
          className="z-50 min-w-[180px] rounded-[var(--radius-8)] border border-[var(--color-border)] bg-[var(--color-secondary)] p-[var(--padding-4)] shadow-[var(--drop-shadow-2)]"
        >
          <DropdownMenu.Item
            className="flex cursor-pointer select-none items-center gap-[var(--gap-8)] rounded-[var(--radius-6)] px-[var(--padding-12)] py-[var(--padding-10)] type-body-sm-5 text-[var(--color-text-secondary)] outline-none focus:bg-[var(--color-accent)]"
            onSelect={handleSignOut}
          >
            <LogOut className="h-4 w-4" aria-hidden="true" />
            Sign out
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export function Header({
  title = "Marketing Content Calendar",
  onMenuClick,
  sidebarOpen = false,
  className,
}: HeaderProps) {
  return (
    <header
      className={cn(
        "flex h-16 shrink-0 items-center justify-between border-b border-[var(--color-border)] bg-[var(--color-secondary)] px-[var(--padding-16)] shadow-[var(--drop-shadow-2)]",
        className,
      )}
    >
      <div className="flex items-center gap-[var(--gap-8)]">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Open navigation"
          aria-expanded={sidebarOpen}
          onClick={onMenuClick}
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </Button>
        <h1 className="type-heading-md-21 text-[var(--color-15)]">{title}</h1>
      </div>
      <AccountMenu />
    </header>
  );
}
