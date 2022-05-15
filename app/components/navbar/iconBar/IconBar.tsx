import { FC } from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import CreateIcon from "@mui/icons-material/Create";
import LoginIcon from "@mui/icons-material/Login";
import s from "./iconBar.module.scss";
import { useDispatch } from "react-redux";
import { openSearch } from "../../../redux/search/reducer";
import Link from "next/link";
import { useTypesSelector } from "../../../hooks/useTypeSelector";
import { openModal } from "../../../redux/authorization/reducer";

export const IconBar: FC = () => {
  const dispatch = useDispatch();
  const { user } = useTypesSelector((state) => state.authReducer);
  return (
    <>
      <div className={s.iconBar}>
        <div className={s.iconBar__header}>VASYA BLOG</div>
        <div className={s.iconBar__icon}>
          <SearchIcon
            onClick={() => dispatch(openSearch())}
            className={s.iconBar__iconSearch}
          />
          {user.access_token ? (
            <>
              <Link href="/profile">
                <PersonIcon className={s.iconBar__iconPerson} />
              </Link>
              <Link href="/create">
                <CreateIcon className={s.iconBar__iconCreate} />
              </Link>
            </>
          ) : (
            <LoginIcon
              onClick={() => dispatch(openModal())}
              className={s.iconBar__iconPerson}
            />
          )}
        </div>
      </div>
    </>
  );
};
