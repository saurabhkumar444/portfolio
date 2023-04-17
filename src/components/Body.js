import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./common/NavBar";
import Footer from "./common/Footer";

function Body() {
  return (
    <div style={{ display: "flex" }}>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Body;
