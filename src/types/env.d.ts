declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_GOOGLE_API_KEY: string;
      NEXT_PUBLIC_SHEET_ID: string;
    }
  }
}

export {}; 