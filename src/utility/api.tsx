import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { getCookie, setCookie } from "./cookieFunctions";

const api: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_HOST_API_URL || "http://localhost:5000", // your API base
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = getCookie("access_token");
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `${token}`,
      } as any;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = getCookie("refresh_token");
        if (refreshToken) {
          const res = await axios.post(
            `${
              process.env.NEXT_PUBLIC_HOST_API_URL || "http://localhost:5000"
            }/auth/refresh`,
            { refreshToken }
          );

          const newToken = res.data?.data?.generateToken;
          if (newToken) {
            setCookie("access_token", newToken, 7);
            originalRequest.headers.Authorization = `Bearer ${newToken}`;
            return api(originalRequest);
          }
        }
      } catch (err) {
        console.error("Refresh token failed ❌");
      }
    }
  }
);

export default api;
