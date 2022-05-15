import { FC } from "react";
import CloseIcon from "@mui/icons-material/Close";
import s from "./authorization.module.scss";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../redux/authorization/reducer";

export const Authorization: FC = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className={s.modal}>
        <div className={s.modal__content}>
          <div className={s.modal__headerContainer}>
            <div className={s.modal__header}>Вход в аккаунт</div>
            <CloseIcon onClick={()=> dispatch(closeModal())} className={s.modal__close} />
          </div>
          <form>
            <div className={s.modal__inputEmail}>
              <div className={s.modal__headerEmail}>Email</div>
              <input type="email" className={s.modal__input} />
              <div className={s.modal__context}></div>
            </div>
            <div className={s.modal__inputPassword}>
              <div className={s.modal__headerPassword}>Пароль</div>
              <input type="password" className={s.modal__input} />
              <div className={s.modal__context}></div>
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
