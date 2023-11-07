import React, { useState, useEffect } from "react";

import "../styles/reasearch.css";
import HeaderMain from "../components/Header";
import EvolutionImg from "../assets/DesignImg.png";
import Arrow from "../assets/ArrowImage.png";
import logo1 from "../assets/logo-01.png";
import logo2 from "../assets/logo-1.png";
import logo3 from "../assets/logo-03.png";
import logo4 from "../assets/logo-4.png";
import logo5 from "../assets/logo-5.png";
import logo6 from "../assets/logo-6.png";
import logo7 from "../assets/logo-07.png";
import logo8 from "../assets/logo-08.png";
import logo9 from "../assets/logo-09.png";
import Tick from "../assets/Tick.png";
import Dot from "../assets/Dot.png";
import Lets from "../assets/LetDiscus.png";
import GreenArrow from "../assets/greenArrow.png";
import ScroolTop from "../assets/topScroll.png";
import BottomArrow from "../assets/BottomArrow.png";
import TopArrow from "../assets/top.png";
import Ultime from "../assets/caseUltimate.png";
import Custom from "../assets/caseCusto.png";
import Jugle from "../assets/caseJugle.png";
import ClientSays from "../components/ClientSays";
import ReviewList from "./ReviewList";
import Growing from "./Growing";
import Footer from "./Footer";
import OurApproch from "./OurApproch";
import Wizin from "../assets/WEZOM.png";
import MBHeader from "../components/MobileHeader";
import LogoSlider from "./LogoSlider";
import CaseStudySlider from "./CaseStudySlider";
const Reasearch = () => {
  const StudyCard = ({ img, event, tittle, para }) => (
    <div className="card-study">
      <img src={img} alt="" />
      <p className="name-project">{event}</p>
      <div className="case-tittle-01">
        <div className="case-tilletle">
          <h3> {tittle}</h3>
        </div>
        <div className="aRrow-case">
          <img src={GreenArrow} alt="" />
        </div>
      </div>
      <p className="last-para-case">{para}</p>
    </div>
  );

  const caseStudies = [
    {
      img: Ultime,
      event: "Event management",
      tittle: "Eventow: go-to event discovery and management",
      para: "Eventow connects you with the best events in your area and beyond in one convenient platform.",
    },
    {
      img: Jugle,
      event: "Hotel management",
      tittle: "Caboclos Hotel Corporate website",
      para: "A website for a locally-owned Jungle lodge in the Brazilian Amazon rainforest.",
    },
    {
      img: Custom,
      event: "Hotel management",
      tittle: "Caboclos Hotel Corporate website",
      para: "A website for a locally-owned Jungle lodge in the Brazilian Amazon rainforest.",
    },
    {
      img: Custom,
      event: "Hotel management",
      tittle: "Caboclos Hotel Corporate website",
      para: "A website for a locally-owned Jungle lodge in the Brazilian Amazon rainforest.",
    },
    {
      img: Custom,
      event: "Hotel management",
      tittle: "Caboclos Hotel Corporate website",
      para: "A website for a locally-owned Jungle lodge in the Brazilian Amazon rainforest.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const imageCount = caseStudies.length;
  const cardWidth = 300; // Adjust this to the actual width of your cards
  const slideInterval = 3000;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageCount);
    }, slideInterval);

    return () => clearInterval(interval);
  }, []);

  const cardSliderStyle = {
    transform: `translateX(-${currentIndex * cardWidth}px)`,
    transition: "transform 0.5s ease-in-out",
  };

  const images = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
  ];
  const imageWidth = 184; // Adjust this to the actual width of your images
  const sliderInterval = 3000;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, sliderInterval);

    return () => clearInterval(interval);
  }, []);

  const imageSliderStyle = {
    transform: `translateX(-${currentImageIndex * imageWidth}px)`,
    transition: "transform 0.5s ease-in-out",
  };

  return (
    <>
      <section className="Reasearch-00001">
        <HeaderMain />
        <MBHeader />
        <div className="web-dev-head">
          <h1 id="web-dev-head">Research & Development service</h1>
          <p>
            Bionic Solutions helps you streamline your day-to-day operations
            with innovative software solutions that optimize your supply chain
            and warehousing management.
          </p>
        </div>
        <div className="keyClient">
          <div className="key-pata">
            <img src={Dot} alt="" />
            <p>Key clients</p>
          </div>
          <div className="lets-01">
            <img src={Lets} alt="" />
          </div>
        </div>
      </section>
      <LogoSlider />
      <section className="give-help">
        <h1>WE WILL HELP YOU</h1>
        <div className="give-help-main">
          <div className="gove-img">
            <img src={Wizin} alt="" />
          </div>
          <div className="give-content">
            <div className="give-01">
              <div className="giv-content-01">
                <div className="ti">
                  <img src={Tick} alt="" />
                  <p>IMPROVING EXISTING SOLUTIONS</p>
                </div>
                <p className="div-para">
                  {" "}
                  <p>
                    With the help of our tech experts, you will upgrade your
                    existing digital solution with trending tools and
                    technologies to stay competitive.
                  </p>
                </p>
              </div>
              <div className="giv-content-02">
                <div className="ti">
                  <img src={Tick} alt="" />
                  <p>High customer engagement</p>
                </div>
                <p className="div-para">
                  {" "}
                  <p>
                    Increase user engagement levels for your product with our
                    tried-and-tested design tactics like gamification, user
                    behavior models, etc.
                  </p>
                </p>
              </div>
              <div className="giv-content-02">
                <div className="ti">
                  <img src={Tick} alt="" />
                  <p>Rational financial spending</p>
                </div>
                <p className="div-para">
                  {" "}
                  <p>
                    Benefit from custom design at a reasonable cost due to our
                    efficient workflow and budget-friendly rates for our
                    services.
                  </p>
                </p>
              </div>
            </div>
            <div className="give-02">
              <div className="giv-content-01">
                <div className="ti">
                  <img src={Tick} alt="" />
                  <p>ELIMINATION OF PRODUCT ISSUES</p>
                </div>
                <p className="div-para">
                  {" "}
                  <p>
                    If you think that your solution does not work effectively
                    enough, our research and development services will help you
                    fix existing problems.
                  </p>
                </p>
              </div>
              <div className="giv-content-02">
                <div className="ti">
                  <img src={Tick} alt="" />
                  <p>Rational financial spending</p>
                </div>
                <p className="div-para">
                  {" "}
                  <p>
                    Benefit from custom design at a reasonable cost due to our
                    efficient workflow and budget-friendly rates for our
                    services.
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <OurApproch />
      <CaseStudySlider />
      <ClientSays />
      <ReviewList />
      <Growing />
      <Footer />
    </>
  );
};

export default Reasearch;
