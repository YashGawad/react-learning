import { useContext, useRef } from "react";
import { PostList } from "./store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleOnSubmit = () => {
    event.preventDefault();
    const id = Date.now();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    addPost(id, userId, postTitle, postBody, reactions, tags);
  };

  return (
    <form className="create-post" onSubmit={handleOnSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Enter title of the Post
        </label>
        <input
          type="text"
          className="form-control"
          ref={postTitleElement}
          id="title"
          placeholder="How are you feeling today ..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="user-id" className="form-label">
          User Id
        </label>
        <input
          type="text"
          className="form-control"
          ref={userIdElement}
          id="user-id"
          placeholder="How are you feeling today ..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Body of the Post
        </label>
        <textarea
          type="text"
          rows={4}
          ref={postBodyElement}
          className="form-control"
          id="body"
          placeholder="Body of the post"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tag" className="form-label">
          Tags
        </label>
        <input
          type="text"
          className="form-control"
          ref={tagsElement}
          id="tag"
          placeholder="Enter tags"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="rections" className="form-label">
          Reactions
        </label>
        <input
          type="number"
          className="form-control"
          ref={reactionsElement}
          id="reaction"
          placeholder="Enter no of reactions"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
