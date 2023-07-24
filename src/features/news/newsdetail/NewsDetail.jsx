import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Layout } from "./style";
import {
  NewsDetaiTitleBox,
  NewsDetailCategoryLink,
  NewsDetailTimeText,
  NewsDetailTitle,
  NewsDetailAsideBox,
  NewsDetailAsideLink,
  NewsDetailAsideText,
  NewsDetailHoverText,
  NewsDetailAsideIcon,
  NewsDetailFooterBox,
  NewsDetailFooterLogo,
  NewsDetailMemberInfo,
  NewsDetailMemberLink,
} from "./style";
import Header from "../../common/Header/Header";
import HeaderNav from "../../common/Header/HeaderNav";
import NewsFooter from "../../common/Footer/Footer";
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

      <NewsDetaiTitleBox>
        <NewsDetailCategoryLink to={navigate("/")}>정치</NewsDetailCategoryLink>
        <NewsDetailTitle>
          🔔띵동! ‘킬러 문항 배제’ 피자가 도착했습니다!
        </NewsDetailTitle>
        <NewsDetailTimeText>2023/07/22</NewsDetailTimeText>
      </NewsDetaiTitleBox>

      <NewsFooter />

      <NewsDetailAsideBox>
        <NewsDetailAsideLink to={navigate("/")}>
          <NewsDetailAsideText>안녕하세요</NewsDetailAsideText>
          <NewsDetailAsideIcon />
          <NewsDetailHoverText>뉴스레터 구독하기</NewsDetailHoverText>
        </NewsDetailAsideLink>
      </NewsDetailAsideBox>

      <NewsDetailFooterBox>
        <Link to={navigate("/")}>
          <NewsDetailFooterLogo src={logo} alt="newneek logo" />
        </Link>
        <NewsDetailMemberInfo>
          {memberData
            .sort((a, b) => a.member.localeCompare(b.member))
            .map((item) => {
              return (
                <NewsDetailMemberLink key={item.id} to={navigate("/")}>
                  {item.member}
                </NewsDetailMemberLink>
              );
            })}
        </NewsDetailMemberInfo>
      </NewsDetailFooterBox>
    </Layout>
  );
};
NewsDetailAsideBox.defaultProps = {
  onMouseEnter: (e) => {
    const currentTarget = e.currentTarget;
    const asideText = currentTarget.querySelector("span");
    const hoverText = currentTarget.querySelector("div");
    const icon = currentTarget.querySelector("svg");

    asideText.style.opacity = "0";
    icon.style.opacity = "0";
    hoverText.style.display = "block";
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
