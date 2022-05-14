import axios from "axios";
import { AppDispatch } from "..";
import { IComment } from "../types";
import { commentSlice } from "./reducer";

export const getComments = () => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get<IComment[]>(
      "http://localhost:3050/comment/"
    );
    dispatch(commentSlice.actions.commentFetchingSuccess(response.data));
  } catch (error: any) {
    dispatch(commentSlice.actions.commentFetchingError(error.message));
  }
};
