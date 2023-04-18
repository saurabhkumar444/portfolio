import React from "react";
import NavBar from "./common/NavBar";
import Footer from "./common/Footer";
import Hero2 from "./common/Hero2";
import AboutContent from "./common/AboutContent";

const About = () => {
  return (
    <div>
      <NavBar />
      <Hero2 heading={"About"} text={"I'm a Software Developer"} />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
