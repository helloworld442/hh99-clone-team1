import { NewsMobileFooter } from "../../features/common/Footer/Footer";
import NewsHeader from "../../features/common/Header/Header";
import NewsHeaderNav from "../../features/common/Header/HeaderNav";
import Layout from "../../features/common/Layout";
import NewsDetail from "../../features/news/newsdetail/NewsDetail";
import { NewsContainer } from "../../features/news/newslist/NewsList";
import NewsDetailProgressBar from "../../features/news/newsdetail/NewsDetailProgressBar";

const Detail = () => {
  return (
    <Layout>
      {/* 허데영엉 */}
      <NewsHeader>
        <NewsDetailProgressBar />
        <NewsHeaderNav />
      </NewsHeader>
      {/* 컨테이너 영역 */}
      <NewsContainer>
        <NewsDetail />
      </NewsContainer>
      {/* 푸터 영역 */}
      <NewsMobileFooter />
    </Layout>
  );
};

export default Detail;
