import { FC, useEffect, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import s from "./posts.module.scss";
import { PostsSkeleton } from "../../skeleton/postsSkeleton/PostsSleleton";
import { useDispatch } from "react-redux";
import { useTypesSelector } from "../../../hooks/useTypeSelector";
import { getPosts } from "../../../redux/post/action";
import Image from "next/image";

export const Posts: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  const { posts } = useTypesSelector((state) => state.posts);
  return (
    <>
      {posts ? (
        <>
          {posts.map((post: any) => (
            <div key={post.id} className={s.posts}>
              <div className={s.posts__textContainer}>
                <div className={s.posts__header}>{post.title}</div>
                <div className={s.posts__text}>{post.description}</div>
                <div className={s.posts__dateContainer}>
                  <div className={s.posts__date}></div>
                  <div className={s.posts__iconContainer}>
                    <div className={s.posts__number}></div>
                    <VisibilityIcon className={s.posts__icon} />
                  </div>
                </div>
              </div>
              {/* <Image src={post.photoUrl} alt="img_post" className={s.posts__img}/> */}
            </div>
          ))}
        </>
      ) : (
        <PostsSkeleton />
      )}
    </>
  );
};
