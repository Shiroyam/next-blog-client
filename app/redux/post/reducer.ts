import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPost } from "./../types";
interface IState {
  posts: any;
  post: IPost;
  isLoading: boolean;
  error: string;
}

const initialState: IState = {
  posts: [],
  post: {
    title: "",
    description: "",
    photoUrl: "",
    text: "",
    views: 0,
    createdAt: "",
    _Id: 0,
  },
  isLoading: false,
  error: "",
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    postsFetchingSuccess(state: IState, action: PayloadAction<IPost[]>) {
      state.error = "";
      state.posts = action.payload;
      state.isLoading = true;
    },
    postsFetchingErorr(state: IState, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    postFetchingSuccess(state: IState, action: PayloadAction<IPost>) {
      state.error = "";
      state.post = action.payload;
      state.isLoading = true;
    },
    postFetchingErorr(state: IState, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default postSlice.reducer;
