/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CLS_LIVING_LOGO_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
