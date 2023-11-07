import React, { useState, useEffect } from "react";
import "../styles/ClientSays.css";
import ClientName from "../assets/clientImages.png";
import ClientImg from "../assets/ClientNAme.png";
import Semicolon from "../assets/colon.png";

const ReviewList = () => {
  const reviews = [
    {
      name: "Anatoly Kostenko",
      company: "Head of the IT Department, Company",
      message:
        "Extremely pleased with the outcomes of the website development. Bionic Sols provided a clever product with adaptation for mobile devices and did everything to a high standard, on schedule, and with maximum professionalism. The team conducted an SEO analysis and researched the market of our business. Taking these data into account, the website was designed and developed. I also want to highlight the outstanding communication and constant involvement of the team in the project.",
    },
    {
      name: "Another Reviewer",
      company: "Another Company",
      message:
        "This is another review message. You can add as many reviews as needed to the array.",
    },
    {
      name: "Client Three",
      company: "Company Three",
      message:
        "Client Three's review message goes here. You can add more content specific to this review.",
    },
    {
      name: "Client Four",
      company: "Company Four",
      message:
        "Client Four's review message goes here. Add content as needed for this review.",
    },
    {
      name: "Client Five",
      company: "Company Five",
      message:
        "Client Five's review message. You can continue to add more reviews in a similar format.",
    },
    {
      name: "Client Six",
      company: "Company Six",
      message:
        "Client Six's review message. Feel free to add more reviews as desired.",
    },
  ];

  const [activeReview, setActiveReview] = useState(0);

  const handleMouseEnter = (index) => {
    setActiveReview(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the next index
      const nextIndex = (activeReview + 1) % reviews.length;
      setActiveReview(nextIndex);
    }, 1000); // Change review every 5 seconds (adjust as needed)

    return () => {
      clearInterval(interval); // Clear the interval when the component unmounts
    };
  }, [activeReview, reviews.length]);

  return (
    <>
      <section className="review-list">
        <div className="client-content">
          <div className="client-reviews">
            <div className="client-images">
              <div className="client-image">
                <img src={ClientImg} alt="" />
              </div>
              <div className="client-name">
                <img src={ClientName} alt="" />
              </div>
            </div>
            <div className="client-name">
              <p>{reviews[activeReview].name}</p>
            </div>
            <div className="client-company">
              <p>{reviews[activeReview].company}</p>
            </div>
          </div>
          <div className="client-msg">
            <div className="client-msg-slider-main">
              <div>
                {" "}
                <img src={Semicolon} alt="" />
              </div>
              <div>
                <p className="complete-msg-01">
                  {reviews[activeReview].message}
                </p>
              </div>
            </div>
            <div className="slider-btn">
              <div className="btn-slider">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onMouseEnter={() => handleMouseEnter(index)} // Change on hover
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReviewList;
