import Card from "../../common/Card/Card";
import { NewsListBox, StNewsList } from "./style";
import { getMainNews } from "../../../api/news";
import { useInfiniteData } from "../../../hooks/useInfiniteData";
import { NewsAddButton } from "../../common/Button/Button";
import { Link } from "react-router-dom";

export const NewsCategory = () => {
  const { results, hasNextPage, loadMoreButtonOnClick, isFetchingNextPage } =
    useInfiniteData("infinite-category", getMainNews);
  return (
    <NewsListBox>
      {/* 각 카테고리 이름 만들기 칸 */}
      {/* ..................... */}
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
        onClick={loadMoreButtonOnClick}
        loading={isFetchingNextPage}
        isHas={hasNextPage}
      >
        더보기
      </NewsAddButton>
    </NewsListBox>
  );
};

export const NewsItem = ({ id, title, src, date }) => {
  return (
    <Link to={"/post/" + id}>
      <Card title={title} src={src} date={date} />
    </Link>
  );
};
