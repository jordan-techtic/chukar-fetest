"use client";

import React, { type ErrorInfo, type ReactNode } from "react";

import { Button } from "@/components/ui/button";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  message: string;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { hasError: false, message: "" };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      message: error.message || "Something went wrong.",
    };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error("ErrorBoundary caught:", error, info);
  }

  private handleRetry = (): void => {
    this.setState({ hasError: false, message: "" });
  };

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div
          role="alert"
          className="mx-auto flex max-w-lg flex-col gap-4 rounded-[var(--radius-12)] border border-[var(--color-error)] bg-card p-6 shadow-[var(--shadow-drop-shadow)]"
        >
          <h1 className="text-heading-md-21">Something went wrong</h1>
          <p className="text-body-sm-5 text-muted-foreground">
            {this.state.message}
          </p>
          <Button type="button" variant="outline" onClick={this.handleRetry}>
            Try Again
          </Button>
        </div>
      );
    }
    return this.props.children;
  }
}
