import { Link } from "react-router-dom";
import {
  HeaderCatagoryBox,
  HeaderCatagoryItem,
  HeaderCatagoryList,
} from "./style";

const catagoryList = [
  { title: "전체", src: "/" },
  { title: "테슬라", src: "/tag/tesla" },
  { title: "트위터", src: "/tag/twitter" },
  { title: "페이팔", src: "/tag/paypal" },
  { title: "스페이스X", src: "/tag/spaceX" },
  { title: "X.AI", src: "/tag/XAI" },
  { title: "도지코인", src: "/tag/doji" },
  { title: "뉴럴링크", src: "/tag/neuralLink" },
  { title: "하이퍼루프", src: "/tag/hyperloop" },
  { title: "솔라시티", src: "/tag/solarcity" },
  { title: "스타링크", src: "/tag/starlink" },
];

const NewsHeaderCatagory = () => {
  return (
    <HeaderCatagoryBox>
      <HeaderCatagoryList>
        {catagoryList.map((item, idx) => (
          <HeaderCatagoryItem key={idx}>
            <Link to={item.src}>{item.title}</Link>
          </HeaderCatagoryItem>
        ))}
      </HeaderCatagoryList>
    </HeaderCatagoryBox>
  );
};

export default NewsHeaderCatagory;
