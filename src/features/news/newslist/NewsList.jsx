import { createContext, useContext, useEffect, useState } from "react";
import Card from "../../common/Card/Card";
import {
  NewsInfoButton,
  NewsInfoText,
  NewsListBox,
  StNewsInfoBox,
  StNewsList,
} from "./style";
import useFetch from "../../../hooks/useFetch";
import { getMainNews } from "../../../api/news";

export const NewsListContext = createContext();

export const NewsContainer = ({ children }) => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [show, setShow] = useState(true);
  const [result, fetchData] = useFetch(getMainNews, page);

  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    if (result.success) {
      setData([...data, ...result.success.result]);
    }
  }, [result.success]);

  useEffect(() => {
    if (result.success && result.success.result.length < 12) {
      setShow(false);
    }
  }, [result.success]);

  const onClickButton = () => setPage(page + 1);

  return (
    <NewsListContext.Provider value={{ data, show, onClickButton }}>
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
  const { data } = useContext(NewsListContext);
  console.log(data);
  return (
    <NewsListBox>
      <StNewsList>
        {data.map((item) => (
          <NewsItem
            key={item._id}
            title={item.title}
            src={item.image_url}
            date={item.createdAt.split("T")[0]}
          />
        ))}
      </StNewsList>
    </NewsListBox>
  );
};

export const NewsItem = ({ title, src, date }) => {
  return <Card title={title} src={src} date={date} />;
};
