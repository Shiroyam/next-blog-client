import { FC } from "react";
import s from "./menuActive.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import { closeMenu } from "../../../redux/menu/reducer";
import { useAppDispatch } from "../../../hooks/useTypeSelector";
import { useRouter } from "next/router";
import { openModalAuth } from "../../../redux/authorization/reducer";
import { openModalReg } from "../../../redux/registration/reducer";

export const MenuActive: FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const onClickExit = () => {
    localStorage.clear();
    document.location.reload();
  };

  const onClickBackground = (e: any) => {
    e.stopPropagation();
  };

  return (
    <>
      <div onClick={() => dispatch(closeMenu())} className={s.menuActive}>
        <div onClick={onClickBackground} className={s.menuActive__content}>
          <div className={s.menuActive__routes}>
            {false ? (
              <>
                <div className={s.menuActive__headerName}>Pupkin</div>
                <Link href="/">
                  <a
                    className={
                      router.pathname === "/"
                        ? `${s.menuActive__route} ${s.active}`
                        : s.menuActive__route
                    }
                  >
                    Главная
                  </a>
                </Link>
                <Link href="/profile">
                  <a
                    className={
                      router.pathname === "/profile"
                        ? `${s.menuActive__route} ${s.active}`
                        : s.menuActive__route
                    }
                  >
                    {" "}
                    Мой профиль{" "}
                  </a>
                </Link>
                <Link href="/create">
                  <a
                    className={
                      router.pathname === "/create"
                        ? `${s.menuActive__route} ${s.active}`
                        : s.menuActive__route
                    }
                  >
                    Создать запись
                  </a>
                </Link>
                <div onClick={onClickExit} className={s.menuActive__route}>
                  Выйти
                </div>
              </>
            ) : (
              <>
                <Link href="/">
                  <a
                    className={
                      router.pathname === "/"
                        ? `${s.menuActive__route} ${s.active}`
                        : s.menuActive__route
                    }
                  >
                    Главная
                  </a>
                </Link>
                <div
                  onClick={() => dispatch(openModalReg())}
                  className={s.menuActive__route}
                >
                  Зарегистрироваться
                </div>
                <div
                  onClick={() => dispatch(openModalAuth())}
                  className={s.menuActive__route}
                >
                  Войти
                </div>
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
