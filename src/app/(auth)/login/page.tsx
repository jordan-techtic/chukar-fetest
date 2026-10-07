import Link from "next/link";

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

export default function LoginPage() {
  return (
    <Card className="border-[var(--color-border)] bg-[var(--color-secondary)] shadow-[var(--drop-shadow-3)]">
      <CardHeader className="gap-[var(--gap-10)] p-[var(--padding-20)]">
        <CardTitle className="type-body-26 text-[var(--color-15)]">Sign In</CardTitle>
        <CardDescription className="type-body-sm-27 text-[var(--color-14)]">
          Enter your credentials to access the marketing calendar.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-[var(--gap-20)] p-[var(--padding-20)] pt-0">
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
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="Enter your password"
              className="h-[48px] rounded-[var(--radius-10)] border-[var(--color-border)] bg-[var(--color-100)] px-[var(--padding-14)] text-[var(--color-text-primary)] placeholder:text-[var(--color-13)] focus-visible:ring-[var(--color-accent)]"
            />
          </div>
          <div className="flex justify-end">
            <Link
              href="#"
              className="type-body-sm-39 text-[var(--color-15)] underline-offset-4 hover:underline"
            >
              Forgot password?
            </Link>
          </div>
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
  );
}
