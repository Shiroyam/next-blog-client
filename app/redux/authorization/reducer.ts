import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserAuth } from "../types";

interface IState {
  user: IUserAuth;
  erorr: string;
  flagModal: boolean;
}

const initialState: IState = {
  user: {
    _id: "",
    fullName: "",
    email: "",
    password: "",
    token: "",
  },
  erorr: "",
  flagModal: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    openModalAuth(state: IState){
        state.flagModal = true;
    },
    closeModalAuth(state: IState){
        state.flagModal = false;
    },
    userFetchingSuccess(state: IState, action: PayloadAction<IUserAuth>) {
      state.user = action.payload;
      state.erorr = "";
    },
    userFetchingErorr(state: IState, action: PayloadAction<string>) {
      state.erorr = action.payload;
    },
  },
});

export const { openModalAuth, closeModalAuth } = authSlice.actions;
export default authSlice.reducer;