import React, { useState, useEffect } from "react";

import "../styles/Transportation.css";
import Yellow from "../assets/yellowTick.png";
import HeaderMain from "../components/Header";
import GreenTick from "../assets/greenTick.png";
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
import VA from "../assets/whiteArrow.png";
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
import MbHEader from "../components/MobileHeader";
import Min from "../assets/QMIN.png";
import Plus from "../assets/QPlus.png";
import GamaTCS from "../assets/GamaTcs.png";
import TMSIMG from "../assets/tms-img.png";
import Intregation from "../assets/intregation-img.png";
import TechStack from "./TechStack";
import LogoSlider from "./LogoSlider";
import CaseStudySlider from "./CaseStudySlider";
const Transportation = () => {
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

  const IntregationCompo = ({ Number, Para, Description }) => {
    return (
      <div className="intregation-compo">
        <div>
          <span>{Number}</span>
          <p className="inreagtion-compo-head">{Para}</p>
        </div>
        <p className="intregation-compo-para">{Description}</p>
      </div>
    );
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
  const [isMinVisible, setIsMinVisible] = useState(true);
  const [isMinVisible1, setIsMinVisible1] = useState(true);
  const [isMinVisible2, setIsMinVisible2] = useState(true);
  const [isMinVisible3, setIsMinVisible3] = useState(true);
  const [isMinVisible4, setIsMinVisible4] = useState(true);
  const [isMinVisible5, setIsMinVisible5] = useState(true);
  const [isMinVisible6, setIsMinVisible6] = useState(true);
  const [isMinVisible7, setIsMinVisible7] = useState(true);
  const [isMinVisible8, setIsMinVisible8] = useState(true);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isButtonClicked2, setIsButtonClicked2] = useState(false);
  const [isButtonClicked3, setIsButtonClicked3] = useState(false);
  const [isButtonClicked4, setIsButtonClicked4] = useState(false);
  const [isButtonClicked5, setIsButtonClicked5] = useState(false);
  const [isButtonClicked6, setIsButtonClicked6] = useState(false);
  const [isButtonClicked7, setIsButtonClicked7] = useState(false);
  const [isButtonClicked8, setIsButtonClicked8] = useState(false);
  const [qsClass, setQsClass] = useState("Qs-01");

  const toggleContent = () => {
    setIsButtonClicked(!isButtonClicked);
    setQsClass(setIsButtonClicked ? "TRANSPORTATION" : "A-0001");

    setIsMinVisible(!isMinVisible);
  };
  const toggleContent2 = () => {
    setIsButtonClicked2(!isButtonClicked2);
    setIsMinVisible2(!isMinVisible2);
  };
  const toggleContent3 = () => {
    setIsButtonClicked3(!isButtonClicked3);
    setIsMinVisible3(!isMinVisible3);
  };
  const toggleContent4 = () => {
    setIsButtonClicked4(!isButtonClicked4);
    setIsMinVisible4(!isMinVisible4);
  };
  const toggleContent5 = () => {
    setIsButtonClicked5(!isButtonClicked5);
    setIsMinVisible5(!isMinVisible5);
  };

  const toggleContent6 = () => {
    setIsButtonClicked6(!isButtonClicked6);
    setIsMinVisible6(!isMinVisible6);
  };
  const toggleContent7 = () => {
    setIsButtonClicked7(!isButtonClicked7);
    setIsMinVisible7(!isMinVisible7);
  };
  const toggleContent8 = () => {
    setIsButtonClicked8(!isButtonClicked8);
    setIsMinVisible8(!isMinVisible8);
  };

  const [activeTab, setActiveTab] = useState("01/"); // Default active tab

  const handleTabChange = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const integrationData = [
    {
      Number: "01/",
      Para: "ERP Integration for Holistic Planning",
      Description:
        "Streamlining transportation planning requires a comprehensive view. By integrating the ERP system, transportation plans and operations schedules can be easily accessed and synchronized.",
    },
    {
      Number: "02/",
      Para: "ERP Integration for Holistic Planning",
      Description:
        "Streamlining transportation planning requires a comprehensive view. By integrating the ERP system, transportation plans and operations schedules can be easily accessed and synchronized.",
    },
    {
      Number: "03/",
      Para: "ERP Integration for Holistic Planning",
      Description:
        "Streamlining transportation planning requires a comprehensive view. By integrating the ERP system, transportation plans and operations schedules can be easily accessed and synchronized.",
    },
    {
      Number: "04/",
      Para: "ERP Integration for Holistic Planning",
      Description:
        "Streamlining transportation planning requires a comprehensive view. By integrating the ERP system, transportation plans and operations schedules can be easily accessed and synchronized.",
    },
    {
      Number: "05/",
      Para: "ERP Integration for Holistic Planning",
      Description:
        "Streamlining transportation planning requires a comprehensive view. By integrating the ERP system, transportation plans and operations schedules can be easily accessed and synchronized.",
    },
    {
      Number: "06/",
      Para: "ERP Integration for Holistic Planning",
      Description:
        "Streamlining transportation planning requires a comprehensive view. By integrating the ERP system, transportation plans and operations schedules can be easily accessed and synchronized.",
    },
    {
      Number: "07/",
      Para: "ERP Integration for Holistic Planning",
      Description:
        "Streamlining transportation planning requires a comprehensive view. By integrating the ERP system, transportation plans and operations schedules can be easily accessed and synchronized.",
    },
    // Add more data objects for other tabs as needed
  ];

  const activeTabData = integrationData.find(
    (data) => data.Number === activeTab
  );

  return (
    <>
      <section className="Logistic-01-8">
        <HeaderMain />
        <MbHEader />
        <div className="web-dev-head">
          <h1>Transportation Management System(TMS)n</h1>
          <p>
            Bionic Solutions' custom TMS software can help you streamline your
            shipping processes, making them easier to manage and optimize your
            transportation operations.
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
      <section className="what-TMS">
        <h1 className="tms">WHAT IS TMS?</h1>
        <p className="TMS-para">
          Transportation Management System (TMS) is a software solution designed
          to assist companies in managing their transportation and logistics
          operations. TMS encompasses various functionalities that facilitate
          order management, supply chain management, third- party logistics
          integration, cloud-based systems, carrier rate management, day-to-day
          operations, transportation planning, logistics services, and more.
        </p>
        <div className="TMS-main-sec">
          <div className="TMS-img">
            <img src={GiveImg} alt="" />
          </div>
          <div className="TMS-planing">
            <div className="Quten-tms-01">
              <div className="Q-0001">
                <p
                  className={
                    isButtonClicked ? "TransportParaActive" : "TransportPara"
                  }
                >
                  1. PLANING
                </p>
                <button onClick={toggleContent} className="btn-arrow">
                  <img src={isMinVisible ? Plus : Min} alt="" />
                </button>
              </div>
              {isButtonClicked && (
                <div id="plaining-answer" className="A-0001">
                  TMS enables effective transportation planning by providing
                  features such as automated route optimization, load balancing,
                  and resource allocation. By utilizing data analysis and
                  algorithms, the system helps in optimizing freight movement,
                  reducing costs, and improving overall efficiency.
                </div>
              )}
            </div>
            <div className="Quten-tms-01">
              <div className="Q-0001">
                <p
                  className={
                    isButtonClicked2 ? "TransportParaActive" : "TransportPara"
                  }
                >
                  2. TRANSPORTATION
                </p>
                <button onClick={toggleContent2} className="btn-arrow">
                  <img src={isMinVisible2 ? Plus : Min} alt="" />
                </button>
              </div>
              {isButtonClicked2 && (
                <div id="plaining-answer" className="A-0001">
                  TMS enables effective transportation planning by providing
                  features such as automated route optimization, load balancing,
                  and resource allocation. By utilizing data analysis and
                  algorithms, the system helps in optimizing freight movement,
                  reducing costs, and improving overall efficiency.
                </div>
              )}
            </div>
            <div className="Quten-tms-01">
              <div className="Q-0001">
                <p
                  className={
                    isButtonClicked3 ? "TransportParaActive" : "TransportPara"
                  }
                >
                  3. COMMUNICATION
                </p>
                <button onClick={toggleContent3} className="btn-arrow">
                  <img src={isMinVisible3 ? Plus : Min} alt="" />
                </button>
              </div>
              {isButtonClicked3 && (
                <div id="plaining-answer" className="A-0001">
                  TMS enables effective transportation planning by providing
                  features such as automated route optimization, load balancing,
                  and resource allocation. By utilizing data analysis and
                  algorithms, the system helps in optimizing freight movement,
                  reducing costs, and improving overall efficiency.
                </div>
              )}
            </div>
            <div className="Quten-tms-01">
              <div className="Q-0001">
                <p
                  className={
                    isButtonClicked4 ? "TransportParaActive" : "TransportPara"
                  }
                >
                  4. CALCULATIONS
                </p>
                <button onClick={toggleContent4} className="btn-arrow">
                  <img src={isMinVisible4 ? Plus : Min} alt="" />
                </button>
              </div>
              {isButtonClicked4 && (
                <div id="plaining-answer" className="A-0001">
                  TMS enables effective transportation planning by providing
                  features such as automated route optimization, load balancing,
                  and resource allocation. By utilizing data analysis and
                  algorithms, the system helps in optimizing freight movement,
                  reducing costs, and improving overall efficiency.
                </div>
              )}
            </div>
            <div className="Quten-tms-01">
              <div className="Q-0001">
                <p
                  className={
                    isButtonClicked5 ? "TransportParaActive" : "TransportPara"
                  }
                >
                  5. Data-Driven
                </p>
                <button onClick={toggleContent5} className="btn-arrow">
                  <img src={isMinVisible5 ? Plus : Min} alt="" />
                </button>
              </div>
              {isButtonClicked5 && (
                <div id="plaining-answer" className="A-0001">
                  TMS enables effective transportation planning by providing
                  features such as automated route optimization, load balancing,
                  and resource allocation. By utilizing data analysis and
                  algorithms, the system helps in optimizing freight movement,
                  reducing costs, and improving overall efficiency.
                </div>
              )}
            </div>
            <div className="Quten-tms-01">
              <div className="Q-0001">
                <p
                  className={
                    isButtonClicked6 ? "TransportParaActive" : "TransportPara"
                  }
                >
                  6. AI Enhanced
                </p>
                <button onClick={toggleContent6} className="btn-arrow">
                  <img src={isMinVisible6 ? Plus : Min} alt="" />
                </button>
              </div>
              {isButtonClicked6 && (
                <div id="plaining-answer" className="A-0001">
                  TMS enables effective transportation planning by providing
                  features such as automated route optimization, load balancing,
                  and resource allocation. By utilizing data analysis and
                  algorithms, the system helps in optimizing freight movement,
                  reducing costs, and improving overall efficiency.
                </div>
              )}
            </div>
            <div className="discuc-project">
              <button>
                Discuss the project <img src={VA} alt="" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="If-find">
        <h1 className="if-head">
          You may need <br /> this if...
        </h1>
        <div className="if-main">
          <div className="if-conten-01">
            <div>
              <img className="yeelow-tock" src={Yellow} alt="" />
              <p> You Need Supply Chain Clarity:</p>
            </div>
            <p className="if-conten-para">
              Your transportation and logistics require a genuine and
              transparent source of information.
            </p>
            <div>
              <img className="yeelow-tock" src={Yellow} alt="" />
              <p> You Need Enhanced Analytics Integration:</p>
            </div>
            <p className="if-conten-para">
              The necessity to incorporate predictive or diagnostic analytics
              into your team's operations.
            </p>
            <div>
              <img className="yeelow-tock" src={Yellow} alt="" />
              <p> You’re Having Trouble with Manual Processes:</p>
            </div>
            <p className="if-conten-para">
              You’re Having Trouble with Manual Processes:
            </p>
          </div>
          <div className="if-img">
            <img src={GamaTCS} alt="" />
          </div>
          <div className="if-conten-01">
            <div>
              <img className="yeelow-tock" src={Yellow} alt="" />
              <p> You Need Supply Chain Clarity:</p>
            </div>
            <p className="if-conten-para">
              Your transportation and logistics require a genuine and
              transparent source of information.
            </p>
            <div>
              <img className="yeelow-tock" src={Yellow} alt="" />
              <p> You Need Enhanced Analytics Integration:</p>
            </div>
            <p className="if-conten-para">
              The necessity to incorporate predictive or diagnostic analytics
              into your team's operations.
            </p>
            <div>
              <img className="yeelow-tock" src={Yellow} alt="" />
              <p> You’re Having Trouble with Manual Processes:</p>
            </div>
            <p className="if-conten-para">
              You’re Having Trouble with Manual Processes:
            </p>
          </div>
        </div>
      </section>
      <div className="TMS-module">
        <h1 className="tms-modulw">TMS Modules</h1>
        <p className="module-para">
          During custom systems development, the team considers your entire
          logistics ecosystem to make a product that does the tasks that your
          business needs. Nevertheless, here's a list of base features every TMS
          has:
        </p>
        <div className="tms-module-main">
          <div className="tms-conten-module">
            <div>
              <img src={GreenTick} alt="" />
              <p> Contract Management</p>
            </div>
            <p className="mo-content-para">
              Convenient document viewing, expenses comparisons, tracking of
              agreements and deadlines in real-time; the ability to get and send
              notifications if documents need to be updated and requested.
            </p>
            <div>
              <img src={GreenTick} alt="" />
              <p> Freight Audit</p>
            </div>
            <p className="mo-content-para">
              Check and verify your freight bills for accuracy; pay invoices and
              create payment vouchers all in one place.
            </p>
            <div>
              <img src={GreenTick} alt="" />
              <p> Transportation Process Overview</p>
            </div>
            <p className="mo-content-para">
              The ability to track leads from the moment of acceptance until
              delivery to the final destination; get an overview of the
              shipments, status changes, information about your deliveries, and
              communications with distributors and clients all in real-time.
            </p>
            <div>
              <img src={GreenTick} alt="" />
              <p> AI Route Planner</p>
            </div>
            <p className="mo-content-para">AI Route Planner</p>
            <div>
              <img src={GreenTick} alt="" />
              <p> HR Management</p>
            </div>
            <p className="mo-content-para">
              The platform provides real-time tracking and support for driver
              registration.
            </p>
          </div>
          <div className="tms-conten-module">
            <div>
              <img src={GreenTick} alt="" />
              <p> Reporting and Analytics</p>
            </div>
            <p className="mo-content-para">
              Historical unloading data, distribution models, the overview of
              trends and prices all in one place; use of specialized maps for
              visualization of delivery routes allowing to strategize for future
              deliveries
            </p>
            <div>
              <img src={GreenTick} alt="" />
              <p> Efficiency Monitoring</p>
            </div>
            <p className="mo-content-para">
              Customizable reports with KPI trackers such as trends, mileage
              costs, shipments, order status information, and the possibility to
              integrate more customization at any time.
            </p>
            <div>
              <img src={GreenTick} alt="" />
              <p> Risk Management</p>
            </div>
            <p className="mo-content-para">
              Thanks to the audit process and notification automation, you can
              effectively minimize potential risks.
            </p>
            <div>
              <img src={GreenTick} alt="" />
              <p> Driver App</p>
            </div>
            <p className="mo-content-para">
              Benefit from customized training, assistance, and tools designed
              to aid you in effectively championing our brand.
            </p>
            <div>
              <img src={GreenTick} alt="" />
              <p> Task Management</p>
            </div>
            <p className="mo-content-para">
              Task management system without missing deadlines or scheduled
              services.
            </p>
          </div>
          <div className="tms-module-img">
            <img src={TMSIMG} alt="" />
          </div>
        </div>
      </div>
      <section className="intregation-main">
        <div className="inregation-head">
          <h1>Integrations for Custom TMS</h1>
          <p>
            Bionic Solutions recommends the following integrations to optimize
            transportation strategies and ensure complete oversight throughout
            all shipping operations:
          </p>
        </div>
        <div className="intregation-main-01">
          <div className="intreagtion-btns">
            <button onClick={() => handleTabChange("01/")} className="InCompo">
              Transportation Plans and Operation Schedules Integration
            </button>
            <button onClick={() => handleTabChange("02/")} className="InCompo">
              Transportation Documents and Status Updates
            </button>
            <button className="InCompo">
              Purchase Orders for Self-pickup Assignments
            </button>
            <button onClick={() => handleTabChange("03/")} className="InCompo">
              Vehicle Location, Fuel Consumption, Speed, and Stops Data
              Integration
            </button>
            <button onClick={() => handleTabChange("04/")} className="InCompo">
              Transport Orders and Transportation Provider Invoices with
              Accounting Software
            </button>
            <button onClick={() => handleTabChange("05/")} className="InCompo">
              Transport Orders and Transportation Provider Invoices with
              Accounting Software
            </button>
            <button onClick={() => handleTabChange("06/")} className="InCompo">
              Order Management System for Real-time Customer Order Data
            </button>
          </div>
          <div className="intragtion-img">
            <img src={Intregation} alt="" />
          </div>
          <IntregationCompo
            Number={activeTabData.Number}
            Para={activeTabData.Para}
            Description={activeTabData.Description}
          />{" "}
        </div>
      </section>
      <OurApproch />
      <TechStack />
      <CaseStudySlider />
      <LetsDIscus />
      <ClientSays />
      <ReviewList />
      <section className="lets-talk">
        <div className="lets-talk-01">
          <h1>Maximize your efficiency with a logistics software</h1>
          <p>
            Contact our managers to get answers to all your questions about
            logistics software development services.
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
export default Transportation;
