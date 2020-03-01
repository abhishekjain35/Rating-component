import styled from "@emotion/styled";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    height: 100vh;
    width: 66vw;
    /* border: 2px solid black; */
    & > div {
        /* border: 2px solid black; */
        width: 50vw;
    };
`;

export default Container;