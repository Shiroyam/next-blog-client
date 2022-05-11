import { Skeleton } from "@mui/material";
import { NextPage } from "next";
import { PostsSkeleton } from "../app/components/skeleton/postsSkeleton/PostsSleleton";
import { Menu } from "../app/components/menu/Menu";
import s from "../styles/profile.module.scss"

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
         <PostsSkeleton /> 
        </div>
      </div>
    </>
  );
};

export default Profile;
