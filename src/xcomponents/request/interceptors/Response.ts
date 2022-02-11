import type { AxiosInstance } from "axios";

export const setResponseInterceptor = (instance: AxiosInstance) => {
  instance.interceptors.response.use(
    (response) => {
      if (response.headers.token) {
        sessionStorage.setItem("userToken", response.headers.token);
      }
      return response.data;
    },
    (error: any) => {
      return Promise.reject(error);
    }
  );
};
