import React, { useState, useEffect } from "react";

import "../styles/evolution.css";
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
import GiveImg from "../assets/HelpYou.png";
import Tick from "../assets/Tick.png";
import LetsDIscus from "./LetsDIscus";
import LetImg from "../assets/lets-img.png";
import MBHeader from "../components/MobileHeader";
import LogoSlider from "./LogoSlider";
import CaseStudySlider from "./CaseStudySlider";

const TMS = () => {
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
      <section className="Evol-0001">
        <HeaderMain />
        <MBHeader />

        <div className="web-dev-head">
          <h1>TMS, WMS, EPOD Service</h1>
          <p>
            Bionic Solutions develops superb and custom software solutions to
            boost logistics and supply chain processes. We design and build
            powerful TMS, CRM, e-commerce, and ERP systems for desktop, iOS, and
            Android platforms.
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
            <img src={GiveImg} alt="" />
          </div>
          <div className="give-content">
            <div className="give-01">
              <div className="giv-content-01">
                <div className="ti">
                  <img src={Tick} alt="" />
                  <p>CUSTOMIZATION</p>
                </div>
                <p className="div-para">
                  {" "}
                  <p>
                    Thanks to our experience and knowledge, you will receive an
                    advanced solution that will eliminate all the problems
                    associated with the inefficiency of your business processes.
                  </p>
                </p>
              </div>
              <div className="giv-content-02">
                <div className="ti">
                  <img src={Tick} alt="" />
                  <p>IMPROVED EFFICIENCY</p>
                </div>
                <p className="div-para">
                  {" "}
                  <p>
                    If your business performance indicators are not good enough,
                    we will help you optimize them by developing a digital
                    product that will speed up and improve your results.
                  </p>
                </p>
              </div>
              <div className="giv-content-02">
                <div className="ti">
                  <img src={Tick} alt="" />
                  <p>NEW BUSINESS PROSPECTS</p>
                </div>
                <p className="div-para">
                  {" "}
                  <p>
                    Through our cooperation, you will be able to boost your
                    business through a custom automation solution, which will
                    open up new horizons for your growth.
                  </p>
                </p>
              </div>
            </div>
            <div className="give-02">
              <div className="giv-content-01">
                <div className="ti">
                  <img src={Tick} alt="" />
                  <p>WORKFLOW AUTOMATION</p>
                </div>
                <p className="div-para">
                  {" "}
                  <p>
                    Through our custom business software, we will help you
                    implement the automation of your work processes so that your
                    employees spend less time on routine tasks.
                  </p>
                </p>
              </div>
              <div className="giv-content-02">
                <div className="ti">
                  <img src={Tick} alt="" />
                  <p>NEW BUSINESS PROSPECTS</p>
                </div>
                <p className="div-para">
                  {" "}
                  <p>
                    Our experts will make sure that the risks associated with
                    the human factor that accompany your business processes are
                    a thing of the past.
                  </p>
                </p>
              </div>
              <div className="giv-content-02">
                <div className="ti">
                  <img src={Tick} alt="" />
                  <p>OPTIMIZED INTERACTION BETWEEN DEPARTMENTS</p>
                </div>
                <p className="div-para">
                  {" "}
                  <p>
                    We will analyze the responsibilities of the employees of
                    each of the departments of your company to streamline the
                    interaction between them and make it more productive.
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OurApproch />
      <CaseStudySlider />
      <LetsDIscus />
      <ClientSays />
      <ReviewList />
      <section className="lets-talk">
        <div className="lets-talk-01">
          <h1>Let’s talk about your project</h1>
          <p>
            Development of a custom TMS to automate and synchronize business
            processes of the trucking company’s departments.
          </p>
          <button>
            Discuss the project <img src={Arrow} alt="" />
          </button>
        </div>
        <div className="lets-tal-2">
          <img src={LetImg} alt="" />
        </div>
      </section>
      <Growing />
      <Footer />
    </>
  );
};

export default TMS;
