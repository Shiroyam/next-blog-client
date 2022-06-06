import { NextPage } from "next";
import CircularProgress from "@mui/material/CircularProgress";
import { Menu } from "../app/components/menu/Menu";
import s from "../styles/profile.module.scss";
import { useRouter } from "next/router";
import { Posts } from "../app/components/navbar/posts/Posts";
import { useTypesSelector } from "../app/hooks/useTypeSelector";
import { useDispatch } from "react-redux";
import { openComments, openPost } from "../app/redux/profile/reducer";

const Profile: NextPage = () => {
  const dispatch = useDispatch();
  const { flagToggle } = useTypesSelector((state) => state.profileReducer);

  return (
    <>
      <Menu />
      <div className={s.profile}>
        <div className={s.profile__container}>
          <div className={s.profile__headerContainer}>
            <div className={s.profile__header}>Pupkin</div>
          </div>
          <div className={s.profile__toggle}>
            <div
              onClick={() => dispatch(openPost())}
              className={
                flagToggle
                  ? `${s.profile__togglePosts} ${s.open}`
                  : `${s.profile__togglePosts}`
              }
            >
              Статьи
            </div>
            <div
              onClick={() => dispatch(openComments())}
              className={
                !flagToggle
                  ? `${s.profile__toggleComments} ${s.open}`
                  : s.profile__toggleComments
              }
            >
              Комментарии
            </div>
          </div>
          <div className={s.profile__content}>
            {flagToggle ? <Posts /> : <div>Comments</div>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
