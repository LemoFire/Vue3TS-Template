import { extend } from "@/utils";
import type { AxiosInstance, AxiosRequestConfig } from "axios/index";

export const setRequestInterceptor = (instance: AxiosInstance) => {
  instance.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const ts: number = new Date().getTime();
      config.headers = extend({}, config.headers);
      sessionStorage.getItem("userToken") != null
        ? (config.headers["token"] = sessionStorage.getItem(
            "userToken"
          ) as string)
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
