import axios from "axios";
import { AppDispatch } from "..";
import { IPost } from "../types";
import { postSlice } from "./reducer";

export const getPosts = (page?: number, text?: string) => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get<IPost>(`https://semyon-blog.herokuapp.com/posts?limit=4&page=${page}&query=${text}`);
    dispatch(postSlice.actions.postsFetchingSuccess(response.data));
  } catch (error) {
    dispatch(postSlice.actions.postsFetchingErorr("ошибка"));
  }
};

export const getPost =
  (id: string | undefined) => async (dispatch: AppDispatch) => {
    try {
      const response = await axios.get<IPost>(
        `https://semyon-blog.herokuapp.com/posts/${id}`
      );
      dispatch(postSlice.actions.postFetchingSuccess(response.data));
    } catch (error) {
      dispatch(postSlice.actions.postFetchingErorr("ошибка"));
    }
  };

export const createPost = (postData: IPost) => async () => {
  try {
    await axios.post(
      "https://semyon-blog.herokuapp.com/posts",
      {
        title: postData.title,
        text: postData.text,
        description: postData.description,
        photoUrl: postData.photoUrl,
      },
      {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};
