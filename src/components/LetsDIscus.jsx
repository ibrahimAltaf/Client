import React from "react";
import "../styles/letDiscus.css";
import EmployeImg from "../assets/EmployeImg01.png";
import Semilcolon from "../assets/smelicon-discus.png";
import Ln from "../assets/link.png";
const LetsDIscus = () => {
  return (
    <>
      <section className="Lets-discus">
        <div className="lets-discus-head-011">
          <h1>Let's discuss</h1>
        </div>
        <div className="case-studymain-098">
          <div className="let-discus-form-09">
            <p>
              Leave a request — our experts will analyze your current situation
              and help you choose an effective solution for scaling your
              business
            </p>
            <input type="email" name="" id="let-discus" placeholder="Email *" />
            <input
              type="text"
              name=""
              id="let-email"
              placeholder="Phone number *"
            />
            <div className="let-check-box-discus">
              <input type="checkbox" name="" id="" />
              <p>
                We will add your info to our CRM for contacting you regarding
                your request. For more info please consult our{" "}
                <span id="privacy">privacy policy.</span>
              </p>
            </div>
            <div id="letdicux-btn">
              <button>Order a consultation</button>
            </div>
          </div>
          <div className="lets-discus-img-08">
            <img src={EmployeImg} alt="" />
          </div>
          <div className="let-discusabou">
            <div className="let-d0001">
              <div>
                <img src={Semilcolon} alt="" />
                <img className="IN" src={Ln} alt="" />
              </div>
              <div>
                <p className="employeName">
                  Victoria <br /> <span>IT Sales Manager</span>
                </p>
              </div>
            </div>
            <div className="letd0002">
              <p>
                Me and my team delivers an exceptional level of service and
                strives to build strong and long lasting partnerships with our
                clients.
              </p>
            </div>
            <div className="let-d00003">
              <p>
                Work with John Deere, STVOL, Anabel Arto, E-Groshi, Kimito and
                other.
              </p>
              <div className="let-doo-001">
                <div className="YEar-experience">
                  <p> 4+</p>
                  <sup id="Success">
                    years in the
                    <br /> company
                  </sup>
                </div>
                <div className="experience">
                  <p>100+</p>
                  <sup id="Success">
                    successful <br /> projects
                  </sup>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LetsDIscus;
