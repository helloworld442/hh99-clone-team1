import { styled } from "styled-components";

const StCardBox = styled.div`
  padding-bottom: 30px;
  border-right: 1px solid #333;
  border-bottom: 1px solid #333;
  display: flex;
  flex-direction: column;
  flex: 1 1 300px;
  &:hover {
    background: #fff;
  }
`;

const StCardImg = styled.img`
  width: 100%;
  height: 250px;
  margin-bottom: 16px;
  border-bottom: 1px solid #333;
  background: rgb(211, 211, 211);
`;

const StCardText = styled.span`
  margin: 8px 24px;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  span {
    font-size: 0.9rem;
    margin-left: 12px;
  }
`;

const Card = () => {
  return (
    <StCardBox>
      <StCardImg />
      <StCardText size="1.2rem" weight="650">
        '신종 펫숍' 사기 행각
      </StCardText>
      <StCardText size="0.9rem" weight="500">
        2023/07/21 <span>사회</span>
      </StCardText>
    </StCardBox>
  );
};

export default Card;
