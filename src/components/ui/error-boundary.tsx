"use client";

import React, { type ErrorInfo, type ReactNode } from "react";

import { ErrorState } from "@/components/ui/error-state";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

const BOUNDARY_USER_MESSAGE =
  "Something went wrong while loading this page. Please try again.";

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error("ErrorBoundary caught:", error, info);
  }

  private handleRetry = (): void => {
    this.setState({ hasError: false });
  };

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <ErrorState
          message={BOUNDARY_USER_MESSAGE}
          onRetry={this.handleRetry}
          retryLabel="Retry"
        />
      );
    }
    return this.props.children;
  }
}
