import React from "react";
import "../styles/case.css";
import Reels from "../assets/WatchReelsimg.png";
import Header from "./Header";
import VectorArrow from "../assets/VectorArrow.png";
import Ultimate from "../assets/UltimatePlatfrom.png";
import Custo from "../assets/Custo.png";
import jugle from "../assets/Jugle.png";
import IdleStudio from "../assets/idleStudio.png";
import Growing from "./Growing";
import Footer from "./Footer";
import MbHeader from "../components/MobileHeader";
const CaseStudy = () => {
  const CaseCArd = ({ img, event, tittle, para }) => (
    <div className="case-card-01">
      <img src={img} alt="" />
      <p>{event}</p>
      <div className="case-tillte-12">
        <h1>{tittle}</h1>
        <img src={VectorArrow} alt="" />
      </div>
      <p id="Case-para-last-01">{para}</p>
    </div>
  );

  return (
    <>
      <section className="case-study">
        <Header />
        <MbHeader />

        <div className="case-hero-section">
          <div className="case-content-01">
            <h1>Case Studies</h1>
            <p>
              Bionic Solutions is a trusted partner for digital innovation. We
              have helped our clients achieve their vision of a more digital,
              efficient, and customer-centric future.
            </p>
          </div>
          <div className="watch-case-reels">
            <img src={Reels} alt="" />
          </div>
        </div>
      </section>
      <section className="casr-main">
        <div className="case-div-main">
          <div className="case-01-09">
            <CaseCArd
              img={Ultimate}
              event={"Event management"}
              tittle={"Eventow: go-to event discovery and management"}
              para={
                "Eventow connects you with the best events in your area and beyond in one convenient platform."
              }
            />
            <CaseCArd
              img={Custo}
              event={"Product based "}
              tittle={"Custo: Smart technology at your front door"}
              para={"Never worry about a delivery again, Custo is here."}
            />
            <CaseCArd
              img={Ultimate}
              event={"Event management"}
              tittle={"Eventow: go-to event discovery and management"}
              para={
                "Eventow connects you with the best events in your area and beyond in one convenient platform."
              }
            />
            <CaseCArd
              img={Custo}
              event={"Product based "}
              tittle={"Custo: Smart technology at your front door"}
              para={"Never worry about a delivery again, Custo is here."}
            />
          </div>
          <div className="case-01-00">
            <div className="complete-case-stu">
              <div className="dnum">2100+</div>
              <div className="implemtion">Implemented projects in IT</div>
            </div>
            <CaseCArd
              img={jugle}
              event={"Hotel management"}
              tittle={"Caboclos Hotel | Corporate website"}
              para={
                "A website for a locally-owned Jungle lodge in the Brazilian Amazon rainforest."
              }
            />
            <CaseCArd
              img={IdleStudio}
              event={"Agency"}
              tittle={"Idiazstudio Architecture Agency"}
              para={
                "A website for a locally-owned Jungle lodge in the Brazilian Amazon rainforest."
              }
            />
            <CaseCArd
              img={jugle}
              event={"Hotel management"}
              tittle={"Caboclos Hotel | Corporate website"}
              para={
                "A website for a locally-owned Jungle lodge in the Brazilian Amazon rainforest."
              }
            />
            <CaseCArd
              img={IdleStudio}
              event={"Agency"}
              tittle={"Idiazstudio Architecture Agency"}
              para={
                "A website for a locally-owned Jungle lodge in the Brazilian Amazon rainforest."
              }
            />
          </div>
        </div>
      </section>
      <div className="since-1999">
        <div className="since-btn">
          <button>Load more +</button>
        </div>
        <div className="since-para">
          <p>
            Since 1999 we have done 3500+ projects for 250+ clients ✺ Ready to
            start the project with us?
          </p>
        </div>
      </div>
      <section id="growing-02">
        <Growing />
      </section>
      <Footer />
    </>
  );
};

export default CaseStudy;
