import { styled } from "styled-components";

const StyledAuthInput = styled.input`
  display: block;
  width: 400px;
  padding: 10px 1.3rem;
  border: 1px solid #051619;
  border-radius: 0;
  box-sizing: border-box;
  box-shadow: none;
  font: inherit;
  color: #051619;
  transition: all 0.2s;
  outline: none;
  box-shadow: none;
  font-size: 0.915rem;
`;

export const AuthInput = (props) => <StyledAuthInput {...props} />;
