import React from 'react';
import Header from "../../common/Header/Header";
import HeaderNav from "../../common/Header/HeaderNav";
import Layout from "../../common/Layout";
import {GlobalStyle} from "../newpwd/style";
import {History, HistoryChange, HistoryHead, HistoryHeadActions, HistoryStatics, HistoryUsername} from "./style";
import {useSelector} from "react-redux";
import {useQuery} from "react-query";
import {getLikeList, getReadList} from "../../../api/user";

const Profile = () => {
  const {user} = useSelector((state) => state.user);
  const {data: likeData, isSuccess: likeSucs} = useQuery(
    ["like", user.email],
    () => getLikeList(user.email));
  const {data: readData, isSuccess: readSucs} = useQuery(
    ["read", user.email],
    () => getReadList(user.email));
  return (
    <Layout>
      <Header>
        <HeaderNav/>
      </Header>
      <GlobalStyle/>
      <History>
        <HistoryHead>
          <HistoryUsername>오늘 레터 읽고 왔슴?<br/><b>{user.nickname} 🦔 뉴니커!</b></HistoryUsername>
          <span>{user.email}</span>
          <HistoryHeadActions>
            <HistoryChange href="/setting">프로필 설정하기</HistoryChange>
          </HistoryHeadActions>
        </HistoryHead>
        <HistoryStatics name="read" href="/reads">
          <div><span role="img" aria-label="">📙</span>&nbsp; 끝까지 읽었슴</div>
          <div>{readSucs && readData.length}</div>
        </HistoryStatics>
        <HistoryStatics name="like" href="/likes">
          <div><span role="img" aria-label="">🧡</span>&nbsp; 좋았슴</div>
          <div>{likeSucs && likeData.length}</div>
        </HistoryStatics>
      </History>
    </Layout>
  );
};

export default Profile;
