import React, { useState, useEffect } from 'react';
import DropDown from './DropDown';

const Nav = () => {

  const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    };

    useEffect(() => {
      const hideMenu = () => {
        if (window.innerWidth > 768 && isOpen) {
          setIsOpen(false);
        }
      };
      window.addEventListener('resize', hideMenu);
      return () => {
        window.removeEventListener('resize', hideMenu);
      };
    });
  
  return (
    <div className="fixed top-0">
    <nav
      className='flex fixed w-screen top-0 justify-between items-center h-16 bg-white text-black shadow-md'
      role='navigation'
    >
      <a href='/' className='pl-8 text-3xl font-bold mx-auto'>
        TOP<span className="text-indigo-500">GUN</span>
      </a>
      <div className='px-4 cursor-pointer md:hidden' onClick={toggle}>
        <svg
          className='w-8 h-8'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </div>
      <div className='pr-24 md:block hidden space-x-8 mx-auto text-xl font-semibold'>
        <a href='/' className='p-4'>
          Home
        </a>
        <a href='/' className='p-4'>
          Menu
        </a>
        <a href='/' className='p-4'>
          About
        </a>
        <a href='/' className='p-4'>
          Contact
        </a>
      </div>
    </nav>
    <DropDown isOpen={isOpen} toggle={toggle}/>
    </div>
  );
};

export default Nav;