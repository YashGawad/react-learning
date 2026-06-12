import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList : [],
  addPost : () => {},
  deletePost : () => {} 
});

const postListReducer = (currPostList, action) => {
  return currPostList
}

const PostListProvider = ({children}) => {

  const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

  const addPost = () => {

  }

  const deletePost = () => {

  }

  return (
    <PostList.Provider value = {{
      postList,
      addPost,
      deletePost
    }}>{children}</PostList.Provider>
  )
}

const DEFAULT_POST_LIST = [
  {
    id : "1",
    title : "Going to Mumbai",
    body : "Hi Friends, I am going to Mumbai for vacations.",
    reactions : 2,
    userId : "user_9",
    tags : ["Vacation", "Mumbai", "Enjoing"]
  },
  {
    id : "2",
    title : "Pass Graduate",
    body : "Pass ho gaye he bhaiii",
    reactions : 7,
    userId : "user_13",
    tags : ["Graduate", "Happy", "Unexpected"]
  },
];

export default PostListProvider;