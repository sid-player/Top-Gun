import React from 'react';

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={`w-screen bg-gray-200 p-4 absolute
        ${isOpen
          ? 'grid grid-rows-4 text-center items-center top-16'
          : 'hidden'
        }`
      }
      onClick={toggle}
    >
      <button className='p-4 hover:bg-gray-100 cursor-pointer font-semibold'>
        Home
      </button>
      <button className='p-4 hover:bg-gray-100 cursor-pointer font-semibold'>
        Menu
      </button>
      <button className='p-4 hover:bg-gray-100 cursor-pointer font-semibold'>
        About
      </button>
      <button className='p-4 hover:bg-gray-100 cursor-pointer font-semibold'>
        Contact
      </button>
    </div>
  );
};

export default Dropdown;