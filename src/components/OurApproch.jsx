import React, { useState } from "react";
import "../styles/approch.css";
import TickMark from "../assets/TikIcons.png";
import UIUX from "../assets/ApprochUIUX.png";
import VArrow from "../assets/VArrow.png";
import ApprochVector from "../assets/approchVector.png";
import Sample1 from "../assets/customTab.webp";
import Sample2 from "../assets/mobieAppTab.webp";
import Sample3 from "../assets/MaintainceSupportTab.webp";
import Sample4 from "../assets/approchVector.png";
import Sample5 from "../assets/approchVector.png";
import Sample6 from "../assets/logisticSmall.png";
import { Fade } from "react-reveal";

const OurApproch = () => {
  const [CompNumber, setCompNumber] = useState(1);

  const handleButtonClick = (number) => {
    setCompNumber(number);
  };

  const ApprochContent = ({ Number, Tittle, Para, tag01, tag02, tag3 }) => (
    <div className="discover">

      <div className="number-phase">
        <p className="number-01">{Number}/</p>
        <h1 className="discover-phase">{Tittle}</h1>
      </div>

      <p className="discovery-para">{Para}</p>
      <div className="dis-para">
        <p className="dis-hi">
          <img src={TickMark} alt="" srcSet="" />
          {tag01}
        </p>
        <p className="dis-hi">
          <img src={TickMark} alt="" srcSet="" />
          {tag02}
        </p>
        <p className="dis-hi">
          <img src={TickMark} alt="" srcSet="" />
          {tag3}
        </p>
      </div>
    </div>
  );

  return (
    <>
      <section className="approch">
        <div className="Approch-contentent-01">
          <div className="Aproch-head">
            <h1>Our approach</h1>

            <button>
              How we work <img src={VArrow} alt="" />
            </button>
          </div>
          <div className="approch-para">
            <p>
              We manage your projects using established agile techniques to
              ensure collaboration between all parties involved. Our streamlined
              process results in quicker completion times and the attainment of
              even the most challenging objectives.
            </p>
          </div>
        </div>
        <div className="ap-03">
          <div className="ap-itme">
            {Array.from({ length: 7 }).map((_, index) => (
              <button
                key={index + 1}
                className={CompNumber === index + 1 ? "active" : "fild"}
                onClick={() => handleButtonClick(index + 1)}
              >
                {index + 1 === 1
                  ? "Discovery Phase"
                  : index + 1 === 2
                    ? "Web Development"
                    : index + 1 === 3
                      ? "Mobile Development"
                      : index + 1 === 4
                        ? "Mobile Development"
                        : index + 1 === 5
                          ? "AWS and Cloud services consulting"
                          : index + 1 === 6
                            ? "Test Automation"
                            : index + 1 === 7
                              ? "Product-to-market launch"
                              : ""}
              </button>
            ))}
          </div>

          <div className="ap-img">
            {CompNumber && (
              <Fade bottom>
                <img
                  src={
                    CompNumber === 1
                      ? ApprochVector
                      : CompNumber === 2
                        ? UIUX
                        : CompNumber === 3
                          ? Sample2
                          : CompNumber === 4
                            ? UIUX
                            : CompNumber === 5
                              ? Sample4
                              : CompNumber === 6
                                ? UIUX
                                : CompNumber === 7
                                  ? Sample6
                                  : ""
                  }
                  alt={`Image for Phase ${CompNumber}`}
                />
              </Fade>
            )}
          </div>

          {CompNumber === 1 && (
            <ApprochContent
              Number={"01 "}
              Tittle={"Discovery Phase"}
              Para={
                "We conduct thorough research on the client's business to identify areas for improvement before beginning any development work. Our planning phase is crucial to ensuring successful outcomes and delivering better results."
              }
              tag01={"We analyze"}
              tag02={"We strategize"}
              tag3={"We aim for an optimized result"}
            />
          )}

          {CompNumber === 2 && (
            <ApprochContent
              Number={"02 "}
              Tittle={"Web Development"}
              Para={"Content for Web Development goes here"}
              tag01={"Tag 1"}
              tag02={"Tag 2"}
              tag3={"Tag 3"}
            />
          )}
          {CompNumber === 3 && (
            <ApprochContent
              Number={"03 "}
              Tittle={"Mobile Development"}
              Para={"Content for Mobile Development goes here"}
              tag01={"Tag 1"}
              tag02={"Tag 2"}
              tag3={"Tag 3"}
            />
          )}
          {CompNumber === 4 && (
            <ApprochContent
              Number={"04 "}
              Tittle={"Mobile Development"}
              Para={"Content for Mobile Development goes here"}
              tag01={"Tag 1"}
              tag02={"Tag 2"}
              tag3={"Tag 3"}
            />
          )}
          {CompNumber === 5 && (
            <ApprochContent
              Number={"05 "}
              Tittle={"AWS and Cloud Services Consulting"}
              Para={"Content for AWS and Cloud Services Consulting goes here"}
              tag01={"Tag 1"}
              tag02={"Tag 2"}
              tag3={"Tag 3"}
            />
          )}
          {CompNumber === 6 && (
            <ApprochContent
              Number={"06 "}
              Tittle={"Test Automation"}
              Para={"Content for Test Automation goes here"}
              tag01={"Tag 1"}
              tag02={"Tag 2"}
              tag3={"Tag 3"}
            />
          )}
          {CompNumber === 7 && (
            <ApprochContent
              Number={"07 "}
              Tittle={"Product-to-market Launch"}
              Para={"Content for Product-to-market Launch goes here"}
              tag01={"Tag 1"}
              tag02={"Tag 2"}
              tag3={"Tag 3"}
            />
          )}
        </div>
      </section>
    </>
  );
};

export default OurApproch;
