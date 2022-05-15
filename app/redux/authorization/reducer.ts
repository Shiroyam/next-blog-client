import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserAuth } from "../types";

interface IState {
  user: IUserAuth;
  erorr: string;
  flagModal: boolean;
}

const initialState: IState = {
  user: {
    fullName: "",
    email: "",
    password: "",
    access_token: "",
  },
  erorr: "",
  flagModal: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    openModal(state: IState){
        state.flagModal = true;
    },
    closeModal(state: IState){
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

export const { closeModal, openModal } = authSlice.actions;
export default authSlice.reducer;