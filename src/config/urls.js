const Login_URL = "http://localhost:8081";
const BASE_URL = "http://localhost:9090";

export const API_URLS = {
  LOGIN: `${Login_URL}/api/auth/login`,
  LOGOUT: `${Login_URL}/api/auth/logout`,
  CREATE_SHIPPING: `${BASE_URL}/blapi/shipping/create`,
};
