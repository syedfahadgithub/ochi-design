import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Toggle for mobile menu

  const navItems = ["Services", "Our Work", "About Us", "Insights", "Contact"];

  return (
    <div className='fixed z-[999] w-full px-6 py-4 flex items-center justify-between shadow-md'>
      {/* Logo */}
      <div className='text-4xl md:text-6xl lg:text-8xl font-bold text-zinc-800'>
        <h1>ochi</h1>
      </div>

      {/* Desktop Menu */}
      <div className='hidden md:flex gap-6 lg:gap-10 text-lg lg:text-1xl  text-zinc-800'>
        {navItems.map((item, index) => (
          <a
            key={index}
            className={`capitalize ${index === 4 ? 'ml-10 lg:ml-[100px]' : ''}`}
            href="#"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Mobile Menu Toggle */}
      <div className='md:hidden text-zinc-800'>
        <button onClick={() => setIsOpen(!isOpen)} className='text-3xl'>
          ☰
        </button>
      </div>

      {/* Menu */}
      {isOpen && (
        <div className='text-zinc-800 absolute top-full left-0 w-full  shadow-md flex flex-col items-start px-6 py-4 md:hidden'>
          {navItems.map((item, index) => (
            <a
              key={index}
              className='py-2 text-lg font-medium capitalize w-full border-b'
              href="#"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
