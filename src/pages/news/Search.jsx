import { NewsMobileFooter } from "../../features/common/Footer/Footer";
import Layout from "../../features/common/Layout";
import NewsSearch from "../../features/news/newssearch/NewsSearch";
const Search = () => {
  return (
    <Layout>
      {/* 컨테이너 영역 */}
      <NewsSearch />
      {/* 푸터 영역 */}
      <NewsMobileFooter />
    </Layout>
  );
};

export default Search;
