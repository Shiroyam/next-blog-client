import Skeleton from "@mui/material/Skeleton";
import s from "./postSkeleton.module.scss";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { FC } from "react";

export const PostSkeleton: FC = () => {
  return (
    <>
      <div className={s.post}>
        <div className={s.post__headerContaider}>
          <div className={s.post__dateContainer}>
            <div className={s.post__date}>
              <Skeleton variant="text" width={172} />
            </div>
            <div className={s.post__iconContainer}>
              <VisibilityIcon className={s.post__icon} />
              <div className={s.post__number}>
                <Skeleton variant="text" width={20} />
              </div>
            </div>
          </div>
          <div className={s.post__headerText}>
            <div className={s.post__header}>
              <Skeleton variant="rectangular" width={576} height={104} />
            </div>
            <div className={s.post__description}>
              <Skeleton variant="text" width={500} />
              <Skeleton variant="text" width={300} />
            </div>
          </div>
        </div>
        <div className={s.post__textContainer}>
          <div className={s.post__text}>
            <Skeleton variant="text" width={500} />
            <Skeleton variant="text" width={500} />
            <Skeleton variant="text" width={500} />
            <Skeleton variant="text" width={500} />
            <Skeleton variant="text" width={500} />
          </div>
        </div>
      </div>
    </>
  );
};
