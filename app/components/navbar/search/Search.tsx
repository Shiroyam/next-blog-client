import { FC } from "react";
import s from "./search.module.scss"
import CloseIcon from "@mui/icons-material/Close";

export const Search: FC = () => {
  return (
    <div className={s.search}>
      <input
        placeholder="Поиск статьи по заголовку или тексту..."
        className={s.search__input}
      ></input>
      <CloseIcon
        className={s.search__icon}
      ></CloseIcon>
    </div>
  );
};
