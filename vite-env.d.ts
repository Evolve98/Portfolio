// /// <reference types="vite/client" /> 
// The above line was removed as it caused a "Cannot find type definition file for 'vite/client'" error.
// Manually defining types for import.meta.env as a fallback:

interface ImportMetaEnv {
  readonly BASE_URL: string;
  // You can add other Vite environment variables here if your application uses them
  // For example:
  // readonly MODE: string;
  // readonly DEV: boolean;
  // readonly PROD: boolean;
  // readonly VITE_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// If you need to use other Vite-specific features that were typed by vite/client,
// such as import.meta.hot, or types for assets (e.g. import logoUrl from './logo.svg?url'),
// you might need to add their type definitions here as well.
// For now, only the types for import.meta.env are defined to fix the reported errors.
