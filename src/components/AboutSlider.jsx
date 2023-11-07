import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SliderImg from "../assets/sliderImg1.png";
function ImageSlider() {
  return (
    <Carousel
      showArrows={true}
      showStatus={false}
      showIndicators={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={1000} // Auto-play interval in milliseconds
    >
      <div>
        <img src={SliderImg} alt="Slide 1" />
      </div>
      <div>
        <img src={SliderImg} alt="Slide 1" />
      </div>
      <div>
        <img src={SliderImg} alt="Slide 1" />
      </div>
      <div>
        <img src={SliderImg} alt="Slide 1" />
      </div>
      {/* Add more slides here */}
    </Carousel>
  );
}

export default ImageSlider;
