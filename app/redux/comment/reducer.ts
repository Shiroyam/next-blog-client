import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IComment } from "../types";

interface IState {
  comment: any;
  commentId: any;
  error: string;
}

const initialState: IState = {
  comment: [],
  commentId: [],
  error: "",
};

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    commentFetchingSuccess(state: IState, action: PayloadAction<IComment[]>) {
      state.comment = action.payload.filter(
        (arr) => arr.user._id === localStorage.getItem("id")
      );
      state.error = "";
    },
    commentFetchingError(state: IState, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    commentIdFetchingSuccess(state: IState, action: PayloadAction<IComment[]>) {
      state.commentId = action.payload;
    },
    commentIdFetchingError(state: IState, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export default commentSlice.reducer;
