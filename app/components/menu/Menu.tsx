import { FC } from "react";
import s from "./menu.module.scss";
import MenuIcon from "@mui/icons-material/Menu";

export const Menu: FC = () => {
  return (
    <div className={s.menu}>
      <div className={s.menu__content}>
        <div className={s.menu__headerContainer}>
          <div className={s.menu__header}>МЕНЮ</div>
          <MenuIcon className={s.menu__icon} />
        </div>
      </div>
    </div>
  );
};
