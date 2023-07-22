import React, {useState} from "react";
import {GlobalStyle, StyledInput} from "./style";
import {useMutation} from "react-query";
import {getNewPwd} from "../../../api/user";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {NavLogo} from "../../common/Header/HeaderNav";
import Logo from "../../../assets/logo.png";
import {PrimaryButton, StyledForm, StyledHeader, StyledSection, StyledTextField} from "../signin/style";
import {StyledFieldset} from "../signup/style";

const NewPwd = () => {
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const navigate = useNavigate();
  const token = urlParams.get('token');
  localStorage.setItem("resignToken", token);
  const mutation = useMutation(getNewPwd, {
    onSuccess: () => {
      navigate("/SignIn");
    },
    onError: (error) => {
      if (error.response && error.response.data) {
        setError(error.response.data.message);
        console.log(error.response.data.message);
      }
    },
  });

  const [error, setError] = useState({
    password: '',
    passwordConfirm: '',
  });

  const [form, setForm] = useState({
    password: '',
    passwordConfirm: '',
  });

  const handleInputChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const isPasswordValid = (password) => {
    return password.length >= 8;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let errors = {};

    if (!form.password) {
      errors.password = '비밀번호를 입력해주세요.';
    } else if (!isPasswordValid(form.password)) {
      errors.password = '비밀번호는 8자 이상 가능해요.';
    }

    if (!form.passwordConfirm) {
      errors.passwordConfirm = '비밀번호를 입력해주세요.';
    } else if (!isPasswordValid(form.passwordConfirm)) {
      errors.passwordConfirm = '비밀번호는 8자 이상 가능해요.';
    }

    if (form.password !== form.passwordConfirm) {
      errors.password = '비밀번호가 달라요.';
      errors.passwordConfirm = '비밀번호가 달라요.';
    }

    if (Object.keys(errors).length > 0) {
      setError(errors);
      return;
    } else {
      setError({password: '', passwordConfirm: ''});
    }
    mutation.mutate(form.password);
  };

  return (
    <>
      <GlobalStyle/>
      <StyledSection>
        <StyledForm name="login" onSubmit={handleSubmit}>
          <StyledHeader style={{marginBottom: "40px"}}>
            <NavLogo location={"/"} icon={Logo}></NavLogo>
          </StyledHeader>
          <h1>새로운 비밀번호를 입력해주세요!</h1>
          <StyledFieldset>
            <StyledTextField>
              <StyledInput type="password" name="password" placeholder="새 비밀번호 (8자 이상)" value={form.password}
                           onChange={handleInputChange}/>
              {error.password && <p style={{color: 'red'}}>{error.password}</p>}
            </StyledTextField>
            <StyledTextField>
              <StyledInput type="password" name="passwordConfirm" placeholder="새 비밀번호 확인(8자 이상)"
                           value={form.passwordConfirm} onChange={handleInputChange}/>
              {error.passwordConfirm && <p style={{color: 'red'}}>{error.passwordConfirm}</p>}
            </StyledTextField>
          </StyledFieldset>
          <PrimaryButton type="submit" style={{width: "100%", marginTop: "30px"}}
          >비밀번호 변경하기</PrimaryButton>
        </StyledForm>
      </StyledSection>
    </>
  );
};

export default NewPwd;
