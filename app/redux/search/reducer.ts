import { createSlice } from "@reduxjs/toolkit";

interface SearchAction {
  type: string;
  payload: string;
}

interface SearchState {
  flagSearch: boolean;
}

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

// export const searchReducer = (
//   state = initialState,
//   action: SearchAction
// ): SearchState => {
//   switch (action.type) {
//     case "OPEN_SEARCH":
//       return { ...state, flagSearch: true };
//     case "CLOSE_SEARCH":
//       return { ...state, flagSearch: false };
//     default:
//       return state;
//   }
// };
