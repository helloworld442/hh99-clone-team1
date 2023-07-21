import Header from "../../features/common/Header";
import Layout from "../../features/common/Layout";
import { NewsItem, NewsList } from "../../features/news/newslist/NewsList";

const Home = () => {
  return (
    <Layout>
      <Header />
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
    </Layout>
  );
};

export default Home;
