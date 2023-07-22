import Card from "../../common/Card/Card";
import { StNavList, StNavListBox } from "./style";

export const NewsList = ({ children }) => {
  return (
    <StNavListBox>
      <StNavList>{children}</StNavList>
    </StNavListBox>
  );
};

export const NewsItem = () => {
  return <Card />;
};
