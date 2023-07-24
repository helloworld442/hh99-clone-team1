import { createContext, useContext } from "react";
import Card from "../../common/Card/Card";
import {
  NewsInfoButton,
  NewsInfoText,
  NewsListBox,
  StNewsInfoBox,
  StNewsList,
} from "./style";
import { getMainNews } from "../../../api/news";
import { Link } from "react-router-dom";
import { useInfiniteData } from "../../../hooks/useInfiniteData";

export const NewsListContext = createContext();

export const NewsContainer = ({ children }) => {
  const response = useInfiniteData("infinite-main", getMainNews);
  return (
    <NewsListContext.Provider value={response}>
      {children}
    </NewsListContext.Provider>
  );
};

export const NewsInfoBox = () => {
  return (
    <StNewsInfoBox>
      <NewsInfoText size="1.8rem">
        <span>한미정상회담</span>의 검색 결과에요.
      </NewsInfoText>
      <NewsInfoText size="1.1rem">🦔고슴이: 8개 찾았슴</NewsInfoText>
      <NewsInfoButton>최신순</NewsInfoButton>
    </StNewsInfoBox>
  );
};

export const NewsList = () => {
  const { results } = useContext(NewsListContext);
  return (
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
