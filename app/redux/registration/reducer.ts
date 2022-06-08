import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserReg } from "../types";

interface IState {
  user: IUserReg;
  erorr: string;
}

const initialState: IState = {
  user: {
    _id: "",
    fullName: "",
    email: "",
    password: "",
  },
  erorr: "",
};

export const registrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    userFetchingSuccess(state: IState, action: PayloadAction<IUserReg>) {
      state.user = action.payload;
      state.erorr = "";
    },
    userFetchingErorr(state: IState, action: PayloadAction<string>) {
      state.erorr = action.payload;
    },
  },
});

export default registrationSlice.reducer;
