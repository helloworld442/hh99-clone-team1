import { useInfiniteQuery } from "react-query";
import { NewsAddButton } from "../../common/Button/Button";
import { NewsItem } from "../newslist/NewsList";
import { NewsListBox, StNewsList } from "../newslist/style";
import { getSearchResults } from "../../../api/news";
import { NewsInfoButton, NewsInfoText, StNewsInfoBox } from "./style";
import { useSearchParams } from "react-router-dom";

const NewsPost = () => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  let results = [];
  const { data, isSuccess, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery(
      "infinite-post",
      ({ pageParam = 1 }) => getSearchResults(keyword, pageParam),
      {
        getNextPageParam: (lastPage, allPages) => {
          const morePagesExist = allPages.length < lastPage.totalPages;
          return morePagesExist ? allPages.length + 1 : false;
        },
      }
    );

  const onClickNextPage = () => {
    fetchNextPage();
  };

  if (isSuccess) {
    data.pages.forEach((page) => results.push(...page.content));
  }

  console.log(data.pages[0].totalElements);

  return (
    <>
      <NewsInfoBox
        title={keyword}
        length={data && data.pages[0].totalElements}
      />
      <NewsListBox>
        <StNewsList>
          {results.map((item) => (
            <NewsItem
              key={item._id}
              id={item.id}
              title={item.title}
              src={item.image_url}
              date={item.date}
            />
          ))}
        </StNewsList>
        <NewsAddButton
          onClick={onClickNextPage}
          isLoading={isFetchingNextPage}
          isHas={hasNextPage}
        />
      </NewsListBox>
    </>
  );
};

const NewsInfoBox = ({ title, length }) => {
  return (
    <StNewsInfoBox>
      <NewsInfoText size="1.8rem">
        <span>{title}</span>의 검색 결과에요.
      </NewsInfoText>
      <NewsInfoText size="1.1rem">🦔고슴이: {length}개 찾았슴</NewsInfoText>
      <NewsInfoButton>최신순</NewsInfoButton>
    </StNewsInfoBox>
  );
};

export default NewsPost;
