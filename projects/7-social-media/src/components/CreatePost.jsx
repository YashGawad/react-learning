import { Form } from "react-router-dom";
import { redirect } from "react-router-dom";

const CreatePost = () => {
  return (
    <Form method="POST" className="create-post">
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Enter title of the Post
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          placeholder="How are you feeling today ..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User Id
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          name="userId"
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
          className="form-control"
          id="body"
          name="body"
          placeholder="Body of the post"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Tags
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          name="tags"
          placeholder="Enter tags"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Reactions
        </label>
        <input
          type="number"
          className="form-control"
          id="reactions"
          name="reactions"
          placeholder="Enter no of reactions"
        />
      </div>
      <button type="submit" className="btn btn-primary" id="submit">
        Post
      </button>
    </Form>
  );
};

export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  console.log(postData);

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log("Post added", post);
      //addPost(post);
    });

  return redirect("/");
}

export default CreatePost;
