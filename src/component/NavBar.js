import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

function NavBar() {
  const [nav, setNav] = useState(false);

  // List of navigation links
  const Links = [
    {
      id: 1,
      name: "home"
    },
    {
      id: 2,
      name: "about"
    },
    {
      id: 3,
      name: "portfolio"
    },
    {
      id: 4,
      name: "skils"
    },
    {
      id: 5,
      name: "contact"
    }
  ];

  return (
    // Navbar container with fixed positioning
    <div className='flex justify-between items-center h-20 w-full px-4 text-white bg-black fixed top-0 z-10'>
      
      {/* Logo or brand name */}
      <div>
        <h1 className='text-2xl font-bold ml-3'>Narendra</h1>
      </div>

      {/* Desktop Menu */}
      <ul className='hidden md:flex'>
        {Links.map(({ name, id }) => (
          <li key={id} className='px-10 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
            <Link to={name} smooth={true} duration={500} className="cursor-pointer">
              {name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
          {Links.map(({ name, id }) => (
            <li key={id} className='px-10 py-6 text-3xl cursor-pointer capitalize hover:scale-105 duration-200'>
              <Link
                to={name}
                smooth={true}
                duration={500}
                onClick={() => setNav(false)} // Close the mobile menu when a link is clicked
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NavBar;
