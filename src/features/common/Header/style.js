import { styled } from "styled-components";
import { AuthInput } from "../Input/Input";
import {
  StyledCheckbox,
  StyledCheckboxContainer,
  StyledLabel,
} from "../../user/signup/style";
import { AuthButton } from "../Button/Button";
import { Link } from "react-router-dom";

export const HeaderCol = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const HeaderNavBox = styled.div`
  position: relative;
  width: 100%;
  padding: 2.5rem;
  box-sizing: border-box;
  border-bottom: 1px solid #333;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderNavLogoLink = styled(Link)`
  width: 240px;
  height: 34px;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const HeaderNavButtonBox = styled.div`
  position: absolute;
  right: 5%;
  border: 1px solid #333;
  display: flex;
  align-items: center;
  .nav-link {
    width: 45px;
    height: 45px;
    font-size: 1.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .nav-link:first-child {
    border-right: 1px solid #333;
  }
  @media screen and (max-width: 1079px) {
    display: none;
  }
`;

export const HeaderNavBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

export const HeaderNavContentList = styled.ul`
  position: absolute;
  top: 6rem;
  right: 5%;
  border-top: 1px solid #000;
  border-right: 1px solid #000;
  border-left: 1px solid #000;
  z-index: 100;
`;

export const HeaderNavContentItem = styled.li`
  width: 250px;
  padding: 12px 14px;
  border-bottom: 1px solid #000;
  background: #fff;
  &:last-child {
    button {
      color: #b22222;
    }
  }
  button {
    font-size: 0.915rem;
    font-weight: 450;
    border: none;
    outline: none;
    background: transparent;
  }
`;

export const HeaderTitleText = styled.h1`
  padding: 16px 10rem;
  margin: 0;
  border-bottom: 1px solid #000;
  font-size: 2.6rem;
  @media screen and (max-width: 1079px) {
    text-align: center;
    padding: 12px 0;
    font-size: 1.2rem;
  }
`;

export const HeaderDescBox = styled.div`
  position: relative;
  width: 100%;
  padding: 2rem 0 3rem;
  box-sizing: border-box;
  background: #ff6b00;
  overflow: hidden;
  @media screen and (max-width: 1079px) {
    padding: 2rem 1rem;
  }
`;

export const HeaderDescInnerBox = styled.div`
  max-width: 1200px;
  padding: 0 10rem;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1079px) {
    max-width: 480px;
    padding: 0;
    margin: 0 auto;
  }
`;

export const HeaderDescText = styled.span`
  margin: 4px 0;
  font-weight: 500;
  span {
    font-weight: 650;
  }
  &:last-child {
    font-size: 1rem;
    margin: 24px 0;
    line-height: 30px;
  }
`;

export const HeaderDescForm = styled.form`
  max-width: 1200px;
  padding: 0 10rem;
  @media screen and (max-width: 1079px) {
    max-width: 480px;
    padding: 0;
    margin: 0 auto;
  }
`;

export const HeaderDescInput = styled(AuthInput)`
  width: 450px;
  padding: 14px 20px;
  margin-bottom: 7px;
  @media screen and (max-width: 1079px) {
    width: 100%;
  }
`;

export const HeaderDescCheckBox = styled(StyledCheckboxContainer)`
  height: 16px;
  margin: 14px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  label {
    width: 16px;
    height: 16px;
    margin-right: 24px;
  }
`;

export const HeaderDescCheckInput = styled(StyledCheckbox)``;

export const HeaderDescLabel = styled(StyledLabel)`
  margin-top: 2px;
  font-weight: 500;
  a {
    text-decoration: underline;
  }
`;

export const HeaderButtonBox = styled.div`
  width: 450px;
  margin-top: 50px;
  display: flex;
  gap: 10px;
  @media screen and (max-width: 1079px) {
    width: 100%;
  }
`;

export const HeaderDescButton = styled(AuthButton)`
  flex: 1;
  padding: 16px 24px;
  border: 2px solid #000;
  font-size: 0.9rem;
  &:first-child {
    color: #000;
    background: #fff;
  }
  @media screen and (max-width: 1079px) {
    padding: 12px;
  }
`;

export const HeaderDescImgBox = styled.div`
  position: absolute;
  top: 0;
  right: 10rem;
  width: 100%;
  max-width: 530px;
  img {
    width: 100%;
    height: auto;
  }
  @media screen and (max-width: 1079px) {
    display: none;
  }
`;

export const HeaderCatagoryBox = styled.div`
  width: 100%;
  margin: 0 auto;
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
  background: #fff;
  display: grid;
  place-items: center;
  white-space: nowrap;
  overflow: overlay;
`;

export const HeaderCatagoryList = styled.ul`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const HeaderCatagoryItem = styled.li`
  font-size: 1rem;
  font-weight: 500;
  padding: 20px 10px;
  &:hover {
    color: #ff6b00;
  }
`;
