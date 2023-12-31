import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body{
    color: #051619;
    font-size: 14px;
    font-family: "Noto Sans KR","Apple SD Gothic Neo",sans-serif;
    line-height: 1.8;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    letter-spacing: -.0125rem;
    margin: 0;
    background-color: #eae7da;
    b, h1, h2, h3, h4, h5, h6, legend, strong, th {
      font-weight: 700;
      color: #051619;
    }

    h1, h2, h3, h4, h5, h6 {
      line-height: 1.4;
      word-break: keep-all;
    }

    blockquote, body, dd, dl, figure, h1, h2, h3, h4, h5, h6, input[type=radio], p {
      margin: 0;
    }
  }
  `;

export const PwdForm = styled.form`
  max-width: 560px;
  margin: 0 auto;
  padding: 8rem 5%;
`;

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  padding: 10px 1.4rem;
  border: 1px solid #051619;
  border-radius: 0;
  box-sizing: border-box;
  box-shadow: 0;
  font: inherit;
  color: #051619;
  transition: all 0.2s;
  outline: none;
  box-shadow: none;
  font-size: 0.95rem;
  font-weight: 600;
`;

export const StyledButton = styled.button`
  &:not(:active),
  &:not(:focus) {
    outline: 0;
  }
  &.password-submit {
    float: left;
    width: 200px;
    max-width: 50%;
  }
  &.primary-button {
    display: inline-block;
    min-width: 104px;
    background: #ff6b00;
    padding: 14px 24px;
    border-radius: 0;
    text-align: center;
    cursor: pointer;
    position: relative;
    border-radius: 8px;
    background: #051619;
    border: 1px solid #051619;
    color: #fff;
    font-size: 0.925rem;
    font-weight: 600;
  }
`;
export const StyledLink = styled(Link)`
  -webkit-text-decoration-skip: ink;
  text-decoration-skip-ink: auto;
  color: #ff6b00;
  text-decoration: none;
`;
