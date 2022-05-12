import { FC } from "react";
import s from "./menuActive.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../../redux/menu/action";

export const MenuActive: FC = () => {
  const dispatch = useDispatch();
  const onClickBackground = (e: any) => {
    e.stopPropagation();
  };

  return (
    <>
      <div onClick={() => dispatch(closeMenu())} className={s.menuActive}>
        <div onClick={onClickBackground} className={s.menuActive__content}>
          <div className={s.menuActive__routes}>
            {true ? (
              <>
                <div className={s.menuActive__headerName}>Pupkin</div>
                <Link href="/">
                  <a className={s.menuActive__route}>Главная</a>
                </Link>
                <Link href="/profile">
                  <a className={s.menuActive__route}> Мой профиль </a>
                </Link>
                <Link href="/create">
                  <a className={s.menuActive__route}>Создать запись</a>
                </Link>
                <div className={s.menuActive__route}>Выйти</div>
              </>
            ) : (
              <>
                <Link href="/" className={s.menuActive__route}>
                  Главная
                </Link>
                <div className={s.menuActive__route}>Зарегистрироваться</div>
                <div className={s.menuActive__route}>Войти</div>
              </>
            )}
          </div>
          <div className={s.menuActive__closeContainer}>
            <CloseIcon
              onClick={() => dispatch(closeMenu())}
              className={s.menuActive__icon}
            />
            <div className={s.menuActive__header}>МЕНЮ</div>
          </div>
        </div>
      </div>
    </>
  );
};
