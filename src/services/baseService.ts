import { Response } from "../types/common.type";
import interceptAuth from "./axiosClient";
import queryString from "query-string";
import { showMessage } from "utils/helper";
import { API_SUCCESS_STATUS } from "utils/Contant";

const instance = interceptAuth();

const baseService = {
  get: async <T = any>(
    url: string = "",
    params?: Record<string, any>
  ): Promise<Response<T>> => {
    if (params) {
      url += "?" + queryString.stringify(params);
    }
    try {
      const { data } = await instance.get<Response<T>>(url);
      return data;
    } catch (error: any) {
      const { message } = error.response.data;
      showMessage.error(message);
      throw new Error(message);
    }
  },
  post: async <R = any, T = any>(
    url: string = "",
    body?: T,
    params?: Record<string, any>
  ): Promise<Response<R>> => {
    if (params) {
      url += "?" + queryString.stringify(params);
    }
    try {
      const { data } = await instance.post<Response<R>>(url, body);
      return data;
    } catch (error: any) {
      const { message } = error.response.data;
      showMessage.error(message);
      throw new Error(message);
    }
  },
  put: async <R = any, T = any>(
    url: string = "",
    body?: T,
    params?: Record<string, any>
  ): Promise<Response<R>> => {
    if (params) {
      url += "?" + queryString.stringify(params);
    }
    try {
      const { data } = await instance.put<Response<R>>(url, body);
      const { message, status } = data;
      if (status === API_SUCCESS_STATUS) {
        showMessage.success(message);
      }
      return data;
    } catch (error: any) {
      const { message } = error.response.data;
      showMessage.error(message);
      throw new Error(message);
    }
  },
  delete: async <T = null>(
    url: string = "",
    params?: Record<string, any>
  ): Promise<Response<T>> => {
    if (params) {
      url += "?" + queryString.stringify(params);
    }
    try {
      const { data } = await instance.delete<Response<T>>(url);
      const { message, status } = data;
      if (status === API_SUCCESS_STATUS) {
        showMessage.success(message);
      }
      return data;
    } catch (error: any) {
      const { message } = error.response.data;
      showMessage.error(message);
      throw new Error(message);
    }
  },
};

export default baseService;
