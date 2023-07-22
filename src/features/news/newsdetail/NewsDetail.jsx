import React from "react";
import { HeaderCol, StHeaderNav } from "../../common/Header/style";
import { Link, useNavigate } from "react-router-dom";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import navLogo from "../../../assets/logo.png";
import { Layout } from "./style";
import {
  NewsDetaiTitleBox,
  NewsDetailCategoryLink,
  NewsDetailTimeText,
  NewsDetailTitle,
} from "./style";

const NewsDetail = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <HeaderCol>
        <StHeaderNav>
          {/* 헤더 로고 부분 */}
          <Link id="nav-logo">
            <img src={navLogo} />
          </Link>
          {/* 헤더 유저 및 검색창 버튼 부분 */}
          <div id="nav-user">
            <Link className="nav-link" to={navigate("/search")}>
              <SearchOutlined />
            </Link>
            <Link className="nav-link">
              <UserOutlined />
            </Link>
          </div>
        </StHeaderNav>
      </HeaderCol>
      <NewsDetaiTitleBox>
        <NewsDetailCategoryLink to={navigate("/")}>정치</NewsDetailCategoryLink>
        <NewsDetailTitle>
          🔔띵동! ‘킬러 문항 배제’ 피자가 도착했습니다!
        </NewsDetailTitle>
        <NewsDetailTimeText>2023/07/22</NewsDetailTimeText>
      </NewsDetaiTitleBox>
    </Layout>
  );
};

export default NewsDetail;
