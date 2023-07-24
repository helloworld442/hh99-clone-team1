import { styled } from "styled-components";
import { ArrowLeftOutlined } from "@ant-design/icons";

export const NewsSearchLayout = styled.div`
  max-width: 640px;
  margin: 0 auto;
  padding: 0.825rem 5%;
  box-sizing: border-box;
`;
export const NewsSearchInputBox = styled.div`
  width: 100%;
  height: 50px;
  border: 1px solid #000;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: #fff;
`;
export const NewsSearchIcon = styled(ArrowLeftOutlined)`
  width: 50px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #051619;
  cursor: pointer;
`;
export const NewsSearchInput = styled.input`
  width: 300px;
  height: 100%;
  border: none;
  outline: none;
  background: transparent;
  font-size: 1rem;
`;
export const NewsKeywordBox = styled.div`
  padding: 1.8rem 0;
`;
export const NewsKeywordItemBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
  color: #051619;

  a {
    margin-bottom: 12px;
    font-size: 0.925rem;
    font-weight: 500;
  }
`;
export const NewsKeywordTitle = styled.h2`
  display: block;
  margin: 1rem 0;
  font-size: 1.125rem;
  font-weight: 650;
  color: #051619;
`;
