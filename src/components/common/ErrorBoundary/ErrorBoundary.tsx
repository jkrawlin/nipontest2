import React from 'react';

interface ErrorBoundaryState { hasError: boolean; error?: Error }

export class ErrorBoundary extends React.Component<React.PropsWithChildren, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error('ErrorBoundary caught error', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-6 space-y-4">
          <h1 className="text-xl font-semibold text-red-700">Something went wrong.</h1>
          <pre className="text-xs bg-red-50 p-4 rounded">{this.state.error?.message}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}