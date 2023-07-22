import Layout from "../../features/common/Layout";
import Header from "../../features/common/Header/Header";
import HeaderNav from "../../features/common/Header/HeaderNav";
import {
  NewsInfoBox,
  NewsItem,
  NewsList,
} from "../../features/news/newslist/NewsList";
import { NewsListBox } from "../../features/news/newslist/style";

const Post = () => {
  return (
    <Layout>
      <Header>
        <HeaderNav />
      </Header>
      <NewsListBox>
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
      </NewsListBox>
    </Layout>
  );
};

export default Post;
