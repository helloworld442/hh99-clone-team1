import { Link } from "react-router-dom";
import {
  HeaderCatagoryBox,
  HeaderCatagoryItem,
  HeaderCatagoryList,
} from "./style";

const catagoryList = [
  { title: "전체", src: "/" },
  { title: "테슬라", src: "/tesla" },
  { title: "트위터", src: "/twitter" },
  { title: "페이팔", src: "/paypal" },
  { title: "스페이스X", src: "/spaceX" },
  { title: "X.AI", src: "/XAI" },
  { title: "도지코인", src: "/doji" },
  { title: "뉴럴링크", src: "/neuralLink" },
  { title: "하이퍼루프", src: "/hyperloop" },
  { title: "솔라시티", src: "/solarcity" },
  { title: "스타링크", src: "/starlink" },
];

const NewsHeaderCatagory = () => {
  return (
    <HeaderCatagoryBox>
      <HeaderCatagoryList>
        {catagoryList.map((item, idx) => (
          <HeaderCatagoryItem key={idx}>
            <Link to={"/tag" + item.src}>{item.title}</Link>
          </HeaderCatagoryItem>
        ))}
      </HeaderCatagoryList>
    </HeaderCatagoryBox>
  );
};

export default NewsHeaderCatagory;
