import { styled, css } from "styled-components";
import { useSelector } from "react-redux";
const StLayout = styled.div`
  ${(props) =>
    props.dark &&
    css`
      filter: invert(100%);
    `}
  position: relative;
  width: 100vw;
  min-height: 1200px;
  background: #eae7de;
  z-index: 9999;
  @media screen and (max-width: 1079px) {
    min-height: 1200px;
  }
`;

const Layout = ({ children }) => {
  const darkModeToggle = useSelector((state) => state.darkMode.darkModeToggle);
  return <StLayout dark={darkModeToggle}>{children}</StLayout>;
};

export default Layout;
