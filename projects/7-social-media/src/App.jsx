import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";

function App() {
  const [page, setPage] = useState("Home");
  return (
    <div className="app-container">
      <Sidebar page={page}></Sidebar>
      <div className="content">
        <Header></Header>
        {page === "Home" ? <PostList></PostList> : <CreatePost></CreatePost>}
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
