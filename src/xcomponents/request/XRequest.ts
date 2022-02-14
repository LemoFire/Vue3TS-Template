import { extend } from "@/utils";
import { RequestAxios } from "./Axios";
import { XToast } from "..";
import {
  DESC_401,
  DESC_TIMEOUT,
  DESC_NETWORK_ERROR,
  DESC_OTHER_ERROR,
} from "@/config/Description";

const DESC_LOADING = "请稍候...";

const baseRequest = new RequestAxios();
/* eslint-disable */
type params = {
  [key: string]: any;
};
/* eslint-enable */

import type { AxiosRequestConfig } from "axios/index";
type requestContentType = "application/json" | "x-www-form-urlencoded" | string;
type requestOptions = {
  useLoading?: boolean;
  contentType?: requestContentType;
};

const getDefaultOptions = (): requestOptions => {
  return { useLoading: true, contentType: "application/json" };
};

export const XRequest = {
  request: async (
    axiosConfig: AxiosRequestConfig = {},
    options: requestOptions = {}
  ) => {
    options.useLoading ? showLoading() : false;
    let isError = false;
    // eslint-disable-next-line
    let errorContainer: any = {};
    try {
      const res = await baseRequest.request(axiosConfig);
      return res;
    } catch (error) {
      isError = true;
      errorContainer = error;
    } finally {
      options.useLoading ? hideLoading() : false;
      if (isError) {
        showError(errorContainer);
      }
    }
  },
  get: async (
    url: string,
    params: params = {},
    options: requestOptions = {}
  ) => {
    options = extend(getDefaultOptions(), options);
    options.useLoading ? showLoading() : false;
    let isError = false;
    // eslint-disable-next-line
    let errorContainer: any = {};
    try {
      const res = await baseRequest.instance.get(url, { params });
      return res;
    } catch (error) {
      isError = true;
      errorContainer = error;
    } finally {
      options.useLoading ? hideLoading() : false;
      if (isError) {
        showError(errorContainer);
      }
    }
  },
  post: async (
    url: string,
    params: params = {},
    options: requestOptions = {}
  ) => {
    options.useLoading ? showLoading() : false;
    let isError = false;
    // eslint-disable-next-line
    let errorContainer: any = {};
    if (options.contentType === "x-www-form-urlencoded") {
      const uParams = new URLSearchParams();
      for (const key in params) {
        uParams.append(key, params[key]);
      }
      params = uParams;
    }
    try {
      const res = await baseRequest.instance.post(url, params, {
        headers: { "Content-Type": options.contentType as string },
      });
      return res;
    } catch (error) {
      isError = true;
      errorContainer = error;
    } finally {
      options.useLoading ? hideLoading() : false;
      if (isError) {
        showError(errorContainer);
      }
    }
  },
};

const showLoading = (): void => {
  XToast.loading({
    message: DESC_LOADING,
    duration: 0,
    forbidClick: true,
  });
};

const hideLoading = (): void => {
  XToast.clear();
};
/* eslint-disable */
const showError = (error: any): void => {
  const { message, response } = error;
  console.log(response);
  response
    ? () => {
        if (response.status === 401) {
          XToast.fail(DESC_401);
        } else {
          XToast.fail(response.statusText);
        }
      }
    : () => {
        if (message.indexOf("timeout") > -1) {
          XToast.fail(DESC_TIMEOUT);
        } else if (message.indexOf("Network Error") > -1) {
          XToast.fail(DESC_NETWORK_ERROR);
        } else {
          XToast.fail(DESC_OTHER_ERROR);
        }
      };
};
/* eslint-enable */
