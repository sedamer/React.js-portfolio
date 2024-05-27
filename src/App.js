import AboutMe from "./components/AboutMe/aboutme";
import { BrowserRouter } from "react-router-dom";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import Hobies from "./components/Hobies/hobies";
import Home from "./components/Home/home";
import Projects from "./components/Projects/projects";
import React from "react";
import Skills from "./components/Skills/skills";
function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <Home />
        <AboutMe />
        <Skills />
        <Projects />
        <Hobies />
        <Contact />
        <Footer />
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
