import Layout from "../../features/common/Layout";
import NewsHeader from "../../features/common/Header/Header";
import NewsHeaderNav from "../../features/common/Header/HeaderNav";
import NewsHeaderTitle from "../../features/common/Header/HeaderTitle";
import NewsHeaderDesc from "../../features/common/Header/HeaderDesc";
import NewsHeaderCatagory from "../../features/common/Header/HeadeCatagory";
import { NewsContainer, NewsList } from "../../features/news/newslist/NewsList";
import NewsFooter from "../../features/common/Footer/Footer";

const Home = () => {
  return (
    <Layout>
      {/* 헤더 영역 */}
      <NewsHeader>
        <NewsHeaderNav />
        <NewsHeaderTitle />
        <NewsHeaderDesc />
        <NewsHeaderCatagory />
      </NewsHeader>
      {/* 컨테이너 영역 */}
      <NewsContainer>
        <NewsList />
      </NewsContainer>
      {/* 푸터 영역 */}
      <NewsFooter />
    </Layout>
  );
};

export default Home;
