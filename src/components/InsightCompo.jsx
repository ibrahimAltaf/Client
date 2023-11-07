import React from "react";
import "../styles/insight.css";
import WhiteArrow from "../assets/whiteArrow.png";
import Insight from "../assets/insight.png";
import Dot from "../assets/Dot.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const InsightCompo = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of slides to show on larger screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 1, // Number of slides to show on smaller screens (e.g., mobile)
        },
      },
    ],
  };

  return (
    <>
      <section className="insight">
        <div className="insight-head">
          <div>
            <h1>INSIGHTS</h1>
          </div>
          <div className="insdight-btn">
            <div className="stac-btb-02">
              <button>
                Discover More <img src={WhiteArrow} alt="" />
              </button>
            </div>
          </div>
        </div>
        <Slider {...settings}>
          <div className="ins-cars">
            <div className="insigt-img">
              <img src={Insight} alt="" />
            </div>
            <div className="tag-data">
              <div>
                <button>Education</button>
              </div>
              <div>
                <p className="time-date">August 28, 2023</p>
              </div>
            </div>
            <div className="car-tittle">
              <h3>
                The Benefits of Hiring a Digital Services Agency for Your
                Business
              </h3>
            </div>
            <div className="tag-data">
              <div className="main-autho">
                <p className="author">By Eugene</p>
              </div>
              <div className="main-autho">
                <img src={Dot} alt="" />
                <p className="author">7 min</p>
              </div>
            </div>
          </div>
          <div className="ins-cars">
            <div className="insigt-img">
              <img src={Insight} alt="" />
            </div>
            <div className="tag-data">
              <div>
                <button>Education</button>
              </div>
              <div>
                <p className="time-date">August 28, 2023</p>
              </div>
            </div>
            <div className="car-tittle">
              <h3>
                The Benefits of Hiring a Digital Services Agency for Your
                Business
              </h3>
            </div>
            <div className="tag-data">
              <div className="main-autho">
                <p className="author">By Eugene</p>
              </div>
              <div className="main-autho">
                <img src={Dot} alt="" />
                <p className="author">7 min</p>
              </div>
            </div>
          </div>
          <div className="ins-cars">
            <div className="insigt-img">
              <img src={Insight} alt="" />
            </div>
            <div className="tag-data">
              <div>
                <button>Education</button>
              </div>
              <div>
                <p className="time-date">August 22, 2023</p>
              </div>
            </div>
            <div className="car-tittle">
              <h3>
                The Benefits of Hiring a Digital Services Agency for Your
                Business
              </h3>
            </div>
            <div className="tag-data">
              <div className="main-autho">
                <p className="author">By Eugene</p>
              </div>
              <div className="main-autho">
                <img src={Dot} alt="" />
                <p className="author">7 min</p>
              </div>
            </div>
          </div>
        </Slider>
      </section>
    </>
  );
};

export default InsightCompo;
