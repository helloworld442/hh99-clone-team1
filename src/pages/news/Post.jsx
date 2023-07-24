import Layout from "../../features/common/Layout";
import HeaderNav from "../../features/common/Header/HeaderNav";
import NewsHeader from "../../features/common/Header/Header";
import {
  NewsFooter,
  NewsMobileFooter,
} from "../../features/common/Footer/Footer";
import NewsPost from "../../features/news/newspost/NewsPost";

const Post = () => {
  return (
    <Layout>
      {/* 헤더 영역 */}
      <NewsHeader>
        <HeaderNav />
      </NewsHeader>
      {/* 컨테이너 영역 */}
      <NewsPost />
      {/* 푸터 영역 */}
      <NewsFooter />
      <NewsMobileFooter />
    </Layout>
  );
};

export default Post;
