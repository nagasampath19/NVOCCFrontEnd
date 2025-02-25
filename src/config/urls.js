const Login_URL = "http://localhost:8081";
const BASE_URL = "http://localhost:9090";

export const API_URLS = {
  LOGIN: `${Login_URL}/api/auth/login`,
  LOGOUT: `${Login_URL}/api/auth/logout`,
  CREATE_SHIPPER: `${BASE_URL}/blapi/Shipper/create`,
  CREATE_CONSIGNEE: `${BASE_URL}/blapi/Consignee/create`,
  VALIDATE_TOKEN: `${Login_URL}/api/auth/validate`,
  BASE_URL: `${BASE_URL}`,
  SETUSERID: `${BASE_URL}/blapi/Shipper/setuser`
};
