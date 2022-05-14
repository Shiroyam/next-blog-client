import { createSlice } from "@reduxjs/toolkit";
interface IState {
  flagSearch: boolean;
}

const initialState: IState = {
  flagSearch: false,
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
    }
  }
})

export const { openSearch, closeSearch } = searchSlice.actions
export default searchSlice.reducer;
