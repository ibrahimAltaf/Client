import React, { useState, useEffect, useRef } from "react";
import Fade from "react-reveal/Fade";
// Import css
import "../styles/Home.css";
import Header from "./Header";
import { Link } from "react-router-dom";
// Import Images
import ReelIcons from "../assets/ShowRell Icons.png";
import LetsDiscus from "../assets/LetDiscus.png";
import Dot from "../assets/Dot.png";
import logo1 from "../assets/logo-01.png";
import logo2 from "../assets/logo-1.png";
import logo3 from "../assets/logo-03.png";
import logo4 from "../assets/logo-4.png";
import logo5 from "../assets/logo-5.png";
import logo6 from "../assets/logo-6.png";
import logo7 from "../assets/logo-07.png";
import logo8 from "../assets/logo-08.png";
import logo9 from "../assets/logo-09.png";
import Evolution from "../assets/Evolutin.png";
import Arrow from "../assets/ArrowImage.png";
import ClientName from "../assets/clientImages.png";
import ClientImg from "../assets/ClientNAme.png";
import Study01 from "../assets/UltimatePlatfrom.png";
import WhiteArrow from "../assets/whiteArrow.png";
import ChoiceImg from "../assets/whyChoice.png";
import BlackARrow from "../assets/blackArrow.png";
import ForwordArrow from "../assets/ForwordArrow.png";
import Alex from "../assets/Alex.png";
import Alex2 from "../assets/Alex2.png";
import Max from "../assets/Max.png";
import Nady from "../assets/Nady.png";
import Serge from "../assets/Serge.png";
import Grapql from "../assets/GraphyQl.png";
import REactFRom from "../assets/React Node.png";
import AntDesign from "../assets/ANT Designer.png";
import MaterialUi from "../assets/Mui.png";
import APolo from "../assets/Apollo.png";
import Nextjs from "../assets/Next js.png";
import Reactjs from "../assets/React JS.png";
import REstApi from "../assets/Rest Api.png";
import TSscript from "../assets/TS.png";
import Spring from "../assets/Spring.png";
import Node from "../assets/node.png";
import Logistic from "../assets/logistic.png";
import Footer from "./Footer";
import OurApproch from "./OurApproch";
import ClientSays from "./ClientSays";
import ReviewList from "./ReviewList";
import CaseStudies from "./CaseStudies";
import WhyChoice from "./WhyChoice";
import Truck from "../assets/Truck.png";
import MeetText from "./MeetText";
import Meet from "./Meet";
import TechStack from "./TechStack";
import Industries from "./Industries";
import InsightCompo from "./InsightCompo";
import Growing from "./Growing";
import MobileHeader from "./MobileHeader";
import WebDevelopment from "../assets/webDevlopmentTab.webp";
import MobileApp from "../assets/mobieAppTab.webp";
import CustomSoftware from "../assets/customTab.webp";
import Maintenance from "../assets/MaintainceSupportTab.webp";
import LogoSlider from "./LogoSlider";
import CaseSlider from "./CaseSlider";

