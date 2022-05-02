const isEnv: any = process.env.NEXT_PUBLIC_STATUS_PROJECT;
const projectStatus: any = process.env.NODE_ENV;
const URL_ENDPOINTS = isEnv === "production" ? "" : "";

const Constants = {
  API_ENDPOINT: `${URL_ENDPOINTS}/api/TracePlatform`,
  SCREEN_SIZE: {
    SSS: 320,
    SS: 600,
    XS: 769,
    SM: 1080,
    MD: 1440,
    LG: 1920,
  },
};
export default Constants;
