import { Link } from "react-router-dom";
import {
  HeaderCatagoryBox,
  HeaderCatagoryItem,
  HeaderCatagoryList,
} from "./style";

const arr = [
  { title: "전체", src: "/" },
  { title: "사회", src: "/" },
  { title: "인권", src: "/" },
  { title: "라이프", src: "/" },
  { title: "건강", src: "/" },
  { title: "경제", src: "/" },
  { title: "세계", src: "/" },
  { title: "문화", src: "/" },
  { title: "환경", src: "/" },
  { title: "테크", src: "/" },
  { title: "노동", src: "/" },
];

const HeaderCatagory = () => {
  return (
    <HeaderCatagoryBox>
      <HeaderCatagoryList>
        {arr.map((item) => (
          <HeaderCatagoryItem>
            <Link to={"/posts" + item.src}>{item.title}</Link>
          </HeaderCatagoryItem>
        ))}
      </HeaderCatagoryList>
    </HeaderCatagoryBox>
  );
};

export default HeaderCatagory;
