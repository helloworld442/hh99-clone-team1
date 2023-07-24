import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/news/Home";
import Detail from "../pages/news/Detail";
import Search from "../pages/news/Search";
import Post from "../pages/news/Post";
import Profile from "../features/user/profile/Profile";
import Setting from "../features/user/setting/Setting";
import Likes from "../features/user/likes/Likes";
import Login from "../pages/user/Login";
import Register from "../pages/user/Register";
import ForgotPwd from "../features/user/forgotpwd/ForgotPwd";
import NewPwd from "../features/user/newpwd/NewPwd";
import Reads from "../features/user/reads/Reads";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:postId" element={<Detail />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/posts" element={<Post />} />
        <Route path="/forgot" element={<ForgotPwd />} />
        <Route path="/newPassword" element={<NewPwd />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/likes" element={<Likes />} />
        <Route path="/reads" element={<Reads />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
