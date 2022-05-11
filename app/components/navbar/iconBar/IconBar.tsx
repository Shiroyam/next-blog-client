import { FC } from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import CreateIcon from "@mui/icons-material/Create";
import s from "./iconBar.module.scss";

export const IconBar: FC = () => {
  return (
    <>
      <div className={s.iconBar}>
        <div className={s.iconBar__header}>VASYA BLOG</div>
        <div className={s.iconBar__icon}>
          <SearchIcon className={s.iconBar__iconSearch} />
          <PersonIcon className={s.iconBar__iconPerson} />
          <CreateIcon className={s.iconBar__iconCreate} />
        </div>
      </div>
    </>
  );
};
