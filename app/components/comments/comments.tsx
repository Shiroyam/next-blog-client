import { useRouter } from "next/router";
import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useTypesSelector } from "../../hooks/useTypeSelector";
import { getComments } from "../../redux/comment/action";
import s from "./comments.module.scss";

export const Comments: FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const dispatch = useDispatch();
  const { comment } = useTypesSelector((state) => state.commentReducer);
  useEffect(() => {
    dispatch(getComments());
  }, []);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });

  const onClickSubmit = (data: any) => {
    window.location.reload();
  };

  return (
    <div className={s.post__commentsContainer}>
      {/* <div className={s.post__commentsHeader}>
        Комментарии({comment.length ? comment.length : 0})
      </div>
      {comment
        .map((comments) => (
          <div key={comments.id} className={s.comments}>
            <div className={s.comments__header}>
              <div className={s.comments__fullName}>
                {comments.user.fullName}
              </div>
              <div className={s.comments__date}></div>
            </div>
            <div className={s.comments__text}>{comments.text}</div>
          </div>
        ))}
      <div className={s.post__commentsInputContainer}>
        <div className={s.post__commentsInputHeader}>Добавить комментарий</div>
        <form onSubmit={handleSubmit(onClickSubmit)}>
          <textarea
            {...register("comment", {
              maxLength: {
                value: 50,
                message: "Можно ввести максимум 50 символа!",
              },
            })}
            className={s.post__commentsInput}
          ></textarea>
          <div className={s.modal__context}>
            {errors?.comment && <p>{errors?.comment?.message || "Error!"}</p>}
          </div>
          <button type="submit" className={s.post__commentsButton}>
            Отправить
          </button>
        </form>
      </div> */}
    </div>
  );
};
