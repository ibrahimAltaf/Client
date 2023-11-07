import React, { useState, useEffect } from "react";

// import Header Css
import "../styles/Header.css";
// import Linl {Router Dom}
import { Link } from "react-router-dom";
// import Images
import Logo from "../assets/logo-main.png";
import DropIcons from "../assets/dropDownIcons.svg";
const Header = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isDropdownVisible2, setDropdownVisible2] = useState(false);
  const toggleDropdown1 = () => {
    setDropdownVisible(!isDropdownVisible);
    setDropdownVisible2(false); // 2nd dropdown ko band karne ke liye
  };

  const toggleDropdown2 = () => {
    setDropdownVisible2(!isDropdownVisible2);
    setDropdownVisible(false); // 1st dropdown ko band karne ke liye
  };

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarStyle = {
    width: "100%",
    padding: "2rem",
    margin: "auto",
    height: "75px",
    backgroundColor: isSticky ? "black" : "transparent",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: isSticky ? "fixed" : "static",
    top: "0",
    left: "0",
    right: "0",
    zIndex: "100",
    transition: "background-color 0.3s",
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const yourOtherFunction = () => {
    // Your existing function logic here
  };

  const combinedFunctions = () => {
    scrollToTop();
    toggleDropdown1(); // First toggle
    // Second toggle
  };
  const combinedFunctions2 = () => {
    scrollToTop();
    toggleDropdown1(); // First toggle
    toggleDropdown2(); // Second toggle
  };

  return (
    <>
      <nav>
        <div className="nav-bar" style={navbarStyle}>
          <Link to={"/"}>
            <div className="nav-logo">
              <img src={Logo} alt="" />
            </div>
          </Link>
          <div className="nav-item">
            <ul>
              <li>
                <button onClick={combinedFunctions}>
                  Services <img src={DropIcons} alt="drop-icon" />
                </button>
              </li>
              <li>
                <button onClick={combinedFunctions2}>
                  {" "}
                  Industries <img src={DropIcons} alt="drop-icon" />
                </button>
              </li>
              <li>
                <Link to={"/caseStudy"}>Case Studies</Link>
              </li>
              <li>
                <Link to={"/about"}>About Us</Link>
              </li>
              <li>
                <Link>Blog</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contacts</Link>
              </li>
            </ul>
          </div>
          <div className="nav-contact">
            <a href="tel:+1872253073">+1 872 225 30 73</a>
            <Link>
              <button className="btn-main">Contact Us</button>
            </Link>
          </div>
        </div>
        {isDropdownVisible && (
          <div className="drop-downlist-main-header">
            <div className="drop-nav-li">
              <Link to={"/webdevelopment"}>Web Development</Link>
            </div>
            <div className="drop-nav-li">
              <Link to={"/evolution"}>Evaluation & Design</Link>
            </div>
            <div className="drop-nav-li">
              <Link to={"/Customsoftware"}>Custom Software New York</Link>
            </div>
            <div className="drop-nav-li">
              <Link to={"/TMS"}>TMS</Link>
            </div>
            <div className="drop-nav-li">
              <Link to={"/reasearch"}>Reaserach & Development</Link>
            </div>
          </div>
        )}
        {isDropdownVisible2 && (
          <div className="drop-downlist-main-header">
            <div className="drop-nav-li">
              <Link to={"/digital"}>Digital Acceleration</Link>
            </div>
            <div className="drop-nav-li">
              <Link to={"/logistic"}>Logistic</Link>
            </div>
            <div className="drop-nav-li">
              <Link to={"/transportation"}> TMS</Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
