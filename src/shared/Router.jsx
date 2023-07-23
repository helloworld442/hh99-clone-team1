import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/news/Home";
import Detail from "../pages/news/Detail";
import Search from "../pages/news/Search";
import SignIn from "../features/user/signin/SignIn";
import SignUp from "../features/user/signup/SignUp";
import ForgotPwd from "../features/user/forgotpwd/ForgotPwd";
import NewPwd from "../features/user/newpwd/NewPwd";
import Post from "../pages/news/Post";
import Profile from "../features/user/profile/Profile";

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
        <Route path="/forgot" element={<ForgotPwd />} />
        <Route path="/newPassword" element={<NewPwd/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
