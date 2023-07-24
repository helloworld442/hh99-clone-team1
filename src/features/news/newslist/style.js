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
  border-left: 1px solid #333;
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

export const StNewsInfoBox = styled.div`
  width: 100%;
  height: 200px;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 30px;
  border-bottom: 1px solid #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const NewsInfoText = styled.span`
  margin-top: 12px;
  font-size: ${(props) => props.size};
  font-weight: 500;
  span {
    color: rgb(153, 153, 153);
  }
`;

export const NewsInfoButton = styled.button`
  width: 80px;
  padding: 0.4rem 0;
  margin-top: 35px;
  border: 2px solid #000;
  outline: none;
  font-size: 0.9rem;
  font-weight: 600;
  color: #fff;
  background: #000;
`;
