import { NewsMobileFooter } from "../../features/common/Footer/Footer";
import NewsHeader from "../../features/common/Header/Header";
import NewsHeaderNav from "../../features/common/Header/HeaderNav";
import Layout from "../../features/common/Layout";
import NewsDetail from "../../features/news/newsdetail/NewsDetail";
import NewsDetailDarkMode from "../../features/news/newsdetail/NewsDetailDarkMode";
import NewsDetailProgressBar from "../../features/news/newsdetail/NewsDetailProgressBar";

const Detail = () => {
  return (
    <Layout>
      {/* 헤더 영역 */}
      <NewsHeader>
        <NewsDetailProgressBar />
        <NewsDetailDarkMode />
        <NewsHeaderNav />
      </NewsHeader>
      {/* 컨테이너 영역 */}
      <NewsDetail />
      {/* 푸터 영역 */}
      <NewsMobileFooter />
    </Layout>
  );
};

export default Detail;
