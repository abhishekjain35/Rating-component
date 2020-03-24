import styled from "@emotion/styled";

const MainImage = styled.img`
    border-radius: 50%;
    width: 300px;
    height: 300px;
    border-bottom: 10px solid #fc6b03;
    border-left: 10px solid #fc6b03;
    animation-name: stretch;
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
    animation-delay: 0;
    animation-direction: alternate;
    animation-iteration-count: 1;
    animation-fill-mode: none;
    animation-play-state: running;
    @keyframes stretch {
        0% {
            transform: scale(0.3);
            background-color: red;
            border-radius: 100%;
        }
        50% {
            background-color: orange;
        }
        100% {
            transform: scale(1);
            background-color: yellow;
        }
    }
`;

export default MainImage;
