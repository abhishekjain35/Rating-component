import styled from "@emotion/styled";

const Img1 = styled.img`
    border-radius: 50%;
    width: 80px;
    height: 80px;
    position: absolute;
    border-bottom: 5px solid #030bfc;
    border-left: 5px solid #030bfc;
    animation: myOrbit1 8s linear infinite;
    @keyframes myOrbit1 {
        0% {
            transform: rotate(90deg) translateX(280px) rotate(-90deg);
        }
        100% {
            transform: rotate(450deg) translateX(280px) rotate(-450deg);
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
            transform: rotate(0deg) translateX(270px) rotate(0deg);
        }
        100% {
            transform: rotate(360deg) translateX(270px) rotate(-360deg);
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
            transform: rotate(180deg) translateX(230px) rotate(-180deg);
        }
        100% {
            transform: rotate(540deg) translateX(230px) rotate(-540deg);
        }
    }
`;
const Img4 = styled.img`
    border-radius: 50%;
    width: 60px;
    height: 60px;
    position: absolute;
    border-bottom: 5px solid #03fcd3;
    border-left: 5px solid #03fcd3;
    animation: myOrbit4 8s linear infinite;
    @keyframes myOrbit4 {
        0% {
            transform: rotate(270deg) translateX(250px) rotate(-270deg);
        }
        100% {
            transform: rotate(630deg) translateX(250px) rotate(-630deg);
        }
    }
`;

export { Img1, Img2, Img3, Img4 };
