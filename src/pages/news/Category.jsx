import {
  NewsFooter,
  NewsMobileFooter,
} from "../../features/common/Footer/Footer";
import NewsHeaderCatagory from "../../features/common/Header/HeadeCatagory";
import NewsHeader from "../../features/common/Header/Header";
import NewsHeaderNav from "../../features/common/Header/HeaderNav";
import Layout from "../../features/common/Layout";
import { NewsList } from "../../features/news/newslist/NewsList";

const Category = () => {
  return (
    <Layout>
      <NewsHeader>
        <NewsHeaderNav />
        <NewsHeaderCatagory />
      </NewsHeader>
      <NewsList />
      <NewsFooter />
      <NewsMobileFooter />
    </Layout>
  );
};

export default Category;
