import React, {useState} from "react";
import {GlobalStyle, PwdForm, StyledButton, StyledLink,StyledInput} from "./style";
import {useMutation} from "react-query";
import {getForgotPwd} from "../../../api/user";
import {useNavigate} from "react-router-dom";

const ForgotPwd = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const mutation = useMutation(getForgotPwd, {
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

  const handleChange = (event) => {
    setEmail(event.target.value);
  };
  const isEmailValid = (email) => {
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(email.length === 0) {
      setError('이메일 주소를 입력해주세요.')
      return
    }else if (!isEmailValid(email)) {
      setError('이메일 형식이 아니에요!')
      return
    }else{
      setError('')
    }
    mutation.mutate(email);
  };

  return (
    <>
      <GlobalStyle/>
      <PwdForm className="password" onSubmit={handleSubmit}>
        <header className="password-head" style={{marginBottom: "3rem"}}>
          <h1 className="password-title" style={{
            margin: "0 0 0.5rem",
            fontSize: "14px"
          }}>비밀번호 찾기</h1>
          <p className="password-description" style={{fontSize: "1.5rem",
            lineHeight: 1.4,
            color: "#051619"}}>비밀번호를 재설정할 수 있는 링크를 보내드려요.</p>
        </header>
        <section className="password-body">
          <div className="textfield" style={{margin: "1rem 0",
            position: "relative"}}>
            <label className="textfield-label" htmlFor="find-email">이메일 주소</label>
            <StyledInput
              className="textfield-input"
              type="text"
              id="find-email"
              placeholder="newneeker@newneek.co"
              value={email}
              onChange={handleChange}
            />
            {error && <p style={{color: 'red'}}>{error}</p>}
          </div>
          <footer className="password-foot" style={{margin: "1rem 0 0"}}>
            <StyledButton type="submit" className="primary-button password-submit">링크발송</StyledButton>
            <span className="password-link" style={{float: "right",
              marginTop: "16px"}}>
            이메일 주소가 떠오르지 않으시나요?
            <StyledLink href="/signup" >가입하기</StyledLink>
          </span>
          </footer>
        </section>
      </PwdForm>
    </>
  );
};

export default ForgotPwd;
