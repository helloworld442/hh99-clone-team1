import { createContext } from "react";
import Card from "../../common/Card/Card";
import {
  NewsInfoButton,
  NewsInfoText,
  NewsListBox,
  StNewsInfoBox,
  StNewsList,
} from "./style";

const NewsListContext = createContext();

export const NewsContainer = ({ children }) => {
  return <NewsListContext.Provider>{children}</NewsListContext.Provider>;
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
  return (
    <NewsListBox>
      <StNewsList>
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </StNewsList>
    </NewsListBox>
  );
};

export const NewsItem = () => {
  return <Card />;
};
