import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "../stylesinsightSlidr.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CaseImg1 from "../assets/UltimateSmall.png";
import CaseImg2 from "../assets/JugleSmall.png";
import CaseImg3 from "../assets/CustomSmall.png";
import CaseImg4 from "../assets/IdleSmall.png";
import LearnMore from "../assets/LeftArrowMore.png";

// ... (other imports)

const CaseStudySlider = () => {
  const InsightCArd = ({ img, Event, Date, tittle, description }) => {
    return (
      <div className="Insight-mainCArd">
        <img className="Insight-img" src={img} alt="" />
        <div className="edu-btn-time">
          <button>{Event}</button>
          <div className="Date-insight-add">
            <p>{Date}</p>
          </div>
        </div>
        <div className="case-tittle-090-090">
          <div className="CAse-Event-Tittle">
            <h1>{tittle}</h1>
          </div>
          <div className="CAse-Event-Learn">
            <img src={LearnMore} alt="" />
          </div>
        </div>
        <p className="Event">{description}</p>
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

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 374,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="Slider-insight">
      <div>
        <h2 className="Insight-head">Case Studies</h2>
        <Slider {...settings}>
          <InsightCArd
            img={CaseImg1}
            Event={"Event management"}
            tittle={"Eventow: go-to event discovery and management"}
            description={
              "Eventow connects you with the best events in your area and beyond in one convenient platform."
            }
          />
          <InsightCArd
            img={CaseImg2}
            Event={"Event management"}
            tittle={"Caboclos Hotel Corporate website"}
            description={
              "A website for a locally-owned Jungle lodge in the Brazilian Amazon rainforest."
            }
          />
          <InsightCArd
            img={CaseImg3}
            Event={"Product based"}
            tittle={"Custo: Smart technology at your front door"}
            description={"Never worry about a delivery again, Custo is here."}
          />
          <InsightCArd
            img={CaseImg4}
            Event={"Education"}
            tittle={"Idiazstudio Architecture Agency"}
            description={
              "A renowned architectural firm committed to creating innovative, sustainable, and aesthetically pleasing spaces that cater to the unique needs and desires of its clients."
            }
          />
        </Slider>
      </div>
    </div>
  );
};

export default CaseStudySlider;
