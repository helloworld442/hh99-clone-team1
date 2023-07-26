import React from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
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
import logo from "../../../assets/logo.png";
import { NewsFooter } from "../../common/Footer/Footer";
import { useQuery} from "react-query";
import {getNews} from "../../../api/news";

const textArr = [
  "뉴스레터 구독하기",
  "뉴스레터 구독하기",
  "뉴스레터 구독하기",
  "뉴스레터 구독하기",
  "뉴스레터 구독하기",
  "뉴스레터 구독하기",
  "뉴스레터 구독하기",
  "뉴스레터 구독하기",
  "뉴스레터 구독하기",
  "뉴스레터 구독하기",
  "뉴스레터 구독하기",
  "뉴스레터 구독하기",
  "뉴스레터 구독하기",
  "뉴스레터 구독하기",
  "뉴스레터 구독하기",
  "뉴스레터 구독하기",
  "뉴스레터 구독하기",
  "뉴스레터 구독하기",
  "뉴스레터 구독하기",
  "뉴스레터 구독하기",
  "뉴스레터 구독하기",
  "뉴스레터 구독하기",
  "뉴스레터 구독하기",
  "뉴스레터 구독하기",
  "뉴스레터 구독하기",
  "뉴스레터 구독하기",
  "뉴스레터 구독하기",
  "뉴스레터 구독하기",
  "뉴스레터 구독하기",
  "뉴스레터 구독하기",
  "뉴스레터 구독하기",
  "뉴스레터 구독하기",
  "뉴스레터 구독하기",
  "뉴스레터 구독하기",
  "뉴스레터 구독하기",
  "뉴스레터 구독하기",
  "뉴스레터 구독하기",
  "뉴스레터 구독하기",
  "뉴스레터 구독하기",
  "뉴스레터 구독하기",
  "뉴스레터 구독하기",
  "뉴스레터 구독하기",
];

const memberData = [
  { id: 1, member: "김도원" },
  { id: 2, member: "김도준" },
  { id: 3, member: "김민승" },
  { id: 4, member: "박성균" },
  { id: 5, member: "박준영" },
  { id: 6, member: "육정백" },
  { id: 7, member: "이의진" },
  { id: 8, member: "정기현" },
];

const NewsDetail = () => {
  const navigate = useNavigate();
  const { postId } = useParams();
  const {data, isSuccess} = useQuery(
    ["detail",postId ],
    () => getNews(postId));

  return (
    <>
       <NewsDetaiTitleBox>
        <NewsDetailCategoryLink to="/">정치</NewsDetailCategoryLink>
        <NewsDetailTitle>
          🔔띵동! ‘킬러 문항 배제’ 피자가 도착했습니다!
        </NewsDetailTitle>
        <NewsDetailTimeText>2023/07/22</NewsDetailTimeText>
      </NewsDetaiTitleBox>
      <NewsFooter to="/" />
      <NewsDetailAsideBox>
        <NewsDetailAsideLink to="/">
          <NewsDetailAsideText>안녕하세요</NewsDetailAsideText>
          <NewsDetailAsideIcon />
          <NewsDetailHoverText>
            {textArr.map((item, idx) => (
              <span key={idx}>{item}</span>
            ))}
          </NewsDetailHoverText>
        </NewsDetailAsideLink>
      </NewsDetailAsideBox>
      <NewsDetailFooterBox>
        <Link to="/" onClick={() => navigate("/")}>
          <NewsDetailFooterLogo src={logo} alt="newneek logo" />
        </Link>
        <NewsDetailMemberInfo>
          {memberData.map((item) => {
            return (
              <NewsDetailMemberLink key={item.id} to="/">
                {item.member}
              </NewsDetailMemberLink>
            );
          })}
        </NewsDetailMemberInfo>
      </NewsDetailFooterBox>
    </>
  );
};
export default NewsDetail;
