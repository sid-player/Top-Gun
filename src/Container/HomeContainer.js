import React, { useState, useEffect } from 'react'
import Dropdown from '../Mycomponents/HomeComponents/DropDown'
import Nav from '../Mycomponents/HomeComponents/Nav'
import Header from '../Mycomponents/HomeComponents/Header'
import Postnav from '../Mycomponents/HomeComponents/Postnav'
import Section from '../Mycomponents/HomeComponents/Section'
import BottomSection from '../Mycomponents/HomeComponents/BottomSection'
import Footer from '../Mycomponents/HomeComponents/Footer'
import Navbar from '../Mycomponents/HomeComponents/Navbar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    };
    useEffect(() => {
        const hideMenu = () => {
          if (window.innerWidth > 768 && isOpen) {
            setIsOpen(false);
            console.log('i resized');
          }
        };
    
        window.addEventListener('resize', hideMenu);
    
        return () => {
          window.removeEventListener('resize', hideMenu);
        };
      });
    return (
        <>
            {/*<Navbar />*/}
            <Nav  toggle={toggle} />
            <Dropdown isOpen={isOpen} toggle={toggle} />
            <Header/>
            <Postnav />
            <Section />
            <BottomSection />
            <Footer />
        </>
    )
}

export default Home
