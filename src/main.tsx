import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './styles/globals.css';
import App from './App';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1
    }
  }
});

if (import.meta.env.VITE_ENABLE_DEBUG === 'true' && typeof window !== 'undefined') {
  window.addEventListener('error', (e) => {
    // eslint-disable-next-line no-console
    console.error('GlobalError:', e.error || e.message);
  });
  window.addEventListener('unhandledrejection', (e) => {
    // eslint-disable-next-line no-console
    console.error('UnhandledRejection:', e.reason);
  });
}

const rootEl = document.getElementById('root');
if (rootEl) {
  rootEl.dataset.react = 'mounting';
}

ReactDOM.createRoot(rootEl as HTMLElement).render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
  <App />
      </BrowserRouter>
    </QueryClientProvider>
);

if (rootEl) {
  queueMicrotask(() => {
    rootEl.dataset.react = 'mounted';
    const fb = document.getElementById('app-fallback');
    if (fb) fb.remove();
  });
}