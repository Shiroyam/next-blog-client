import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface IState {
  flagSearch: boolean;
  value: string ;
}

const initialState: IState = {
  flagSearch: false,
  value: "",
};

export const searchSlice = createSlice({
  name:"search",
  initialState,
  reducers:{
    openSearch(state: IState){
      state.flagSearch = true;
    },
    closeSearch(state: IState){
      state.flagSearch = false;
    },
    setValue(state: IState, action: PayloadAction<string>){
      state.value = action.payload;
    }
  }
})

export const { openSearch, closeSearch, setValue } = searchSlice.actions
export default searchSlice.reducer;
