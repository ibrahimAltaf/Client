import React, { useState } from "react";

import "../styles/contact.css";
import Header from "../components/Header";
import HeaderGreen from "./HeaderGreen";
import Footer from "../components/Footer";
import ContactImg from "../assets/contact-us-png.png";
import FAArrow from "../assets/fA2Arrow.png";
import MbHeader from "../components/MobileHeader";
const Contactus = () => {
  const locations = [
    {
      name: "USA Chicago",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus culpa natus cum. Repellendus, mollitia! Corrupti labore voluptatem molestiae quod neque error exercitationem amet unde architecto.",
    },
    {
      name: "USA NY, New York City",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus culpa natus cum. Repellendus, mollitia! Corrupti labore voluptatem molestiae quod neque error exercitationem amet unde architecto.",
    },
    {
      name: "Poland Wroclaw",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus culpa natus cum. Repellendus, mollitia! Corrupti labore voluptatem molestiae quod neque error exercitationem amet unde architecto.",
    },
    {
      name: "Ukraine Kyiv",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus culpa natus cum. Repellendus, mollitia! Corrupti labore voluptatem molestiae quod neque error exercitationem amet unde architecto.",
    },
  ];

  const [activeLocation, setActiveLocation] = useState(null);

  const handleButtonClick = (index) => {
    if (activeLocation === index) {
      // If the same location button is clicked again, close it
      setActiveLocation(null);
    } else {
      setActiveLocation(index);
    }
  };
  const [Disscus, SetDiscus] = useState(true);
  const [General, SetGenrel] = useState(false);

  const Togle1 = () => {
    SetDiscus(true);
    SetGenrel(false);
  };

  const Togle2 = () => {
    SetGenrel(true);
    SetDiscus(false);
  };
  return (
    <>
      <HeaderGreen />
      <MbHeader />
      <section className="contact-us">
        <div className="contact-content">
          <h1 className="conta-head">Contact us</h1>
          <p>
            If you're looking for a digital solution provider that can help you
            achieve your business goals, contact Bionic Solutions today. We
            offer a free consultation to discuss your needs and how we can help
            you.
          </p>
        </div>
        <div className="contact-imf">
          <img src={ContactImg} alt="" />
        </div>
      </section>

      <section className="lets-discus">
        <div className="discover-issue">
          <button
            onClick={Togle1}
            className={`dic0ver-01-02 ${Disscus ? "dic0ver-01" : ""}`}
          >
            Discuss the project
          </button>
          <button
            onClick={Togle2}
            className={`dic0ver-01-02 ${General ? "dic0ver-01" : ""}`}
          >
            General issues
          </button>
        </div>
        {Disscus && (
          <div className="discus-your-project">
            <h1 className="lets-head">Let’s discuss your project</h1>
            <div className="email-01">
              <div className="name-001">
                <input type="text" name="" id="" placeholder="Full name *" />
              </div>
              <div className="email-001">
                <input type="email" name="" id="" placeholder="Email *" />
              </div>
            </div>
            <div className="email-01">
              <div className="name-001">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Phone number  *"
                />
              </div>
              <div className="email-001">
                <input type="email" name="" id="" placeholder="Company " />
              </div>
            </div>
            <div className="message-001">
              <input type="text" placeholder="Message " />
            </div>
            <div className="checkbox-main-text">
              <div className="checb-07">
                <input type="checkbox" name="" id="" />
                <p>
                  We will add your info to our CRM for contacting you regarding
                  your request. For more info please consult our{" "}
                  <span>privacy policy.</span>
                </p>
              </div>
              <div className="send-message-main-btn">
                <button>Send message</button>
              </div>
            </div>
          </div>
        )}
        {General && (
          <div className="discus-your-project">
            <h1 className="lets-head">General issues</h1>
            <div className="email-01">
              <div className="name-001">
                <input type="text" name="" id="" placeholder="Full name *" />
              </div>
              <div className="email-001">
                <input type="email" name="" id="" placeholder="Email *" />
              </div>
            </div>
            <div className="email-01">
              <div className="name-001">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Phone number  *"
                />
              </div>
              <div className="email-001">
                <input type="email" name="" id="" placeholder="Company " />
              </div>
            </div>
            <div className="message-001">
              <input type="text" placeholder="Message " />
            </div>
            <div className="checkbox-main-text">
              <div className="checb-07">
                <input type="checkbox" name="" id="" />
                <p>
                  We will add your info to our CRM for contacting you regarding
                  your request. For more info please consult our{" "}
                  <span>privacy policy.</span>
                </p>
              </div>
              <div className="send-message-main-btn">
                <button>Send message</button>
              </div>
            </div>
          </div>
        )}
      </section>

      <section className="office-all">
        <div className="off-01">
          <div className="off-heade">
            <h1>Our offices all around the world</h1>
          </div>
          <div className="off-para">
            <p>
              Find your team among 250 specialists in 10 offices from 4
              countries
            </p>
          </div>
        </div>
        <div className="off-02"></div>
      </section>
      <section className="peek">
        <div className="peek-01">
          <p>peek into our offices</p>
        </div>
        <div className="peek-02">
          <div className="USa-chicago">
            <div className="usa-head">
              <h1>
                <span>USA </span>
                Chicago
              </h1>
            </div>
            <p className="location-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit\.
            </p>
            <div className="usa-arrow">
              <button>
                <img src={FAArrow} alt="" />
              </button>
            </div>
          </div>
          <div className="USa-chicago">
            <div className="usa-head">
              <h1>
                <span>USA </span>
                Chicago
              </h1>
            </div>
            <p className="location-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit\.
            </p>
            <div className="usa-arrow">
              <button>
                <img src={FAArrow} alt="" />
              </button>
            </div>
          </div>
          <div className="USa-chicago">
            <div className="usa-head">
              <h1>
                <span>USA </span>
                Chicago
              </h1>
            </div>
            <p className="location-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit\.
            </p>
            <div className="usa-arrow">
              <button>
                <img src={FAArrow} alt="" />
              </button>
            </div>
          </div>
          <div className="USa-chicago">
            <div className="usa-head">
              <h1>
                <span>USA </span>
                Chicago
              </h1>
            </div>
            <p className="location-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit\.
            </p>
            <div className="usa-arrow">
              <button>
                <img src={FAArrow} alt="" />
              </button>
            </div>
          </div>
          <div className="USa-chicago">
            <div className="usa-head">
              <h1>
                <span>USA </span>
                Chicago
              </h1>
            </div>
            <p className="location-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit\.
            </p>
            <div className="usa-arrow">
              <button>
                <img src={FAArrow} alt="" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contactus;
