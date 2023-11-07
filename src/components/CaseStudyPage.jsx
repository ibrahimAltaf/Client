import React from "react";
import "../styles/caseStudypage.css";
import Header from "./Header";
import MobileHeader from "../components/MobileHeader";
import Back from "../assets/windowbaclArrow.png";
import Trasport from "../assets/transport.png";
import TransportImg2 from "../assets/transport02.png";
import Dot from "../assets/Dot.png";
import SmallTruck from "../assets/sma;;Truck.png";
import USA from "../assets/usa.png";
import C1 from "../assets/c1.png";
import C2 from "../assets/c2.png";
import CaseLAptop from "../assets/CaseLAptopScreen.png";
import Analysis from "../assets/Analysis.png";
import Laravel from "../assets/ILaraevel.png";
import Swift from "../assets/ISwfit.png";
import Kotlin from "../assets/IKotlin.png";
import ReactJs from "../assets/IREact.png";
import ComputerScreen from "../assets/computerScreen.png";
import LeftImage from "../assets/leftScreen.png";
import Tick from "../assets/Tick.png";
import LargeImg from "../assets/Large-img.png";
import Footer from "./Footer";
const CaseStudyPage = () => {
  return (
    <>
      <section className="case-hero-page">
        <Header />
        <MobileHeader />
        <div className="main-case-page">
          <div className="btn-case-page">
            <div className="backbutton">
              <button>
                <img src={Back} alt="" />
              </button>
            </div>
            <div className="last-caset-button">
              <div>
                <button>Mobile App</button>
                <button>Web Development</button>
              </div>
              <div>
                <button>Custom Software</button>
              </div>
            </div>
          </div>
          <div className="head-case-page">
            <h1>Transport Learning Management System: Case</h1>
            <p>
              Development of a custom LMS gamified training platform for drivers
            </p>
          </div>
          <div className="case-video-page">
            <img src={Trasport} alt="" />
          </div>
        </div>
      </section>
      <section className="banner-img-case">
        <img src={TransportImg2} alt="" />
      </section>
      <section className="project-discription">
        <div className="project-nam-001">
          <div className="cline-0001">
            <img src={Dot} alt="" />
            <p>Client</p>
          </div>
        </div>
        <div className="project-background">
          <h1>PROJECT BACKGROUND</h1>
          <p>
            Our client is the transportation company, one of the leaders in the
            transport services market. The company's trucks deliver cargo
            throughout the United States daily, following strict standards and
            regulations. The client approached us to create an end-to-end driver
            education management system for driver training that would
            consistently provide company drivers with training material to help
            them drive safely and in accordance with the rules of the road.
          </p>
        </div>
        <div className="project-industry">
          <div className="pr-01">
            <div>
              <p id="Industires">Industry:</p>
            </div>
            <div>
              <p id="logistic">
                <span>
                  <img className="SmaalTruck" src={SmallTruck} alt="" />
                </span>
                logistics (transportation)
              </p>
            </div>
          </div>
          <div className="pr-02">
            <div>
              {" "}
              <p>Location:</p>
            </div>
            <div>
              <span id="USA">USA </span>
              <img src={USA} alt="" />
            </div>
          </div>
          <p id="servicesUSe">services used:</p>
          <div className="pro-03">
            <button>Mobile App</button>
            <button>Web Development</button>
          </div>
          <div className="We-dev-btn">
            <button id="We-dev-btn">Web Development</button>
          </div>
        </div>
      </section>
      <section className="case-overvoew">
        <div className="ov-01">
          <img src={C1} alt="" />
        </div>
        <div className="ov-02">
          <img src={C2} alt="" />
        </div>
      </section>
      <div className="goals-objective">
        <div className="goasls-para">
          <div className="cline-0001">
            <p>
              {" "}
              <div className="cline-0001">
                <img src={Dot} alt="" />
                <p>Client</p>
              </div>
            </p>
          </div>
        </div>
        <div className="goal-ob">
          <h1>goals and objectives</h1>
          <div className="goal-content">
            <div className="gol-conten-01">
              {" "}
              <span id="GoalNumber">01/</span>
              <div>
                <p id="GoalPara">
                  The company had a large staff of over 1,000 drivers with
                  varying driving experiences. It was challenging to select
                  appropriate training for each driver based on their individual
                  skills.
                </p>
              </div>
            </div>
            <div className="gol-conten-01">
              {" "}
              <span id="GoalNumber">02/</span>
              <div>
                <p id="GoalPara">
                  The company had a large staff of over 1,000 drivers with
                  varying driving experiences. It was challenging to select
                  appropriate training for each driver based on their individual
                  skills.
                </p>
              </div>
            </div>
            <div className="gol-conten-01">
              {" "}
              <span id="GoalNumber">03/</span>
              <div>
                <p id="GoalPara">
                  As a result, the client decided to create a comprehensive
                  learning management system. The proposed system would include
                  a mobile app with gamification features.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <sectin className="laptop-case-view">
        <img src={CaseLAptop} alt="" />
      </sectin>

      {/* <section className="anlysis">
        <img src={Analysis} alt="" />
      </section> */}

      {/* <section className="project-discription">
        <div className="project-nam-001">
          <div className="cline-0001">
            <img src={Dot} alt="" />
            <p>SOLUTION</p>
          </div>
        </div>
        <div className="project-background">
          <h1>SOLUTION</h1>
          <p>
            After discussing the details of the project with the client, our
            custom development team decided to create an online platform for
            interactive training that would involve drivers in the process,
            making them not passive observers but active participants in the
            training. We chose Laravel, Swift, Kotlin, and React.js as the main
            technology stack. Also, in addition to the library with training
            materials, we decided to implement the following features
          </p>
        </div>
        <div className="project-industry tec-used">
          <p id="TEchUSe">technology used</p>
          <div className="tec-logo">
            <img src={Laravel} alt="" />
            <img src={ReactJs} alt="" />
            <img src={Kotlin} alt="" />
            <img src={Swift} alt="" />
          </div>
        </div>
      </section> */}
      {/* 
      <section className="computer-screen">
        <img src={ComputerScreen} alt="" />
      </section> */}
      {/* <section className="let-imgs-showup">
        <div></div>
        <div>
          {" "}
          <img src={LeftImage} alt="" />
        </div>
      </section> */}
      {/* 
      <section className="Key-feature">
        <div className="keys-p-1">
          <p>personalized learning</p>
        </div>
        <div className="ke-p02">
          <div className="ley-main">
            <img src={Tick} alt="" />
            <p>Interactive and gamified elements with polls and quizzes</p>
          </div>
          <div className="ley-main">
            <img src={Tick} alt="" />
            <p>Test to determine the current level of knowledge</p>
          </div>
          <div className="ley-main">
            <img src={Tick} alt="" />
            <p>Test to determine the current level of knowledge</p>
          </div>
          <div className="ley-main">
            <img src={Tick} alt="" />
            <p>Push notifications</p>
          </div>
          <div className="ley-main">
            <img src={Tick} alt="" />
            <p>AI-driven search</p>
          </div>
          <div className="ley-main">
            <img src={Tick} alt="" />
            <p>Online interaction with a mentor</p>
          </div>
        </div>
      </section> */}

      {/* <section className="large-img">
        <img src={LargeImg} alt="" />
      </section> */}

      <Footer />
    </>
  );
};

export default CaseStudyPage;
