import { FC } from "react";
import s from "./registration.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { closeModalReg } from "../../../redux/registration/reducer";
import { useForm } from "react-hook-form";
import { postUser } from "../../../redux/registration/action";

export const Registration: FC = () => {
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });

  const postRegHandel = (data: any) => {
    dispatch(postUser(data));
    dispatch(closeModalReg());
  };

  return (
    <>
      <div className={s.modalReg}>
        <div className={s.modalReg__content}>
          <div className={s.modalReg__headerContainer}>
            <div className={s.modalReg__header}>Вход в аккаунт</div>
            <CloseIcon
              onClick={() => dispatch(closeModalReg())}
              className={s.modalReg__close}
            />
          </div>
          <form onSubmit={handleSubmit(postRegHandel)}>
            <div className={s.modalReg__fullName}>
              <div className={s.modalReg__headerFullName}>Имя и Фамилия</div>
              <input
                {...register("fullName", {
                  required: "Поле обязательно!",
                  minLength: {
                    value: 3,
                    message: "Нужно ввести минимум 3 символа!",
                  },
                })}
                className={s.modalReg__input}
              />
              <div className={s.modalReg__context}>
                {errors?.fullName && (
                  <div>{errors?.email?.fullName || "Поле обязательно!"}</div>
                )}
              </div>
            </div>
            <div className={s.modalReg__inputEmail}>
              <div className={s.modalReg__headerEmail}>Email</div>
              <input
                {...register("email", {
                  required: "Поле обязательно!",
                  minLength: {
                    value: 3,
                    message: "Нужно ввести минимум 3 символа!",
                  },
                })}
                type="email"
                className={s.modalReg__input}
              />
              <div className={s.modalReg__context}>
                {errors?.email && (
                  <div>{errors?.email?.message || "Поле обязательно!"}</div>
                )}
              </div>
            </div>
            <div className={s.modalReg__inputPassword}>
              <div className={s.modalReg__headerPassword}>Пароль</div>
              <input
                {...register("password", {
                  required: "Поле обязательно!",
                  minLength: {
                    value: 8,
                    message: "Нужно ввести минимум 8 символа!",
                  },
                })}
                type="password"
                className={s.modalReg__input}
              />
              <div className={s.modalReg__context}>
                {errors?.password && (
                  <div>{errors?.password?.message || "Поле обязательно!"}</div>
                )}
              </div>
            </div>
            <button type="submit" className={s.modalReg__button}>
              Зарегистрироваться
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
