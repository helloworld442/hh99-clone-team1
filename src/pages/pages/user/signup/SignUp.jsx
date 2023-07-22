import Layout from "../../../features/common/Layout";
import {
  GlobalStyle, PrimaryButton,
  StyledA,
  StyledButton,
  StyledDevider,
  StyledForm,
  StyledHeader, StyledInput,
  StyledSection,
  StyledSpan, StyledTextField
} from "../signin/style";

const SignUp = () => {
  return  <>
    <GlobalStyle/>
    <StyledSection>
      <StyledForm name="login">
        <StyledHeader>
          <StyledA href="/">
            <img src="/src/assets/logo.png" style={{height: "34px", width: "240px"}} alt="뉴닉"/>
          </StyledA>
        </StyledHeader>
        <StyledTextField>
          <StyledInput type="email" name="email" placeholder="이메일" value=""/>
        </StyledTextField>
        <StyledTextField className="textfield">
          <StyledInput type="password" name="password" placeholder="비밀번호 (8자 이상)" value=""/>
        </StyledTextField>
        <StyledTextField className="textfield">
          <StyledInput type="password" name="password" placeholder="비밀번호 확인(8자 이상)" value=""/>
        </StyledTextField>
        <StyledTextField className="textfield">
          <StyledInput type="password" name="password" placeholder="닉네임" value=""/>
        </StyledTextField>

      </StyledForm>
    </StyledSection>
  </>
};

export default SignUp;
