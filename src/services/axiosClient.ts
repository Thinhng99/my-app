import axios, {
  ResponseType,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig
} from "axios";
import { path } from "../router/path";
import { getAccessToken } from "../utils/Auth";
import { showMessage } from "../utils/helper";

const interceptAuth = (
  contentType: string = "application/json",
  responseType: ResponseType = "json"
): AxiosInstance => {
  const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      "Accept-Language": "en-US",
      "Content-Type": contentType,
    },
    responseType,
  });
  instance.interceptors.request.use((cf: InternalAxiosRequestConfig) => {
    const token = getAccessToken();
    if (token && cf?.headers) {
      cf.headers["Authorization"] = "Bearer " + token;
    }
    return cf;
  });
  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      // Do something with response data
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        showMessage.error("Phiên bản đăng nhập hết hạn!");
        localStorage.clear();
        window.location.href = `#${path.login}`;
      }
      if (error.response.status === 403) {
        showMessage.error("Người dùng không có quyền truy cập chức năng này");
      }
      // Do something with response error
      return Promise.reject(error);
    }
  );
  return instance;
};

export default interceptAuth;
