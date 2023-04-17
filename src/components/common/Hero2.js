import "./Hero2.css";

import React from "react";

const Hero2 = ({ heading = "", text = "" }) => {
  return (
    <div className="hero2-img">
      <div className="hero2-heading">
        <h1>{heading}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Hero2;
