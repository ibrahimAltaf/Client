import React from "react";
import Fade from "react-reveal/Fade";
import "../styles/clientsyas.css";
import Crushbose from "../assets/Link - Top Rated → SVG.png";
import Goodform from "../assets/Link - Excellent mobile → SVG.png";
import Topreated from "../assets/Link → 25 reviews.png";

const ClientSays = () => {
  return (
    <>
      <section className="clietn-says">
        <Fade bottom>
          <h1 className="what-client">What clients say</h1>
        </Fade>

        <div className="client-men">
          <div className="top-rated">
            <div>
              <img src={Topreated} alt="" />
            </div>
            <Fade bottom>
              <div className="top-head">
                <h3>Topreated</h3>
                <div className="top-para">
                  <p>The highest quality results and client satisfaction</p>
                </div>
              </div>
            </Fade>
          </div>
          <div className="good-firms">
            <div>
              <img src={Goodform} alt="" />
            </div>
            <Fade bottom>
              <div className="top-head">
                <h3>Excellent mobile</h3>
                <div className="top-para">
                  <p>Top App Development Companies in Ukraine 2021</p>
                </div>
              </div>
            </Fade>
          </div>
          <div className="crushbose">
            <div>
              <img src={Crushbose} alt="" />
            </div>
            <Fade bottom>
              <div className="top-head">
                <h3>Top Rated</h3>
                <div className="top-para">
                  <p>The highest quality results and client satisfaction</p>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientSays;
