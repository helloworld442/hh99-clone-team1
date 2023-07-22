import { styled } from "styled-components";
import { ArrowLeftOutlined } from "@ant-design/icons";

export const Layout = styled.div`
  width: 100vw;
  height: 764px;
  background-color: #eae7de;
`;
export const StInputLayout = styled.div`
  max-width: 640px;
  margin: 0 auto;
  padding: 1rem 5%;
  box-sizing: border-box;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 6;
  @media (max-width: 1079px) {
    bottom: calc(100% - 56px);
  }
`;
export const StNewsSearchTextBox = styled.div`
  display: block;
  position: relative;
`;
export const Icon = styled(ArrowLeftOutlined)`
  color: #051619;
  cursor: pointer;
  width: 52px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 1;
  top: 0;
  z-index: 12121;
  outline: none;
  &:hover {
  }
`;
export const StNewsSearchInput = styled.input`
  width: 100%;
  height: 52px;
  font: inherit;
  font-size: 1.125rem;
  display: block;
  padding: 10px 40px 11px 4rem;
  border: 1px solid #051619;
  border-radius: 0;
  box-sizing: border-box;
  box-shadow: 0;
  box-shadow: none;
  color: #051619;
  background-color: field;
  transition: all 0.2s;
  outline: none;
  cursor: text;
  margin: 0em;
`;

export const KeywordSection = styled.div`
  display: block;
`;
export const KeywordBox = styled.div`
  padding: 2rem 0 3rem;
`;
export const KeywordItemBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
  color: #051619;
`;
export const KeywordTitle = styled.h2`
  display: block;
  margin: 1rem 0;
  font-size: 1.25rem;
  font-weight: 700;
  color: #051619;
  line-height: 1.4;
  word-break: keep-all;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;
