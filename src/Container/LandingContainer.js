import React from "react";

import Header from "../Mycomponents/LandingComponents/Header";
// import Footer from "../Mycomponents/LandingComponents/Footer";
import Hero from "../Mycomponents/LandingComponents/Hero";
// import Title from "../Mycomponents/LandingComponents/Title";
import Pricing from "../Mycomponents/LandingComponents/Pricing";
import Team from "../Mycomponents/LandingComponents/Team";
import Portfolio from "../Mycomponents/LandingComponents/Portfolio";
import Fade from "react-reveal/Fade";

function LandingContainer() {
  return (
    <>
      <div className="overflow-hidden">
        <Header />
        <Hero />
        <Fade>
          <Team />
          <Portfolio />
        </Fade>
        <Pricing />
      </div>
    </>
  );
}

export default LandingContainer;
