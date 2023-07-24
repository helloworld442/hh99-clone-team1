import { styled } from "styled-components";
import spinner from "../../../assets/spinnerImg.png";

const SpinnerBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #eae7de;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpinnerImg = styled.img`
  width: 300px;
  height: auto;
  animation: rotate_image 12s linear infinite;
  @keyframes rotate_image {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Spinner = () => {
  return (
    <SpinnerBackground>
      <SpinnerImg src={spinner} />
    </SpinnerBackground>
  );
};

export default Spinner;
