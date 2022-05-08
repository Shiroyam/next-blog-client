import { FC } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Skeleton from "@mui/material/Skeleton";
import s from "./posts.module.scss";

export const PostsSkeleton: FC = () => {
  return (
    <div className={s.posts}>
      <div className={s.posts__textContainer}>
        <div className={s.posts__header}>
          <Skeleton variant="text" width={360} />
        </div>
        <div className={s.posts__text}>
          <Skeleton variant="rectangular" width={360} height={80} />
        </div>
        <div className={s.posts__dateContainer}>
          <div className={s.posts__date}>
            <Skeleton variant="text" width={172} />
          </div>
          <div className={s.posts__iconContainer}>
            <div className={s.posts__number}>
              <Skeleton variant="text" width={26} />
            </div>
            <VisibilityIcon className={s.posts__icon} />
          </div>
        </div>
      </div>
      <Skeleton variant="rectangular" className={s.posts__img} />
    </div>
  );
};