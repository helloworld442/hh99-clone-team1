import {
  NewsFooter,
  NewsMobileFooter,
} from "../../features/common/Footer/Footer";
import NewsHeader from "../../features/common/Header/Header";
import NewsHeaderNav from "../../features/common/Header/HeaderNav";
import Layout from "../../features/common/Layout";
import {NewsItem} from "../../features/news/newslist/NewsList";
import {useParams} from "react-router-dom";
import NewsHeaderTitle from "../../features/common/Header/HeaderTitle";
import NewsHeaderDesc from "../../features/common/Header/HeaderDesc";
import {NewsListBox, StNewsList} from "../../features/news/newslist/style";
import {StyledAddButton, StyledAddButtonBox, StyledHeader} from "../../features/user/reads/style";
import React from "react";
import {getCategoryResults} from "../../api/news";
import {useInfiniteQuery} from "react-query";
import NewsHeaderCatagory from "../../features/common/Header/HeadeCatagory";

const Category = () => {
  const { tagId } = useParams();
  const {
    data,
    isSuccess,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    ["category", tagId],
    ({ pageParam = 1 }) => getCategoryResults(tagId, pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        const morePagesExist = allPages.length < lastPage.totalPages;
        return morePagesExist ? allPages.length + 1 : false;
      },
    }
  );

  let results = [];
  if (isSuccess) {
    data.pages.forEach(page => results.push(...page.content));
  }

  const loadMoreButtonOnClick = () => {
    fetchNextPage();
  };

  return (
    <Layout>
      <NewsHeader>
        <NewsHeaderNav />
        <NewsHeaderTitle />
        <NewsHeaderDesc />
        <NewsHeaderCatagory/>
      </NewsHeader>
      <div>
        <NewsListBox>
          <StyledHeader className="posts-head">
            <h1>
              {tagId}
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
      <NewsMobileFooter />
    </Layout>
  );
};

export default Category;
