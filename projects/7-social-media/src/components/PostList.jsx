import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "./store/post-list-store";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, loading } = useContext(PostListData);

  return (
    <>
      {loading && <LoadingSpinner />}
      {!loading &&
        postList.map((post) => <Post key={post.id} post={post}></Post>)}
    </>
  );
};

export default PostList;
