import { NextPage } from "next";
import CircularProgress from '@mui/material/CircularProgress';
import { Menu } from "../app/components/menu/Menu";
import s from "../styles/profile.module.scss"
import { useRouter } from "next/router";
import { Posts } from "../app/components/navbar/posts/Posts";

const Profile: NextPage = () => {
  return (
    <>
    <Menu />
      <div className={s.profile}>
        <div className={s.profile__container}>
          <div className={s.profile__headerContainer}>
            <div className={s.profile__header}>
              Pupkin
            </div>
          </div>
          <div className={s.profile__toggle}>
            <div
              className={
                // toggleFlag ?
                  `${s.profile__togglePosts} ${s.open}`  
                //   : `${profile__togglePosts}`
              }
            >
              Статьи
            </div>
            <div
              className={
                // !toggleFlag ?
                // `${profile__toggleComments} ${open}`
                    s.profile__toggleComments
              }
            >
              Комментарии
            </div>
          </div>
          <div className={s.profile__content}>
            <Posts />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
