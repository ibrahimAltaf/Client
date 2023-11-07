import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import "../styles/techs.css";
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
import VArrow from "../assets/VArrow.png";
import ApprochVector from "../assets/approchVector.png";
import TickMark from "../assets/TikIcons.png";
import Crushbose from "../assets/Link - Top Rated → SVG.png";
import Goodform from "../assets/Link - Excellent mobile → SVG.png";
import Topreated from "../assets/Link → 25 reviews.png";
import ClientName from "../assets/clientImages.png";
import ClientImg from "../assets/ClientNAme.png";
import Semicolon from "../assets/colon.png";
import Study01 from "../assets/UltimatePlatfrom.png";
import Ultimate from "../assets/UltimatePlatfrom.png";
import VectorArrow from "../assets/VectorArrow.png";
import Custo from "../assets/Custo.png";
import Jugle from "../assets/Jungle.png";
import IdleStudio from "../assets/Idle.png";
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
import Truck from "../assets/Truck.png";
import Insight from "../assets/insight.png";
import Header from "./Header";
import Ultime from "../assets/caseUltimate.png";
import Custom from "../assets/caseCusto.png";
import MobileHeader from "../components/MobileHeader";
import TopArrow from "../assets/top.png";
import GreenArrow from "../assets/greenArrow.png";
import StaticImg from "../assets/StaticImg.png";
import LogoSlider from "./LogoSlider";
import Growing from "./Growing";
import Footer from "./Footer";
const Tehcnolgies = () => {
  return (
    <>
      <section className="main-hero-section-01-02">
        <Header />
        <MobileHeader />

        <div className="Hero-section-content">
          <div className="watch-reels">
            <img src={ReelIcons} alt="" />
            <p className="Watch-reels-text">Showreel</p>
          </div>
          <div className="Hero-text-content-01">
            <div className="Hero-head-01">
              <h1>Turning Digital Ideas into Powerful & Lucrative Realities</h1>
            </div>
            <div className="Hero-para-01">
              <p>
                We offer a wide range of services, from web design and
                development <br /> to mobile app development and digital
                marketing, all designed to <br /> help you achieve your business
                goals. Let's discuss Your project
              </p>
              <div className="let-Discus">
                <img src={LetsDiscus} alt="" />
              </div>
            </div>
          </div>
          <div className="watch-reels">
            <img src={Dot} alt="" />
            <p className="Watch-reels-text">Key clients</p>
          </div>
        </div>
      </section>
      <LogoSlider />
      <section className="tech-stak-head">
        <div className="stach-01">
          <h1>Web Platform</h1>
        </div>
        <div className="stac-btb-02"></div>
      </section>
      <section className="stack-lan">
        <div className="languages-para">
          <div className="data-s-01">
            <p className="te-09 tech-para">
              At Bionic Solutions, we build state-of-the-art frontend solutions
              based on HTML5 and the latest JavaScript frameworks. We also use
              the top back-end technologies to build modern client-server
              applications.
            </p>
          </div>
        </div>
        <div className="tech-guide">
          <div className="stack-head">
            <h1>Front-End</h1>
            <sup>44 Developers</sup>
          </div>
          <div className="stack-tech-009">
            <div className="stack-001">
              <div className="TechLogoAIMS">
                <img src={Grapql} alt="" />
              </div>
              <div>
                <p className="tech-names">[GraphQL]</p>
              </div>
            </div>
            <div className="stack-002">
              <div className="TechLogoAIMS">
                <img src={REactFRom} alt="" />
              </div>
              <p className="tech-names">[React hook form]</p>
            </div>
            <div className="stack-002">
              <div className="TechLogoAIMS">
                <img src={AntDesign} alt="" />
              </div>
              <p className="tech-names">[Ant Design]</p>
            </div>
          </div>
          <div className="stack-tech-009">
            <div className="stack-001">
              <div className="TechLogoAIMS">
                <img src={Grapql} alt="" />
              </div>
              <div>
                <p className="tech-names">[GraphQL]</p>
              </div>
            </div>

            <div className="stack-002">
              <div>
                <img className="TechLogoAIMS" src={REactFRom} alt="" />
              </div>
              <p className="tech-names">[React hook form]</p>
            </div>
            <div className="stack-002">
              <div>
                <img className="TechLogoAIMS" src={REactFRom} alt="" />
              </div>
              <p className="tech-names">[React hook form]</p>
            </div>
          </div>
          <div className="stack-tech-009">
            <div className="stack-001">
              <div>
                <img className="TechLogoAIMS" src={Grapql} alt="" />
              </div>
              <div>
                <p className="tech-names">[GraphQL]</p>
              </div>
            </div>
            <div className="stack-002">
              <div>
                <img className="TechLogoAIMS" src={REactFRom} alt="" />
              </div>
              <p className="tech-names">[React hook form]</p>
            </div>
            <div className="stack-002">
              <div>
                <img className="TechLogoAIMS" src={REactFRom} alt="" />
              </div>
              <p className="tech-names">[React hook form]</p>
            </div>
          </div>
        </div>
      </section>
      <section className="tech-stak-head">
        <div className="stach-01">
          <h1>Database</h1>
        </div>
        <div className="stac-btb-02"></div>
      </section>
      <section className="stack-lan">
        <div className="languages-para">
          <div className="data-s-01">
            <p className="te-09 tech-para">
              We use dependable relational database management systems to ensure
              all your data is managed efficiently
            </p>
          </div>
        </div>
        <div className="tech-guide">
          <div className="stack-head">
            <h1>Database</h1>
            <sup>15 Developers</sup>
          </div>
          <div className="stack-tech-009">
            <div className="stack-001">
              <div>
                <img src={Grapql} alt="" />
              </div>
              <div>
                <p className="tech-names">[GraphQL]</p>
              </div>
            </div>
            <div className="stack-002">
              <div>
                <img src={REactFRom} alt="" />
              </div>
              <p className="tech-names">[React hook form]</p>
            </div>
            <div className="stack-002">
              <div>
                <img src={AntDesign} alt="" />
              </div>
              <p className="tech-names">[Ant Design]</p>
            </div>
          </div>
          <div className="stack-tech-009">
            <div className="stack-001">
              <div>
                <img src={Grapql} alt="" />
              </div>
              <div>
                <p className="tech-names">[GraphQL]</p>
              </div>
            </div>

            <div className="stack-002">
              <div>
                <img src={REactFRom} alt="" />
              </div>
              <p className="tech-names">[React hook form]</p>
            </div>
            <div className="stack-002">
              <div>
                <img src={REactFRom} alt="" />
              </div>
              <p className="tech-names">[React hook form]</p>
            </div>
          </div>
        </div>
      </section>
      <section className="tech-stak-head">
        <div className="stach-01">
          <h1>Cloud & DevOps</h1>
        </div>
        <div className="stac-btb-02"></div>
      </section>
      <section className="stack-lan">
        <div className="languages-para">
          <div className="data-s-01">
            <p className="te-09 tech-para">
              We have some tried and true resources in stock for your
              convenience and our flexible cooperation
            </p>
          </div>
        </div>
        <div className="tech-guide">
          <div className="stack-head">
            <h1>DevOps</h1>
          </div>

          <div className="stack-tech-009">
            <div className="stack-001">
              <div>
                <img src={Grapql} alt="" />
              </div>
              <div>
                <p className="tech-names">[GraphQL]</p>
              </div>
            </div>

            <div className="stack-002">
              <div>
                <img src={REactFRom} alt="" />
              </div>
              <p className="tech-names">[React hook form]</p>
            </div>
            <div className="stack-002">
              <div>
                <img src={REactFRom} alt="" />
              </div>
              <p className="tech-names">[React hook form]</p>
            </div>
          </div>
          <div className="stack-tech-009">
            <div className="stack-001">
              <div>
                <img src={Grapql} alt="" />
              </div>
              <div>
                <p className="tech-names">[GraphQL]</p>
              </div>
            </div>
            <div className="stack-002">
              <div>
                <img src={REactFRom} alt="" />
              </div>
              <p className="tech-names">[React hook form]</p>
            </div>
            <div className="stack-002">
              <div>
                <img src={REactFRom} alt="" />
              </div>
              <p className="tech-names">[React hook form]</p>
            </div>
          </div>
        </div>
      </section>
      <section className="stack-lan">
        <div className="languages-para">
          <div className="data-s-01"></div>
        </div>
        <div className="tech-guide">
          <div className="stack-head">
            <h1>Cloud</h1>
          </div>

          <div className="stack-tech-009">
            <div className="stack-001">
              <div>
                <img src={Grapql} alt="" />
              </div>
              <div>
                <p className="tech-names">[GraphQL]</p>
              </div>
            </div>

            <div className="stack-002">
              <div>
                <img src={REactFRom} alt="" />
              </div>
              <p className="tech-names">[React hook form]</p>
            </div>
            <div className="stack-002">
              <div>
                <img src={REactFRom} alt="" />
              </div>
              <p className="tech-names">[React hook form]</p>
            </div>
          </div>
          <div className="stack-tech-009">
            <div className="stack-001">
              <div>
                <img src={Grapql} alt="" />
              </div>
              <div>
                <p className="tech-names">[GraphQL]</p>
              </div>
            </div>
            <div className="stack-002">
              <div>
                <img src={REactFRom} alt="" />
              </div>
              <p className="tech-names">[React hook form]</p>
            </div>
            <div className="stack-002">
              <div>
                <img src={REactFRom} alt="" />
              </div>
              <p className="tech-names">[React hook form]</p>
            </div>
          </div>
        </div>
      </section>
      <section className="tech-stak-head">
        <div className="stach-01">
          <h1>Mobile apps</h1>
        </div>
        <div className="stac-btb-02"></div>
      </section>
      <section className="stack-lan">
        <div className="languages-para">
          <div className="data-s-01">
            <p className="te-09 tech-para">Mobile apps</p>
          </div>
        </div>
        <div className="tech-guide">
          <div className="stack-head">
            <h1>Flutter</h1>
            <sup>23 Developers</sup>
          </div>
          <div className="stack-tech-009">
            <div className="stack-001">
              <div>
                <img src={Grapql} alt="" />
              </div>
              <div>
                <p className="tech-names">[GraphQL]</p>
              </div>
            </div>
            <div className="stack-002">
              <div>
                <img src={REactFRom} alt="" />
              </div>
              <p className="tech-names">[React hook form]</p>
            </div>
            <div className="stack-002">
              <div>
                <img src={AntDesign} alt="" />
              </div>
              <p className="tech-names">[Ant Design]</p>
            </div>
          </div>
          <div className="stack-tech-009">
            <div className="stack-001">
              <div>
                <img src={Grapql} alt="" />
              </div>
              <div>
                <p className="tech-names">[GraphQL]</p>
              </div>
            </div>

            <div className="stack-002">
              <div>
                <img src={REactFRom} alt="" />
              </div>
              <p className="tech-names">[React hook form]</p>
            </div>
            <div className="stack-002">
              <div>
                <img src={REactFRom} alt="" />
              </div>
              <p className="tech-names">[React hook form]</p>
            </div>
          </div>
        </div>
      </section>
      <section className="stack-lan">
        <div className="languages-para">
          <div className="data-s-01">
            <p className="te-09 tech-para"></p>
          </div>
        </div>
        <div className="tech-guide">
          <div className="stack-head">
            <h1>iOS</h1>
            <sup>21 Developer</sup>
          </div>
          <div className="stack-tech-009">
            <div className="stack-001">
              <div>
                <img src={Grapql} alt="" />
              </div>
              <div>
                <p className="tech-names">[GraphQL]</p>
              </div>
            </div>
            <div className="stack-002">
              <div>
                <img src={REactFRom} alt="" />
              </div>
              <p className="tech-names">[React hook form]</p>
            </div>
            <div className="stack-002">
              <div>
                <img src={AntDesign} alt="" />
              </div>
              <p className="tech-names">[Ant Design]</p>
            </div>
          </div>
          <div className="stack-tech-009">
            <div className="stack-001">
              <div>
                <img src={Grapql} alt="" />
              </div>
              <div>
                <p className="tech-names">[GraphQL]</p>
              </div>
            </div>

            <div className="stack-002">
              <div>
                <img src={REactFRom} alt="" />
              </div>
              <p className="tech-names">[React hook form]</p>
            </div>
            <div className="stack-002">
              <div>
                <img src={REactFRom} alt="" />
              </div>
              <p className="tech-names">[React hook form]</p>
            </div>
          </div>
          <div className="stack-tech-009">
            <div className="stack-001">
              <div>
                <img src={Grapql} alt="" />
              </div>
              <div>
                <p className="tech-names">[GraphQL]</p>
              </div>
            </div>

            <div className="stack-002">
              <div>
                <img src={REactFRom} alt="" />
              </div>
              <p className="tech-names">[React hook form]</p>
            </div>
            <div className="stack-002">
              <div>
                <img src={REactFRom} alt="" />
              </div>
              <p className="tech-names">[React hook form]</p>
            </div>
          </div>
        </div>
      </section>
      <section className="stack-lan">
        <div className="languages-para">
          <div className="data-s-01">
            <p className="te-09 tech-para"></p>
          </div>
        </div>
        <div className="tech-guide">
          <div className="stack-head">
            <h1>Android</h1>
            <sup>12 Developers</sup>
          </div>
          <div className="stack-tech-009">
            <div className="stack-001">
              <div>
                <img src={Grapql} alt="" />
              </div>
              <div>
                <p className="tech-names">[GraphQL]</p>
              </div>
            </div>
            <div className="stack-002">
              <div>
                <img src={REactFRom} alt="" />
              </div>
              <p className="tech-names">[React hook form]</p>
            </div>
            <div className="stack-002">
              <div>
                <img src={AntDesign} alt="" />
              </div>
              <p className="tech-names">[Ant Design]</p>
            </div>
          </div>
          <div className="stack-tech-009">
            <div className="stack-001">
              <div>
                <img src={Grapql} alt="" />
              </div>
              <div>
                <p className="tech-names">[GraphQL]</p>
              </div>
            </div>

            <div className="stack-002">
              <div>
                <img src={REactFRom} alt="" />
              </div>
              <p className="tech-names">[React hook form]</p>
            </div>
            <div className="stack-002">
              <div>
                <img src={REactFRom} alt="" />
              </div>
              <p className="tech-names">[React hook form]</p>
            </div>
          </div>
          <div className="stack-tech-009">
            <div className="stack-001">
              <div>
                <img src={Grapql} alt="" />
              </div>
              <div>
                <p className="tech-names">[GraphQL]</p>
              </div>
            </div>

            <div className="stack-002">
              <div>
                <img src={REactFRom} alt="" />
              </div>
              <p className="tech-names">[React hook form]</p>
            </div>
            <div className="stack-002">
              <div>
                <img src={REactFRom} alt="" />
              </div>
              <p className="tech-names">[React hook form]</p>
            </div>
          </div>
        </div>
      </section>
      <section className="stack-lan">
        <div className="languages-para">
          <div className="data-s-01">
            <p className="te-09 tech-para"></p>
          </div>
        </div>
        <div className="tech-guide">
          <div className="stack-head">
            <h1>Cross Platform</h1>
            <sup>2 Developers</sup>
          </div>
          <div className="stack-tech-009">
            <div className="stack-001">
              <div>
                <img src={Grapql} alt="" />
              </div>
              <div>
                <p className="tech-names">[GraphQL]</p>
              </div>
            </div>
            <div className="stack-002">
              <div>
                <img src={REactFRom} alt="" />
              </div>
              <p className="tech-names">[React hook form]</p>
            </div>
            <div className="stack-002">
              <div>
                <img src={AntDesign} alt="" />
              </div>
              <p className="tech-names">[Ant Design]</p>
            </div>
          </div>
          <div className="stack-tech-009">
            <div className="stack-001">
              <div>
                <img src={Grapql} alt="" />
              </div>
              <div>
                <p className="tech-names">[GraphQL]</p>
              </div>
            </div>

            <div className="stack-002">
              <div>
                <img src={REactFRom} alt="" />
              </div>
              <p className="tech-names">[React hook form]</p>
            </div>
            <div className="stack-002">
              <div>
                <img src={REactFRom} alt="" />
              </div>
              <p className="tech-names">[React hook form]</p>
            </div>
          </div>
        </div>
      </section>
      <section className="statics">
        <h1 className="static-head">Statistics</h1>
        <p className="static-para">
          We use only advanced tools and approaches to software development to
          guarantee you the highest quality of the program code and the
          competitiveness of your digital product after launch on the market.
        </p>
        <div className="stactic-main">
          <div className="stact-para">
            <img src={Dot} alt="" />
            <p> Team</p>
          </div>
          <div className="static-img">
            <img src={StaticImg} alt="" />
          </div>
          <div className="static-content">
            <p>
              The success of a digital product is determined by multiple
              factors, from the development team's experience and expertise to
              the company technologies chosen to implement it. 
              <br />
              <br />
              Bionic Solutions specialists guarantee compliance with all these
              factors, paying particular attention to selecting the most
              suitable technology stack. Moreover, a properly chosen list of
              technologies will not only allow you to implement the
              functionality in the least resource-intensive way but will also
              strengthen the market position of your product after its launch,
              ensuring its longevity for many years to come.
            </p>
          </div>
        </div>
      </section>
      <Growing />
      <Footer />
    </>
  );
};

export default Tehcnolgies;
