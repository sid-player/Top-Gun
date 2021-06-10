import React from 'react'
import Nav from '../Mycomponents/HomeComponents/Nav'
import Header from '../Mycomponents/HomeComponents/Header'
import Postnav from '../Mycomponents/HomeComponents/Postnav'
import Section from '../Mycomponents/HomeComponents/Section'
import BottomSection from '../Mycomponents/HomeComponents/BottomSection'
import Footer from '../Mycomponents/HomeComponents/Footer'
import data from '../Mycomponents/Bookmarks.js'
import Format from "../Mycomponents/Format";
import Search from '../Mycomponents/Searchbar.js'

const Home = () => {

    return (
        <>
            <Nav/>
            <Search/>
            <Format object={data} />
            <Header/>
            <Postnav />
            <Section />
            <BottomSection />
            <Footer />
        </>
    )
}

export default Home
