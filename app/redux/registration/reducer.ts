import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserReg } from "../types";

interface IState {
  user: IUserReg;
  erorr: string;
  flagModalReg: boolean;
}

const initialState: IState = {
  user: {
    _id: "",
    fullName: "",
    email: "",
    password: "",
  },
  erorr: "",
  flagModalReg: false,
};

export const registrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers:
  {
    openModalReg(state: IState){
        state.flagModalReg = true;
    },
    closeModalReg(state: IState){
        state.flagModalReg = false;
    },
   
    userFetchingSuccess(state: IState, action: PayloadAction<IUserReg>) {
      state.user = action.payload;
      state.erorr = "";
    },
    userFetchingErorr(state: IState, action: PayloadAction<string>) {
      state.erorr = action.payload;
    },
  },
});

export const { openModalReg, closeModalReg } = registrationSlice.actions

export default registrationSlice.reducer;
