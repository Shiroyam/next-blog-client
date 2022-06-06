import type { NextPage } from "next";
import s from "../../styles/post.module.scss";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { PostSkeleton } from "../../app/components/skeleton/postSkeleton/PostSkeleton";
import { LayoutComments } from "../../app/components/layoutComments/LayoutComments";
import { useEffect } from "react";
import { useTypesSelector } from "../../app/hooks/useTypeSelector";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { getPost } from "../../app/redux/post/action";
import { getComments } from "../../app/redux/comment/action";
import { useForm } from "react-hook-form";

const Post: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost(id));
    dispatch(getComments());
  }, [id]);
  
  const { post, isLoading } = useTypesSelector((state) => state.postReducer);
  return (
    <>
      <div className={s.post}>
        {isLoading ? (
          <>
            <div className={s.post}>
              <div style={{ backgroundImage: `url(${post.photoUrl})` }} className={s.post__headerContaider}>
                <div className={s.post__dateContainer}>
                  <div className={s.post__date}>{post.createdAt}</div>
                  <div className={s.post__iconContainer}>
                    <VisibilityIcon className={s.post__icon} />
                    <div className={s.post__number}>{post.views}</div>
                  </div>
                </div>
                <div className={s.post__headerText}>
                  <div className={s.post__header}>{post.title}</div>
                  <div className={s.post__description}>{post.description}</div>
                </div>
              </div>
              <div className={s.post__textContainer}>
                <div className={s.post__text}>{post.text}</div>
              </div>
              <LayoutComments />
            </div>
          </>
        ) : (
          <PostSkeleton />
        )}
      </div>
    </>
  );
};

export default Post;
