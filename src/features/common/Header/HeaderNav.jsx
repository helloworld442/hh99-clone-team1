import {
  HeaderNavBackground,
  HeaderNavBox,
  HeaderNavButtonBox,
  HeaderNavContentItem,
  HeaderNavContentList,
  HeaderNavLogoLink,
} from "./style";
import navLogo from "../../../assets/logo.png";
import { UserOutlined, SearchOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { createContext, useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { LOGOUT_USER } from "../../../redux/reducers/userSlice";

const NewsHeaderNav = () => {
  return (
    <HeaderNavBox>
      <NavLogo location="/" icon={navLogo} />
      <NavContainer>
        <NavButton />
        <NavContent />
      </NavContainer>
    </HeaderNavBox>
  );
};

/**
 * @param {string} location 로고 클릭시 갈 위치
 * @param {object} icon 로고에 들어갈 아이콘
 */

export const NavLogo = ({ location, icon }) => {
  return (
    <HeaderNavLogoLink href={location}>
      <img src={icon} />
    </HeaderNavLogoLink>
  );
};

const NavContext = createContext();

const NavContainer = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleNav = () => setIsOpen(!isOpen);

  return (
    <NavContext.Provider value={{ isOpen, onToggleNav }}>
      {children}
    </NavContext.Provider>
  );
};

const NavButton = () => {
  const { onToggleNav } = useContext(NavContext);
  let path = "/signin";
  if (localStorage.getItem("accessToken")) path = "#";

  return (
    <HeaderNavButtonBox>
      <Link className="nav-link" to="/search">
        <SearchOutlined />
      </Link>
      <Link className="nav-link" to={path} onClick={onToggleNav}>
        <UserOutlined />
      </Link>
    </HeaderNavButtonBox>
  );
};

const NavContent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isOpen, onToggleNav } = useContext(NavContext);

  const onClickMypage = () => navigate("/profile");

  const onClickProfile = () => navigate("/setting");

  const onClickLogout = () => {
    dispatch(LOGOUT_USER());
    window.location.reload();
  };

  return isOpen ? (
    <>
      <HeaderNavBackground onClick={onToggleNav} />
      <HeaderNavContentList>
        <HeaderNavContentItem>
          <button onClick={onClickMypage}>마이페이지</button>
        </HeaderNavContentItem>
        <HeaderNavContentItem>
          <button onClick={onClickProfile}>프로필 설정</button>
        </HeaderNavContentItem>
        <HeaderNavContentItem>
          <button onClick={onClickLogout}>로그아웃</button>
        </HeaderNavContentItem>
      </HeaderNavContentList>
    </>
  ) : null;
};

export default NewsHeaderNav;
