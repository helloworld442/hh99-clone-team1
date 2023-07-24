import { Link } from "react-router-dom";
import { styled, keyframes } from "styled-components";
import { ArrowRightOutlined } from "@ant-design/icons";

export const Layout = styled.div`
  width: 100%;
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
  color: #051619;
  line-height: 1.4;
  display: block;
  word-break: keep-all;
`;
export const NewsDetailTimeText = styled.span`
  font-size: 1.125rem;
  color: #051619;
`;

export const NewsDetailAsideBox = styled.div`
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
`;
export const NewsDetailAsideLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 5%;
  background: #eae7de;
  text-align: left;
  font-size: 1.5rem;
  color: #051619;
  position: relative;
`;
export const NewsDetailAsideIcon = styled(ArrowRightOutlined)`
  max-width: 67px;
  flex-grow: 1;
  margin-left: 11px;
  margin-right: 3px;
  padding: 17px 0;
`;
export const NewsDetailAsideText = styled.span`
  text-indent: 100%;
  white-space: nowrap;
`;
export const NewsDetailHoverText = styled.div`
  position: absolute;
  white-space: nowrap;
  left: 0;
  display: none;
  animation: textcycle 2s linear infinite;
  @keyframes textcycle {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

export const NewsDetailFooterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  overflow: hidden;
  margin: 0 auto;
  padding: 4rem 5% 6rem;
  background: #eae7de;
  border-top: 1px solid #051619;
  box-sizing: border-box;
  position: relative;
  z-index: 4;
  @media (max-width: 1360px) {
    padding-top: 3rem;
    padding-bottom: 10rem;
  }
`;
export const NewsDetailFooterLogo = styled.img`
  width: 120px;
  height: 17px;
  object-fit: cover;
`;
export const NewsDetailMemberInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
export const NewsDetailMemberLink = styled(Link)`
  font-size: 16px;
  margin-top: 15px;
`;
