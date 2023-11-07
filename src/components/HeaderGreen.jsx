import React from "react";

// import Header Css
import "../styles/Headergreen.css";
// import Linl {Router Dom}
import { Link } from "react-router-dom";
// import Images
import Logo from "../assets/logo-main.png";
import DropIcons from "../assets/dropDownIcons.svg";
const HeaderGreen = () => {
  return (
    <>
      <nav>
        <div className="nav-bar">
          <div className="nav-logo">
            <img src={Logo} alt="" />
          </div>
          <div className="nav-item">
            <ul>
              <li>
                <Link className="green-link">
                  Services <img src={DropIcons} alt="drop-icon" />
                </Link>
              </li>
              <li>
                <Link className="green-link" to={"/techs"}>
                  Industries <img src={DropIcons} alt="drop-icon" />
                </Link>
              </li>
              <li>
                <Link className="green-link">Case Studies</Link>
              </li>
              <li>
                <Link to={"/about"} className="green-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="green-link">Blog</Link>
              </li>
              <li>
                <Link className="green-link" to={"/contact"}>
                  Contacts
                </Link>
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
      </nav>
    </>
  );
};

export default HeaderGreen;
