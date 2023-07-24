import { styled } from "styled-components";

export const NewsFooterBox = styled.div`
  padding: 2rem 0 0 0;
  text-align: center;
`;

export const NewsFooterLinkBox = styled.div`
  margin: 15rem 0 0 0;
  border-top: 2px solid #333;
  border-bottom: 2px solid #333;
`;

export const NewsFooterLinkLogo = styled.div`
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #333;
  background: #ff6b00;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  img {
    width: 300px;
    height: auto;
  }
`;

export const NewsFooterLink = styled.div`
  width: 100%;
  height: 70px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    font-size: 1.1rem;
    font-weight: bold;
  }
`;
