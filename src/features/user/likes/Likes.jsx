import React, { useCallback, useContext, useState } from "react";
import Layout from "../../common/Layout";
import NewsHeader from "../../common/Header/Header";
import NewsHeaderNav from "../../common/Header/HeaderNav";
import NewsHeaderTitle from "../../common/Header/HeaderTitle";
import NewsHeaderDesc from "../../common/Header/HeaderDesc";
import { NewsItem } from "../../news/newslist/NewsList";
import { NewsFooter } from "../../common/Footer/Footer";
import { NewsListBox, StNewsList } from "../../news/newslist/style";
import { StyledAddButton, StyledAddButtonBox, StyledHeader } from "./style";
import { getLikes } from "../../../api/news";
import { useInfiniteData } from "../../../hooks/useInfiniteData";

const Likes = () => {
  const {
    results,
    isSuccess,
    isFetchingNextPage,
    loadMoreButtonOnClick,
    hasNextPage,
  } = useInfiniteData("likes", getLikes);
  return (
    <Layout>
      <NewsHeader>
        <NewsHeaderNav />
        <NewsHeaderTitle />
        <NewsHeaderDesc />
      </NewsHeader>
      <div>
        <NewsListBox>
          <StyledHeader className="posts-head">
            <h1>
              📙 읽었슴
              <span className="status">
                {isSuccess && results.length}개 읽었슴!
              </span>
            </h1>
          </StyledHeader>
          <StNewsList>
            {isSuccess &&
              results.map((item) => (
                <NewsItem
                  key={item._id}
                  id={item.id}
                  title={item.title}
                  src={item.image_url}
                  date={item.createdAt.split("T")[0]}
                />
              ))}
          </StNewsList>
        </NewsListBox>
        {hasNextPage && (
          <StyledAddButtonBox>
            <StyledAddButton onClick={loadMoreButtonOnClick}>
              {isFetchingNextPage ? "로딩 중..." : "더 보기"}
            </StyledAddButton>
          </StyledAddButtonBox>
        )}
      </div>
      <NewsFooter />
    </Layout>
  );
};

export default Likes;
