import { Link } from "react-router-dom";
import navLogo from "../../../assets/logo.png";
import { UserOutlined, SearchOutlined } from "@ant-design/icons";
import {
  HeaderCatagoryBox,
  HeaderCatagoryItem,
  HeaderCatagoryList,
  HeaderCol,
  StHeaderNav,
} from "./style";

const Header = () => {
  console.log("YEAH!");
  console.log("YEAHYEAH");
  return (
    <HeaderCol>
      <HeaderNav />
      <HeaderCatagory />
    </HeaderCol>
  );
};

const HeaderNav = () => {
  return (
    <StHeaderNav>
      {/* 헤더 로고 부분 */}
      <Link id="nav-logo">
        <img src={navLogo} />
      </Link>
      {/* 헤더 유저 및 검색창 버튼 부분 */}
      <div id="nav-user">
        <Link className="nav-link">
          <SearchOutlined />
        </Link>
        <Link className="nav-link">
          <UserOutlined />
        </Link>
      </div>
    </StHeaderNav>
  );
};

const HeaderCatagory = () => {
  const arr = ["태크", "환경", "경제", "연애", "인권", "사회", "문화"];
  return (
    <HeaderCatagoryBox>
      <HeaderCatagoryList>
        {arr.map((item) => (
          <HeaderCatagoryItem>
            <Link to="/">{item}</Link>
          </HeaderCatagoryItem>
        ))}
      </HeaderCatagoryList>
    </HeaderCatagoryBox>
  );
};

export default Header;
