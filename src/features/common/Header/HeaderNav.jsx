import {
  HeaderNavBox,
  HeaderNavButtonBox,
  HeaderNavContentItem,
  HeaderNavContentList,
  HeaderNavLogoLink,
} from "./style";
import { Link } from "react-router-dom";
import navLogo from "../../../assets/logo.png";
import { UserOutlined, SearchOutlined } from "@ant-design/icons";
import { createContext, useContext, useState } from "react";

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
  return (
    <HeaderNavButtonBox>
      <Link className="nav-link" to="/search">
        <SearchOutlined />
      </Link>
      <Link className="nav-link" onClick={onToggleNav}>
        <UserOutlined />
      </Link>
    </HeaderNavButtonBox>
  );
};

const NavContent = () => {
  const { isOpen } = useContext(NavContext);
  return isOpen ? (
    <HeaderNavContentList>
      <HeaderNavContentItem>마이페이지</HeaderNavContentItem>
      <HeaderNavContentItem>프로필 설정</HeaderNavContentItem>
      <HeaderNavContentItem>로그아웃</HeaderNavContentItem>
    </HeaderNavContentList>
  ) : null;
};

export default NewsHeaderNav;
