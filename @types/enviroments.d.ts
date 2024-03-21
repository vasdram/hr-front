declare namespace NodeJS {
  interface ProcessEnv {
    BASE_API: string;
    BASE_API_EXTERNAL: string;
    PROJECT_NAME: 'banzai';
    DEPLOY_ENV: 'development' | 'production' | 'preproduction' | 'staging';
  }
}
