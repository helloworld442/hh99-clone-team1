import { Link } from "react-router-dom";
import navLogo from "../../../assets/logo.png";
import { UserOutlined, SearchOutlined } from "@ant-design/icons";
import { HeaderNavBox, HeaderNavButtonBox, HeaderNavLogoLink } from "./style";
import { createContext } from "react";

const HeaderNav = () => {
  return (
    <HeaderNavBox>
      <NavLogo location="/" />
      <NavContainer>
        <NavButton />
        <NavContent />
      </NavContainer>
    </HeaderNavBox>
  );
};

const NavContext = createContext();

export const NavLogo = ({ location }) => {
  return (
    <HeaderNavLogoLink href={location}>
      <img src={navLogo} />
    </HeaderNavLogoLink>
  );
};

const NavContainer = ({ children }) => {
  return <NavContext.Provider>{children}</NavContext.Provider>;
};

const NavButton = () => {
  return (
    <HeaderNavButtonBox>
      <Link className="nav-link">
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
