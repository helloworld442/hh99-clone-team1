import NewsHeader from "../../features/common/Header/Header";
import NewsHeaderNav from "../../features/common/Header/HeaderNav";
import Layout from "../../features/common/Layout";
import NewsDetail from "../../features/news/newsdetail/NewsDetail";
import NewsDetailProgressBar from "../../features/news/newsdetail/NewsDetailProgressBar";
const Detail = () => {
  return (
    <Layout>
      <NewsDetailProgressBar />
      <NewsHeader>
        <NewsHeaderNav />
      </NewsHeader>
      <NewsDetail />
    </Layout>
  );
};

export default Detail;
