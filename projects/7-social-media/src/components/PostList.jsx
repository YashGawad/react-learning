import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "./store/post-list-store";

const PostList = () => {
  const { postList } = useContext(PostListData);
  return (
    <>
      {postList.length === 0 && (
        <center className="welcome-msg">
          <h1>There is no Post available</h1>
          <button type="button" class="btn btn-primary" onClick={handleGetPost}>
            Get Post
          </button>
        </center>
      )}
      {postList.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </>
  );
};

export default PostList;
