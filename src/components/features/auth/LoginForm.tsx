"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { loginRequest } from "@/lib/api/auth";
import { getApiErrorMessage } from "@/lib/api/get-api-error-message";
import { safeNextPath } from "@/lib/auth/public-paths";
import { setAccessToken, setRefreshToken } from "@/lib/auth/token-storage";

interface LoginFormProps {
  nextPath?: string;
}

export function LoginForm({ nextPath }: LoginFormProps) {
  const router = useRouter();
  const redirectTo = safeNextPath(nextPath);
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<{
    email_or_username?: string;
    password?: string;
  }>({});

  const canSubmit = Boolean(emailOrUsername.trim() && password) && !submitting;

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: { email_or_username?: string; password?: string } = {};
    if (!emailOrUsername.trim()) {
      nextErrors.email_or_username = "Email or username is required.";
    }
    if (!password) {
      nextErrors.password = "Password is required.";
    }
    setFieldErrors(nextErrors);
    if (nextErrors.email_or_username || nextErrors.password) {
      return;
    }

    setSubmitting(true);
    setFormError("");
    try {
      const response = await loginRequest({
        email_or_username: emailOrUsername,
        password,
      });
      const access = response.data?.access_token?.trim();
      if (!access) {
        throw new Error("Login succeeded but no access token was returned.");
      }
      setAccessToken(access, "api");
      const refresh = response.data?.refresh_token?.trim();
      if (refresh) {
        setRefreshToken(refresh);
      }
      toast.success(response.message || "Login successful");
      router.replace(redirectTo);
    } catch (error) {
      const message = getApiErrorMessage(error);
      setFormError(message);
      toast.error(message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="flex flex-col gap-[var(--spacing-gap-16)]" onSubmit={onSubmit} noValidate>
      <div className="flex flex-col gap-[var(--spacing-gap-6)]">
        <label
          htmlFor="email_or_username"
          className="font-onest text-[11px] font-[700] uppercase leading-[14px] text-[var(--color-text-primary)]"
        >
          Email or username
        </label>
        <Input
          id="email_or_username"
          name="email_or_username"
          type="text"
          autoComplete="username"
          value={emailOrUsername}
          onChange={(event) => setEmailOrUsername(event.target.value)}
          disabled={submitting}
          aria-invalid={Boolean(fieldErrors.email_or_username)}
          aria-describedby={
            fieldErrors.email_or_username ? "email_or_username-error" : undefined
          }
        />
        {fieldErrors.email_or_username ? (
          <p id="email_or_username-error" className="text-body-sm-5 text-[var(--color-error)]">
            {fieldErrors.email_or_username}
          </p>
        ) : null}
      </div>
      <div className="flex flex-col gap-[var(--spacing-gap-6)]">
        <label
          htmlFor="password"
          className="font-onest text-[11px] font-[700] uppercase leading-[14px] text-[var(--color-text-primary)]"
        >
          Password
        </label>
        <Input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          disabled={submitting}
          aria-invalid={Boolean(fieldErrors.password)}
          aria-describedby={fieldErrors.password ? "password-error" : undefined}
        />
        {fieldErrors.password ? (
          <p id="password-error" className="text-body-sm-5 text-[var(--color-error)]">
            {fieldErrors.password}
          </p>
        ) : null}
      </div>
      {formError ? (
        <p role="alert" className="text-body-sm-5 text-[var(--color-error)]">
          {formError}
        </p>
      ) : null}
      <Button
        type="submit"
        disabled={!canSubmit}
        className="w-full disabled:opacity-50"
        size="lg"
      >
        {submitting ? (
          <>
            <Spinner label="Signing in" />
            Signing in…
          </>
        ) : (
          "Log in"
        )}
      </Button>
    </form>
  );
}
