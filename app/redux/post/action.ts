import axios from "axios";
import { Dispatch } from "react";
import { AnyAction } from "redux";

export const getPosts = () => async (dispatch: Dispatch<AnyAction>) => {
  try {
    const response = await axios.get("http://localhost:3050/post");
    dispatch({
      type: "GET_POST",
      payload: response.data,
    });
  } catch (error) {
    alert(error);
  }
};
