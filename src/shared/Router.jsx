import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/news/Home";
import SignIn from "../pages/user/SignIn";
import SignUp from "../pages/user/SignUp";
import Detail from "../pages/news/Detail";
import Search from "../pages/news/Search";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:postId" element={<Detail />} />
        <Route path="/posts/:postId" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
