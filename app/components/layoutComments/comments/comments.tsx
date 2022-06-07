import { useRouter } from "next/router";
import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypesSelector } from "../../../hooks/useTypeSelector";
import { getComments, getCommentsPost } from "../../../redux/comment/action";
import s from "./comments.module.scss";

export const Comments: FC = () => {
  const router = useRouter();
  const { pathname } = router;
  const { comment, commentId } = useTypesSelector(
    (state) => state.commentReducer
  );
    console.log(commentId)
  return (
    <>
      {(pathname === "/profile" ? comment : commentId).map(
        (comments: any) => (
          <div key={comments._id} className={s.comments}>
            <div className={s.comments__header}>
              <div className={s.comments__fullName}>
                {comments.user.fullName}
              </div>
              <div className={s.comments__date}>
                {" "}
                {comments.user.createdAt.slice(0, 10)} в{" "}
                {comments.user.createdAt.slice(11, 19)}
              </div>
            </div>
            <div className={s.comments__text}>{comments.text}</div>
          </div>
        )
      )}
    </>
  );
};
