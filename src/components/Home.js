import React from "react";
import NavBar from "./common/NavBar";
import Hero from "./common/Hero";
import Footer from "./common/Footer";
import Work from "./common/Work";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero isHomeScreen={true} />
      <Work />
      <Footer />
    </div>
  );
};

export default Home;
