import React from "react";
import "./AboutContent.css";
import { Link } from "react-router-dom";
import ImgValue from "./Images";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>who i am</h1>
        <p>
          lfirjn prifure pfiref refpreif r epijc crecijrcn erci cprience pijcern
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img className="img" src={ImgValue.homeHero} alt="l" />
          </div>
          <div className="img-stack bottom">
            <img className="img" src={ImgValue.homeHero} alt="l" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
