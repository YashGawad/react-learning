import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "./store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <h5>
        {post.title}
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={() => deletePost(post.id)}
        >
          <MdDelete />
        </span>
      </h5>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span className="badge text-bg-primary hashtag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      {/* <div className="alert alert-success" role="alert">
        This post is reacted by {post.reactions} people
      </div> */}
    </div>
  );
};

export default Post;
