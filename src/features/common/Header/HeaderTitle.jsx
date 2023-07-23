import { HeaderTitleText } from "./style";

const NewsHeaderTitle = () => {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) {
    return (
      <HeaderTitleText>우리가 시간이 없지,세상이 안 궁금하냐!</HeaderTitleText>
    );
  }
  return;
};

export default NewsHeaderTitle;
