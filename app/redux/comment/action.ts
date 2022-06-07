import axios from "axios";
import { AppDispatch } from "..";
import { IComment } from "../types";
import { commentSlice } from "./reducer";

export const getComments = () => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get<IComment>(
      "https://semyon-blog.herokuapp.com/comments"
    );
    dispatch(commentSlice.actions.commentFetchingSuccess(response.data.items));
  } catch (error: any) {
    dispatch(commentSlice.actions.commentFetchingError(error.message));
  }
};

export const getCommentsPost = (id: string | undefined) => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get<IComment[]>(
      `https://semyon-blog.herokuapp.com/comments/post/${id}`
    );
    dispatch(commentSlice.actions.commentIdFetchingSuccess(response.data));
  } catch (error: any) {
    dispatch(commentSlice.actions.commentIdFetchingError(error.message));
  }
};
