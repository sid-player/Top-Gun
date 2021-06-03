import React from 'react';

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={`w-screen bg-gray-200 p-4
        ${isOpen
          ? 'grid grid-rows-4 text-center items-center'
          : 'hidden'
        }`
      }
      onClick={toggle}
    >
      <a href='/' className='p-4 hover:bg-gray-100 cursor-pointer font-semibold'>
        Home
      </a>
      <a href='/' className='p-4 hover:bg-gray-100 cursor-pointer font-semibold'>
        Menu
      </a>
      <a href='/' className='p-4 hover:bg-gray-100 cursor-pointer font-semibold'>
        About
      </a>
      <a href='/' className='p-4 hover:bg-gray-100 cursor-pointer font-semibold'>
        Contact
      </a>
    </div>
  );
};

export default Dropdown;