import axios from "axios";
import { AppDispatch } from "..";
import { IUserAuth } from "../types";
import { authSlice } from "./reducer";

export const postUser =
  (userData: IUserAuth) => async (dispatch: AppDispatch) => {
    try {
      const response = await axios.post<IUserAuth>(
        "https://semyon-blog.herokuapp.com/auth/login",
        {
          password: userData.password,
          email: userData.email,
        }
      );
      const { token, _id, fullName } = response.data;
      localStorage.setItem("id", _id)
      localStorage.setItem("token", token);
      localStorage.setItem("name", fullName);
      dispatch(authSlice.actions.userFetchingSuccess(response.data));
    } catch (error: any) {
        dispatch(authSlice.actions.userFetchingErorr(error.message))
    }
  };
