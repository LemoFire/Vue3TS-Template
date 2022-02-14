import { Toast as VantToast } from "vant";
import type { ComponentInstance } from "vant/lib/utils";

export type ToastType = "text" | "loading" | "success" | "fail";

export type ToastOptions = {
  type?: ToastType;
  message?: string | number;
  duration?: number;
  forbidClick?: boolean;
};

const XToast = (options: string | ToastOptions): ComponentInstance => {
  const instance = VantToast(options);
  const outInstance = instance;
  outInstance.clear = instance.clear;
  return outInstance;
};

XToast.loading = (message: string | ToastOptions): ComponentInstance => {
  return VantToast.loading(message);
};

XToast.success = (message: string | ToastOptions): ComponentInstance => {
  return VantToast.success(message);
};

XToast.fail = (message: string | ToastOptions): ComponentInstance => {
  return VantToast.fail(message);
};

XToast.clear = (): void => {
  return VantToast.clear();
};
export { XToast };
