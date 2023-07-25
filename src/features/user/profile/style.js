import styled from "styled-components";

export const History = styled.section`
  max-width: 1360px;
  margin: 0 auto 16rem;
  padding: 0 5%;
`;

export const HistoryHead = styled.header`
  margin: 4rem 0 5rem;
  position: relative;
  span {
    font-size: 0.915rem;
    font-weight: 700;
  }
`;

export const HistoryUsername = styled.h1`
  margin: 0 0 0.75rem;
  font-size: 2.3rem;
  font-weight: 400;
  letter-spacing: -0.075rem;
  b {
    font-weight: 800;
  }
`;

export const HistoryHeadActions = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem 0 0;
  position: static;
`;

export const HistoryChange = styled.a`
  display: block;
  max-width: 48%;
  color: #051619;
  text-decoration: underline;
  font-size: 0.925rem;
  font-weight: 600;
`;

export const HistoryStatics = styled.a`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  border: 1px solid #051619;
  font-size: 2rem;
  color: #051619;
  cursor: pointer;

  &:last-child {
    border-top: none;
  }

  div {
    font-weight: 550;
  }

  @media (max-width: 1360px) {
    padding-left: 1.25rem;
    padding-right: 1.5rem;
    font-size: 1.5rem;
  }
`;
