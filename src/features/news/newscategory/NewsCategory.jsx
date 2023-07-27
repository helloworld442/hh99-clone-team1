import Card from "../../common/Card/Card";
import { NewsListBox, StNewsList } from "./style";
import { getMainNews } from "../../../api/news";
import { useInfiniteData } from "../../../hooks/useInfiniteData";
import { NewsAddButton } from "../../common/Button/Button";
import { Link, useParams } from "react-router-dom";

export const NewsCategory = () => {
  const { path } = useParams();
  console.log(path);
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
            category={item.category}
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

export const NewsItem = ({ id, title, src, date, category }) => {
  return (
    <Link to={"/post/" + id}>
      <Card title={title} src={src} date={date} category={category} />
    </Link>
  );
};
