import { Link } from "react-router-dom";
import {
  HeaderCatagoryBox,
  HeaderCatagoryItem,
  HeaderCatagoryList,
} from "./style";
import { useState } from "react";

const catagoryList = [
  { title: "전체", src: "/" },
  { title: "테슬라", src: "/tag/테슬라" },
  { title: "트위터", src: "/tag/트위터" },
  { title: "페이팔", src: "/tag/페이팔" },
  { title: "스페이스X", src: "/tag/스페이스x" },
  { title: "X.AI", src: "/tag/X.AI" },
  { title: "도지코인", src: "/tag/도지코인" },
  { title: "뉴럴링크", src: "/tag/뉴럴링크" },
  { title: "하이퍼루프", src: "/tag/하이퍼루프" },
  { title: "솔라시티", src: "/tag/솔라시티" },
  { title: "스타링크", src: "/tag/스타링크" },
];

const NewsHeaderCatagory = () => {
  const [active, setActive] = useState(0);
  return (
    <HeaderCatagoryBox>
      <HeaderCatagoryList>
        {catagoryList.map((item, idx) => (
          <HeaderCatagoryItem
            key={idx}
            onClick={() => setActive(idx)}
            className={active === idx ? "active" : null}
          >
            <Link to={item.src}>{item.title}</Link>
          </HeaderCatagoryItem>
        ))}
      </HeaderCatagoryList>
    </HeaderCatagoryBox>
  );
};

export default NewsHeaderCatagory;
