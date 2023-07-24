import { styled } from "styled-components";

export const NewsFooterBox = styled.div`
  padding: 2rem 0 0 0;
  text-align: center;
  @media screen and (max-width: 1079px) {
    padding: 2rem 0;
  }
`;

export const NewsFooterLinkBox = styled.div`
  margin: 15rem 0 0 0;
  border-top: 2px solid #333;
  border-bottom: 2px solid #333;
  @media screen and (max-width: 1079px) {
    margin: 15rem 0;
  }
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

export const NewsMobiledFooterBox = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  padding: 0 15%;
  border-top: 2px solid #000;
  box-sizing: border-box;
  background: #fff;
  @media screen and (min-width: 1079px) {
    display: none;
  }
`;

export const NewsMobileFooterList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    .active {
      span {
        color: #ffb600;
      }
    }
  }
`;

export const NewsMobiledFooterItem = styled.li`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  span {
    padding-top: 4px;
  }
`;
