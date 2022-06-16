import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
   page: number
  }

const initialState: IState = {
    page: 0
}

export const poginationSlice = createSlice({
    name:"pogination",
    initialState,
    reducers:{
        pageNumber(state: IState, action: PayloadAction<number>){
            state.page = action.payload
        }
    }
})

export const { pageNumber } = poginationSlice.actions
export default poginationSlice.reducer

