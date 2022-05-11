import { FC } from "react";
import s from "./search.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import { useTypesSelector } from "../../../hooks/useTypeSelector";
import { useDispatch } from "react-redux";
import { closeSearch } from "../../../redux/search/action";

export const Search: FC = () => {
  const dispatch = useDispatch();
  const { flagSearch } = useTypesSelector((state) => state.search);
  return (
    <>
      {flagSearch && (
        <div className={s.search}>
          <input
            placeholder="Поиск статьи по заголовку или тексту..."
            className={s.search__input}
          ></input>
          <CloseIcon
            onClick={() => dispatch(closeSearch())}
            className={s.search__icon}
          ></CloseIcon>
        </div>
      )}
    </>
  );
};
