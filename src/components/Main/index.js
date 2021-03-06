import React from "react";
import About from "../About";
import Hero from "../HeroSection";
import Mission from "../OurMissionSection";
import Contact from "../Contact";
import OurWork from "../OurWork";
import Testimonials from "../Testimonials";
import DownloadApp from '../DownloadApp/DownloadApp'
// import Preloader from '../Preloader'
import "./main.css";

const Main = () => {
  return (
    <div id="main" className="home-page">
      <Hero />
      <About />
      <Mission />
      <OurWork />
      <Testimonials />
      <DownloadApp />
      <Contact />
      {/* <Preloader/> */}
    </div>
  );
};

export default Main;
