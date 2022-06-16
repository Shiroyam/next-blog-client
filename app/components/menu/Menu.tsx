import { FC } from "react";
import s from "./menu.module.scss";
import MenuIcon from "@mui/icons-material/Menu";
import { openMenu } from "../../redux/menu/reducer";
import { MenuActive } from "./menuActive/MenuActive";
import { useTypesSelector, useAppDispatch } from "../../hooks/useTypeSelector";

export const Menu: FC = () => {
  const dispatch = useAppDispatch();
  const { flagMenu } = useTypesSelector((state) => state.menuReducer);
  return (
    <>
      <div className={s.menu}>
        <div className={s.menu__content}>
          <div className={s.menu__headerContainer}>
            <div className={s.menu__header}>МЕНЮ</div>
            <MenuIcon
              onClick={() => dispatch(openMenu())}
              className={s.menu__icon}
            />
          </div>
        </div>
      </div>
      {flagMenu && <MenuActive />}
    </>
  );
};
