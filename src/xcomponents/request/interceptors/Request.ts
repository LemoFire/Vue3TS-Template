import type { AxiosInstance } from "axios/index";

export const setRequestInterceptor = (instance: AxiosInstance) => {
  instance.interceptors.request.use(
    (config: any) => {
      const ts: number = new Date().getTime();
      sessionStorage.getItem("userToken") != null
        ? (config.headers["token"] = sessionStorage.getItem("userToken"))
        : false;
      if (!config.params) config.params = {};
      config.params.ts = ts;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};
