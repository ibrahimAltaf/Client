import React, { useState } from "react";
import Logo from "../assets/logoformob.png";
import CloseBtn from "../assets/closeBtn.png";
import "../styles/mobileheader.css";
import Drop from "../assets/FArrow.png";

import BE from "../assets/HBe.png";
import Insta from "../assets/Hinsta.png";
import HLink from "../assets/HLinkden.png";
import HW from "../assets/HW.png";
import Web from "../assets/Hweb.png";
import openNavbar from "../assets/openNavbar.png";

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="mobile-header">
        <div className={`log-08 ${isMenuOpen ? "hidden" : ""}`}>
          <img src={Logo} alt="" />
        </div>
        <div className={`contact-us ${isMenuOpen ? "hidden" : ""}`}>
          <button>Contact us</button>
        </div>
        <div
          className={`open-navbar ${isMenuOpen ? "hidden" : ""}`}
          onClick={toggleMenu}
        >
          <img src={openNavbar} alt="Open Navbar" />
        </div>
      </div>
      <nav className={`mobile ${isMenuOpen ? "visible" : ""}`}>
        <div className="logo-close">
          <div className={`log-009 ${isMenuOpen ? "hidden" : ""}`}>
            <img src={Logo} alt="" />
          </div>
          <div
            className={`close-btn ${isMenuOpen ? "visible" : ""}`}
            onClick={toggleMenu}
          >
            <button>
              <img src={CloseBtn} alt="Close Button" />
            </button>
          </div>
        </div>
        <div className={`navbar-list-main-01 ${isMenuOpen ? "visible" : ""}`}>
          <div className="drop-li">
            <div className="dropdown-list">
              <a href="">Services</a>
            </div>
            <div className="drop-icone">
              <img src={Drop} alt="" />
            </div>
          </div>
          <div className="drop-li">
            <div className="dropdown-list">
              <a href="">Industries</a>
            </div>
            <div className="drop-icone">
              <img src={Drop} alt="" />
            </div>
          </div>
          <div className="drop-li">
            <div className="dropdown-list">
              <a href="">Case Studies</a>
            </div>
            <div className="drop-icone">
              <img src={Drop} alt="" />
            </div>
          </div>
          <div className="drop-li">
            <div className="dropdown-list">
              <a href="">About Us</a>
            </div>
            <div className="drop-icone"></div>
          </div>
          <div className="drop-li">
            <div className="dropdown-list">
              <a href="">Blog</a>
            </div>
            <div className="drop-icone"></div>
          </div>
          <div className="drop-li">
            <div className="dropdown-list">
              <a href="">Contact Us</a>
            </div>
            <div className="drop-icone"></div>
          </div>
        </div>
        <div className={`social-links-main ${isMenuOpen ? "visible" : ""}`}>
          <img src={Web} alt="" />
          <img src={Insta} alt="" />
          <img src={BE} alt="" />
          <img src={HW} alt="" />
          <img src={HLink} alt="" />
        </div>
      </nav>
    </>
  );
};

export default MobileHeader;
