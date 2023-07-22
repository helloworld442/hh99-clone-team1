import {
  GlobalStyle,
  PrimaryButton,
  StyledA,
  StyledButton,
  StyledDevider,
  StyledForm,
  StyledHeader,
  StyledInput,
  StyledSection, StyledSpan,
  StyledTextField
} from "./style";
import {useNavigate} from "react-router-dom";
import {useMutation} from "react-query";
import {userLogin} from "../../../../api/user";
import {useState} from "react";

const SignIn = () => {

  const navigate = useNavigate();
  const mutation = useMutation(userLogin, {
    onSuccess: () => {
      navigate("/SignIn");
    },
  });

  const [error, setError] = useState({
    email: '',
    password: '',
  });

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const isEmailValid = (email) => {
    // Simple regular expression for email validation
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return emailRegex.test(email);
  };

  const isPasswordValid = (password) => {
    return password.length >= 8;
  };

  const isFormValid = () => {
    return form.email && form.password;
  };

  const submitLogin = (event) => {
    event.preventDefault();

    let errors = {};

    if (!isEmailValid(form.email)) {
      errors.email = '올바른 이메일 형식이 아닙니다.';
    }

    if (!isPasswordValid(form.password)) {
      errors.password = '비밀번호는 8자 이상이어야 합니다.';
    }

    if (Object.keys(errors).length > 0) {
      setError(errors);
      return;
    }

    const sendData = {
      email: form.email,
      password: form.password,
    }
    mutation.mutate(sendData);
  }

  return (
    <>
      <GlobalStyle/>
      <StyledSection>
        <StyledForm name="login">
          <StyledHeader>
            <StyledA href="/">
              <img src="/src/assets/logo.png" style={{height: "34px", width: "240px"}} alt="뉴닉"/>
            </StyledA>
          </StyledHeader>
          <div role="group">
            <StyledButton type="button" className="login-social-google secondary-button">
              <StyledSpan>
                <img src="/src/assets/logo-google.svg" style={{width: "24px"}} alt=""/>
              </StyledSpan>
              구글로 시작하기
            </StyledButton>
          </div>
          <StyledDevider role="separator"></StyledDevider>
          <StyledTextField>
            <StyledInput type="email" name="email" placeholder="이메일" value=""/>
          </StyledTextField>
          <StyledTextField className="textfield">
            <StyledInput type="password" name="password" placeholder="비밀번호" value=""/>
          </StyledTextField>
          <div>
            <a href="/forgot" style={{
              color: "#051619",
              textDecoration: "underline"
            }}>비밀번호를 잊으셨나요?</a>
          </div>
          <footer style={{margin: "2rem 0"}}>
            <PrimaryButton type="submit" style={{width: "100%"}}>로그인</PrimaryButton>
            <p className="login-option" style={{margin: "2rem 0",
              textAlign: "center"}}>
              <a className="login-option-link" href="/signup" style={{display: "block",
                width: "100%",
                color: "#051619",
                textDecoration: "underline"}}>회원가입하기</a>
            </p>
          </footer>
        </StyledForm>
      </StyledSection>
    </>
  );
};

export default SignIn;
