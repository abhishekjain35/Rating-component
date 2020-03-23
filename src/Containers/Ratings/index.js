import React, { useCallback, useState } from "react";
import RatingComponent from "../../Components/Ratings/index";
import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.png";
import image3 from "../../assets/images/image3.png";
import image4 from "../../assets/images/image4.png";
import mainImage from "../../assets/images/hero.jpg";

const RatingContainer = () => {
  const imageArr = [mainImage, image1, image2, image3, image4];
  const [activeImage, setImage] = useState(0);
  const changeImageHandler = useCallback(e => {
    // console.log(Number(e.target.name));
    setImage(Number(e.target.name))
  }, []);
  return (
    <RatingComponent changeImageHandler={changeImageHandler} activeImage={activeImage} imageArr={imageArr} />
  );
};

export default RatingContainer;
