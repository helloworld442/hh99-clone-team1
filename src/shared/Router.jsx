import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/news/Home";
import Detail from "../pages/news/Detail";
import Search from "../pages/news/Search";
import SignIn from "../features/user/signin/SignIn";
import SignUp from "../features/user/signup/SignUp";
import ForgotPwd from "../features/user/forgotpwd/ForgotPwd";
import NewPwd from "../features/user/newpwd/NewPwd";

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
        <Route path="/forgot" element={<ForgotPwd />} />
        <Route path="/newPassword/:resignToken" element={<NewPwd/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
