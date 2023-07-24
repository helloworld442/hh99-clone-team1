import Layout from "../../features/common/Layout";
import HeaderNav from "../../features/common/Header/HeaderNav";
import NewsHeader from "../../features/common/Header/Header";
import { NewsInfoBox, NewsList } from "../../features/news/newslist/NewsList";
import {
  NewsFooter,
  NewsMobileFooter,
} from "../../features/common/Footer/Footer";
import { NewsAddButton } from "../../features/common/Button/Button";

const Post = () => {
  return (
    <Layout>
      {/* 헤더 영역 */}
      <NewsHeader>
        <HeaderNav />
      </NewsHeader>
      {/* 컨테이너 영역 */}
      <NewsInfoBox />
      <NewsList />
      {/* 푸터 영역 */}
      <NewsFooter />
      <NewsMobileFooter />
    </Layout>
  );
};

export default Post;
