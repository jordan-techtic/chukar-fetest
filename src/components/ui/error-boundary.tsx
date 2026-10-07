"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    if (process.env.NODE_ENV === "development") {
      console.error(error, errorInfo);
    }
  }

  handleReset = (): void => {
    this.setState({ hasError: false });
  };

  render(): React.ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div
          role="alert"
          className="rounded-[var(--radius-8)] border border-[var(--color-error)] bg-[var(--color-secondary)] p-[var(--padding-16)]"
        >
          <h2 className="type-heading-md-21 text-[var(--color-15)]">
            Something went wrong
          </h2>
          <p className="mt-[var(--gap-8)] type-body-sm-5 text-[var(--color-61)]">
            An unexpected error occurred. Please try again.
          </p>
          <Button
            type="button"
            className="mt-[var(--gap-12)]"
            onClick={this.handleReset}
          >
            Try again
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}
