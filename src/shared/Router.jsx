import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/news/Home";
import SignIn from "../pages/user/SignIn";
import SignUp from "../pages/user/SignUp";
import Detail from "../pages/news/Detail";
import Search from "../pages/news/Search";
import Post from "../pages/news/Post";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:postId" element={<Detail />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/posts/:postId" element={<Post />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
