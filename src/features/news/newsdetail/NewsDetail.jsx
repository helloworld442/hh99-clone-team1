import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Layout } from "./style";
import {
  StNewsDetaiTitleBox,
  StNewsDetailCategoryLink,
  StNewsDetailTimeText,
  StNewsDetailTitle,
  AsideBox,
  AsideLink,
  AsideText,
  HoverText,
  AsideIcon,
  StFooterBox,
  StFooterLogo,
  StMemberInfo,
  StMemberLink,
} from "./style";
import Header from "../../common/Header/Header";
import HeaderNav from "../../common/Header/HeaderNav";
import logo from "../../../assets/logo.png";

const NewsDetail = () => {
  const navigate = useNavigate();
  const [memberData, setMemberData] = useState([
    { id: 1, member: "박준영" },
    { id: 2, member: "김도준" },
    { id: 3, member: "박성균" },
    { id: 4, member: "이의진" },
    { id: 5, member: "정기현" },
    { id: 6, member: "김도원" },
    { id: 7, member: "김민승" },
    { id: 8, member: "육정백" },
  ]);

  return (
    <Layout>
      <Header />
      <HeaderNav />
      <StNewsDetaiTitleBox>
        <StNewsDetailCategoryLink to={navigate("/")}>
          정치
        </StNewsDetailCategoryLink>
        <StNewsDetailTitle>
          🔔띵동! ‘킬러 문항 배제’ 피자가 도착했습니다!
        </StNewsDetailTitle>
        <StNewsDetailTimeText>2023/07/22</StNewsDetailTimeText>
      </StNewsDetaiTitleBox>

      <AsideBox>
        <AsideLink to={navigate("/")}>
          <AsideText>안녕하세요</AsideText>
          <AsideIcon />
          <HoverText>뉴스레터 구독하기</HoverText>
        </AsideLink>
      </AsideBox>

      <StFooterBox>
        <Link to={navigate("/")}>
          <StFooterLogo src={logo} alt="newneek logo" />
        </Link>
        <StMemberInfo>
          {memberData
            .sort((a, b) => a.member.localeCompare(b.member))
            .map((item) => {
              return (
                <StMemberLink key={item.id} to={navigate("/")}>
                  {item.member}
                </StMemberLink>
              );
            })}
        </StMemberInfo>
      </StFooterBox>
    </Layout>
  );
};
AsideBox.defaultProps = {
  onMouseEnter: (e) => {
    const currentTarget = e.currentTarget;
    const asideText = currentTarget.querySelector("span");
    const hoverText = currentTarget.querySelector("div");
    const icon = currentTarget.querySelector("svg");

    asideText.style.opacity = "0";
    icon.style.opacity = "0";
    hoverText.style.display = "block";
    hoverText.style.animation = "hover 8s linear infinite";
  },
  onMouseLeave: (e) => {
    const currentTarget = e.currentTarget;
    const asideText = currentTarget.querySelector("span");
    const hoverText = currentTarget.querySelector("div");
    const icon = currentTarget.querySelector("svg");

    asideText.style.opacity = "1";
    icon.style.opacity = "1";
    hoverText.style.display = "none";
    hoverText.style.animation = "none";
  },
};
export default NewsDetail;
