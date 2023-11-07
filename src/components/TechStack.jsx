import React, { useState } from "react";
import Fade from "react-reveal/Fade";

import "../styles/techhstack.css";
import Grapql from "../assets/GraphyQl.png";
import REactFRom from "../assets/React Node.png";
import AntDesign from "../assets/ANT Designer.png";
import WhiteArrow from "../assets/whiteArrow.png";
import { Link } from "react-router-dom";

const TechStack = () => {
  const [activeSection, setActiveSection] = useState("Front-End");

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  const changeActiveSection = (section) => {
    setActiveSection(section);
    setActiveSection1(section);
  };

  const [activeSection1, setActiveSection1] = useState("Front-End");

  return (
    <div>
      <section className="tech-stak-head">
        <div className="stach-01">
          <h1>Technology stack</h1>
        </div>
        <div className="stac-btb-02">
          <Link target="_blank" to={"/techs"}>
            <button>
              Discover More <img src={WhiteArrow} alt="" />
            </button>
          </Link>
        </div>
      </section>
      <section className="stack-lan">
        <div className="languages-para">
          <button
            onClick={() => changeActiveSection("Front-End")}
            className={activeSection === "Front-End" ? "platrfom" : ""}
          >
            <p className={activeSection === "platrfom" ? "te-09" : ""}>
              Web Platform
            </p>
          </button>
          <button
            onClick={() => changeActiveSection("Database")}
            className={activeSection === "Database" ? "platrfom" : ""}
          >
            <p className={activeSection === "platrfom" ? "te-09" : ""}>
              Database
            </p>
          </button>
          <button
            onClick={() => changeActiveSection("Cloud & DevOps")}
            className={activeSection === "Cloud & DevOps" ? "platrfom" : ""}
          >
            <p className={activeSection === "platrfom" ? "te-09" : ""}>
              Cloud & DevOps
            </p>
          </button>
          <button
            onClick={() => changeActiveSection("Mobile apps")}
            className={activeSection === "Mobile apps" ? "platrfom" : ""}
          >
            <p className={activeSection === "platrfom" ? "te-09" : ""}>
              Mobile apps
            </p>
          </button>
        </div>
        <div className="tech-guide">
          {activeSection === "Front-End" && (
            <>
              <div className="stack-head">
                <h1>Front-End</h1>
                <sup>44</sup>
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
                    <img src={AntDesign} alt="" />
                  </div>
                  <p className="tech-names">[Ant Design]</p>
                </div>
              </div>
              <div className="stack-head">
                <h1>Backend</h1>
                <sup>44</sup>
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
            </>
          )}
          {activeSection === "Database" && (
            <>
              <div className="stack-head">
                <h1>Database</h1>
                <sup>44</sup>
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
                    <img src={AntDesign} alt="" />
                  </div>
                  <p className="tech-names">[Ant Design]</p>
                </div>
              </div>
            </>
          )}
          {activeSection === "Cloud & DevOps" && (
            <>
              <div className="stack-head">
                <h1>Cloud & DevOps</h1>
                <sup>44</sup>
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
                    <img src={AntDesign} alt="" />
                  </div>
                  <p className="tech-names">[Ant Design]</p>
                </div>
              </div>
            </>
          )}
          {activeSection === "Mobile apps" && (
            <>
              <div className="stack-head">
                <h1>Mobile apps</h1>
                <sup>44</sup>
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
                    <img src={AntDesign} alt="" />
                  </div>
                  <p className="tech-names">[Ant Design]</p>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default TechStack;
