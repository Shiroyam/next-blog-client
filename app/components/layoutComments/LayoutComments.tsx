import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useTypesSelector } from "../../hooks/useTypeSelector";
import { getComments } from "../../redux/comment/action";
import s from "./comments.module.scss";
import { Comments } from "./comments/comments";

export const LayoutComments: FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const { comment } = useTypesSelector((state) => state.commentReducer);

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
      <div className={s.post__commentsHeader}>
        Комментарии({comment.items ? comment.items.length : 0})
      </div>
      <Comments></Comments>
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
      </div>
    </div>
  );
};
