import { styled } from "styled-components";
import { AuthInput } from "../Input/Input";
import {
  StyledCheckbox,
  StyledCheckboxContainer,
  StyledLabel,
} from "../../user/signup/style";
import { AuthButton } from "../Button/Button";

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

export const HeaderNavLogoLink = styled.a`
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
`;

export const HeaderTitleText = styled.h1`
  padding: 16px 10rem;
  margin: 0;
  border-bottom: 1px solid #000;
  font-size: 2.6rem;
`;

export const HeaderDescBox = styled.div`
  position: relative;
  width: 100%;
  padding: 2rem 0 3rem;
  box-sizing: border-box;
  background: #ff6b00;
  overflow: hidden;
`;

export const HeaderDescInnerBox = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 10rem;
  display: flex;
  flex-direction: column;
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
  margin: 0 auto;
  padding: 0 10rem;
`;

export const HeaderDescInput = styled(AuthInput)`
  width: 450px;
  padding: 14px 20px;
  margin-bottom: 7px;
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
`;

export const HeaderCatagoryBox = styled.div`
  width: 100%;
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
  background: #fff;
  display: flex;
  justify-content: center;
`;

export const HeaderCatagoryList = styled.ul`
  display: flex;
`;

export const HeaderCatagoryItem = styled.li`
  font-size: 1rem;
  font-weight: 500;
  padding: 20px 10px;
  margin: 0 10px;
  &:hover {
    color: #ff6b00;
  }
`;
