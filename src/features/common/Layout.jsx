import { useSelector } from "react-redux";
import styled, { css } from "styled-components";

const StLayout = styled.div`
  ${(props) =>
    props.darkModeToggle &&
    css`
      filter: invert(100%);
    `}
  position: relative;
  width: 100vw;
  min-height: 800px;
  background: #eae7de;
  @media screen and (max-width: 1079px) {
    min-height: 1200px;
  }
`;

const Layout = ({ children }) => {
  const darkModeToggle = useSelector((state) => state.darkMode.darkModeToggle);

  return <StLayout darkModeToggle={darkModeToggle}>{children}</StLayout>;
};

export default Layout;
