import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/news/Home";
import Detail from "../pages/news/Detail";
import Search from "../pages/news/Search";
import Post from "../pages/news/Post";
import Login from "../pages/user/Login";
import Register from "../pages/user/Register";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:postId" element={<Detail />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/posts/:postId" element={<Post />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
