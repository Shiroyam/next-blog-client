import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IComment } from "../types";

interface IState {
  comment: any;
  error: string;
}

const initialState: IState = {
  comment: [],
  error: "",
};

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    commentFetchingSuccess(state: IState, action: PayloadAction<IComment[]>) {
      state.comment = action.payload;
      state.error = "";
    },
    commentFetchingError(state: IState, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export default commentSlice.reducer;
