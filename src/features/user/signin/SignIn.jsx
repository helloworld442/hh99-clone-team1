import {
  GlobalStyle,
  StyledButton,
  StyledDevider,
  StyledForm,
  StyledHeader,
  StyledSection,
  StyledSpan,
  StyledTextField,
} from "./style";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { userLogin } from "../../../api/user";
import { useState } from "react";
import Logo from "../../../assets/logo.png";
import googleLogo from "../../../assets/logo-google.svg";
import { NavLogo } from "../../common/Header/HeaderNav";
import { useDispatch } from "react-redux";
import { LOGIN_USER } from "../../../redux/reducers/userSlice";
import { AuthInput } from "../../common/Input/Input";
import { AuthButton } from "../../common/Button/Button";
import { DarkModeContainer } from "../../news/newsdetail/style";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const darkModeToggle = useSelector((state) => state.darkMode.darkModeToggle);
  const mutation = useMutation(userLogin, {
    onSuccess: (data) => {
      console.log(data);
      // dispatch(LOGIN_USER(data));
      // navigate("/");
    },
    onError: (error) => {
      // console.log(error.response.data.message);
      if (error.response && error.response.data) {
        setError((prev) => ({
          ...prev,
          password: error.response.data.message,
        }));
      }
    },
  });

  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const isEmailValid = (email) => {
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return emailRegex.test(email);
  };

  const isPasswordValid = (password) => {
    return password.length >= 8;
  };

  const submitLogin = (event) => {
    event.preventDefault();
    let errors = {};

    if (!form.email) {
      errors.email = "이메일 주소를 입력해주세요.";
    } else if (!isEmailValid(form.email)) {
      errors.email = "이메일 형식이 아니에요!";
    }

    if (!form.password) {
      errors.password = "비밀번호를 입력해주세요.";
    } else if (!isPasswordValid(form.password)) {
      errors.password = "비밀번호는 8자 이상 가능해요.";
    }

    if (Object.keys(errors).length > 0) {
      setError(errors);
      return;
    } else {
      setError({ email: "", password: "" });
    }

    const sendData = {
      email: form.email,
      password: form.password,
    };
    mutation.mutate(sendData);
  };

  return (
    <DarkModeContainer dark={darkModeToggle}>
      <GlobalStyle />
      <StyledSection>
        <StyledForm name="login" onSubmit={submitLogin}>
          <StyledHeader style={{ marginBottom: "40px" }}>
            <NavLogo location={"/"} icon={Logo}></NavLogo>
          </StyledHeader>
          <div role="group">
            <StyledButton
              type="button"
              className="login-social-google secondary-button"
            >
              <StyledSpan>
                <img src={googleLogo} style={{ width: "24px" }} alt="" />
              </StyledSpan>
              구글로 시작하기
            </StyledButton>
          </div>
          <StyledDevider role="separator"></StyledDevider>
          <StyledTextField>
            <AuthInput
              type="email"
              name="email"
              placeholder="이메일"
              value={form.email}
              onChange={handleInputChange}
            />
            {error.email && <p style={{ color: "red" }}>{error.email}</p>}
          </StyledTextField>
          <StyledTextField>
            <AuthInput
              type="password"
              name="password"
              placeholder="비밀번호"
              value={form.password}
              onChange={handleInputChange}
            />
            {error.password && <p style={{ color: "red" }}>{error.password}</p>}
          </StyledTextField>
          <div>
            <Link
              to="/forgot"
              style={{
                color: "#051619",
                textDecoration: "underline",
                fontSize: "0.915rem",
                fontWeight: "550",
              }}
            >
              비밀번호를 잊으셨나요?
            </Link>
          </div>
          <footer style={{ margin: "1.5rem 0" }}>
            <AuthButton type="submit" style={{ width: "100%" }}>
              로그인
            </AuthButton>
            <p
              className="login-option"
              style={{
                margin: "2rem 0",
                textAlign: "center",
              }}
            >
              <Link
                className="login-option-link"
                to="/signup"
                style={{
                  display: "block",
                  width: "100%",
                  color: "#051619",
                  textDecoration: "underline",
                  fontSize: "0.925rem",
                  fontWeight: "550",
                }}
              >
                회원가입하기
              </Link>
            </p>
          </footer>
        </StyledForm>
      </StyledSection>
    </DarkModeContainer>
  );
};

export default SignIn;
