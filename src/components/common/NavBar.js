import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import ImgValue from "./Images";

const NavBar = () => {
  const [burgerClick, setBurgerClick] = useState(false);
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 100) setColor(true);
    else setColor(false);
  };
  window.addEventListener("scroll", changeColor);
  const clickHandler = () => setBurgerClick(!burgerClick);
  return (
    <div className={color ? "nav-header nav-header-bg" : "nav-header"}>
      <Link to={"/"}>
        <div className="nav-logo">
          <img width={100} src={ImgValue.mainLogo} alt="Logo" />
          <h1>Saurabh Maurya</h1>
        </div>
      </Link>
      <ul className={burgerClick ? "nav-manu active" : "nav-manu"}>
        <li className="nav-manu-item">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="nav-manu-item">
          <Link to={"/project"}>Project</Link>
        </li>
        <li className="nav-manu-item">
          <Link to={"/about"}>About</Link>
        </li>
        <li className="nav-manu-item">
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={clickHandler}>
        {burgerClick ? (
          <FaTimes size={20} style={{ color: "white" }} />
        ) : (
          <FaBars size={20} style={{ color: "white" }} />
        )}
      </div>
    </div>
  );
};

export default NavBar;
