import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Layout = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #eae7de;
  @media (max-width: 1079px) {
    font-size: 12px;
  }
`;
export const NewsDetaiTitleBox = styled.div`
  padding: 4rem 5% 5rem;
  border-bottom: 1px solid #051619;
  text-align: center;
  box-sizing: border-box;
`;
export const NewsDetailCategoryLink = styled(Link)`
  color: #ff6b00;
  font-size: 1.125rem;
  font-weight: 700;
  text-decoration: underline;
`;
export const NewsDetailTitle = styled.h2`
  margin: 0;
  padding: 0.5rem 0 2rem;
  font-size: 2.5rem;
  letter-spacing: -0.075rem;
  color: #051619;
  line-height: 1.4;
  display: block;
  word-break: keep-all;
`;
export const NewsDetailTimeText = styled.span`
  font-size: 1.125rem;
  color: #051619;
`;
