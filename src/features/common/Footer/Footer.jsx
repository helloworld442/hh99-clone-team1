import { Link } from "react-router-dom";
import { NewsAddButton } from "../Button/Button";
import {
  NewsFooterBox,
  NewsFooterLink,
  NewsFooterLinkBox,
  NewsFooterLinkLogo,
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
      <NewsAddButton>더보기</NewsAddButton>
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

export default NewsFooter;
