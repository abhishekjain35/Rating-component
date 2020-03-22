import React from "react";
import Container from "./styles/Container";
import TextContainer from "./styles/TextContainer";
import ImageContainer from "./styles/ImageContainer";
import img from "../../assets/images/hero.jpg";
import MainImage from "./styles/MainImage";
import Img from "./styles/RotatingImage";
import ReviewSwitchContainer from "./styles/ReviewSwitchContainer";

const RatingComponent = ({ images }) => {
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
                    <ReviewSwitchContainer>
                        <div>
                            <h4>Naruto Uzumaki</h4>
                            <h5>CEO, ABC Company</h5>
                        </div>
                        <div>
                            <button>&#8592;</button>
                            <button>&#10230;</button>
                        </div>
                    </ReviewSwitchContainer>
                </div>
            </TextContainer>
            <ImageContainer>
                <MainImage src={img} alt="MainImage" />
                {images.map((img, index) => (
                    <Img rotate={index} src={img} key={index} />
                ))}
            </ImageContainer>
        </Container>
    );
};

export default RatingComponent;
