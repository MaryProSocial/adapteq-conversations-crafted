/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CHAT_TENANT_ID: string;
  readonly VITE_CHAT_API_KEY: string;
  readonly VITE_CHAT_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
