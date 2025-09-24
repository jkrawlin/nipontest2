/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_NAME: string;
  readonly VITE_APP_VERSION: string;
  readonly VITE_APP_ENV: string;
  readonly VITE_ENABLE_DEBUG?: string;
  readonly VITE_DEFAULT_CURRENCY?: string;
  readonly VITE_DEFAULT_TIMEZONE?: string;
  readonly VITE_WORKING_DAYS_PER_MONTH?: string;
  readonly VITE_OVERTIME_MULTIPLIER?: string;
  readonly VITE_SESSION_TIMEOUT_MINUTES?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}