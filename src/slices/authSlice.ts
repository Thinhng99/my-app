import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import authService from "../services/authService";
import { IAuth, IAuthResponse } from "../types/auth.type";
import { Response } from "../types/common.type";
import { LOCAL_STORAGE } from "../utils/Contant";
import { showMessage } from "../utils/helper";

interface AuthState {
  isLoading: boolean;
}

const initialState: AuthState = {
  isLoading: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(
        loginThunk.fulfilled,
        (state, action: PayloadAction<Response<IAuthResponse>>) => {
          const { data, message } = action.payload;
          showMessage.success(message);
          localStorage.setItem(
            LOCAL_STORAGE.ACCESS_TOKEN,
            JSON.stringify(data.token)
          );
          localStorage.setItem(LOCAL_STORAGE.AUTH_INFO, JSON.stringify(data));
          state.isLoading = false;
        }
      );
  },
});
export const loginThunk = createAsyncThunk("login", async (params: IAuth) => {
  const response = await authService.login(params);
  return response;
});
const { reducer: authReducer } = authSlice;
export default authReducer;
