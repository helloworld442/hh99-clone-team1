import Card from "../../common/Card/Card";
import {
  NewsInfoButton,
  NewsInfoText,
  StNewsInfoBox,
  StNewsList,
} from "./style";

export const NewsList = ({ children }) => {
  return <StNewsList>{children}</StNewsList>;
};

export const NewsItem = () => {
  return <Card />;
};

export const NewsInfoBox = () => {
  return (
    <StNewsInfoBox>
      <NewsInfoText size="1.8rem">
        <span>한미정상회담</span>의 검색 결과에요.
      </NewsInfoText>
      <NewsInfoText size="1rem">🦔고슴이: 8개 찾았슴</NewsInfoText>
      <NewsInfoButton>최신순</NewsInfoButton>
    </StNewsInfoBox>
  );
};
