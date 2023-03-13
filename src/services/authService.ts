import { IAuth, IAuthResponse } from "../types/auth.type";
import baseService from "./baseService";

const API_END_POINT = "";

const authService = {
  login: (body: IAuth) =>
    baseService.post<IAuthResponse>(`${API_END_POINT}login`, body),
};
export default authService;
