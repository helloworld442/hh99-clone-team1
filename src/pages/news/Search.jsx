import { NewsMobileFooter } from "../../features/common/Footer/Footer";
import Layout from "../../features/common/Layout";
import NewsSearch from "../../features/news/newssearch/NewsSearch";
const Search = () => {
  return (
    <Layout>
      <NewsSearch />
      <NewsMobileFooter />
    </Layout>
  );
};

export default Search;
