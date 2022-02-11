import { Toast as VantToast } from "vant";

export type ToastType = "text" | "loading" | "success" | "fail";

export type ToastOptions = {
  type?: ToastType;
  message?: string | number;
  duration?: number;
  forbidClick?: boolean;
};

const XToast = (options: string | ToastOptions): any => {
  const instance = VantToast(options);
  const outInstance = instance;
  outInstance.clear = instance.clear;
  return outInstance;
};

XToast.loading = (message: string | ToastOptions): any => {
  return VantToast.loading(message);
};

XToast.success = (message: string | ToastOptions): any => {
  return VantToast.success(message);
};

XToast.fail = (message: string | ToastOptions): any => {
  return VantToast.fail(message);
};

XToast.clear = (): void => {
  return VantToast.clear();
};
export { XToast };
