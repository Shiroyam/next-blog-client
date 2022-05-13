import { FC } from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import CreateIcon from "@mui/icons-material/Create";
import s from "./iconBar.module.scss";
import { useDispatch } from "react-redux";
import { openSearch } from "../../../redux/search/reducer";

export const IconBar: FC = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className={s.iconBar}>
        <div className={s.iconBar__header}>VASYA BLOG</div>
        <div className={s.iconBar__icon}>
          <SearchIcon
            onClick={() => dispatch(openSearch())}
            className={s.iconBar__iconSearch}
          />
          <PersonIcon className={s.iconBar__iconPerson} />
          <CreateIcon className={s.iconBar__iconCreate} />
        </div>
      </div>
    </>
  );
};
