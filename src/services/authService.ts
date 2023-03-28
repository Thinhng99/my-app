import { IAuth, IAuthResponse } from "../types/auth.type";
import baseService from "./baseService";

const API_END_POINT = "/auth/";

const authService = {
  login: (body: IAuth) =>
    baseService.post<IAuthResponse>(`${API_END_POINT}login`, body),
  signup: (body: IAuth) =>
    baseService.post<IAuthResponse>(`${API_END_POINT}register`, body),
};
export default authService;
