import {
  DATE_FORMAT,
  DATE_TIME_FORMAT,
  NOTIFICATION_MESSAGE,
  TOAST_OPTIONS,
} from "./Contant";
import dayjs from "dayjs";
import { toast } from "react-toastify";

export const isNotNullOrUndefined = <T>(data: T) => {
  return data !== null && data !== undefined;
};

export const formatDate = (date: Date | number) => {
  return date && dayjs(date).format(DATE_FORMAT);
};

export const formatDateTime = (date: Date | number) => {
  return date && dayjs(date).format(DATE_TIME_FORMAT);
};

export const showMessage = {
  success: (message: string = NOTIFICATION_MESSAGE.SUCCESS) =>
    toast.success(message, TOAST_OPTIONS),
  error: (message: string = NOTIFICATION_MESSAGE.ERROR) =>
    toast.error(message, TOAST_OPTIONS),
  infor: (message: string = NOTIFICATION_MESSAGE.INFO) =>
    toast.info(message, TOAST_OPTIONS),
  warning: (message: string = NOTIFICATION_MESSAGE.WARNING) =>
    toast.warning(message, TOAST_OPTIONS),
};

export const getNameByValue = <T = any>(
  array: Array<T>,
  key: keyof T,
  value: number | string,
  label: string
) => {
  const found = array.find((item) => item[key] === value);
  return found ? found[label] : null;
};
