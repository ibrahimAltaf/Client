import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import "../styles/webdev.css";
import OurApproch from "../components/OurApproch";
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
import LetsDIscus from "./LetsDIscus";
import Industries from "./Industries";
import TechStack from "./TechStack";
import MbHEader from "../components/MobileHeader";
import LogoSlider from "./LogoSlider";
import CaseStudySlider from "./CaseStudySlider";

const WebDev = () => {
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
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };
  const [selectedService, setSelectedService] = useState(null);

  const [showParagraph, setShowParagraph] = useState(false);
  const [showParagraph2, setShowParagraph2] = useState(false);
  const [showParagraph3, setShowParagraph3] = useState(false);
  const [showParagraph4, setShowParagraph4] = useState(false);
  const [showParagraph5, setShowParagraph5] = useState(false);
  const [showParagraph6, setShowParagraph6] = useState(false);
  const toggleParagraph = () => {
    setShowParagraph(!showParagraph);
  };
  const toggleParagraph2 = () => {
    setShowParagraph2(!showParagraph2);
  };
  const toggleParagraph3 = () => {
    setShowParagraph3(!showParagraph3);
  };
  const toggleParagraph4 = () => {
    setShowParagraph4(!showParagraph4);
  };
  const toggleParagraph5 = () => {
    setShowParagraph5(!showParagraph5);
  };
  const toggleParagraph6 = () => {
    setShowParagraph6(!showParagraph6);
  };

  const [showContent1, setShowContent1] = useState(true);
  const [showContent2, setShowContent2] = useState(false);
  const [showContent3, setShowContent3] = useState(false);
  const [showContent4, setShowContent4] = useState(false);
  const [showContent5, setShowContent5] = useState(false);

  // Function to toggle the visibility of content
  const toggleContent1 = (section) => {
    switch (section) {
      case 1:
        setShowContent1(!showContent1);
        break;
      case 2:
        setShowContent2(!showContent2);
        setShowContent1(false);
        break;
      case 3:
        setShowContent3(!showContent3);
        setShowContent2(false);
        break;
      case 4:
        setShowContent4(!showContent4);
        setShowContent3(false);
        break;
      case 5:
        setShowContent5(!showContent5);
        setShowContent4(false);
        break;
      default:
        break;
    }

    if (activeSection === section) {
      setActiveSection(null); // Clicked section is already open, so close it
    } else {
      setActiveSection(section); // Open the clicked section
    }
  };
  const [activeSection, setActiveSection] = useState(null);

  // Function to toggle the visibility of content and change class

  return (
    <>
      <section className="web-dev-main">
        <HeaderMain />
        <MbHEader />
        <div className="web-dev-head">
          <h1 id="web-den-head">Web and Mobile development services</h1>
          <p>
            Bionic Solutions creates solutions that solve your business
            challenges, meet market demands, improve internal operations, and
            stay ahead of the latest digital trends.
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
      <Fade left>
        <section className="evolution-0001">
          <div className="evolution-form">
            <p className="ev-para">
              Order a free consultation - our experts will select the most
              effective solution
            </p>
            <input type="email" placeholder="Email *" />
            <input type="text" name="" id="" placeholder="Phone *" />
            <div className="checb-0009">
              <input type="checkbox" name="" id="" />
              <p>
                We will add your info to our CRM for contacting you regarding
                your request. For more info please consult our privacy policy.
              </p>
            </div>
            <div className="evolution0009">
              <button>Order a consultation</button>
            </div>
          </div>
          <div className="TabChanger-main">
            <div className="evolution-desing-002">
              <div className="evolutio-design">
                <h1
                  className={
                    activeSection === 1 ? "TabChHeadActive" : "TabChHead"
                  }
                >
                  Evaluation & Design
                </h1>
                <img
                  src={showContent1 ? BottomArrow : ScroolTop}
                  alt=""
                  onClick={() => toggleContent1(1)}
                />
              </div>

              {showContent1 && (
                <Fade left>
                  <div className="REasereach-009">
                    <div className="Reasearch-01-main">
                      <div className="ev-ds-img">
                        <img src={EvolutionImg} alt="" />
                      </div>
                      <p>
                        Maximize your competitive edge in the marketplace by
                        partnering with us to conduct research and design
                        tailored program evaluations.
                      </p>
                      <button className="LearnMore">
                        Learn more <img src={Arrow} alt="" />
                      </button>
                    </div>
                    <div className="scoping-main">
                      <div
                        className="REsearch-des-g-evl"
                        onClick={toggleParagraph}
                      >
                        <span>01</span>
                        <p
                          className={
                            showParagraph
                              ? "AcordingEvolActive"
                              : "AcordingEvol"
                          }
                        >
                          Research & Development
                        </p>
                        <img src={GreenArrow} alt="" />
                      </div>
                      {showParagraph && (
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Aut quam, sunt asperiores facere sit dolorum
                          saepe modi excepturi odit voluptatibus.
                        </p>
                      )}

                      <div
                        className="REsearch-des-g-evl"
                        onClick={toggleParagraph2}
                      >
                        <span>02</span>
                        <p
                          className={
                            showParagraph2
                              ? "AcordingEvolActive"
                              : "AcordingEvol"
                          }
                        >
                          SCOPING SESSION
                        </p>
                        <img src={GreenArrow} alt="" />
                      </div>
                      {showParagraph2 && (
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Aut quam, sunt asperiores facere sit dolorum
                          saepe modi excepturi odit voluptatibus.
                        </p>
                      )}
                      <div
                        className="REsearch-des-g-evl"
                        onClick={toggleParagraph3}
                      >
                        <span>03</span>
                        <p
                          className={
                            showParagraph3
                              ? "AcordingEvolActive"
                              : "AcordingEvol"
                          }
                        >
                          Scoping Session
                        </p>
                        <img src={GreenArrow} alt="" />
                      </div>
                      {showParagraph3 && (
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Maiores nisi quis eos, corrupti aspernatur
                          laborum similique accusamus pariatur dignissimos
                          beatae.
                        </p>
                      )}
                      <div
                        className="REsearch-des-g-evl"
                        onClick={toggleParagraph4}
                      >
                        <span>04</span>
                        <p
                          className={
                            showParagraph4
                              ? "AcordingEvolActive"
                              : "AcordingEvol"
                          }
                        >
                          UX Review
                        </p>
                        <img src={GreenArrow} alt="" />
                      </div>
                      {showParagraph4 && (
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Dolorem porro aspernatur esse deserunt
                          exercitationem magni quae voluptate! Quae, magni eum.
                        </p>
                      )}
                      <div
                        className="REsearch-des-g-evl"
                        onClick={toggleParagraph5}
                      >
                        <span>05</span>
                        <p
                          className={
                            showParagraph5
                              ? "AcordingEvolActive"
                              : "AcordingEvol"
                          }
                        >
                          UX/UI Design
                        </p>
                        <img src={GreenArrow} alt="" />
                      </div>
                      {showParagraph5 && (
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Delectus ipsam quos sed iure, minima sit ratione
                          deleniti eius illo deserunt?
                        </p>
                      )}
                      <div
                        className="REsearch-des-g-evl"
                        onClick={toggleParagraph6}
                      >
                        <span>06</span>
                        <p
                          className={
                            showParagraph6
                              ? "AcordingEvolActive"
                              : "AcordingEvol"
                          }
                        >
                          Branding
                        </p>
                        <img src={GreenArrow} alt="" />
                      </div>
                      {showParagraph6 && (
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Rerum praesentium aut reiciendis ut assumenda
                          harum, nisi autem labore culpa non?
                        </p>
                      )}
                    </div>
                  </div>
                </Fade>
              )}
            </div>
            <div className="evolution-desing-002">
              <div className="evolutio-design">
                <h1
                  className={
                    activeSection === 2 ? "TabChHeadActive" : "TabChHead"
                  }
                >
                  Custom Software
                </h1>
                <img
                  src={showContent2 ? BottomArrow : ScroolTop}
                  onClick={() => toggleContent1(2)}
                  alt=""
                />
              </div>

              {showContent2 && (
                <Fade bottom>
                  <div className="REasereach-009">
                    <div className="Reasearch-01-main">
                      <div className="ev-ds-img">
                        <img src={EvolutionImg} alt="" />
                      </div>
                      <p>
                        Maximize your competitive edge in the marketplace by
                        partnering with us to conduct research and design
                        tailored program evaluations.
                      </p>
                      <button className="LearnMore">
                        Learn more <img src={Arrow} alt="" />
                      </button>
                    </div>
                    <div className="scoping-main">
                      <div
                        className="REsearch-des-g-evl"
                        onClick={toggleParagraph}
                      >
                        <span>01</span>
                        <p
                          className={
                            showParagraph
                              ? "AcordingEvolActive"
                              : "AcordingEvol"
                          }
                        >
                          Research & Development
                        </p>
                        <img src={GreenArrow} alt="" />
                      </div>
                      {showParagraph && (
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Aut quam, sunt asperiores facere sit dolorum
                          saepe modi excepturi odit voluptatibus.
                        </p>
                      )}

                      <div
                        className="REsearch-des-g-evl"
                        onClick={toggleParagraph2}
                      >
                        <span>02</span>
                        <p
                          className={
                            showParagraph2
                              ? "AcordingEvolActive"
                              : "AcordingEvol"
                          }
                        >
                          Scoping Session
                        </p>
                        <img src={GreenArrow} alt="" />
                      </div>
                      {showParagraph2 && (
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Aut quam, sunt asperiores facere sit dolorum
                          saepe modi excepturi odit voluptatibus.
                        </p>
                      )}
                      <div
                        className="REsearch-des-g-evl"
                        onClick={toggleParagraph3}
                      >
                        <span>03</span>
                        <p
                          className={
                            showParagraph3
                              ? "AcordingEvolActive"
                              : "AcordingEvol"
                          }
                        >
                          UX Review
                        </p>
                        <img src={GreenArrow} alt="" />
                      </div>
                      {showParagraph3 && (
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Sequi possimus culpa sunt cupiditate quis
                          perspiciatis illum aut, ducimus iste nobis?
                        </p>
                      )}
                      <div
                        className="REsearch-des-g-evl"
                        onClick={toggleParagraph4}
                      >
                        <span>04</span>
                        <p
                          className={
                            showParagraph4
                              ? "AcordingEvolActive"
                              : "AcordingEvol"
                          }
                        >
                          UX Review
                        </p>
                        <img src={GreenArrow} alt="" />
                      </div>
                      {showParagraph4 && (
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Adipisci reiciendis, eveniet repellendus ea at
                          aliquam est iure accusamus. Officia, voluptatem.
                        </p>
                      )}
                      <div
                        className="REsearch-des-g-evl"
                        onClick={toggleParagraph5}
                      >
                        <span>05</span>
                        <p
                          className={
                            showParagraph5
                              ? "AcordingEvolActive"
                              : "AcordingEvol"
                          }
                        >
                          UX Review
                        </p>
                        <img src={GreenArrow} alt="" />
                      </div>
                      {showParagraph5 && (
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Cumque harum delectus ipsum nisi corporis autem
                          consequatur, accusantium nulla sunt amet?
                        </p>
                      )}
                      <div
                        className="REsearch-des-g-evl"
                        onClick={toggleParagraph6}
                      >
                        <span>06</span>
                        <p
                          className={
                            showParagraph6
                              ? "AcordingEvolActive"
                              : "AcordingEvol"
                          }
                        >
                          {" "}
                          Product Design
                        </p>
                        <img src={GreenArrow} alt="" />
                      </div>
                      {showParagraph6 && (
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Error est aut dolore fugiat praesentium
                          cupiditate, minima dicta omnis iusto soluta!
                        </p>
                      )}
                    </div>
                  </div>
                </Fade>
              )}
            </div>
            <div className="evolution-desing-002">
              <div className="evolutio-design">
                <h1
                  className={
                    activeSection === 3 ? "TabChHeadActive" : "TabChHead"
                  }
                >
                  Web Development
                </h1>
                <img
                  src={showContent3 ? BottomArrow : ScroolTop}
                  lt=""
                  onClick={() => toggleContent1(3)}
                />
              </div>

              {showContent3 && (
                <Fade bottom>
                  <div className="REasereach-009">
                    <div className="Reasearch-01-main">
                      <div className="ev-ds-img">
                        <img src={EvolutionImg} alt="" />
                      </div>
                      <p>
                        Maximize your competitive edge in the marketplace by
                        partnering with us to conduct research and design
                        tailored program evaluations.
                      </p>
                      <button className="LearnMore">
                        Learn more <img src={Arrow} alt="" />
                      </button>
                    </div>
                    <div className="scoping-main">
                      <div
                        className="REsearch-des-g-evl"
                        onClick={toggleParagraph}
                      >
                        <span>01</span>
                        <p
                          className={
                            showParagraph
                              ? "AcordingEvolActive"
                              : "AcordingEvol"
                          }
                        >
                          Research & Development
                        </p>
                        <img src={GreenArrow} alt="" />
                      </div>
                      {showParagraph && (
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Aut quam, sunt asperiores facere sit dolorum
                          saepe modi excepturi odit voluptatibus.
                        </p>
                      )}

                      <div
                        className="REsearch-des-g-evl"
                        onClick={toggleParagraph2}
                      >
                        <span>02</span>
                        <p
                          className={
                            showParagraph2
                              ? "AcordingEvolActive"
                              : "AcordingEvol"
                          }
                        >
                          Scoping Session
                        </p>
                        <img src={GreenArrow} alt="" />
                      </div>
                      {showParagraph2 && (
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Aut quam, sunt asperiores facere sit dolorum
                          saepe modi excepturi odit voluptatibus.
                        </p>
                      )}
                      <div
                        className="REsearch-des-g-evl"
                        onClick={toggleParagraph3}
                      >
                        <span>03</span>
                        <p
                          className={
                            showParagraph3
                              ? "AcordingEvolActive"
                              : "AcordingEvol"
                          }
                        >
                          UX Review
                        </p>
                        <img src={GreenArrow} alt="" />
                      </div>
                      {showParagraph3 && (
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cupiditate, quae cumque. Sequi debitis pariatur
                          neque eius delectus facere illum distinctio.
                        </p>
                      )}
                      <div
                        className="REsearch-des-g-evl"
                        onClick={toggleParagraph4}
                      >
                        <span>04</span>
                        <p
                          className={
                            showParagraph4
                              ? "AcordingEvolActive"
                              : "AcordingEvol"
                          }
                        >
                          UX/UI Design
                        </p>
                        <img src={GreenArrow} alt="" />
                      </div>
                      {showParagraph4 && (
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Ex reiciendis, modi delectus error similique
                          explicabo natus ea ut dicta ipsam.
                        </p>
                      )}
                      <div
                        className="REsearch-des-g-evl"
                        onClick={toggleParagraph5}
                      >
                        <span>05</span>
                        <p
                          className={
                            showParagraph5
                              ? "AcordingEvolActive"
                              : "AcordingEvol"
                          }
                        >
                          Branding
                        </p>
                        <img src={GreenArrow} alt="" />
                      </div>
                      {showParagraph5 && (
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Nisi, nemo? Velit eaque ullam omnis alias,
                          obcaecati similique eveniet maxime totam.
                        </p>
                      )}
                      <div
                        className="REsearch-des-g-evl"
                        onClick={toggleParagraph6}
                      >
                        <span>06</span>
                        <p
                          className={
                            showParagraph6
                              ? "AcordingEvolActive"
                              : "AcordingEvol"
                          }
                        >
                          Product Design
                        </p>
                        <img src={GreenArrow} alt="" />
                      </div>
                      {showParagraph6 && (
                        <p>
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Nisi porro reprehenderit facilis nihil mollitia.
                          Ipsam officia necessitatibus aspernatur pariatur
                          molestiae!
                        </p>
                      )}
                    </div>
                  </div>
                </Fade>
              )}
            </div>
            <div className="evolution-desing-002">
              <div className="evolutio-design">
                <h1
                  className={
                    activeSection === 4 ? "TabChHeadActive" : "TabChHead"
                  }
                >
                  Mobile Development
                </h1>
                <img
                  src={showContent4 ? BottomArrow : ScroolTop}
                  alt=""
                  onClick={() => toggleContent1(4)}
                />
              </div>

              {showContent4 && (
                <Fade bottom>
                  <div className="REasereach-009">
                    <div className="Reasearch-01-main">
                      <div className="ev-ds-img">
                        <img src={EvolutionImg} alt="" />
                      </div>
                      <p>
                        Maximize your competitive edge in the marketplace by
                        partnering with us to conduct research and design
                        tailored program evaluations.
                      </p>
                      <button className="LearnMore">
                        Learn more <img src={Arrow} alt="" />
                      </button>
                    </div>
                    <div className="scoping-main">
                      <div
                        className="REsearch-des-g-evl"
                        onClick={toggleParagraph}
                      >
                        <span>01</span>
                        <p
                          className={
                            showParagraph
                              ? "AcordingEvolActive"
                              : "AcordingEvol"
                          }
                        >
                          Research & Development
                        </p>
                        <img src={GreenArrow} alt="" />
                      </div>
                      {showParagraph && (
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Aut quam, sunt asperiores facere sit dolorum
                          saepe modi excepturi odit voluptatibus.
                        </p>
                      )}

                      <div
                        className="REsearch-des-g-evl"
                        onClick={toggleParagraph2}
                      >
                        <span>02</span>
                        <p
                          className={
                            showParagraph2
                              ? "AcordingEvolActive"
                              : "AcordingEvol"
                          }
                        >
                          Scoping Session
                        </p>
                        <img src={GreenArrow} alt="" />
                      </div>
                      {showParagraph2 && (
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Aut quam, sunt asperiores facere sit dolorum
                          saepe modi excepturi odit voluptatibus.
                        </p>
                      )}
                      <div
                        className="REsearch-des-g-evl"
                        onClick={toggleParagraph3}
                      >
                        <span>03</span>
                        <p
                          className={
                            showParagraph3
                              ? "AcordingEvolActive"
                              : "AcordingEvol"
                          }
                        >
                          UX Review
                        </p>
                        <img src={GreenArrow} alt="" />
                      </div>
                      {showParagraph3 && (
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Neque dolore perspiciatis omnis ducimus,
                          corrupti eius veritatis nobis ipsum aut explicabo?
                        </p>
                      )}
                      <div
                        className="REsearch-des-g-evl"
                        onClick={toggleParagraph4}
                      >
                        <span>04</span>
                        <p
                          className={
                            showParagraph4
                              ? "AcordingEvolActive"
                              : "AcordingEvol"
                          }
                        >
                          UX/UI Design
                        </p>
                        <img src={GreenArrow} alt="" />
                      </div>
                      {showParagraph4 && (
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ab sint sed blanditiis sunt earum quas hic
                          voluptatum ipsa nisi odit?
                        </p>
                      )}
                      <div
                        className="REsearch-des-g-evl"
                        onClick={toggleParagraph5}
                      >
                        <span>05</span>
                        <p
                          className={
                            showParagraph5
                              ? "AcordingEvolActive"
                              : "AcordingEvol"
                          }
                        >
                          Branding
                        </p>
                        <img src={GreenArrow} alt="" />
                      </div>
                      {showParagraph5 && (
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ipsam perspiciatis quidem quibusdam, cupiditate
                          sequi totam quisquam aut distinctio illum eius!
                        </p>
                      )}
                      <div
                        className="REsearch-des-g-evl"
                        onClick={toggleParagraph6}
                      >
                        <span>06</span>
                        <p
                          className={
                            showParagraph6
                              ? "AcordingEvolActive"
                              : "AcordingEvol"
                          }
                        >
                          Product Design
                        </p>
                        <img src={GreenArrow} alt="" />
                      </div>
                      {showParagraph6 && (
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Iusto sit aut quia, illum quae est laboriosam.
                          Ratione, nulla? Dolorem, reprehenderit!
                        </p>
                      )}
                    </div>
                  </div>
                </Fade>
              )}
            </div>
            <div className="evolution-desing-002">
              <div className="evolutio-design">
                <h1
                  className={
                    activeSection === 5 ? "TabChHeadActive" : "TabChHead"
                  }
                >
                  Maintenance & Support
                </h1>
                <img
                  src={showContent5 ? BottomArrow : ScroolTop}
                  onClick={() => toggleContent1(5)}
                  alt=""
                />
              </div>

              {showContent5 && (
                <Fade bottom>
                  <div className="REasereach-009">
                    <div className="Reasearch-01-main">
                      <div className="ev-ds-img">
                        <img src={EvolutionImg} alt="" />
                      </div>
                      <p>
                        Maximize your competitive edge in the marketplace by
                        partnering with us to conduct research and design
                        tailored program evaluations.
                      </p>
                      <button className="LearnMore">
                        Learn more <img src={Arrow} alt="" />
                      </button>
                    </div>
                    <div className="scoping-main">
                      <div
                        className="REsearch-des-g-evl"
                        onClick={toggleParagraph}
                      >
                        <span>01</span>
                        <p
                          className={
                            showParagraph
                              ? "AcordingEvolActive"
                              : "AcordingEvol"
                          }
                        >
                          Research & Development
                        </p>
                        <img src={GreenArrow} alt="" />
                      </div>
                      {showParagraph && (
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Aut quam, sunt asperiores facere sit dolorum
                          saepe modi excepturi odit voluptatibus.
                        </p>
                      )}

                      <div
                        className="REsearch-des-g-evl"
                        onClick={toggleParagraph2}
                      >
                        <span>02</span>
                        <p
                          className={
                            showParagraph2
                              ? "AcordingEvolActive"
                              : "AcordingEvol"
                          }
                        >
                          Scoping Session
                        </p>
                        <img src={GreenArrow} alt="" />
                      </div>
                      {showParagraph2 && (
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Aut quam, sunt asperiores facere sit dolorum
                          saepe modi excepturi odit voluptatibus.
                        </p>
                      )}
                      <div
                        className="REsearch-des-g-evl"
                        onClick={toggleParagraph3}
                      >
                        <span>03</span>
                        <p
                          className={
                            showParagraph3
                              ? "AcordingEvolActive"
                              : "AcordingEvol"
                          }
                        >
                          UX Review
                        </p>
                        <img src={GreenArrow} alt="" />
                      </div>
                      {showParagraph3 && <p></p>}
                      <div
                        className="REsearch-des-g-evl"
                        onClick={toggleParagraph4}
                      >
                        <span>04</span>
                        <p
                          className={
                            showParagraph4
                              ? "AcordingEvolActive"
                              : "AcordingEvol"
                          }
                        >
                          UX/UI Design
                        </p>
                        <img src={GreenArrow} alt="" />
                      </div>
                      {showParagraph4 && (
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Dignissimos magni, ducimus nisi excepturi
                          corrupti mollitia velit unde nemo delectus
                          consectetur?
                        </p>
                      )}
                      <div
                        className="REsearch-des-g-evl"
                        onClick={toggleParagraph5}
                      >
                        <span>05</span>
                        <p
                          className={
                            showParagraph5
                              ? "AcordingEvolActive"
                              : "AcordingEvol"
                          }
                        >
                          Branding
                        </p>
                        <img src={GreenArrow} alt="" />
                      </div>
                      {showParagraph5 && (
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Fugit tempora ducimus et itaque magnam fuga
                          perspiciatis iusto, sint quam quaerat.
                        </p>
                      )}
                      <div
                        className="REsearch-des-g-evl"
                        onClick={toggleParagraph6}
                      >
                        <span>06</span>
                        <p
                          className={
                            showParagraph6
                              ? "AcordingEvolActive"
                              : "AcordingEvol"
                          }
                        >
                          Product Design
                        </p>
                        <img src={GreenArrow} alt="" />
                      </div>
                      {showParagraph6 && (
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Libero at quia natus temporibus, beatae ratione.
                          Nemo officia modi blanditiis corporis!
                        </p>
                      )}
                    </div>
                  </div>
                </Fade>
              )}
            </div>
          </div>
        </section>
      </Fade>

      <Fade></Fade>
      <OurApproch />
      <CaseStudySlider />
      <Fade left>
        <LetsDIscus />
      </Fade>
      <ClientSays />
      <ReviewList />
      <Industries />
      <TechStack />
      <Growing />
      <Footer />
    </>
  );
};

export default WebDev;
