import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/news/Home";
import Detail from "../pages/news/Detail";
import Search from "../pages/news/Search";
import SignIn from "../pages/pages/user/signin/SignIn";
import SignUp from "../pages/pages/user/signup/SignUp";
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
