import { FC } from "react";
import s from "./search.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import { useAppDispatch, useTypesSelector } from "../../../hooks/useTypeSelector";
import { closeSearch } from "../../../redux/search/reducer";

export const Search: FC = () => {
  const dispatch = useAppDispatch();
  const { flagSearch } = useTypesSelector((state) => state.searchReducer);
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
