import React from "react";
import Container from "./styles/Container";
import TextContainer from "./styles/TextContainer";
import ImageContainer from "./styles/ImageContainer";
// import img from "../../assets/images/hero.jpg";
import MainImage from "./styles/MainImage";
import { Img, Img1, Img2, Img3, Img4 } from "./styles/RotatingImage";
import ReviewSwitchContainer from "./styles/ReviewSwitchContainer";
// import image1 from "../../assets/images/image1.png";
// import image2 from "../../assets/images/image2.png";
// import image3 from "../../assets/images/image3.png";
// import image4 from "../../assets/images/image4.png";

const RatingComponent = ({ activeImage, changeImageHandler, imageArr }) => {
  return (
    <Container>
      <TextContainer>
        <div>
          <h1>What my Clients say?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio ut
            enim blandit volutpat maecenas. Tortor condimentum lacinia quis vel.
            Nibh praesent tristique magna sit amet.
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
        <MainImage src={imageArr[activeImage]} alt="MainImage" />
        {/* <Img1 src={imageArr[1]} alt="first" name={1} onClick={e => changeImageHandler(e)} />
        <Img2 src={imageArr[2]} alt="second" name={2} onClick={e => changeImageHandler(e)} />
        <Img3 src={imageArr[3]} alt="second" name={3} onClick={e => changeImageHandler(e)} />
        <Img4 src={imageArr[4]} alt="second" name={4} onClick={e => changeImageHandler(e)} /> */}

        {imageArr.map((src, index) => (
          <Img
            key={index}
            src={src}
            move={18 + index -4}
            rotate={360 - (index + 2) * 53}
            name={index}
            onClick={e => changeImageHandler(e)}
            // isActive={number == activeNum}
          />
        ))}

        {/* {images.map((img, index) => (
          <Img rotate={index} src={img} key={index} />
        ))} */}
      </ImageContainer>
    </Container>
  );
};

export default RatingComponent;
