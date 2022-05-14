import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../types"

interface IState {
    user: IUser;
    erorr: string;
}

const initialState: IState = {
    user: {
        id: 0,
        fullName: "",
        email: "",
        password: "",
    },
    erorr: "",
}

export const registrationSlice = createSlice({
    name:"registration",
    initialState,
    reducers:{
        userFetchingSuccess(state: IState, action: PayloadAction<IUser>){
            state.user = action.payload;
            state.erorr = "";
        },
        userFetchingErorr(state: IState, action: PayloadAction<string>){
            state.erorr = action.payload;
        }
    }
})