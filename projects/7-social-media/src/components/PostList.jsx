import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "./store/post-list-store";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setLoading(false);
      });
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      {loading && <LoadingSpinner />}
      {!loading &&
        postList.map((post) => <Post key={post.id} post={post}></Post>)}
    </>
  );
};

export default PostList;
