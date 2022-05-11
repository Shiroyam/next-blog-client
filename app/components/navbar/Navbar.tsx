import { FC } from "react";
import s from "./navbar.module.scss";
import { Posts } from "./posts/Posts";
import { Search } from "./search/Search";
import { IconBar } from "./iconBar/IconBar"

export const Navbar: FC = () => {
  return (
    <nav className={s.navbar}>
      <Search /> 
      <IconBar></IconBar>
      <Posts></Posts>
    </nav>
  );
};
