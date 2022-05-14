import axios from "axios";
import { AppDispatch } from "..";
import { IUserReg } from "../types";
import { registrationSlice } from "./reducer";

export const postUser = (userData: IUserReg) => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.post<IUserReg>("http://localhost:3050/user", {
      fullName: userData.fullName,
      email: userData.email,
      password: userData.password,
    });
    dispatch(registrationSlice.actions.userFetchingSuccess(response.data));
  } catch (error: any) {
    dispatch(registrationSlice.actions.userFetchingErorr(error.message));
  }
};
