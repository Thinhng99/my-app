import { ToastOptions } from "react-toastify";

// REGEX
export const REGEX_EMAIL = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
export const REGEX_USERNAME = /^[a-z0-9]*$/;
export const REGEX_USERNAME_CORPORATE_AD_ACCOUNT = /^[a-z0-9\-.@_]*$/;
export const REGEX_USERNAME_COGNITO_ACCOUNT = /^[a-z0-9-@._]*$/;
export const REGEX_CODE = /^[a-zA-Z0-9\-_]*$/;
export const REGEX_PHONE_NUMBER = /^[0-9]*$/;
export const REGEX_FILE_SIZE = /^[0-9]*$/;
export const REGEX_PASSWORD =
  /^(?=.*[a-z]+)(?=.*\d+)(?=.*[A-Z]+)(?=.*[^\w]+)[ -~]+$/;
export const REGEX_URL = /^((http|https):\/\/)/;
export const REGEX_NOT_SPACE = /^\S*$/;
export const REGEX_MONTH_YEAR = /^((0?[1-9]|1[0-2])\/\d{4})$/gm;
export const REGEX_PASSWORD_TYPE = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/;
export const STATUS_API_ERROR = 0;
export const STATUS_UNKNOWN_ERROR = 5;
export const API_SUCCESS_STATUS = 200;
export const UNKNOWN_ERROR_MESSAGE = "Có lỗi hệ thống xảy ra!";

export const LOCAL_STORAGE = {
  AUTH_INFO: "userResult",
  ACCESS_TOKEN: "token",
};

export const NOTIFICATION_TYPE = {
  SUCCESS: "success",
  WARNING: "warning",
  ERROR: "error",
  INFO: "info",
};

export const NOTIFICATION_MESSAGE = {
  SUCCESS: "Thành công",
  WARNING: "Cảnh báo",
  ERROR: "Thất bại",
  INFO: "Thông tin",
};

export const TOAST_OPTIONS: ToastOptions = {
  theme: "colored",
  pauseOnFocusLoss: false,
  autoClose: 2000,
  toastId: 401,
};

export const DATE_FORMAT = "DD/MM/YYYY";
export const DATE_TIME_FORMAT = "DD/MM/YYYY : HH-mm";
