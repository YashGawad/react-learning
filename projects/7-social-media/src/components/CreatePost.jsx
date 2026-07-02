import { useContext, useRef } from "react";
import { PostList } from "./store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const id = Date.now();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    /*userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = ""; */

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: postTitle,
        userId: userId,
        body: postBody,
        reactions: reactions,
        tags: tags
   
      }),
    })
      .then((res) => res.json())
      .then((post) => {
        console.log("Post added", post)
        addPost(post);
      });

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
          name="title"
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
          name="user-id"
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
          name="body"
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
          name="tag"
          placeholder="Enter tags"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reaction" className="form-label">
          Reactions
        </label>
        <input
          type="number"
          className="form-control"
          ref={reactionsElement}
          id="reaction"
          name="reaction"
          placeholder="Enter no of reactions"
        />
      </div>
      <button type="submit" className="btn btn-primary" id="submit">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
