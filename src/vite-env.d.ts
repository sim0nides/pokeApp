/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APOLLO_URI: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
