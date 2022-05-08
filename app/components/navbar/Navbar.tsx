import { FC } from "react";
import s from "./navbar.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import CreateIcon from "@mui/icons-material/Create";
import { Posts } from "./posts/Posts";
import { Search } from "./search/Search";

export const Navbar: FC = () => {
  return (
    <nav className={s.navbar}>
    {/* <Search /> */}
      <div className={s.navbar__content}>
        <div className={s.navbar__header}>VASYA BLOG</div>
        <div className={s.navbar__icon}>
          <SearchIcon className={s.navbar__iconSearch} />
          <PersonIcon className={s.navbar__iconPerson} />
          <CreateIcon className={s.navbar__iconCreate} />
        </div>
      </div>
      <Posts></Posts>
    </nav>
  );
};
