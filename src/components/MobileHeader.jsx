import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/mobileheader.css";
import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/mobileHEader-logo.png";
import WEb from "../assets/Hweb.png";
import Insta from "../assets/Hinsta.png";
import BE from "../assets/HBe.png";
import W from "../assets/HW.png";
import Linkdin from "../assets/HLinkden.png";
import toggleIconImage from "../assets/logoToggle.png";

function BasicExample() {
  const [showSocialIcons, setShowSocialIcons] = useState(false);

  const toggleSocialIcons = () => {
    setShowSocialIcons(!showSocialIcons);
  };
  return (
    <Navbar expand="lg" id="nav" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img id="nav-logo" src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Brand id="contact-btn" href="#home">
          Contact US
        </Navbar.Brand>
        <Navbar.Toggle
          id="toggle"
          aria-controls="basic-navbar-nav"
          onClick={toggleSocialIcons}
        >
          <img src={toggleIconImage} alt="Toggle Button" />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav id="nav-list" className="me-auto">
            <Nav.Link className="Nav-text" href="#home">
              <Link to={"/"}>Home</Link>
            </Nav.Link>
            <NavDropdown
              className="Nav-text"
              title="Services"
              id="services-dropdown"
            >
              <NavDropdown.Item href="#service1">
                <Link id="Link-01" className="nav-te" to={"/webdevelopment"}>
                  Web Development
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#service2">
                <Link className="nav-te" id="Link-01" to={"/evolution"}>
                  Evaluation & Design
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#service3">
                <Link className="nav-te" id="Link-01" to={"/Customsoftware"}>
                  Custom Software
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item href="#service4">
                <Link className="nav-te" id="Reas" to={"/reasearch"}>
                  Reaserach & Development
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#service5">
                <Link id="nav-te" className="nav-te" to={"/TMS"}>
                  TMS
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              className="Nav-text"
              title="Industries"
              id="industries-dropdown"
            >
              <NavDropdown.Item href="#industry2">
                <Link className="nav-te" id="Link-01" to={"/digital"}>
                  Digital Acceleration
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#industry3">
                <Link className="nav-te" id="Link-01" to={"/logistic"}>
                  Logistic
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="Nav-text" href="#industry4">
                <Link className="nav-te" id="Link-01" to={"/transportation"}>
                  {" "}
                  TMS
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="Nav-text" href="#about">
              <Link to={"/about"}>About Us</Link>
            </Nav.Link>
            <Nav.Link className="Nav-text" href="#contact">
              <Link to={"/contact"}>Contact Us</Link>
            </Nav.Link>
            <Nav.Link className="Nav-text" href="#contact">
              <Link to={"/"}>Blogs</Link>
            </Nav.Link>
            <div className="social-icons-mobile">
              <a href="">
                <img src={WEb} alt="" />
              </a>
              <a href="">
                <img src={Insta} alt="" />
              </a>
              <a href="">
                <img src={BE} alt="" />
              </a>
              <a href="">
                <img src={W} alt="" />
              </a>
              <a href="">
                <img src={Linkdin} alt="" />
              </a>
            </div>
          </Nav>
        </Navbar.Collapse>
        {/* Social Links */}
      </Container>
    </Navbar>
  );
}

export default BasicExample;
