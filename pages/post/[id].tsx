import type { NextPage } from "next";
import s from "../../styles/post.module.scss";
import { PostSkeleton } from "../../app/components/skeleton/postSkeleton/PostSkeleton";
import { useEffect } from "react";
import { useTypesSelector } from "../../app/hooks/useTypeSelector";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { getPost } from "../../app/redux/post/action";

const Post: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);
  const { post, isLoading } = useTypesSelector((state) => state.postReducer);
  return (
    <>
      <div className={s.post}>
        {isLoading ? (
          <>
            <div>{post.title}</div>
          </>
        ) : (
          <PostSkeleton />
        )}
      </div>
    </>
  );
};

export default Post;
