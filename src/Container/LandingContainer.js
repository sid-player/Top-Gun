import React from 'react'

import Header from "../Mycomponents/LandingComponents/Header";
import Footer from "../Mycomponents/LandingComponents/Footer";
import Hero from "../Mycomponents/LandingComponents/Hero";
import Title from "../Mycomponents/LandingComponents/Title";
import Pricing from "../Mycomponents/LandingComponents/Pricing";

function LandingContainer() {
    return (
        <>
            <Header />
            <Hero />
            <Title />
            <Pricing />
            <Footer />
        </>
    )
}

export default LandingContainer
