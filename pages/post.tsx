import type { NextPage } from "next";
import s from "../styles/post.module.scss";
import { PostSkeleton } from "../app/components/skeleton/postSkeleton/PostSkeleton";
import { useState } from "react";

const Post: NextPage = () => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <div className={s.post}>{loading ? <></> : <PostSkeleton />}</div>
    </>
  );
};

export default Post;
