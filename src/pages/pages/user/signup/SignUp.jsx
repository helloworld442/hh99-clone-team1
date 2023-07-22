import React, {useState} from 'react';
import {
  GlobalStyle,
  PrimaryButton,
  StyledForm,
  StyledHeader,
  StyledInput,
  StyledSection,
  StyledTextField
} from "../signin/style";
import {StyledA, StyledCheckbox, StyledCheckboxContainer, StyledFieldset, StyledLabel} from "./style";
import {NavLogo} from "../../../../features/common/Header/HeaderNav";
import Logo from "../../../../assets/logo.png";
import {useMutation, useQueryClient} from "react-query";
import {userSignUp} from "../../../../api/user";
import {useNavigate} from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const mutation = useMutation(userSignUp, {
    onSuccess: () => {
      navigate("/SignIn");
    },
  });

  const [error, setError] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    nickname: '',
  });

  const [form, setForm] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    nickname: '',
  });

  const [checked, setChecked] = useState({
    all: false,
    over14: false,
    terms: false,
    personalInfo: false,
    newsletter: false,
  });

  const handleInputChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleCheckAllChange = (event) => {
    setChecked({
      all: event.target.checked,
      over14: event.target.checked,
      terms: event.target.checked,
      personalInfo: event.target.checked,
      newsletter: event.target.checked,
    });
  };

  const handleSingleCheckChange = (event) => {
    setChecked({
      ...checked,
      [event.target.name]: event.target.checked,
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

  const isConFirmPasswordValid = (password) => {
    return password === form.passwordConfirm;
  };

  const isNicknameValid = (nickname) => {
    // 닉네임이 1글자 이상의 한글 또는 2글자 이상의 영문으로 이루어져 있는지 확인
    const regex = /^[가-힣]{1,}|[a-zA-Z]{2,}$/;
    return regex.test(nickname);
  };

  const isFormValid = () => {
    return form.email && form.password && form.passwordConfirm && form.nickname && checked.all;
  };

  const submitUser = (event) => {
    event.preventDefault();

    let errors = {};

    if (!isEmailValid(form.email)) {
      errors.email = '올바른 이메일 형식이 아닙니다.';
    }

    if (!isPasswordValid(form.password)) {
      errors.password = '비밀번호는 8자 이상이어야 합니다.';
    }

    if (!isPasswordValid(form.passwordConfirm)) {
      errors.passwordConfirm = '비밀번호 확인은 8자 이상이어야 합니다.';
    }

    if (!isConFirmPasswordValid(form.password)) {
        errors.password = '비밀번호가 달라요.';
        errors.passwordConfirm = '비밀번호가 달라요.';
    }

    if (!isNicknameValid(form.nickname)) {
      errors.nickname = '닉네임은 1글자 이상의 한글 또는 2글자 이상의 영문이어야 합니다.';
    }

    if (Object.keys(errors).length > 0) {
      setError(errors);
      return;
    }

    const sendData = {
      email: form.email,
      password: form.password,
      nickname: form.nickname,
      marketing: checked.newsletter,
    }
    mutation.mutate(sendData);
  }

  return (
    <>
      <GlobalStyle/>
      <StyledSection>
        <StyledForm name="login" onSubmit={submitUser}>
          <StyledHeader style={{marginBottom: "40px"}}>
            <NavLogo location={"/"} icon={Logo}></NavLogo>
          </StyledHeader>
          <StyledFieldset>
            <StyledTextField>
              <StyledInput type="email" name="email" placeholder="이메일" value={form.email} onChange={handleInputChange}/>
              {error.password && <p style={{color: 'red'}}>{error.email}</p>}
            </StyledTextField>
            <StyledTextField>
              <StyledInput type="password" name="password" placeholder="비밀번호 (8자 이상)" value={form.password}
                           onChange={handleInputChange}/>
              {error.password && <p style={{color: 'red'}}>{error.password}</p>}
            </StyledTextField>

            <StyledTextField>
              <StyledInput type="password" name="passwordConfirm" placeholder="비밀번호 확인(8자 이상)"
                           value={form.passwordConfirm} onChange={handleInputChange}/>
              {error.passwordConfirm && <p style={{color: 'red'}}>{error.passwordConfirm}</p>}
            </StyledTextField>
            <StyledTextField>
              <StyledInput type="text" name="nickname" placeholder="닉네임" value={form.nickname}
                           onChange={handleInputChange}/>
              {error.nickname && <p style={{color: 'red'}}>{error.nickname}</p>}
            </StyledTextField>
          </StyledFieldset>
          <StyledFieldset className="signup-terms">
            <StyledCheckboxContainer>
              <StyledCheckbox id="check-all" name="all" value="" checked={checked.all} onChange={handleCheckAllChange}/>
              <StyledLabel htmlFor="check-all">모두 동의합니다</StyledLabel>
            </StyledCheckboxContainer>
            <StyledCheckboxContainer>
              <StyledCheckbox id="check-over14" name="over14" value="" checked={checked.over14}
                              onChange={handleSingleCheckChange}/>
              <StyledLabel htmlFor="check-over14">만 14세 이상 가입 동의 (필수)</StyledLabel>
            </StyledCheckboxContainer>
            <StyledCheckboxContainer>
              <StyledCheckbox id="check-terms" name="terms" value="" checked={checked.terms}
                              onChange={handleSingleCheckChange}/>
              <StyledLabel htmlFor="check-terms">이용약관 동의 (필수)</StyledLabel>
              <StyledA href="https://newneek.notion.site/1e9ac1561fdb44109e2b154cf3b6a769" target="_blank"
                       rel="noopener noreferrer">약관보기</StyledA>
            </StyledCheckboxContainer>
            <StyledCheckboxContainer>
              <StyledCheckbox id="check-personalInfo" name="personalInfo" value="" checked={checked.personalInfo}
                              onChange={handleSingleCheckChange}/>
              <StyledLabel htmlFor="check-personalInfo">개인정보 수집/이용 동의 (필수)</StyledLabel>
              <StyledA href="https://newneek.notion.site/ec39ad284cfa4b7390fff1366236dc19" target="_blank"
                       rel="noopener noreferrer">약관보기</StyledA>
            </StyledCheckboxContainer>
            <StyledCheckboxContainer>
              <StyledCheckbox id="check-newsletter" name="newsletter" value="" checked={checked.newsletter}
                              onChange={handleSingleCheckChange}/>
              <StyledLabel htmlFor="check-newsletter">뉴스레터 및 마케팅 정보 수신 동의 (선택)</StyledLabel>
              <StyledA href="https://newneek.notion.site/97c0f3756cc54e3f9b201f8c3abd0dba" target="_blank"
                       rel="noopener noreferrer">약관보기</StyledA>
            </StyledCheckboxContainer>
          </StyledFieldset>
          <PrimaryButton type="submit" style={{width: "100%", marginTop: "30px"}}
                         disabled={!isFormValid()}>회원가입</PrimaryButton>
        </StyledForm>
      </StyledSection>
    </>
  );
};

export default SignUp;
