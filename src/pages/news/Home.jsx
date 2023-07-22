<<<<<<< HEAD
import Header from "../../features/common/Header/Header";
import Layout from "../../features/common/Layout";
=======
import Layout from "../../features/common/Layout";
import Header from "../../features/common/Header/Header";
import HeaderNav from "../../features/common/Header/HeaderNav";
import HeaderCatagory from "../../features/common/Header/HeadeCatagory";
>>>>>>> c1bff1efca35b08c2d9b61fe3ddedc577da1a801
import { NewsItem, NewsList } from "../../features/news/newslist/NewsList";

const Home = () => {
  return (
    <Layout>
<<<<<<< HEAD
      <Header />
=======
      <Header>
        <HeaderNav />
        <HeaderCatagory />
      </Header>
>>>>>>> c1bff1efca35b08c2d9b61fe3ddedc577da1a801
      <NewsList>
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </NewsList>
    </Layout>
  );
};

export default Home;
