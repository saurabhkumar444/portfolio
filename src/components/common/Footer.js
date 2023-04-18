import {
  FaFacebook,
  FaGithub,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import "./Footer.css";
import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
            <div>
              <p>Mumbai, India</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              9004303699
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              saurabhmaurya0409@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>ldjenodjnewl</h4>
          <p>
            this is mt ferou frufhwqeud frofh0wuhfdwe wfowufoqwed wfourwfpwedw
            orufib fawfjhrbofu fhrwfouwb frofh0wuhfdwe fwfhrbfouwe wfgr ofhubwf
            wfourwfp wedweffref orub
          </p>
          <div className="social">
            <NavLink to={"https://www.instagram.com/saurabh.maurya___/"}>
              <FaInstagram
                size={30}
                style={{ color: "white", marginRight: "2rem" }}
              />
            </NavLink>
            <NavLink to={"https://github.com/saurabhkumar444/"}>
              <FaGithub
                size={30}
                style={{ color: "white", marginRight: "2rem" }}
              />
            </NavLink>
            <NavLink to={"https://www.linkedin.com/in/saurabhkumar-maurya/"}>
              <FaLinkedin
                size={30}
                style={{ color: "white", marginRight: "2rem" }}
              />
            </NavLink>
            {/* <NavLink to={"https://twitter.com/Maurya_Saurabh_"}>
              <FaTwitter
                size={30}
                style={{ color: "white", marginRight: "2rem" }}
              />
            </NavLink> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
