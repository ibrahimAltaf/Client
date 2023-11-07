import React, { useState, useEffect } from "react";
import top from "../assets/top.png";
import "../styles/Footer.css";
import Web from "../assets/web.png";
import Insta from "../assets/insta.png";
import Ba from "../assets/BE.png";
import W from "../assets/W.png";
import Linkdin from "../assets/link.png";
import Discord from "../assets/discord.png";
import npm from "../assets/npm.png";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add an event listener to the window to check for scroll position
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to handle the scroll event and show/hide the button
  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Add smooth scrolling behavior
    });
  };
  return (
    <>
      <footer>
        <div className="footer">
          <div className="fo-01">
            <div>
              <ul className="ul">
                <li>
                  <a href="">services</a>
                  <a href="">technologies</a>
                  <a href="">Industries</a>
                  <a href="">partnership</a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="ul">
                <li>
                  <a href="">services</a>
                  <a href="">technologies</a>
                  <a href="">Industries</a>
                  <a href="">partnership</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="f02">
            <div className="socail-link">
              <div className="socuial-link-main-01">
                <div className="link-icons">
                  <img src={Web} alt="" />
                  <img src={Insta} alt="" />
                  <img src={Ba} alt="" />
                  <img src={W} alt="" />
                  <img src={Linkdin} alt="" />
                  <img src={Discord} alt="" />
                  <img src={npm} alt="" />
                </div>
                <div
                  className={`scroll-top ${isVisible ? "visible" : ""}`}
                  onClick={scrollToTop}
                >
                  <p>Top</p>
                  <img src={top} alt="" />
                </div>
              </div>
              <div className="social-adrees"></div>
            </div>
            <div className="powerd-by">
              <div className="prowerd">
                <p>Powered by Split Creatives</p>
              </div>
              <div className="sitemap">
                <p>Sitemap</p>
              </div>
              <div className="policy">
                <p>Privacy Policy</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
