import React from "react";
import NavBar from "./common/NavBar";
import Footer from "./common/Footer";
import Hero2 from "./common/Hero2";
import Form from "./common/Form";

const Contact = () => {
  return (
    <div>
      <NavBar />
      <Hero2 heading={"Contact"} text={"Lets have Chat"} />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
