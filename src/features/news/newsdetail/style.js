import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { ArrowRightOutlined } from "@ant-design/icons";

export const DarkModeContainer = styled.div`
  ${(props) =>
    props.dark &&
    css`
      filter: invert(100%);
    `}
`;
export const NewsDetailDarkModeBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95px;
  position: absolute;
  right: 12rem;
`;
export const NewsDetailDarkModeIcon = styled.div`
  flex-grow: 1;
  text-indent: -9999px;
  background-image: url("https://newneek.co/static/media/brightness.8154161a.svg");
  background-repeat: no-repeat;
  background-size: contain;
`;
export const NewsDetailDarkModeToggleBox = styled.div`
  text-indent: -9999px;
  width: 51px;
  height: 32px;
  border-radius: 99px;
  background-color: #bdbdbd;
  position: relative;
  top: inherit;
  left: inherit;
  cursor: pointer;
`;
export const NewsDetailDarkModeToggleAction = styled.div`
  position: absolute;
  top: 2px;
  left: ${(props) => (props.dark ? "20px" : "2px")};
  display: block;
  width: 27px;
  height: 27px;
  border-radius: 100%;
  background-color: #fff;
`;

export const NewsDetailProgressBarBox = styled.div`
  ${(props) =>
    props.dark &&
    css`
      filter: invert(100%);
    `}
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 55px;
  background: #fff;
  border: none;
  border-bottom: 1px solid;
  z-index: 9999;
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
  margin-bottom: 48px;
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
  font-size: 14px;
  font-weight: 600;
  color: #051619;
`;

export const NewsDetailContentBox = styled.div`
  max-width: 45.7142rem;
  height: auto;
  margin: 0 auto;
  object-fit: cover;
  overflow: hidden;
`;
export const NewsDetailContentImg = styled.div`
  color: transparent !important;
  width: 550px;
  height: 450px;
  margin: 0 auto;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${(props) => props.background});
  @media screen and (max-width: 1079px) {
    width: 520px;
    height: 420px;
  }
  @media screen and (max-width: 580px) {
    width: 470px;
    height: 390px;
  }
`;
export const NewsDetailContent = styled.div`
  width: 550px;
  word-break: break-all;
  height: auto;
  margin: 0 auto;
`;
export const NewsDetailContentHead = styled.h2`
  font-size: 1.7142rem;
  line-height: 1.25;
  margin: 60px 0;
  @media screen and (max-width: 1079px) {
    font-size: 20px;
  }
`;
export const NewsDetailContentP = styled.p`
  color: #051619;
  font-size: 16px;
  line-height: 1.625;
  white-space: wrap;
  @media screen and (max-width: 1079px) {
    font-size: 14px;
  }
`;

export const NewsDetailAsideBox = styled.div`
  position: relative;
  height: 72px;
  overflow: hidden;
  width: 100%;
  line-height: 1.8;
  color: #051619;
  font-size: 14px;
  @media screen and (max-width: 1079px) {
    height: 79px;
  }
`;
export const NewsDetailAsideIcon = styled(ArrowRightOutlined)`
  max-width: 67px;
  flex-grow: 1;
  margin-left: 11px;
  margin-right: 3px;
  margin-top: -10px;
  padding: 17px 0;
  box-sizing: border-box;
  font-size: 1.25rem;
  line-height: 1.6;
`;
export const NewsDetailAsideText = styled.span`
  font-size: 20px;
  line-height: 1.6;
  text-align: left;
  color: #051619;
  margin-top: -20px;
  text {
    font-weight: 700;
  }
  @media screen and (max-width: 1079px) {
    font-size: 16px;
    span {
      display: block;
    }
  }
`;
export const NewsDetailHoverText = styled.span`
  position: absolute;
  white-space: nowrap;
  left: 0;
  opacity: 0;
  animation-iteration-count: infinite;
  margin-top: -20px;
  font-size: 20px;
  font-weight: 600;
  @media screen and (max-width: 1079px) {
    font-size: 16px;
  }
  span {
    margin-left: 50px;
    margin-right: 50px;
  }
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

  &:hover ${NewsDetailAsideText}, &:hover ${NewsDetailAsideIcon} {
    opacity: 0;
  }
  &:hover ${NewsDetailHoverText} {
    opacity: 1;
    animation-name: textcycle;
    animation-timing-function: linear;
    animation-duration: 20s;
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
  font-weight: 600;
`;