const Home = () => {
  const [openSection, setOpenSection] = useState(1); // Set the default open section to 1

  const toggleButtonVisibility = (sectionId) => {
    if (openSection === sectionId) {
      setOpenSection(null); // Close the section if it's already open
    } else {
      setOpenSection(sectionId);
    }
  };
  const [showLearnMore, setShowLearnMore] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
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
  const imageCount = images.length;
  const imageWidth = 184;
  const slideInterval = 1000;
  const sliderStyle = {
    transform: `translateX(-${currentIndex * imageWidth}px)`,
    transition: "transform 0.5s ease-in-out",
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageCount);
    }, slideInterval);

    return () => clearInterval(interval);
  }, []);

  // Lets Discus Mouse HAndle
  const imageRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;
    if (image) {
      image.style.transition = "transform 0.2s";
    }
  }, []);

  const handleMouseMove = (e) => {
    const image = imageRef.current;
    if (image) {
      const xOffset = (e.clientX / window.innerWidth - 0.9) * 100; // Adjust the factor as needed
      const yOffset = (e.clientY / window.innerHeight - 0.9) * 100; // Adjust the factor as needed

      image.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    }
  };

  const handleMouseLeave = () => {
    const image = imageRef.current;
    if (image) {
      image.style.transform = "translate(0px, 0px)";
    }
  };
  return (
    <>
      {/* Hero section Start */}
      <section className="main-hero-section-01">
        <Header />
        <MobileHeader />

        <Fade left>
          <div className="Hero-section-content">
            <div className="watch-reels">
              <img src={ReelIcons} alt="" />
              <p className="Watch-reels-text">Showreel</p>
            </div>
            <div className="Hero-text-content-01">
              <div className="Hero-head-01">
                <h1 className="Hero-Head">
                  Turning Digital Ideas into Powerful & Lucrative Realities
                </h1>
              </div>
              <div className="Hero-para-01">
                <p>
                  We offer a wide range of services, from web design and
                  development <br /> to mobile app development and digital
                  marketing, all designed to <br /> help you achieve your
                  business goals. Let's discuss Your project
                </p>
                <Fade left>
                  <div
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className="let-Discus"
                  >
                    <img src={LetsDiscus} ref={imageRef} alt="" />
                  </div>
                </Fade>
              </div>
            </div>
            <div className="watch-reels">
              <img src={Dot} alt="" />
              <p className="Watch-reels-text">Key clients</p>
            </div>
          </div>
        </Fade>
      </section>
      <LogoSlider />
      <section className="evolution ">
        <div className="evolution-img-01">
          <img
            src={
              openSection === 1
                ? Evolution
                : openSection === 2
                ? WebDevelopment
                : openSection === 3
                ? CustomSoftware
                : openSection === 4
                ? MobileApp
                : openSection === 5
                ? Maintenance
                : ""
            }
            alt=""
          />
        </div>
        <div className="evolution-content">
          <div className="evol-component">
            <div className="Ev-02">
              <p className="E-01">01/</p>
              <div className="evolutin-head-2">
                <Fade left>
                  <h1
                    onClick={() => toggleButtonVisibility(1)}
                    id={openSection === 1 ? "EvolutionActiveHead" : ""}
                  >
                    Evaluation & Design
                  </h1>
                </Fade>
                <div
                  className="Evolution-btn"
                  style={{ display: openSection === 1 ? "block" : "none" }}
                >
                  <button>Research & Development</button>
                  <button>Scoping Session</button>
                  <button>UX Review</button>
                  <button>UX Review</button>
                  <button>Branding</button>
                  <button>Product Design</button>
                  <button>Rapid prototyping</button>
                  <p className="evolution-para">
                    Maximize your competitive edge in the marketplace by
                    partnering with us to conduct research and design tailored
                    program evaluations.
                  </p>
                </div>
                <Link to={"/evolution"} target="_blank">
                  <button className="LearnMore">
                    Learn more <img src={Arrow} alt="" />
                  </button>
                </Link>
              </div>
            </div>

            <div>
              <div className="Ev-02">
                <p className="E-01">02/</p>
                <div className="evolutin-head-2">
                  <Fade left>
                    <h1
                      onClick={() => toggleButtonVisibility(2)}
                      id={openSection === 2 ? "EvolutionActiveHead" : ""}
                    >
                      Web Development
                    </h1>
                  </Fade>
                  <div
                    className="Evolution-btn"
                    style={{
                      display: openSection === 2 ? "block" : "none",
                    }}
                  >
                    <button>Research & Development</button>
                    <button>Scoping Session</button>
                    <button>UX Review</button>
                    <button>UX Review</button>
                    <button>Branding</button>
                    <button>Product Design</button>
                    <button>Rapid prototyping</button>
                    <p className="evolution-para">
                      Maximize your competitive edge in the marketplace by
                      partnering with us to conduct research and design tailored
                      program evaluations.
                    </p>
                  </div>
                </div>
              </div>
              <div className="Ev-02">
                <p className="E-01">03/</p>
                <div className="evolutin-head-2">
                  <Fade left>
                    <h1
                      onClick={() => toggleButtonVisibility(3)}
                      id={openSection === 3 ? "EvolutionActiveHead" : ""}
                    >
                      Custom Software
                    </h1>
                  </Fade>
                  <div
                    className="Evolution-btn"
                    style={{
                      display: openSection === 3 ? "block" : "none",
                    }}
                  >
                    <button>Research & Development</button>
                    <button>Scoping Session</button>
                    <button>UX Review</button>
                    <button>UX Review</button>
                    <button>Branding</button>
                    <button>Product Design</button>
                    <button>Rapid prototyping</button>
                    <p className="evolution-para">
                      Maximize your competitive edge in the marketplace by
                      partnering with us to conduct research and design tailored
                      program evaluations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="Ev-02">
                <p className="E-01">04/</p>
                <div className="evolutin-head-2">
                  <Fade left>
                    <h1
                      onClick={() => toggleButtonVisibility(4)}
                      id={openSection === 4 ? "EvolutionActiveHead" : ""}
                    >
                      Mobile Development
                    </h1>
                  </Fade>
                  <div
                    className="Evolution-btn"
                    style={{
                      display: openSection === 4 ? "block" : "none",
                    }}
                  >
                    <button>Research & Development</button>
                    <button>Scoping Session</button>
                    <button>UX Review</button>
                    <button>UX Review</button>
                    <button>Branding</button>
                    <button>Product Design</button>
                    <button>Rapid prototyping</button>
                    <p className="evolution-para">
                      Maximize your competitive edge in the marketplace by
                      partnering with us to conduct research and design tailored
                      program evaluations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="Ev-02">
                <p className="E-01">05/</p>
                <div className="evolutin-head-2">
                  <Fade left>
                    <h1
                      onClick={() => toggleButtonVisibility(5)}
                      id={openSection === 5 ? "EvolutionActiveHead" : ""}
                    >
                      Maintenance & Support
                    </h1>
                  </Fade>
                  <div
                    className="Evolution-btn"
                    style={{
                      display: openSection === 5 ? "block" : "none",
                    }}
                  >
                    <button>Research & Development</button>
                    <button>Scoping Session</button>
                    <button>UX Review</button>
                    <button>UX Review</button>
                    <button>Branding</button>
                    <button>Product Design</button>
                    <button>Rapid prototyping</button>
                    <p className="evolution-para">
                      Maximize your competitive edge in the marketplace by
                      partnering with us to conduct research and design tailored
                      program evaluations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <OurApproch />

      <ClientSays />

      <ReviewList />

      <CaseStudies />

      <WhyChoice />

      <MeetText />
      <Meet />

      <TechStack />

      <Industries />

      <CaseSlider />

      <Growing />

      <Footer />
    </>
  );
};

export default Home;
