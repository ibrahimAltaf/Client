import React, { useState, useEffect, useRef } from "react";

import "../assets/whychoice.css";
import ChoiceImg from "../assets/whyChoice.png";
import BlackARrow from "../assets/blackArrow.png";
import WhiteArrow from "../assets/whiteArrow.png";
import { Link } from "react-router-dom";

const WhyChoice = () => {
  const numberRef1 = useRef(null);
  const [count1, setCount1] = useState(1);
  const [counted1, setCounted1] = useState(false);

  useEffect(() => {
    const options = {
      threshold: 0.8,
    };

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && !counted1) {
        setCounted1(true);

        const duration = 1000;
        const steps = 23;
        const stepDuration = duration / steps;

        for (let i = 2; i <= steps; i++) {
          setTimeout(() => {
            setCount1(i);
          }, i * stepDuration);
        }
      }
    }, options);

    if (numberRef1.current) {
      observer.observe(numberRef1.current);
    }

    return () => {
      if (numberRef1.current) {
        observer.unobserve(numberRef1.current);
      }
    };
  }, [counted1]);

  const numberRef2 = useRef(null);
  const [count2, setCount2] = useState(1);
  const [counted2, setCounted2] = useState(false);

  useEffect(() => {
    const options = {
      threshold: 0.8,
    };

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && !counted2) {
        setCounted2(true);

        const duration = 1000;
        const steps = 10;
        const stepDuration = duration / steps;

        for (let i = 2; i <= steps; i++) {
          setTimeout(() => {
            setCount2(i);
          }, i * stepDuration);
        }
      }
    }, options);

    if (numberRef2.current) {
      observer.observe(numberRef2.current);
    }

    return () => {
      if (numberRef2.current) {
        observer.unobserve(numberRef2.current);
      }
    };
  }, [counted2]);

  const numberRef3 = useRef(null);
  const [count3, setCount3] = useState(1);
  const [counted3, setCounted3] = useState(false);

  useEffect(() => {
    const options = {
      threshold: 0.8,
    };

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && !counted3) {
        setCounted3(true);

        const duration = 1000;
        const steps = 3500;
        const stepDuration = duration / steps;

        for (let i = 2; i <= steps; i++) {
          setTimeout(() => {
            setCount3(i);
          }, i * stepDuration);
        }
      }
    }, options);

    if (numberRef3.current) {
      observer.observe(numberRef3.current);
    }

    return () => {
      if (numberRef3.current) {
        observer.unobserve(numberRef3.current);
      }
    };
  }, [counted3]);

  const numberRef4 = useRef(null);
  const [count4, setCount4] = useState(1);
  const [counted4, setCounted4] = useState(false);

  useEffect(() => {
    const options = {
      threshold: 0.8,
    };

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && !counted4) {
        setCounted4(true);

        const duration = 1000;
        const steps = 250;
        const stepDuration = duration / steps;

        for (let i = 2; i <= steps; i++) {
          setTimeout(() => {
            setCount4(i);
          }, i * stepDuration);
        }
      }
    }, options);

    if (numberRef4.current) {
      observer.observe(numberRef4.current);
    }

    return () => {
      if (numberRef4.current) {
        observer.unobserve(numberRef4.current);
      }
    };
  }, [counted4]);

  return (
    <>
      <section className="why-chose-us">
        <div className="why-content">
          <div className="why-01">
            <h1>Why Choose Us?</h1>
            <p>
              We have a team of experienced professionals who have worked with
              businesses of all sizes in a variety of industries.
            </p>
          </div>
          <div className="why-02"></div>
        </div>
        <div className="why-choice-number">
          <div className="choice-main-01">
            <div className="text-conten">
              <p>
                Our objective is to develop a profitable and effective solution
                that helps clients to expand their businesses and overcome
                financial constraints. We are committed to exceptional service
                and utilizing all resources to bring the finest products &
                services.
              </p>
              <Link to={"/about"} target="_blank">
                <button>
                  About us <img src={WhiteArrow} alt="" />{" "}
                </button>
              </Link>
            </div>
            <div className="image-choice">
              <img src={ChoiceImg} alt="" />
            </div>
          </div>
          <div className="choice-statics">
            <div className="static-01">
              <div className="static-001">
                <div className="number-stat">
                  <div>
                    <p
                      className={`number-stats ${counted1 ? "counted" : ""}`}
                      ref={numberRef1}
                    >
                      {count1} +
                    </p>
                  </div>
                  <div>
                    <img src={BlackARrow} alt="" />
                  </div>
                </div>
                <div className="para-stat">
                  <p>
                    With 23 years of experience, we've earned hundreds of awards
                    and certificates.
                  </p>
                </div>
              </div>
              <div className="static-001">
                <div className="number-stat">
                  <div>
                    <p
                      className={`number-stats ${counted2 ? "counted" : ""}`}
                      ref={numberRef2}
                    >
                      {count2} +
                    </p>
                  </div>
                  <div>
                    <img src={BlackARrow} alt="" />
                  </div>
                </div>
                <div className="para-stat">
                  <p>
                    Offices in 4 countries around the world - United States of
                    America, Germany, Poland, and Ukraine.
                  </p>
                </div>
              </div>
            </div>
            <div className="static-01">
              <div className="static-001">
                <div className="number-stat">
                  <div>
                    <p
                      className={`number-stats ${counted3 ? "counted" : ""}`}
                      ref={numberRef3}
                    >
                      {count3} +
                    </p>
                  </div>
                  <div>
                    <img src={BlackARrow} alt="" />
                  </div>
                </div>
                <div className="para-stat">
                  <p>We employ over 250 certified full-time professionals.</p>
                  <br />
                </div>
              </div>
              <div className="static-001">
                <div className="number-stat">
                  <div>
                    <p
                      className={`number-stats ${counted4 ? "counted" : ""}`}
                      ref={numberRef4}
                    >
                      {count4} +
                    </p>
                  </div>
                  <div>
                    <img src={BlackARrow} alt="" />
                  </div>
                </div>
                <div className="para-stat">
                  <p>More than 3,500 successfully implemented projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChoice;
