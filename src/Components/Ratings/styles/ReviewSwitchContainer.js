import styled from "@emotion/styled";

const ReviewSwitchContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > div > h5 {
        opacity: 0.3;
        margin: 0;
    }
    & > div > h4 {
        margin: 0;
    }
    & > div > button {
        background-color: Transparent;
        border: none;
        cursor: pointer;
        outline: none;
        margin-right: 10px;
    }
`;

export default ReviewSwitchContainer;
