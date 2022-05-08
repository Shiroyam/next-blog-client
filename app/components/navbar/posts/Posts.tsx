import { FC, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import s from "./posts.module.scss";
import { PostsSkeleton } from "../../skeleton/postsSkeleton/PostsSleleton";

export const Posts: FC = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading ? (
        <div className={s.posts}>
          <div className={s.posts__textContainer}>
            <div className={s.posts__header}></div>
            <div className={s.posts__text}></div>
            <div className={s.posts__dateContainer}>
              <div className={s.posts__date}></div>
              <div className={s.posts__iconContainer}>
                <div className={s.posts__number}></div>
                <VisibilityIcon className={s.posts__icon} />
              </div>
            </div>
          </div>
          {/* <img className={s.posts__img}></img> */}
        </div>
      ) : (
        <PostsSkeleton />
      )}
    </>
  );
};
