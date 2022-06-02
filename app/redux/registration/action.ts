import axios from "axios";
import { AppDispatch } from "..";
import { IUserReg } from "../types";
import { registrationSlice } from "./reducer";

export const postUser = (userData: IUserReg) => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.post<IUserReg>("https://semyon-blog.herokuapp.com/auth/register", {
      fullName: userData.fullName,
      email: userData.email,
      password: userData.password,
    });
    dispatch(registrationSlice.actions.userFetchingSuccess(response.data));
  } catch (error: any) {
    dispatch(registrationSlice.actions.userFetchingErorr(error.message));
  }
};
