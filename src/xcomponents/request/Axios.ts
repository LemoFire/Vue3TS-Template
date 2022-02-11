const TIME_OUT: number = 6000;

import { setRequestInterceptor } from "./interceptors/Request";
import { setResponseInterceptor } from "./interceptors/Response";
import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig } from "axios";
import { extend } from "@/utils";

export class RequestAxios {
  constructor(options: AxiosRequestConfig = {}) {
    this.instance = axios.create();
    this.defaultConfig = extend(this.defaultConfig, options);
    this.setInterceptors(this.instance);
  }

  public instance: AxiosInstance;
  private defaultConfig: AxiosRequestConfig = {
    // 默认配置
    timeout: TIME_OUT,
    headers: {
      //
    },
  };
  // 请求拦截
  private setInterceptors = (instance: AxiosInstance): void => {
    setRequestInterceptor(instance);
    setResponseInterceptor(instance);
  };

  request(options: AxiosRequestConfig) {
    return this.instance(options);
  }
}
