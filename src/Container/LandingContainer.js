import React from "react";

import Header from "../Mycomponents/LandingComponents/Header";
import Hero from "../Mycomponents/LandingComponents/Hero";
import Team from "../Mycomponents/LandingComponents/Team";
import Portfolio from "../Mycomponents/LandingComponents/Portfolio";
import Fade from "react-reveal/Fade";
import Signup from "../Mycomponents/LandingComponents/Signup";

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
        <Signup />
      </div>
    </>
  );
}

export default LandingContainer;
