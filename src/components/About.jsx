import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import Marquee from "react-fast-marquee";

import "../styles/about.css";
import HeaderGreen from "./HeaderGreen";
import WatchReel from "../assets/WatchReelsimg.png";
import AboutSlider from "./AboutSlider";
import Passionate from "../assets/posinate.png";
import BLackArrow from "../assets/blackArrow.png";
import bgArrow from "../assets/BGARROW.png";
import MeetText from "./MeetText";
import WhiteArrow from "../assets/whiteArrow.png";
import Meet from "./Meet";

import Top from "../assets/ATopRated.png";
import Clutch from "../assets/ACutuch.png";
import Chamber from "../assets/ACHamber.png";
import TechRevier from "../assets/ATechReviewr.png";
import GoodForms from "../assets/AGoofFOrms.png";
import CrushBAse from "../assets/ACrushbos.png";
import IT from "../assets/AItRating.svg";
import Superb from "../assets/ASuperbCOmpany.png";
import G2 from "../assets/AG2.png";
import ArrowImg from "../assets/ArrowImage.png";
import Growing from "../components/Growing";
import Footer from "../components/Footer";
import MobileHeader from "../components/MobileHeader";

const About = () => {
  const [selectedButton, setSelectedButton] = useState("Quality");

  const content = {
    Quality: {
      title: "100% Quality Basis",
      description:
        "The outstanding quality of any of our products is achieved through constructing an effective interface.",
      items: [
        "To ensure our output is of the highest quality, we have created a comprehensive system of checks and balances.",
        "Our client-oriented parts are tested against the W3C standards, linter programs, and quality control assessments conducted by our front-end developers in Peer Code Reviews.",
        "In addition, our QA specialists run rigorous tests to guarantee the final product is delivered as intended.",
        "Our art-director curates each product development cycle to guarantee exceptional designs.",
        "On the server-end, our codebases are assessed by the PSR-4 standards, linter programs, and Peer Code Reviews conducted by our back-end engineers.",
        "Lastly, our security department implements a variety of protocols and technologies to ensure our tools are secure and protected from any unauthorized access or data breach.",
      ],
    },
    Transparency: {
      title: "Transparency Title",
      description: "Transparency Description",
      items: ["Item 1", "Item 2"],
    },
    Responsibility: {
      title: "Responsibility Title",
      description: "Responsibility Description",
      items: ["Item 1", "Item 2"],
    },
  };
  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };
  return (
    <>
      <HeaderGreen />
      <MobileHeader />
      <section className="about-main">
        <div className="about-head-mani">
          <h1>About us</h1>
          <p>
            PROFESSIONAL AND CUSTOMER-ORIENTED APPROACH TO BUSINESS, STARTING
            FROM FIRST CONTACT UNTIL PROJECT COMPLETION
          </p>
        </div>
        <div className="about-02">
          <div className="about-img">
            <img src={WatchReel} alt="" />
          </div>
          <div className="about-watch-reel">
            <p>
              watch our <br /> presentation
            </p>
          </div>
        </div>
      </section>
      <AboutSlider />

      <h1 className="passionate-head">Passionate and creative</h1>

      <section className="paasionate">
        <div className="img-passionate">
          <img src={Passionate} alt="" />
        </div>
        <div className="para-passionate">
          <div className="short-para-08">
            <p> Bionic SOls is the largest and most experienced IT team</p>
          </div>
          <div className="large-para-04">
            Bionic Sols believes in the power of collaboration and strives to
            createan environment of shared success. Our experienced team of
            professionals is dedicated to delving into the complexities of
            business challenges and finding creative solutions.
          </div>
        </div>
      </section>

      <section className="stactic-0001">
        <div className="static-01-1"></div>
        <div className="static-02">
          <div className="static-number-0001-02">
            <div className="number-static-004">
              <p>23+</p>
              <img src={BLackArrow} alt="" />
            </div>
            <p className="Static-Experience">
              With 23 years of experience, we've earned hundreds of awards and
              certificates.
            </p>
          </div>
          <div className="static-number-02-03">
            <div className="number-static-004">
              <p>10</p>
              <img src={BLackArrow} alt="" />
            </div>
            <p className="Static-Experience">
              Offices in 4 countries around the world - United States of
              America, Poland, Germany, and Ukraine.
            </p>
          </div>
        </div>
      </section>

      <section className="stactic-new-02">
        <div className="static-08-07"></div>
        <div className="static-new-07-8">
          <div className="static-main-02-03">
            <div className="number-static-004">
              <p>23+</p>
              <img src={BLackArrow} alt="" />
            </div>
            <p className="Static-Experience">
              With 23 years of experience, we've earned hundreds of awards and
              certificates.
            </p>
          </div>
          <div className="static-main-02-03">
            <div className="number-static-004">
              <p>23+</p>
              <img src={BLackArrow} alt="" />
            </div>
            <p className="Static-Experience">
              With 23 years of experience, we've earned hundreds of awards and
              certificates.
            </p>
          </div>
        </div>
      </section>

      <section className="what-we-do">
        <Marquee>
          <h1>
            We love what we do <img src={bgArrow} alt="" />
          </h1>
          <h1>
            We love what we do <img src={bgArrow} alt="" />
          </h1>
          <h1>
            We love what we do <img src={bgArrow} alt="" />
          </h1>
          <h1>
            We love what we do <img src={bgArrow} alt="" />
          </h1>
        </Marquee>
      </section>
      <Meet />

      <Fade right>
        <section className="award-certificate">
          <h1>Awards & certificates</h1>
          <div className="award-main">
            <div className="award-btn">
              <button>
                All cases <img src={WhiteArrow} alt="" />
              </button>
            </div>
            <div className="award-list">
              <div className="award-01-01">
                <div className="award-01"></div>
              </div>
              <div className="award-01-01">
                <div className="award-01">
                  <div className="aear-tittle">
                    <div className="area-img">
                      <img src={Clutch} alt="" />
                    </div>
                    <div className="area-para">
                      <p>Clutch</p>
                    </div>
                  </div>
                </div>
                <div className="award-learn">
                  <p>
                    TOP Developers Eastern Europe 2020, TOP Developers Ukraine
                    2020, TOP IT Service 2020
                  </p>
                  <img src={ArrowImg} alt="" />
                </div>
              </div>
              <div className="award-01-01">
                <div className="award-01">
                  <div className="aear-tittle">
                    <div className="area-img">
                      <img src={TechRevier} alt="" />
                    </div>
                    <div className="area-para">
                      <p>Techreviewer</p>
                    </div>
                  </div>
                </div>
                <div className="award-learn">
                  <p>TOP Web Development Companies in USA</p>
                  <img src={ArrowImg} alt="" />
                </div>
              </div>

              <div className="award-01-01">
                <div className="award-01">
                  <div className="aear-tittle">
                    <div className="area-img">
                      <img src={GoodForms} alt="" />
                    </div>
                    <div className="area-para">
                      <p>GoodFirms</p>
                    </div>
                  </div>
                </div>
                <div className="award-learn">
                  <p>TOP 100 USA entrepreneurs with Ukrainian origins</p>
                  <img src={ArrowImg} alt="" />
                </div>
              </div>
              <div className="award-01-01">
                <div className="award-01">
                  <div className="aear-tittle">
                    <div className="area-img">
                      <img src={CrushBAse} alt="" />
                    </div>
                    <div className="area-para">
                      <p>Crunchbase</p>
                    </div>
                  </div>
                </div>
                <div className="award-learn">
                  <p>TOP 100 USA entrepreneurs with Ukrainian origins</p>
                  <img src={ArrowImg} alt="" />
                </div>
              </div>
              <div className="award-01-01">
                <div className="award-01">
                  <div className="aear-tittle">
                    <div className="area-img">
                      <img src={IT} alt="" />
                    </div>
                    <div className="area-para">
                      <p>IT-rating</p>
                    </div>
                  </div>
                </div>
                <div className="award-learn">
                  <p>TOP 100 USA entrepreneurs with Ukrainian origins</p>
                  <img src={ArrowImg} alt="" />
                </div>
              </div>
              <div className="award-01-01">
                <div className="award-01">
                  <div className="aear-tittle">
                    <div className="area-img">
                      <img src={Superb} alt="" />
                    </div>
                    <div className="area-para">
                      <p>SuperbCompanies</p>
                    </div>
                  </div>
                </div>
                <div className="award-learn">
                  <p>TOP 100 USA entrepreneurs with Ukrainian origins</p>
                  <img src={ArrowImg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fade>
      <Fade bottom>
        {" "}
        <section className="value-vision">
          <h1>Values and vision</h1>
          <div className="vision-section-main">
            <div className="vision-01">
              {Object.keys(content).map((button) => (
                <button
                  key={button}
                  className={selectedButton === button ? "active-btn" : ""}
                  onClick={() => handleButtonClick(button)}
                >
                  {button}
                </button>
              ))}
            </div>
            <div className="vision-02">
              <h1>{content[selectedButton].title}</h1>
              <p>{content[selectedButton].description}</p>
              <div className="vision-card-main">
                <div className="v-01-01">
                  {content[selectedButton].items.map((item, index) => (
                    <div className="v-pra" key={index}>
                      <span>{index + 1}/</span>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fade>
      <Growing />
      <Footer />
    </>
  );
};

export default About;
