import { FC } from "react";
import React from "react";
import Pagination from "@mui/material/Pagination";
import s from "./pogination.module.scss";
import { useTypesSelector } from "../../hooks/useTypeSelector";
import { useDispatch } from "react-redux";
import { getPosts } from "../../redux/post/action";

export const Pogination: FC = () => {
    const dispatch = useDispatch();
    const {total} = useTypesSelector(state => state.postReducer)
    const page = Math.ceil(total / 4);
    console.log(total)
  return (
    <div className={s.pogination}>
      <Pagination onChange={(_, num)=> dispatch(getPosts(num))} count={page} size="small"/>
    </div>
  );
};
