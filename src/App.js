import React from "react";
import About from "./component/About";
import Contact from "./component/Contact";
import Home from "./component/Home";
import NavBar from "./component/NavBar";
import Portfolio from "./component/Portfolio";
import Skils from "./component/Skils";
import SocialLinks from "./component/SocialLinks";
import { Element } from 'react-scroll'; // Import Element from react-scroll

export default function App() {
  return (
    <div>
      {/* Navbar at the top */}
      <NavBar />

      {/* Sections wrapped with Element for smooth scroll */}
      <Element name="home" className="section">
        <Home />
      </Element>

      <SocialLinks />

      <Element name="about" className="section">
        <About />
      </Element>

      <Element name="portfolio" className="section">
        <Portfolio />
      </Element>

      <Element name="skils" className="section">
        <Skils />
      </Element>

      <Element name="contact" className="section">
        <Contact />
      </Element>
    </div>
  );
}
