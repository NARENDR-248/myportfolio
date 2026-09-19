import React from "react";
import { MotionConfig } from "framer-motion";
import About from "./component/About";
import Contact from "./component/Contact";
import CtaBar from "./component/CtaBar";
import CustomCursor from "./component/CustomCursor";
import Experience from "./component/Experience";
import Footer from "./component/Footer";
import Home from "./component/Home";
import NavBar from "./component/NavBar";
import Portfolio from "./component/Portfolio";
import Skils from "./component/Skils";
import Stats from "./component/Stats";
import { Element } from 'react-scroll';
import { ThemeProvider, useTheme } from "./component/ThemeContext";

function AppContent() {
  const { darkMode } = useTheme();

  return (
    <div className={darkMode ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}>
      <CustomCursor />
      <NavBar />

      <Element name="home">
        <Home />
      </Element>

      <Element name="about">
        <About />
      </Element>

      <Stats />

      <Element name="skills">
        <Skils />
      </Element>

      <Element name="projects">
        <Portfolio />
      </Element>

      <Element name="experience">
        <Experience />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>

      <CtaBar />

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <AppContent />
      </MotionConfig>
    </ThemeProvider>
  );
}
