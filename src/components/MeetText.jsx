import React, { useEffect, useState } from "react";
import "../styles/meet.css";
import Marquee from "react-fast-marquee";

const MeetText = () => {
  return (
    <div className="Meet-our-team-slider">
      <div>
        <Marquee>
          <h1 className="MeetTExt">Meet the Team </h1>
          <h1 className="MeetTExt">Meet the Team </h1>
          <h1 className="MeetTExt">Meet the Team </h1>
        </Marquee>
      </div>
    </div>
  );
};

export default MeetText;
