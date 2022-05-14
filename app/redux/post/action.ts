import axios from "axios";
import { AppDispatch } from "..";
import { IPost } from "../types";
import { postSlice } from "./reducer";
export const getPosts = () => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get<IPost[]>("http://localhost:3050/post");
    dispatch(postSlice.actions.postsFetchingSuccess(response.data));
  } catch (error) {
    dispatch(postSlice.actions.postsFetchingErorr("ошибка"));
  }
};

export const getPost = (id: string | undefined) => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get<IPost>(`http://localhost:3050/post/${id}`);
    dispatch(postSlice.actions.postFetchingSuccess(response.data));
  } catch (error) {
    dispatch(postSlice.actions.postFetchingErorr("ошибка"));
  }
};
