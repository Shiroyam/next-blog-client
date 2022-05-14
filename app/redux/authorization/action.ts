import axios from "axios";
import { AppDispatch } from "..";
import { IUserAuth } from "../types";
import { authSlice } from "./reducer";

export const postUser =
  (userData: IUserAuth) => async (dispatch: AppDispatch) => {
    try {
      const response = await axios.post<IUserAuth>(
        "http://localhost:3050/auth/login",
        {
          password: userData.password,
          email: userData.email,
        }
      );
      const { access_token } = response.data;
      localStorage.setItem("token", access_token);
      dispatch(authSlice.actions.userFetchingSuccess(response.data));
    } catch (error: any) {
        dispatch(authSlice.actions.userFetchingErorr(error.message))
    }
  };
