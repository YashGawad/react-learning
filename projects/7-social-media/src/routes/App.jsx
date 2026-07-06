import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import CreatePost from "../components/CreatePost";
import PostList from "../components/PostList";
import PostListProvider from "../components/store/post-list-store";
import { Outlet } from "react-router-dom";

function App() {
  const [page, setPage] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar page={page} setPage={setPage}></Sidebar>
        <div className="content">
          <Header></Header>
          <Outlet></Outlet>
          {/* {page === "Home" ? <PostList></PostList> : <CreatePost></CreatePost>} */}
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
