import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AboutMe from "./components/AboutMe/aboutme";
import Contact from "./components/Contact/contact";
import Header from "./components/Header/header";
import Hobies from "./components/Hobies/hobies";
import Home from "./components/Home/home";
import Projects from "./components/Projects/projects";
import React from "react";
import Skills from "./components/Skills/skills";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/hobies" element={<Hobies />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
