import { createSlice } from "@reduxjs/toolkit";

interface IState {
    flagToggle: boolean;
  }
  
  const initialState: IState = {
    flagToggle: true,
  };

export const profileSlice = createSlice({
    name:"profile",
    initialState,
    reducers:{
        openPost(state: IState){
            state.flagToggle = true;
        },
        openComments(state: IState){
            state.flagToggle = false;
        }
    }
})

export const { openPost, openComments } = profileSlice.actions
export default profileSlice.reducer;