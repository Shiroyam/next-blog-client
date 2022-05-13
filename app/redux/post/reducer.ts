import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPost } from "./../types";
interface IState {
  posts: IPost[];
  post: IPost;
  isLoading: boolean;
  error: string;
}

const initialState: IState = {
  posts: [],
  post: {
    id: 0,
    title: "",
    description: "",
    photoUrl: "",
    text: "",
    userId: 0,
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

// export const postsReducer = (state = initState, action: PostsAction) => {
//   switch (action.type) {
//     case "GET_POSTS":
//       return { posts: action.payload };
//     case "GET_POST":
//       return { post: action.payload};
//     default:
//       return state;
//   }
// };
