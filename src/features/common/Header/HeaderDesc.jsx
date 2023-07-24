import {
  HeaderButtonBox,
  HeaderDescBox,
  HeaderDescButton,
  HeaderDescCheckBox,
  HeaderDescCheckInput,
  HeaderDescForm,
  HeaderDescImgBox,
  HeaderDescInnerBox,
  HeaderDescInput,
  HeaderDescLabel,
  HeaderDescText,
} from "./style";
import mainImg from "../../../assets/mainImg.png";

const NewsHeaderDesc = () => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) return;

  return (
    <HeaderDescBox>
      <HeaderDescInnerBox>
        <HeaderDescText>
          🚀 지금 구독하면 <span>내일 아침</span>에 읽을 수 있어요.
        </HeaderDescText>
        <HeaderDescText>
          ✨지금 <span>557,151명</span>이 뉴닉을 읽고 있어요.
        </HeaderDescText>
        <HeaderDescText>
          세상 돌아가는 소식, 알고는 싶지만 신문 볼 새 없이 바쁜 게 우리 탓은
          아니잖아요! <br />
          월/화/수/목/금 아침마다 세상 돌아가는 소식을 메일로 받아보세요.
        </HeaderDescText>
      </HeaderDescInnerBox>
      <HeaderDescForm>
        <HeaderDescInput type="text" name="email" placeholder="이메일 주소" />
        <HeaderDescInput type="text" name="name" placeholder="닉네임" />
        <HeaderDescCheckBox>
          <HeaderDescCheckInput id="check-1" />
          <label htmlFor="check-1"></label>
          <HeaderDescLabel>
            <a>개인정보 수집·이용</a>에 동의합니다
          </HeaderDescLabel>
        </HeaderDescCheckBox>
        <HeaderDescCheckBox>
          <HeaderDescCheckInput id="check-2" />
          <label htmlFor="check-2"></label>
          <HeaderDescLabel>
            <a>광고성 정보 수신</a>에 동의합니다
          </HeaderDescLabel>
        </HeaderDescCheckBox>
        <HeaderButtonBox>
          <HeaderDescButton>뉴스레터 무료로 구독하기</HeaderDescButton>
          <HeaderDescButton>앱 다운로드하기</HeaderDescButton>
        </HeaderButtonBox>
      </HeaderDescForm>
      <HeaderDescImgBox>
        <img src={mainImg} />
      </HeaderDescImgBox>
    </HeaderDescBox>
  );
};

export default NewsHeaderDesc;
