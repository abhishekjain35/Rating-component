import React from "react";
import Container from "./styles/Container";
import TextContainer from "./styles/TextContainer";
import ImageContainer from "./styles/ImageContainer";
import img from "../../assets/images/hero.jpg";
import MainImage from "./styles/MainImage";
import { Img1, Img2, Img3, Img4 } from "./styles/RotatingImage";

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
                    <div>
                        <h4>Naruto Uzumaki</h4>
                        <h5>CEO, ABC Company</h5>
                        <div>
                          <button>------</button>
                          <button>-></button>
                        </div>
                    </div>
                </div>
            </TextContainer>
            <ImageContainer>
                <MainImage src={img} alt="MainImage" />
                <Img1 src={img} alt="RotatingImage" />
                <Img2 src={img} alt="RotatingImage" />
                <Img3 src={img} alt="RotatingImage" />
                <Img4 src={img} alt="RotatingImage" />
            </ImageContainer>
        </Container>
    );
};

export default RatingComponent;
