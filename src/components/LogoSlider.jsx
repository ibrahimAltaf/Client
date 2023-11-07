import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo1 from "../assets/logo-01.png";
import logo2 from "../assets/logo-1.png";

import logo4 from "../assets/logo-4.png";
import logo5 from "../assets/logo-5.png";
import logo6 from "../assets/logo-6.png";
import logo7 from "../assets/logo-07.png";
import logo8 from "../assets/logo-08.png";
import logo9 from "../assets/logo-09.png";
import "../styles/logoslider.css"; // Create a CSS file to style the component

const LogoSlider = () => {
  const settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  const logos = [logo1, logo2, logo4, logo5, logo6, logo7, logo8, logo9];
  return (
    <>
      <div className="container-fluid">
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="slide">
              <img src={logo} alt={`Logo ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default LogoSlider;
