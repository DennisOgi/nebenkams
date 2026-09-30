/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_FORM_API_BASE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
