/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_CTP_REGION: string;
  readonly VITE_CTP_PROJECT_KEY: string;
  readonly VITE_CTP_CLIENT_ID: string;
  readonly VITE_CTP_CLIENT_SECRET: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
