import { Link } from "react-router-dom";
import styled from "styled-components";
import { ArrowRightOutlined } from "@ant-design/icons";

export const NewsDetailProgressBarBox = styled.div`
  width: 100%;
  height: 55px;
  background: #fff;
  border: none;
  border-bottom: 1px solid;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
`;
export const NewsDetailProgressBarInner = styled.div`
  width: 0%;
  height: 55px;
  background: #ff6b00;
  color: #000;
  overflow: hidden;
  transition: all 0.2s;
`;
export const NewsDetailProgressBarHeadLine = styled.h2`
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translateY(-110%);
  text-align: center;
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
  height: 72px;
  width: 100%;
  @media screen and (max-width: 1079px) {
    height: 79px;
  }
`;
export const NewsDetailAsideIcon = styled(ArrowRightOutlined)`
  max-width: 40px;
  margin-top: -50px;
`;
export const NewsDetailAsideText = styled.span`
  font-size: 1.25rem;
  line-height: 1.6;
  white-space: nowrap;
  margin-bottom: 50px;
  text {
    font-weight: 700;
  }
  @media screen and (max-width: 1079px) {
    font-size: 16px;
    span {
      line-height: 1.6;
      display: block;
    }
  }
`;
export const NewsDetailHoverText = styled.span`
  position: absolute;
  white-space: nowrap;
  left: 0;
  opacity: 0;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 50px;
  animation-iteration-count: infinite;
  span {
    margin-left: 50px;
    margin-right: 50px;
  }
`;
export const NewsDetailAsideLink = styled(Link)`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  padding: 1.25rem 5%;
  box-sizing: border-box;
  background: #eae7de;
  font-size: 1.5rem;
  color: #051619;
  &:hover ${NewsDetailAsideText}, &:hover ${NewsDetailAsideIcon} {
    opacity: 0;
  }
  &:hover ${NewsDetailHoverText} {
    opacity: 1;
    animation: textcycle 20s linear;
  }
  @-webkit-keyframes textcycle {
    from {
      left: -100%;
    }
    to {
      left: -50%;
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
