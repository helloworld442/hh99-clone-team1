import { styled } from "styled-components";

export const NewsListBox = styled.div`
  width: 100vw;
  padding: 0 5%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const StNewsList = styled.ul`
  width: 100%;
  border-left: 1px solid #333;
  display: flex;
  flex-wrap: wrap;
`;

export const StNewsInfoBox = styled.div`
  width: 100%;
  height: 200px;
  margin-top: 30px;
  border-bottom: 1px solid #333;
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
