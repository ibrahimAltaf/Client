import React, { useState } from "react";
import "../styles/caseStudies.css";
import Arrow from "../assets/ArrowImage.png";
import VectorArrow from "../assets/VectorArrow.png";
import Ultimate from "../assets/UltimatePlatfrom.png";
import Custo from "../assets/Custo.png";
import Jugle from "../assets/Jungle.png";
import IdleStudio from "../assets/Idle.png";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";

const CaseStudies = () => {
  const [selectedCategory, setSelectedCategory] = useState("All categories");

  const CaseStudyCard = ({ img, startup, name, desc }) => (
    <div className="case-Study-card">
      <div className="image-study">
        <img src={img} alt="" />
      </div>
      <div className="Study-Data">
        <div className="Study-content">
          <p className="Startup-name">{startup}</p>
          <h3>{name}</h3>
          <p className="Case-des">{desc}</p>
        </div>
        <div className="Learn-More-Arrow">
          <img src={VectorArrow} alt="" />
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Fade>
        <section className="Case-studeies-main">
          <div className="case-study-head">
            <div className="case-study-content">
              <h2>Case Studies</h2>
              <div className="case-btn">
                <Link target="_blank" to={"/caseStudy"}>
                  <button onClick={() => setSelectedCategory("All categories")}>
                    All categories
                  </button>
                </Link>

                <button onClick={() => setSelectedCategory("Custom Software")}>
                  Custom Software
                </button>
                <button onClick={() => setSelectedCategory("UX/UI Design")}>
                  UX/UI Design
                </button>
                <button onClick={() => setSelectedCategory("Web Development")}>
                  Web Development
                </button>
                <button onClick={() => setSelectedCategory("Mobile App")}>
                  Mobile App
                </button>
              </div>
            </div>
            <div className="case-study-btn">
              <Link to={"/casestudy"}>
                <button>
                  All cases <img src={Arrow} alt="" />
                </button>
              </Link>
            </div>
          </div>
          <div className="case-study-proto-type">
            <div className="proto-01">
              {(selectedCategory === "All categories" ||
                selectedCategory === "Custom Software") && (
                <>
                  <Fade bottom>
                    <CaseStudyCard
                      img={Ultimate}
                      startup={"Event management"}
                      name={"Eventow: go-to event discovery and management"}
                      desc={
                        "Eventow connects you with the best events in your area and beyond in one convenient platform."
                      }
                    />
                  </Fade>
                  <Fade left>
                    <CaseStudyCard
                      img={Custo}
                      startup={"Product based"}
                      name={"Custo: Smart technology at your front door"}
                      desc={
                        "Never worry about a delivery again, Custo is here."
                      }
                    />
                  </Fade>
                </>
              )}
            </div>
            <div className="proto-02">
              <div className="complete-case-stu">
                <div className="dnum">2100+</div>
                <div className="implemtion">Implemented projects in IT</div>
              </div>
              {(selectedCategory === "All categories" ||
                selectedCategory === "Web Development") && (
                <>
                  <Fade bottom>
                    <CaseStudyCard
                      img={Jugle}
                      startup={"Hotel management"}
                      name={"Caboclos Hotel | Corporate website"}
                      desc={
                        "A website for a locally-owned Jungle lodge in the Brazilian Amazon rainforest."
                      }
                    />
                  </Fade>
                  <Fade bottom>
                    <CaseStudyCard
                      img={IdleStudio}
                      startup={"Agency"}
                      name={"Idiazstudio Architecture Agency"}
                      desc={
                        "A renowned architectural firm committed to creating innovative, sustainable, and aesthetically pleasing spaces that cater to the unique needs and desires of its clients."
                      }
                    />
                  </Fade>
                </>
              )}
            </div>
          </div>
        </section>
      </Fade>
    </>
  );
};

export default CaseStudies;
