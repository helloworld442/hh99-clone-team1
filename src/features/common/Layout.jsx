import styled from "styled-components";

const StLayout = styled.div`
  position: relative;
  width: 100vw;
  min-height: 800px;
  background: #eae7de;
  @media screen and (max-width: 1079px) {
    min-height: 1200px;
  }
`;

const Layout = ({ children }) => {
  return <StLayout>{children}</StLayout>;
};

export default Layout;
