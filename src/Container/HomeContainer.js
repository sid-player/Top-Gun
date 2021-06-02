import React from 'react'

import Navbar from '../Mycomponents/HomeComponents/Navbar'
import Header from '../Mycomponents/HomeComponents/Header'
import Postnav from '../Mycomponents/HomeComponents/Postnav'
import Section from '../Mycomponents/HomeComponents/Section'
import BottomSection from '../Mycomponents/HomeComponents/BottomSection'
import Footer from '../Mycomponents/HomeComponents/Footer'

const Home = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Postnav />
            <Section />
            <BottomSection />
            <Footer />
        </>
    )
}

export default Home
