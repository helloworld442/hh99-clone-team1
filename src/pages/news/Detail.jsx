import { NewsMobileFooter } from "../../features/common/Footer/Footer";
import NewsHeader from "../../features/common/Header/Header";
import NewsHeaderNav from "../../features/common/Header/HeaderNav";
import Layout from "../../features/common/Layout";
import NewsDetail from "../../features/news/newsdetail/NewsDetail";

const Detail = () => {
  return (
    <Layout>
      <NewsHeader>
        <NewsHeaderNav />
      </NewsHeader>
      <NewsDetail />
      <NewsMobileFooter />
    </Layout>
  );
};

export default Detail;
