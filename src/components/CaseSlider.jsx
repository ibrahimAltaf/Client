import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "../stylesinsightSlidr.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IndightImg1 from "../assets/insight01.png";
import IndightImg2 from "../assets/insgith02.png";
import IndightImg3 from "../assets/insoght03.png";
import IndightImg4 from "../assets/insoght04.png";

// ... (other imports)

const CaseSlider = () => {
  const InsightCArd = ({ img, Event, Date, tittle, author, min }) => {
    return (
      <div className="Insight-mainCArd">
        <img className="Insight-img" src={img} alt="" />
        <div className="edu-btn-time">
          <button>{Event}</button>
          <div className="Date-insight-add">
            <p>{Date}</p>
          </div>
        </div>
        <div className="tittle-insifgt-card">
          <h1>{tittle}</h1>
        </div>
        <div className="authormin">
          <div>
            <p className="author-0">{author}</p>
          </div>
          <div>
            <div className="min-01">{min}</div>
          </div>
        </div>
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="Slider-insight">
      <div>
        <h2 className="Insight-head">INSIGHTS</h2>
        <Slider {...settings}>
          <InsightCArd
            img={IndightImg1}
            Event={"Education"}
            Date={"August 28, 2023"}
            tittle={
              "The Benefits of Hiring a Digital Services Agency for Your Business"
            }
            author={"By Eugene"}
            min={"7 min"}
          />
          <InsightCArd
            img={IndightImg2}
            Event={"Education"}
            Date={"August 28, 2023"}
            tittle={
              "Choosing the Right SEO Services Provider: A Comprehensive Guide"
            }
            author={"By Eugene"}
            min={"7 min"}
          />
          <InsightCArd
            img={IndightImg3}
            Event={"Education"}
            Date={"August 28, 2023"}
            tittle={
              "Choosing the Right SEO Services Provider: A Comprehensive Guide"
            }
            author={"By Eugene"}
            min={"7 min"}
          />
          <InsightCArd
            img={IndightImg3}
            Event={"Education"}
            Date={"August 28, 2023"}
            tittle={
              "Choosing the Right SEO Services Provider: A Comprehensive Guide"
            }
            author={"By Eugene"}
            min={"7 min"}
          />
          <InsightCArd
            img={IndightImg1}
            Event={"Education"}
            Date={"August 28, 2023"}
            tittle={
              "The Benefits of Hiring a Digital Services Agency for Your Business"
            }
            author={"By Eugene"}
            min={"7 min"}
          />
          <InsightCArd
            img={IndightImg2}
            Event={"Education"}
            Date={"August 28, 2023"}
            tittle={
              "Choosing the Right SEO Services Provider: A Comprehensive Guide"
            }
            author={"By Eugene"}
            min={"7 min"}
          />
          <InsightCArd
            img={IndightImg3}
            Event={"Education"}
            Date={"August 28, 2023"}
            tittle={
              "Choosing the Right SEO Services Provider: A Comprehensive Guide"
            }
            author={"By Eugene"}
            min={"7 min"}
          />
          <InsightCArd
            img={IndightImg3}
            Event={"Education"}
            Date={"August 28, 2023"}
            tittle={
              "Choosing the Right SEO Services Provider: A Comprehensive Guide"
            }
            author={"By Eugene"}
            min={"7 min"}
          />
        </Slider>
      </div>
    </div>
  );
};

export default CaseSlider;
