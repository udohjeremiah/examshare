declare namespace NodeJS {
  interface ProcessEnv {
    MONGODB_URI: string;
    MONGODB_DATABASE: string;
    MONGODB_COLLECTION_ANSWERS: string;
    PROJECT_DOMAIN: string;
    NEXT_PUBLIC_PROJECT_DOMAIN: string;
    NODEMAILER_EMAIL: string;
    NODEMAILER_PASSWORD: string;
    NEXT_PUBLIC_PROJECT_EMAIL: string;
    PROJECT_EMAIL_PASSWORD: string;
    NEXTAUTH_URL: string;
    NEXTAUTH_SECRET: string;
  }
}
