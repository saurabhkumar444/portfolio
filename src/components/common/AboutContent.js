import React from "react";
import "./AboutContent.css";
import { Link } from "react-router-dom";
import ImgValue from "./Images";
import {
  FaBootstrap,
  FaCss3,
  FaCss3Alt,
  FaDatabase,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNode,
  FaNodeJs,
  FaNpm,
  FaReact,
} from "react-icons/fa";

import { TiHtml5 } from "react-icons/ti";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left" style={{ display: "flex", width: "100%" }}>
        <h1>Technologies</h1>
        <p>
          I'm familiar with HTML5, CSS3, JavaScript, ReactJS, Bootstrap, React
          Native, Redux, Material UI, MySQL, PostgreSQL and Web Hosting.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            padding: "10px",
            gap: "0.5rem",
          }}
        >
          <TiHtml5 size={50} style={{ color: "white", marginRight: "2rem" }} />
          <FaCss3Alt
            size={50}
            style={{ color: "white", marginRight: "2rem" }}
          />
          <FaReact
            size={50}
            style={{
              color: "black",
              marginRight: "2rem",
              backgroundColor: "white",
              borderRadius: "1rem",
            }}
          />
          <FaJs
            size={50}
            style={{
              color: "white",
              marginRight: "2rem",
              borderRadius: "1rem",
            }}
          />
          <FaBootstrap
            size={50}
            style={{ color: "white", marginRight: "2rem" }}
          />

          <FaNode
            size={50}
            style={{
              color: "black",
              marginRight: "2rem",
              backgroundColor: "white",
              borderRadius: "1rem",
            }}
          />
          <FaNpm
            size={50}
            style={{
              color: "black",
              marginRight: "2rem",
              backgroundColor: "white",
              borderRadius: "1rem",
            }}
          />
          <FaDatabase
            size={50}
            style={{ color: "white", marginRight: "2rem" }}
          />
          <FaGithub size={50} style={{ color: "white", marginRight: "2rem" }} />
        </div>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img className="img" src={ImgValue.homeHero} alt="logo" />
          </div>
          <div className="img-stack bottom">
            <img className="img " src={ImgValue.progImg} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
