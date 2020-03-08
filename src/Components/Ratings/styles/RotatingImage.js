import styled from "@emotion/styled";

const Img1 = styled.img`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  position: absolute;
  animation: myOrbit1 8s linear infinite;
  @keyframes myOrbit1 {
    0% {
      transform: rotate(90deg) translateX(200px) rotate(-90deg);
    }
    100% {
      transform: rotate(450deg) translateX(200px) rotate(-450deg);
    }
  }
`;

const Img2 = styled.img`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  position: absolute;
  animation: myOrbit 8s linear infinite;
  @keyframes myOrbit {
    0% {
      transform: rotate(0deg) translateX(200px) rotate(0deg);
    }
    100% {
      transform: rotate(360deg) translateX(200px) rotate(-360deg);
    }
  }
`;
const Img3 = styled.img`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  position: absolute;
  animation: myOrbit3 8s linear infinite;
  @keyframes myOrbit3 {
    0% {
      transform: rotate(180deg) translateX(200px) rotate(-180deg);
    }
    100% {
      transform: rotate(540deg) translateX(200px) rotate(-540deg);
    }
  }
`;
const Img4 = styled.img`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  position: absolute;
  animation: myOrbit4 8s linear infinite;
  @keyframes myOrbit4 {
    0% {
      transform: rotate(270deg) translateX(200px) rotate(-270deg);
    }
    100% {
      transform: rotate(630deg) translateX(200px) rotate(-630deg);
    }
  }
`;

export { Img1, Img2, Img3, Img4 };
