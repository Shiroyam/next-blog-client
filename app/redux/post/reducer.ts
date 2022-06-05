import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPost } from "./../types";
interface IState {
  posts: any;
  filterPosts: any;
  post: IPost;
  isLoading: boolean;
  error: string;
  total: number;
}

const initialState: IState = {
  posts: [],
  filterPosts: [],
  post: {
    title: "",
    description: "",
    photoUrl: "",
    text: "",
    views: 0,
    createdAt: "",
    _Id: 0,
    total: 0,
    items: {},
  },
  isLoading: false,
  error: "",
  total: 0,
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    postsFetchingSuccess(state: IState, action: PayloadAction<IPost>) {
      state.error = "";
      state.posts = action.payload.items;
      state.filterPosts = action.payload.items.filter((post: any) => post.user._id === localStorage.getItem("id"));
      state.total = action.payload.total;
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
