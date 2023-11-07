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
import Plus from "../assets/Plus IMG.svg";

import ClientSays from "../components/ClientSays";
import ReviewList from "./ReviewList";
import Growing from "./Growing";
import Footer from "./Footer";
import OurApproch from "./OurApproch";
import Affordable from "../assets/Affordable.png";
import Tick from "../assets/Tick.png";
import LetImg from "../assets/lets-img.png";
import Min from "../assets/min.png";
import MBHeader from "../components/MobileHeader";
import LogoSlider from "../components/LogoSlider";
import CaseStudySlider from "./CaseStudySlider";
const CustomSoftware = () => {
  const [activeAnswer, setActiveAnswer] = useState(null);

  const toggleAnswer = (answerId) => {
    if (activeAnswer === answerId) {
      setActiveAnswer(null);
    } else {
      setActiveAnswer(answerId);
    }
  };

  const faqData = [
    {
      id: "A1",
      question: "What software is used in logistics?",
      answer:
        "Transportation Management Systems (TMS), Warehouse Management Systems (WMS), and Supply Chain Management (SCM) software are commonly used in logistics. These tools automate processes track shipments and manage inventory to optimize operations.",
    },
    {
      id: "A2",
      question: "What are the main activities of logistics systems?",
      answer:
        "Custom Software Development is the process of creating software that is specifically designed to meet the unique needs of a business or organization.",
    },
    {
      id: "A3",
      question: "Do you develop SaaS products for the logistics industry?",
      answer:
        "Custom Software Development is the process of creating software that is specifically designed to meet the unique needs of a business or organization.",
    },
    {
      id: "A4",
      question: "What is logistics software used for?",
      answer:
        "Custom Software Development is the process of creating software that is specifically designed to meet the unique needs of a business or organization.",
    },
  ];
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

  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isButtonClicked2, setIsButtonClicked2] = useState(false);
  const [isButtonClicked3, setIsButtonClicked3] = useState(false);
  const [isButtonClicked4, setIsButtonClicked4] = useState(false);
  const [isButtonClicked5, setIsButtonClicked5] = useState(false);
  const [isButtonClicked6, setIsButtonClicked6] = useState(false);
  const [isButtonClicked7, setIsButtonClicked7] = useState(false);
  const toggleContent = () => {
    setIsButtonClicked(!isButtonClicked);
  };
  const toggleContent2 = () => {
    setIsButtonClicked2(!isButtonClicked2);
  };
  const toggleContent3 = () => {
    setIsButtonClicked3(!isButtonClicked3);
  };
  const toggleContent4 = () => {
    setIsButtonClicked4(!isButtonClicked4);
  };
  const toggleContent5 = () => {
    setIsButtonClicked5(!isButtonClicked5);
  };

  const toggleContent6 = () => {
    setIsButtonClicked6(!isButtonClicked6);
  };
  const toggleContent7 = () => {
    setIsButtonClicked6(!isButtonClicked7);
  };
  const [Quewstion1, Question1] = useState(false);
  const [buttonImage, setButtonImage] = useState(Plus);
  const [qsClass, setQsClass] = useState("Qs-01");
  const toggleDiv = () => {
    Question1(!Quewstion1);
    setButtonImage(Quewstion1 ? Plus : Min);
    setQsClass(Quewstion1 ? "Qs-01" : "Qs-01Active");
  };
  const [Quewstion2, Question2] = useState(false);
  const [buttonImage2, setButtonImage2] = useState(Plus);
  const [qsClass2, setQsClass2] = useState("Qs-01");
  const toggleDiv2 = () => {
    Question2(!Quewstion2);
    setButtonImage2(Quewstion1 ? Plus : Min);
    setQsClass2(Quewstion1 ? "Qs-01" : "Qs-01Active");
  };
  const [Quewstion3, Question3] = useState(false);
  const [buttonImage3, setButtonImage3] = useState(Plus);
  const [qsClass3, setQsClass3] = useState("Qs-01");
  const toggleDiv3 = () => {
    Question3(!Quewstion3);
    setButtonImage3(Quewstion3 ? Plus : Min);
    setQsClass3(Quewstion3 ? "Qs-01" : "Qs-01Active");
  };
  const [Quewstion4, Question4] = useState(false);
  const [buttonImage4, setButtonImage4] = useState(Plus);
  const [qsClass4, setQsClass4] = useState("Qs-01");
  const toggleDiv4 = () => {
    Question4(!Quewstion4);
    setButtonImage4(Quewstion4 ? Plus : Min);
    setQsClass4(Quewstion4 ? "Qs-01" : "Qs-01Active");
  };
  return (
    <>
      <section className="Evol-0001">
        <HeaderMain />
        <MBHeader />
        <div className="web-dev-head">
          <h1 id="web-01"> Custom Software Development service</h1>
          <p>
            Bionic Solutions offers custom business software development to meet
            the unique needs of your business.
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
      <section className="Get-the-best">
        <h1>Get the best design for your digital solution</h1>
        <p>
          Partner with Bionic Solutions for cutting-edge analysis, design,
          development, implementation, and evaluation services.
        </p>
        <div className="BEst-it-0009">
          <div className="best-img">
            <img src={Affordable} alt="" />
          </div>
          <div className="best-get-query">
            <div className="query-01">
              <div className="Query-main-01">
                <span>01/</span>
                <h1>TMS, WMS, EPOD </h1>
                <button>
                  <img src={Arrow} alt="" />
                </button>
              </div>
              <div className="Query-main-01">
                <span>02/</span>
                <h1>erp software</h1>
                <button>
                  <img src={Arrow} alt="" />
                </button>
              </div>
              <div className="Query-main-01">
                <span>03/</span>
                <h1>cloud app</h1>
                <button>
                  <img src={Arrow} alt="" />
                </button>
              </div>
              <div className="Query-main-01">
                <span>04/</span>
                <h1>product development</h1>
                <button>
                  <img src={Arrow} alt="" />
                </button>
              </div>
              <div className="Query-main-01">
                <span>05/</span>
                <h1>nft marketplace</h1>
                <button>
                  <img src={Arrow} alt="" />
                </button>
              </div>
              <div className="Query-main-01">
                <span>06/</span>
                <h1>web app</h1>
                <button>
                  <img src={Arrow} alt="" />
                </button>
              </div>
              <div className="Query-main-01">
                <span>07/</span>
                <h1>dedicated team</h1>
                <button>
                  <img src={Arrow} alt="" />
                </button>
              </div>
            </div>

            <div className="query-02">
              <p id="Scoping">
                Unlock 1 innovative digital solutions for your business that
                ensure sustainability in the market.
              </p>

              <p id="Scoping">
                Unlock 2 innovative digital solutions for your business that
                ensure sustainability in the market.
              </p>

              <p id="Scoping">
                Unlock 3 innovative digital solutions for your business that
                ensure sustainability in the market.
              </p>

              <p id="Scoping">
                Unlock 4 innovative digital solutions for your business that
              </p>

              <p id="Scoping">
                Unlock 5 innovative digital solutions for your business that
              </p>

              <p id="Scoping">
                Unlock 6 innovative digital solutions for your business that
                ensure sustainability in the market.
              </p>

              <p id="Scoping">
                Unlock 7 innovative digital solutions for your business that
                ensure sustainability in the market.
              </p>
            </div>
          </div>
        </div>{" "}
      </section>
      <section className="we-help-you">
        <h1>We Will Help You</h1>
        <div className="we-help-you-main">
          <div className="we-help-01">
            <p>
              Order a free consultation — our experts will select the most
              effective solution
            </p>
            <input type="email" name="" id="" placeholder="Email *" />
            <input type="name" name="" id="" placeholder="name *" />
            <div className="check-box-we">
              <input type="checkbox" name="" id="" />
              <p>
                We will add your info to our CRM for contacting you regarding
                your request. For more info please consult our privacy policy.
              </p>
            </div>
            <button>Order a consultation</button>
          </div>
          <div className="we-help-02">
            <div className="help---0">
              <div className="tick-section">
                <img src={Tick} alt="" />
                <p>Increased revenue</p>
              </div>
              <p id="Achieve">
                Achieve a steady revenue stream from the start by utilizing our
                unparalleled product design evaluation processes.
              </p>
            </div>
            <div className="help---0">
              <div className="tick-section">
                <img src={Tick} alt="" />
                <p>High customer engagement</p>
              </div>
              <p id="Achieve">
                Achieve a steady revenue stream from the start by utilizing our
                unparalleled product design evaluation processes.
              </p>
            </div>
          </div>
          <div className="we-help-03">
            <div className="help---0">
              <div className="tick-section">
                <img src={Tick} alt="" />
                <p>High customer engagement</p>
              </div>
              <p id="Achieve">
                Set yourself apart from the competition with our attractive
                designs that are guaranteed to make an impact on your target
                audience.
              </p>
            </div>
            <div className="help---0">
              <div className="tick-section">
                <img src={Tick} alt="" />
                <p>Rational financial spending</p>
              </div>
              <p id="Achieve">
                Benefit from custom design at a reasonable cost due to our
                efficient workflow and budget-friendly rates for our services.
              </p>
            </div>
          </div>
        </div>
      </section>
      <OurApproch />
      <CaseStudySlider />

      <ClientSays />
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
      <ReviewList />

      <h1 className="QuestionAnswer">Questions & Answers</h1>
      <div className="questionAnswer">
        <div className="question-01">
          <div className="Vot-para">
            <img src={Dot} alt="" />
            <p>Check out some of the most common</p>
          </div>
          <p id="Question">questions asked by the clients</p>
        </div>
        <div className="question-02">
          <div id="question-01">
            <div className="q---0102-">
              <p className={qsClass}>What software is used in logistics?</p>
              <button className="min" onClick={toggleDiv}>
                <img src={buttonImage} alt="" />
              </button>
            </div>

            {Quewstion1 && (
              <div className="Anser">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                  asperiores perferendis eligendi dolorem facere sit, temporibus
                  itaque non voluptatum suscipit!
                </p>
              </div>
            )}
          </div>
          <div id="question-01">
            <div className="q---0102-">
              <p className={qsClass2}>What software is used in logistics?</p>
              <button className="min" onClick={toggleDiv2}>
                <img src={buttonImage2} alt="" />
              </button>
            </div>

            {Quewstion2 && (
              <div className="Anser">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                  asperiores perferendis eligendi dolorem facere sit, temporibus
                  itaque non voluptatum suscipit!
                </p>
              </div>
            )}
          </div>
          <div id="question-01">
            <div className="q---0102-">
              <p className={qsClass3}>What software is used in logistics?</p>
              <button className="min" onClick={toggleDiv3}>
                <img src={buttonImage3} alt="" />
              </button>
            </div>

            {Quewstion3 && (
              <div className="Anser">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                  asperiores perferendis eligendi dolorem facere sit, temporibus
                  itaque non voluptatum suscipit!
                </p>
              </div>
            )}
          </div>
          <div id="question-01">
            <div className="q---0102-">
              <p className={qsClass4}>What software is used in logistics?</p>
              <button className="min" onClick={toggleDiv4}>
                <img src={buttonImage4} alt="" />
              </button>
            </div>

            {Quewstion4 && (
              <div className="Anser">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                  asperiores perferendis eligendi dolorem facere sit, temporibus
                  itaque non voluptatum suscipit!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Growing />
      <Footer />
    </>
  );
};

export default CustomSoftware;
