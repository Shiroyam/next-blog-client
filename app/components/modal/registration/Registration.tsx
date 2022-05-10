import { FC } from "react";
import s from "./registration.module.scss";
import CloseIcon from "@mui/icons-material/Close";

export const Registration: FC = () => {
  return (
    <>
      <div className={s.modalReg}>
        <div className={s.modalReg__content}>
          <div className={s.modalReg__headerContainer}>
            <div className={s.modalReg__header}>Вход в аккаунт</div>
            <CloseIcon className={s.modalReg__close} />
          </div>
          <form>
            <div className={s.modalReg__fullName}>
              <div className={s.modalReg__headerFullName}>Имя и Фамилия</div>
              <input className={s.modalReg__input} />
              <div className={s.modalReg__context}></div>
            </div>
            <div className={s.modalReg__inputEmail}>
              <div className={s.modalReg__headerEmail}>Email</div>
              <input type="email" className={s.modalReg__input} />
              <div className={s.modalReg__context}></div>
            </div>
            <div className={s.modalReg__inputPassword}>
              <div className={s.modalReg__headerPassword}>Пароль</div>
              <input type="password" className={s.modalReg__input} />
              <div className={s.modalReg__context}></div>
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
