import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Alex from "../assets/Alex.png";
import Alex2 from "../assets/Alex2.png";
import Eugen from "../assets/Eugen.png";
import Max from "../assets/Max.png";
import Nady from "../assets/Nady.png";
import Serge from "../assets/Serge.png";
import "../styles/meeteam.css";
import Dot from "../assets/Dot.png";
const Meet = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Adjust the number of slides shown at once
    centerMode: true,
    variableWidth: true,
    centerPadding: "0", // Set the centerPadding to 0
  };
  const cards = [
    {
      name: "John Doe",
      designation: "Web Developer",
      image: Alex,
    },
    {
      name: "Jane Smith",
      designation: "UX Designer",
      image: Alex2,
    },
    {
      name: "Mike Johnson",
      designation: "Frontend Engineer",
      image: Eugen,
    },
    {
      name: "Mike Johnson",
      designation: "Frontend Engineer",
      image: Max,
    },
    {
      name: "Mike Johnson",
      designation: "Frontend Engineer",
      image: Nady,
    },
    {
      name: "Mike Johnson",
      designation: "Frontend Engineer",
      image: Serge,
    },
    {
      name: "John Doe",
      designation: "Web Developer",
      image: Alex,
    },
    {
      name: "Jane Smith",
      designation: "UX Designer",
      image: Alex2,
    },
    {
      name: "Mike Johnson",
      designation: "Frontend Engineer",
      image: Eugen,
    },
    {
      name: "Mike Johnson",
      designation: "Frontend Engineer",
      image: Max,
    },
    {
      name: "Mike Johnson",
      designation: "Frontend Engineer",
      image: Nady,
    },
    {
      name: "Mike Johnson",
      designation: "Frontend Engineer",
      image: Serge,
    },

    // Add more card objects as needed
  ];

  return (
    <>
      <sectio className="team-text-main">
        <div className="team-Left">
          <img src={Dot} alt="" />
          <p>Team</p>
        </div>
        <div className="team-right">
          <p>
            Our goal is to deliver customized software that satisfies our
            clients' requirements and exceeds their expectations. With extensive
            expertise in tech and IT, our software development team and company
            are dedicated to fulfilling this mission.
          </p>
        </div>
      </sectio>
      <div>
        <Slider {...settings}>
          {cards.map((card, index) => (
            <div
              key={index}
              style={{ width: "240px", height: "430.58px", marginLeft: "1rem" }}
              className="meet-card" // Add this className
            >
              <div>
                <img src={card.image} alt={card.name} />
                <p className="name-team">{card.name}</p>
                <p className="name-desingation">{card.designation}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Meet;
