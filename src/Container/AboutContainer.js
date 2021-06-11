import React from 'react'

import Header from "../Mycomponents/LandingComponents/Header";
import About from "../Mycomponents/LandingComponents/About";
import AboutNav from '../Mycomponents/AboutComponents/AboutNav';
import Footer from '../Mycomponents/HomeComponents/Footer';
import Content from '../Mycomponents/AboutComponents/Content';

function AboutConatiner() {
    return (
        <>
            <AboutNav />
            <Content />
            <Footer />
        </>
    )
}

export default AboutConatiner
