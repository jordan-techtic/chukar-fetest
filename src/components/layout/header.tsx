"use client";

import { LogOut, Menu, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSyncExternalStore } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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
    <DropdownMenu>
      <Tooltip>
        <TooltipTrigger asChild>
          <DropdownMenuTrigger asChild>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="rounded-full"
              aria-label="Open account menu"
            >
              <User className="h-5 w-5" aria-hidden="true" />
            </Button>
          </DropdownMenuTrigger>
        </TooltipTrigger>
        <TooltipContent>Open account menu</TooltipContent>
      </Tooltip>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onSelect={handleSignOut}>
          <LogOut className="h-4 w-4" aria-hidden="true" />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function Header({
  title = "Marketing Content Calendar",
  onMenuClick,
  sidebarOpen = false,
  className,
}: HeaderProps) {
  return (
    <TooltipProvider delayDuration={200}>
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
    </TooltipProvider>
  );
}
