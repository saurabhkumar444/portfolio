import React from "react";
import "./Hero.css";
import ImgValue from "./Images";
import { Link } from "react-router-dom";

const Hero = ({ props, isHomeScreen = false }) => {
  return (
    <div className="hero-header">
      <div className="hero-mask">
        <img className="into-img" src={ImgValue.homeHero} alt="homeHero" />
      </div>
      <div className="hero-content">
        {isHomeScreen && (
          <div>
            <p>HI, I'M A SOFTWARE DEVELOPER</p>
            <h1>REACT DEVELOPER</h1>
            <div>
              <Link to="/project" className="btn">
                Project
              </Link>
              <Link to="/contact" className="btn btn-light">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
