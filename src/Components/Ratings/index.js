import React from "react";
import Container from "./styles/Container";
import TextContainer from "./styles/TextContainer";
import ImageContainer from "./styles/ImageContainer";

const RatingComponent = () => {
    return (
        <Container>
            <TextContainer>
                <div>
                    <h1>What my Clients say?</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Odio ut enim blandit volutpat maecenas.
                        Tortor condimentum lacinia quis vel. Nibh praesent
                        tristique magna sit amet.
                    </p>
                    <h4>Naruto Uzumaki</h4>
                    <p>CEO, Company Name</p>
                </div>
            </TextContainer>
            <ImageContainer>
                <div>
                    <img src="" alt=""/>
                </div>
            </ImageContainer>
        </Container>
    );
};

export default RatingComponent;
