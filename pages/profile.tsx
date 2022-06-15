import { NextPage } from "next";
import { Menu } from "../app/components/menu/Menu";
import s from "../styles/profile.module.scss";
import { Posts } from "../app/components/navbar/posts/Posts";
import { useTypesSelector } from "../app/hooks/useTypeSelector";
import { useDispatch } from "react-redux";
import { openComments, openPost } from "../app/redux/profile/reducer";
import { Comments } from "../app/components/layoutComments/comments/comments";
import { useEffect, useState } from "react";
import { getComments } from "../app/redux/comment/action";
import { getPosts } from "../app/redux/post/action";

const Profile: NextPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState<string | null>("");
  useEffect(() => {
    dispatch(getComments());
    dispatch(getPosts(page, value));
    setName(localStorage.getItem("name"));
  }, []);
  const { flagToggle } = useTypesSelector((state) => state.profileReducer);
  const { posts } = useTypesSelector((state) => state.postReducer);
  const { value } = useTypesSelector((state) => state.searchReducer);
  const { page } = useTypesSelector((state) => state.poginationReducer);
  const { comment } = useTypesSelector((state) => state.commentReducer);

  console.log(posts);
  return (
    <>
      <Menu />
      <div className={s.profile}>
        <div className={s.profile__container}>
          <div className={s.profile__headerContainer}>
            <div className={s.profile__header}>{name}</div>
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
            {flagToggle ? (
              posts.length ? (
                <Posts />
              ) : (
                <div>У вас еще нет постов</div>
              )
            ) : comment.length ? (
              <Comments />
            ) : (
              <div>У вас еще нет комментариев</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
