import "./App.css";

import AboutMe from "./components/AboutMe/aboutme";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import Hobies from "./components/Hobies/hobies";
import Home from "./components/Home/home";
import Projects from "./components/Projects/projects";
import Skills from "./components/Skills/skills";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <AboutMe />
        <Skills />
        <Projects />
        <Hobies />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
