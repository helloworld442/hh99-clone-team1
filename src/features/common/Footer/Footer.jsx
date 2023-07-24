import { Link } from "react-router-dom";
import {
  NewsFooterBox,
  NewsFooterLink,
  NewsFooterLinkBox,
  NewsFooterLinkLogo,
  NewsMobileFooterList,
  NewsMobiledFooterBox,
  NewsMobiledFooterItem,
} from "./style";
import beforeImg from "../../../assets/footerimgbefore.png";
import afterImg from "../../../assets/footerimgafter.png";
import { useState } from "react";

const NewsFooter = () => {
  const [img, setImg] = useState(beforeImg);

  const onMouseEnter = () => setImg(afterImg);

  const onMouseLeave = () => setImg(beforeImg);

  return (
    <NewsFooterBox>
      <NewsFooterLinkBox>
        <NewsFooterLinkLogo
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <img src={img} />
        </NewsFooterLinkLogo>
        <NewsFooterLink>
          <Link>더 편하게 보고싶다면? 뉴닉 앱에서 만나요!</Link>
        </NewsFooterLink>
      </NewsFooterLinkBox>
    </NewsFooterBox>
  );
};

const NewsMobileFooter = () => {
  const [active, setActive] = useState(1);

  return (
    <NewsMobiledFooterBox>
      <NewsMobileFooterList>
        <Link to="/" onClick={() => setActive(1)}>
          <NewsMobiledFooterItem className={active === 1 ? "active" : null}>
            🏠<span>홈</span>
          </NewsMobiledFooterItem>
        </Link>
        <Link to="/search" onClick={() => setActive(2)}>
          <NewsMobiledFooterItem className={active === 2 ? "active" : null}>
            🔍<span>검색</span>
          </NewsMobiledFooterItem>
        </Link>
        <Link to="#" onClick={() => setActive(3)}>
          <NewsMobiledFooterItem className={active === 3 ? "active" : null}>
            🦔<span>마이페이지</span>
          </NewsMobiledFooterItem>
        </Link>
      </NewsMobileFooterList>
    </NewsMobiledFooterBox>
  );
};

export { NewsFooter, NewsMobileFooter };
