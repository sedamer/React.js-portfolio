import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

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
    <BrowserRouter>
      {/* Header bileşeni her zaman görünür olmalı, bu yüzden burada olmalı */}
      <Header />
      <Routes>
        {/* Her bir Route bileşeni bağımsız olmalı ve kapatma etiketiyle sonlandırılmalı */}
        <Route path="/home" element={<Home />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/hobies" element={<Hobies />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
