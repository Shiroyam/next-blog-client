import { FC } from "react";
import s from "./menuActive.module.scss"
import CloseIcon from "@mui/icons-material/Close";

export const MenuActive: FC = () => {
  return (
    <>
      <div className={s.menuActive}>
        <div className={s.menuActive__content}>
          <div className={s.menuActive__routes}>
            {true ? (
              <>
                <div className={s.menuActive__headerName}>
                  Pupkin
                </div>
                <a href="" className={s.menuActive__route}>
                  Главная
                </a>
                <a href="/profile" className={s.menuActive__route}>
                  Мой профиль
                </a>
                <a href="/create" className={s.menuActive__route}>
                  Создать запись
                </a>
                <div className={s.menuActive__route}>
                  Выйти
                </div>
              </>
            ) : (
              <>
                <a href="" className={s.menuActive__route}>
                  Главная
                </a>
                <div  className={s.menuActive__route}>
                  Зарегистрироваться
                </div>
                <div  className={s.menuActive__route}>
                  Войти
                </div>
              </>
            )}
          </div>
          <div className={s.menuActive__closeContainer}>
            <CloseIcon
              className={s.menuActive__icon}
            />
            <div className={s.menuActive__header}>МЕНЮ</div>
          </div>
        </div>
      </div>
    </>
  );
};
