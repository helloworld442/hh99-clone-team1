import styled from "styled-components";

export const StyledAddButtonBox = styled.div`
  width: 100%;
  text-align: center;
`;

export const StyledAddButton = styled.button`
  width: 300px;
  height: 55px;
  margin-top: 2rem;
  background: #fff;
  border: 1px solid #000;
  border-radius: 8px;
  outline: none;
  font-size: 0.925rem;
  &:hover {
    background: #ff6b00;
  }
`;

export const StyledHeader = styled.header`
  margin: 4.1666rem 0 2rem;
  margin-right: auto;

  &.posts-head h1 {
    font-size: 2rem;
    font-weight: 400;
  }

  b, h1, h2, h3, h4, h5, h6, legend, strong, th {
    font-weight: 700;
    color: #051619;
  }
  h1, h2, h3, h4, h5, h6 {
    line-height: 1.4;
    word-break: keep-all;
  }
  blockquote, body, dd, dl, figure, h1, h2, h3, h4, h5, h6, input[type=radio], p {
    margin: 0;
  }
  &.posts-head .status {
    display: block;
    margin: 0.5rem 0 0;
    font-size: 1.25rem;
    font-weight: 400;
  }
`