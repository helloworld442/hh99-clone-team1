import React from 'react';
import Header from "../../common/Header/Header";
import HeaderNav from "../../common/Header/HeaderNav";
import HeaderCatagory from "../../common/Header/HeadeCatagory";
import {NewsListCol} from "../../news/newslist/style";
import {NewsItem, NewsList} from "../../news/newslist/NewsList";
import Layout from "../../common/Layout";

const Likes = () => {
  return (
    <Layout>
      <Header>
        <HeaderNav />
        <HeaderCatagory />
      </Header>
      <NewsListCol>
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
      </NewsListCol>
    </Layout>
  );
};

export default Likes;
