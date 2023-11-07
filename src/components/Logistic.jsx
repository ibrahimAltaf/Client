import React, { useState, useEffect } from "react";
import "../styles/logistic2.css";
import Min from "../assets/min.png";
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
import Plus from "../assets/Plus IMG.svg";

import OurApproch from "./OurApproch";
import GiveImg from "../assets/HelpYou.png";
import Tick from "../assets/Tick.png";
import LetsDIscus from "./LetsDIscus";
import LetImg from "../assets/lets-img.png";
import LogisticIMg from "../assets/logistic.png";
import Logistichero from "../assets/logistic-hero.png";
import LetsImg from "../assets/lets-img.png";
import MBHeader from "../components/MobileHeader";
import LogoSlider from "./LogoSlider";
import CaseStudySlider from "./CaseStudySlider";
const Logistic = () => {
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

  const [activeAnswer, setActiveAnswer] = useState(null);

  const toggleAnswer = (answerId) => {
    if (activeAnswer === answerId) {
      setActiveAnswer(null);
    } else {
      setActiveAnswer(answerId);
    }
  };

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
  const [isButtonClicked8, setIsButtonClicked8] = useState(false);
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
    setIsButtonClicked7(!isButtonClicked7);
  };
  const toggleContent8 = () => {
    setIsButtonClicked8(!isButtonClicked8);
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
      <section className="Logistic-01-0">
        <HeaderMain />
        <MBHeader />
        <div className="web-dev-head">
          <h1 id="web-dev-head">Logistics Software Development Company</h1>
          <p>
            Bionic Solutions is a leading provider of custom logistics solutions
            that automate business processes and help businesses to succeed in
            the global connected logistics market.
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

      <div className="logistic-head-main">
        <h1 className="logistic-hea">
          Get expert help with your custom transportation system!
        </h1>
        <p className="logitic-para">
          Bionic Solutions can help you take your transport management to the
          next level. Our team of specialists can build a custom solution that
          meets your specific needs and helps you achieve your business goals.
        </p>
      </div>

      <section className="working-details">
        <div className="working-detail-01">
          <img src={Logistichero} alt="" />
        </div>
        <div className="working-detail-02">
          <div className="detail-01">
            <div className="w1-01">
              <div className="q-content">
                <div>
                  {" "}
                  <p className="workin-text">
                    <span className="w-01-text">01/</span>
                    Transportation Management System
                  </p>
                </div>
                <div>
                  <button className="btn-arrow" onClick={toggleContent}>
                    <img src={GreenArrow} alt="" />
                  </button>
                </div>
              </div>
              <div className="q-content">
                <div>
                  {" "}
                  <p className="workin-text">
                    <span className="w-01-text">02/</span>
                    Fleet Management System
                  </p>
                </div>
                <div>
                  <button className="btn-arrow">
                    <img src={GreenArrow} alt="" />
                  </button>
                </div>
              </div>
              <div className="q-content">
                <div>
                  {" "}
                  <p className="workin-text">
                    <span className="w-01-text">03/</span>
                    Shipment Management System
                  </p>
                </div>
                <div>
                  <button className="btn-arrow">
                    <img src={GreenArrow} alt="" />
                  </button>
                </div>
              </div>
              <div className="q-content">
                <div>
                  {" "}
                  <p className="workin-text">
                    <span className="w-01-text">04/</span>
                    Employee Management Systems
                  </p>
                </div>
                <div>
                  <button className="btn-arrow">
                    <img src={GreenArrow} alt="" />
                  </button>
                </div>
              </div>
              <div className="q-content">
                <div>
                  {" "}
                  <p className="workin-text">
                    <span className="w-01-text">05/</span>
                    Route Planning Software
                  </p>
                </div>
                <div>
                  <button className="btn-arrow">
                    <img src={GreenArrow} alt="" />
                  </button>
                </div>
              </div>
              <div className="q-content">
                <div>
                  {" "}
                  <p className="workin-text">
                    <span className="w-01-text">06/</span>
                    Warehouse Management Systems
                  </p>
                </div>
                <div>
                  <button className="btn-arrow">
                    <img src={GreenArrow} alt="" />
                  </button>
                </div>
              </div>
              <div className="q-content">
                <div>
                  {" "}
                  <p className="workin-text">
                    <span className="w-01-text">07/</span>
                    Freight Management Systems
                  </p>
                </div>
                <div>
                  <button className="btn-arrow">
                    <img src={GreenArrow} alt="" />
                  </button>
                </div>
              </div>
              <div className="q-content">
                <div>
                  {" "}
                  <p className="workin-text">
                    <span className="w-01-text">08/</span>
                    Asset Tracking and Management Systems
                  </p>
                </div>
                <div>
                  <button className="btn-arrow">
                    <img src={GreenArrow} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-3-01">
            <p>
              Efficiently manage your transportation operations with our
              Transportation Management System. Our TMS optimizes routes,
              improves fleet management, and tracks shipments in real-time,
              ensuring timely deliveries and customer satisfaction.
            </p>

            <p>
              Efficiently manage your transportation operations with our
              Transportation Management System. Our TMS optimizes routes,
              improves fleet management, and tracks shipments in real-time,
              ensuring timely deliveries and customer satisfaction.
            </p>

            <p>
              Efficiently manage your transportation operations with our
              Transportation Management System. Our TMS optimizes routes,
              improves fleet management, and tracks shipments in real-time,
              ensuring timely deliveries and customer satisfaction.
            </p>

            <p>
              Efficiently manage your transportation operations with our
              Transportation Management System. Our TMS optimizes routes,
              improves fleet management, and tracks shipments in real-time,
              ensuring timely deliveries and customer satisfaction.
            </p>

            <p>
              Efficiently manage your transportation operations with our
              Transportation Management System. Our TMS optimizes routes,
              improves fleet management, and tracks shipments in real-time,
              ensuring timely deliveries and customer satisfaction.
            </p>
            <p>
              Efficiently manage your transportation operations with our
              Transportation Management System. Our TMS optimizes routes,
              improves fleet management, and tracks shipments in real-time,
              ensuring timely deliveries and customer satisfaction.
            </p>
            <p>
              Efficiently manage your transportation operations with our
              Transportation Management System. Our TMS optimizes routes,
              improves fleet management, and tracks shipments in real-time,
              ensuring timely deliveries and customer satisfaction.
            </p>
            <p>
              Efficiently manage your transportation operations with our
              Transportation Management System. Our TMS optimizes routes,
              improves fleet management, and tracks shipments in real-time,
              ensuring timely deliveries and customer satisfaction.
            </p>
          </div>
        </div>
      </section>
      <div className="maxium-effiency">
        <div className="max-01">
          <h1>Maximize your efficiency with a logistics software</h1>
          <p>
            Contact our managers to get answers to all your questions about
            logistics software development services.
          </p>
          <button>Discuss the project</button>
        </div>
        <div className="max-02">
          <img src={LetsImg} alt="" />
        </div>
      </div>

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
                <p>End-to-end analysis of your workflows</p>
              </div>
              <p id="Achieve">
                We will analyze your business processes in all departments to
                ensure end-to-end automation.
              </p>
            </div>
            <div className="help---0">
              <div className="tick-section">
                <img src={Tick} alt="" />
                <p>Achieving long-term business goals</p>
              </div>
              <p id="Achieve">
                Our automation solution will help you take your business to the
                next level and achieve better competitiveness.
              </p>
            </div>
          </div>
          <div className="we-help-03">
            <div className="help---0">
              <div className="tick-section">
                <img src={Tick} alt="" />
                <p>Cost efficiency </p>
              </div>
              <p id="Achieve">
                Thanks to fastening up workflows, you will be able to process
                more orders in the same amount of time as before.
              </p>
            </div>
            <div className="help---0">
              <div className="tick-section">
                <img src={Tick} alt="" />
                <p>Full automation</p>
              </div>
              <p id="Achieve">
                Digitalization of most work processes will help you eliminate
                the risks associated with human factors.
              </p>
            </div>
          </div>
        </div>
      </section>
      <OurApproch />
      <CaseStudySlider />
      <LetsDIscus />
      <ClientSays />
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

export default Logistic;
