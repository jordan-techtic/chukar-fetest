"use client";

import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { isAuthenticated } from "@/lib/auth/token-storage";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (!isAuthenticated()) {
      return;
    }

    const params = new URLSearchParams(window.location.search);
    const redirect = params.get("redirect") ?? "/calendar";
    router.replace(redirect);
  }, [router]);

  const passwordToggleLabel = showPassword ? "Hide password" : "Show password";

  return (
    <TooltipProvider delayDuration={200}>
      <Card className="rounded-[var(--radius-16)] border-[var(--color-border)] bg-[var(--color-secondary)] shadow-[var(--drop-shadow-3)]">
        <CardHeader className="gap-[var(--gap-10)] p-[var(--padding-24)]">
          <CardTitle className="type-heading-md-21 text-[var(--color-15)]">
            Sign In
          </CardTitle>
          <CardDescription className="type-body-sm-5 text-[var(--color-61)]">
            Enter your credentials to access the marketing calendar.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-[var(--gap-20)] p-[var(--padding-24)] pt-0">
          <form className="flex flex-col gap-[var(--gap-16)]">
            <div className="flex flex-col gap-[var(--gap-6)]">
              <Label htmlFor="email">Email or username</Label>
              <Input
                id="email"
                name="email_or_username"
                type="text"
                autoComplete="username"
                placeholder="you@company.com"
                className="h-[48px] rounded-[var(--radius-10)] border-[var(--color-border)] bg-[var(--color-100)] px-[var(--padding-14)] text-[var(--color-text-primary)] placeholder:text-[var(--color-13)] focus-visible:ring-[var(--color-accent)]"
              />
            </div>
            <div className="flex flex-col gap-[var(--gap-6)]">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  className="h-[48px] rounded-[var(--radius-10)] border-[var(--color-border)] bg-[var(--color-100)] px-[var(--padding-14)] pr-[var(--padding-40)] text-[var(--color-text-primary)] placeholder:text-[var(--color-13)] focus-visible:ring-[var(--color-accent)]"
                />
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-[var(--padding-4)] top-1/2 h-8 w-8 -translate-y-1/2 text-[var(--color-text-primary)] hover:bg-[var(--color-25)]"
                      aria-label={passwordToggleLabel}
                      aria-pressed={showPassword}
                      onClick={() => setShowPassword((visible) => !visible)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" aria-hidden="true" />
                      ) : (
                        <Eye className="h-4 w-4" aria-hidden="true" />
                      )}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>{passwordToggleLabel}</TooltipContent>
                </Tooltip>
              </div>
            </div>
            <p className="type-body-sm-39 text-right text-[var(--color-15)]">
              Forgot password? Recovery will be available in a future ticket.
            </p>
            <Button
              type="button"
              className="h-[48px] w-full rounded-[var(--radius-10)] border border-[var(--color-border)] bg-[var(--color-23)] type-body-sm-34 text-[var(--color-100)] shadow-none hover:bg-[var(--color-23)] hover:opacity-90"
            >
              Login
            </Button>
          </form>
          <p className="type-caption-10 text-center text-[var(--color-13)]">
            Login API wiring will be added in a future ticket.
          </p>
          <Button
            asChild
            variant="outline"
            className="h-[40px] w-full rounded-[var(--radius-10)] border-[var(--color-border)] bg-[var(--color-accent)] type-body-sm-11 text-[var(--color-100)] hover:bg-[var(--color-accent)]"
          >
            <Link href="/">Back to Home</Link>
          </Button>
        </CardContent>
      </Card>
    </TooltipProvider>
  );
}
