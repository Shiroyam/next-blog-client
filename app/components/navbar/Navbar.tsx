import { FC } from "react";
import s from "./navbar.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import CreateIcon from "@mui/icons-material/Create";

export const Navbar: FC = () => {
  return (
    <nav className={s.navbar}>
      <div className={s.navbar__content}>
        <div className={s.navbar__header}>VASYA BLOG</div>
        <div className={s.navbar__icon}>
          <SearchIcon className={s.navbar__iconSearch} />
          <PersonIcon className={s.navbar__iconPerson} />
          <CreateIcon className={s.navbar__iconCreate} />
        </div>
      </div>
    </nav>
  );
};
