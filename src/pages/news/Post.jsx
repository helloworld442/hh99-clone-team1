import Layout from "../../features/common/Layout";
import Header from "../../features/common/Header/Header";
import HeaderNav from "../../features/common/Header/HeaderNav";
import {
  NewsInfoBox,
  NewsItem,
  NewsList,
} from "../../features/news/newslist/NewsList";
import { NewsListCol } from "../../features/news/newslist/style";

const Post = () => {
  return (
    <Layout>
      <Header>
        <HeaderNav />
      </Header>
      <NewsListCol>
        <NewsInfoBox />
        <NewsList>
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
        </NewsList>
      </NewsListCol>
    </Layout>
  );
};

export default Post;
