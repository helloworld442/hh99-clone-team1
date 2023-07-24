import { useInfiniteQuery } from "react-query";
import { NewsAddButton } from "../../common/Button/Button";
import { NewsItem } from "../newslist/NewsList";
import { NewsListBox, StNewsList } from "../newslist/style";
import { getSearchResults } from "../../../api/news";
import { NewsInfoButton, NewsInfoText, StNewsInfoBox } from "./style";

const NewsPost = () => {
  let results = [];
  const { isSuccess, data, isFetchingNexPage, fethcNextPage, hasNextPage } =
    useInfiniteQuery(
      "infinite-post",
      ({ pageParam = 1 }) => getSearchResults("안녕", pageParam),
      {
        getNextPageParam: (lastPage, allPages) => {
          const morePagesExist = allPages.length < lastPage.totalPages;
          return morePagesExist ? allPages.length + 1 : false;
        },
      }
    );

  const onClickNextPage = () => {
    fethcNextPage();
  };

  if (isSuccess) {
    data.pages.forEach((page) => results.push(...page.content));
  }

  return (
    <>
      <NewsInfoBox title="안녕" length={results.length} />
      <NewsListBox>
        <StNewsList>
          {results.map((item) => (
            <NewsItem
              key={item._id}
              id={item.id}
              title={item.title}
              src={item.image_url}
              date={item.createdAt.split("T")[0]}
            />
          ))}
        </StNewsList>
        <NewsAddButton
          onClick={onClickNextPage}
          isLoading={isFetchingNexPage}
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
