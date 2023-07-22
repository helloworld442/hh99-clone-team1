import Layout from "../../features/common/Layout";
import Header from "../../features/common/Header/Header";
import HeaderNav from "../../features/common/Header/HeaderNav";
import HeaderCatagory from "../../features/common/Header/HeadeCatagory";
import { NewsItem, NewsList } from "../../features/news/newslist/NewsList";
import { NewsListBox } from "../../features/news/newslist/style";
import { FooterBox } from "../../features/common/Footer/Footer";
import { AddButton } from "../../features/common/Button/Button";

const Home = () => {
  return (
    <Layout>
      <Header>
        <HeaderNav />
        <HeaderCatagory />
      </Header>
      <NewsListBox>
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
      </NewsListBox>
      <FooterBox>
        <AddButton>더보기</AddButton>
      </FooterBox>
    </Layout>
  );
};

export default Home;
