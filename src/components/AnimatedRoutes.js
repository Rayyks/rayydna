import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import SharedLayout from "./Navbar/SharedLayout";
import Home from "./Home/Home";
import About from "./About/About";
import Projects from "./Project/Projects";
import Contact from "./Contact";

import { AnimatePresence } from "framer-motion";

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
