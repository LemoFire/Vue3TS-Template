import type { AxiosInstance } from "axios/index";

export const setResponseInterceptor = (instance: AxiosInstance) => {
  instance.interceptors.response.use(
    (response) => {
      if (response.headers.token) {
        sessionStorage.setItem("userToken", response.headers.token);
      }
      return response.data;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};
