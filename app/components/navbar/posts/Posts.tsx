import { FC, useEffect, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import s from "./posts.module.scss";
import { PostsSkeleton } from "../../skeleton/postsSkeleton/PostsSleleton";
import { useDispatch } from "react-redux";
import { useTypesSelector } from "../../../hooks/useTypeSelector";
import { getPosts } from "../../../redux/post/action";
import Link from "next/link";
import { useRouter } from "next/router";

export const Posts: FC = () => {
  const dispatch = useDispatch();
  const { value } = useTypesSelector((state) => state.searchReducer);
  const { page } = useTypesSelector((state) => state.poginationReducer);

  useEffect(() => {
    dispatch(getPosts(page, value));
  }, [value, page]);

  const { posts, isLoading, filterPosts } = useTypesSelector(
    (state) => state.postReducer
  );

  const router = useRouter();
  return (
    <>
      {isLoading ? (
        <>
          {(router.pathname === "/profile" ? filterPosts : posts).map(
            (post: any) => (
              <Link href={`/post/${post._id}`} key={post._id}>
                <div className={s.posts}>
                  <div className={s.posts__textContainer}>
                    <div className={s.posts__header}>{post.title}</div>
                    <div className={s.posts__text}>{post.description}</div>
                    <div className={s.posts__dateContainer}>
                      <div className={s.posts__date}>{post.createdAt}</div>
                      <div className={s.posts__iconContainer}>
                        <div className={s.posts__number}>{post.views}</div>
                        <VisibilityIcon className={s.posts__icon} />
                      </div>
                    </div>
                  </div>
                  <img
                    src={post.photoUrl}
                    width={160}
                    height={140}
                    alt="img_post"
                    className={s.posts__img}
                  />
                </div>
              </Link>
            )
          )}
        </>
      ) : (
        <>
          <PostsSkeleton />
          <PostsSkeleton />
          <PostsSkeleton />
          <PostsSkeleton />
        </>
      )}
    </>
  );
};
