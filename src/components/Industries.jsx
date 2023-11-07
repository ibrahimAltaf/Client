import React from "react";
import Slider from "react-slick"; // Import the Slider component from react-slick
import "slick-carousel/slick/slick.css"; // Import slick carousel styles
import "slick-carousel/slick/slick-theme.css"; // Import slick carousel theme styles
import "../styles/industries.css";
import Truck from "../assets/Truck.png";
import Logistic from "../assets/logistic.png";
import Arrow from "../assets/ArrowImage.png";
import { Link } from "react-router-dom";
const Industries = () => {
  const cardData = [
    {
      imageSrc: Logistic,
      title: "Logistics (Transportation)",
      description:
        "Our expert team creates software to enhance logistics and supply chain processes, developing TMS, CRM, E-Commerce, and ERP systems for desktop, iOS, and Android platforms.",
      linkTo: "/logistic",
    },
    {
      imageSrc: Logistic,
      title: "Logistics (Transportation)",
      description:
        "Our expert team creates software to enhance logistics and supply chain processes, developing TMS, CRM, E-Commerce, and ERP systems for desktop, iOS, and Android platforms.",
      linkTo: "/logistic",
    },
    {
      imageSrc: Logistic,
      title: "Logistics (Transportation)",
      description:
        "Our expert team creates software to enhance logistics and supply chain processes, developing TMS, CRM, E-Commerce, and ERP systems for desktop, iOS, and Android platforms.",
      linkTo: "/logistic",
    },
    {
      imageSrc: Logistic,
      title: "Logistics (Transportation)",
      description:
        "Our expert team creates software to enhance logistics and supply chain processes, developing TMS, CRM, E-Commerce, and ERP systems for desktop, iOS, and Android platforms.",
      linkTo: "/logistic",
    },
    {
      imageSrc: Logistic,
      title: "Logistics (Transportation)",
      description:
        "Our expert team creates software to enhance logistics and supply chain processes, developing TMS, CRM, E-Commerce, and ERP systems for desktop, iOS, and Android platforms.",
      linkTo: "/logistic",
    },

    {
      imageSrc: Logistic,
      title: "Logistics (Transportation)",
      description:
        "Our expert team creates software to enhance logistics and supply chain processes, developing TMS, CRM, E-Commerce, and ERP systems for desktop, iOS, and Android platforms.",
      linkTo: "/logistic",
    },

    {
      imageSrc: Logistic,
      title: "Logistics (Transportation)",
      description:
        "Our expert team creates software to enhance logistics and supply chain processes, developing TMS, CRM, E-Commerce, and ERP systems for desktop, iOS, and Android platforms.",
      linkTo: "/logistic",
    },
    // Add more objects for additional cards
  ];

  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of cards to show at a time
    slidesToScroll: 1, // Number of cards to scroll at a time
  };
  return (
    <>
      <section className="industries">
        <h1 className="industries-01">Industries</h1>
        <div className="industries-main-01">
          <div className="indus-01">
            <p className="indus-para">
              At Bionic Sols, we offer custom software solutions that bring
              value to the growth and development of businesses across multiple
              industries worldwide.
            </p>
            <button>Discover More </button>
          </div>
          <div className="indus-02">
            <Slider {...slickSettings}>
              {" "}
              {/* Use the Slider component */}
              {cardData.map((card, index) => (
                <div className="indus-card" key={index}>
                  <div className="img-main">
                    <img src={card.imageSrc} alt="" />
                    <div className="v-01">
                      <img src={Truck} alt="" />
                    </div>
                    <div className="v-02">
                      <p>{card.title}</p>
                    </div>
                  </div>
                  <div className="card-content">
                    <div>
                      <p className="indus-card-con">{card.description}</p>
                    </div>
                    <div className="indus-card-btn">
                      <Link target="_blank" to={card.linkTo}>
                        <button>
                          Learn more{" "}
                          <img className="btn-arr" src={Arrow} alt="" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Industries;
