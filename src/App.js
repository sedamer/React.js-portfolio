import AboutMe from "./components/AboutMe/aboutme";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import Hobies from "./components/Hobies/hobies";
import Home from "./components/Home/home";
import Projects from "./components/Projects/projects";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Skills from "./components/Skills/skills";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Header />
        <div id="home">
          <Home />
        </div>
        <div id="aboutMe">
          <AboutMe />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="hobies">
          <Hobies />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <Footer />
      </React.Fragment>
    </Router>
  );
}

export default App;
