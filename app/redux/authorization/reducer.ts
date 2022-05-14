import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserAuth } from "../types";

interface IState {
  user: IUserAuth;
  erorr: string;
}

const initialState: IState = {
  user: {
    fullName: "",
    email: "",
    password: "",
    access_token: "",
  },
  erorr: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userFetchingSuccess(state: IState, action: PayloadAction<IUserAuth>) {
      state.user = action.payload;
      state.erorr = "";
    },
    userFetchingErorr(state: IState, action: PayloadAction<string>) {
      state.erorr = action.payload;
    },
  },
});

export default authSlice.reducer;