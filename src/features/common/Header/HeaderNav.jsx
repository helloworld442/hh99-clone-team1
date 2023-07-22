import { Link } from "react-router-dom";
import navLogo from "../../../assets/logo.png";
import { UserOutlined, SearchOutlined } from "@ant-design/icons";
import { HeaderNavBox, HeaderNavButtonBox, HeaderNavLogoLink } from "./style";
import { createContext } from "react";

const HeaderNav = () => {
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
  return <NavContext.Provider>{children}</NavContext.Provider>;
};

const NavButton = () => {
  return (
    <HeaderNavButtonBox>
      <Link className="nav-link" to="/search">
        <SearchOutlined />
      </Link>
      <Link className="nav-link">
        <UserOutlined />
      </Link>
    </HeaderNavButtonBox>
  );
};

const NavContent = () => {
  return null;
};

export default HeaderNav;
