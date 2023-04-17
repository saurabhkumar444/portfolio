import React from "react";
import { Route, Routes } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { appRouter } from "./components/Navigation";

const App = () => {
  return (
    // <RouterProvider router={appRouter} />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<Projects />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
export default App;
