import { FC } from "react";
import CloseIcon from "@mui/icons-material/Close";
import s from "./authorization.module.scss";
import { useDispatch } from "react-redux";
import { closeModalAuth } from "../../../redux/authorization/reducer";
import { useForm } from "react-hook-form";
import { postUser } from "../../../redux/authorization/action";

export const Authorization: FC = () => {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });

  const postAuth = (data: any) => {
    dispatch(postUser(data));
  };

  return (
    <>
      <div className={s.modal}>
        <div className={s.modal__content}>
          <div className={s.modal__headerContainer}>
            <div className={s.modal__header}>Вход в аккаунт</div>
            <CloseIcon
              onClick={() => dispatch(closeModalAuth())}
              className={s.modal__close}
            />
          </div>
          <form onSubmit={handleSubmit(postAuth)}>
            <div className={s.modal__inputEmail}>
              <div className={s.modal__headerEmail}>Email</div>
              <input
                {...register("email", {
                  required: "Поле обязательно!",
                  minLength: {
                    value: 3,
                    message: "Нужно ввести минимум 3 символа!",
                  },
                })}
                type="email"
                className={s.modal__input}
              />
              <div className={s.modal__context}>
                {errors?.email && <div>{errors?.email?.message || "Error!"}</div>}
              </div>
            </div>
            <div className={s.modal__inputPassword}>
              <div className={s.modal__headerPassword}>Пароль</div>
              <input
                {...register("password", {
                  required: true,
                  minLength: {
                    value: 8,
                    message: "Пароль должен содержать 8 символов!",
                  },
                })}
                type="password"
                className={s.modal__input}
              />
              <div className={s.modal__context}>
                {errors?.password && (
                  <div>{errors?.password?.message || "Поле обязательно!"}</div>
                )}
              </div>
            </div>
            <button type="submit" className={s.modal__button}>
              Войти
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
