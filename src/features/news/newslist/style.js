import { styled } from "styled-components";

export const NewsListBox = styled.div`
  width: 100vw;
  padding: 0 5%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StNewsList = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  @media screen and (max-width: 1360px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 820px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
