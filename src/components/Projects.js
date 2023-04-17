import React from "react";
import NavBar from "./common/NavBar";
import Footer from "./common/Footer";
import Hero from "./common/Hero";
import Hero2 from "./common/Hero2";
import ProjectCard from "./common/ProjectCard";
import Work from "./common/Work";

const Projects = () => {
  return (
    <div>
      <NavBar />
      {/* <Hero /> */}
      <Hero2 heading={"Project"} text={"Some of my recent works"} />
      <Work />
      <Footer />
    </div>
  );
};

export default Projects;
