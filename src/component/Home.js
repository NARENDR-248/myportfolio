import React, { useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import hero3 from '../asets/hero3.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

function Home() {
  
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration
      once: true,      // Only animate once when scrolling down
    });
  }, []);

  return (
    <div className='h-screen w-full bg-gradient-to-b from-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto text-white mt-5 flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        
        {/* Left side content */}
        <div 
          className='flex flex-col h-full justify-center mt-20' 
          data-aos="fade-right"  // AOS Animation
        >
          <h1 
            className='text-4xl sm:text-7xl font-bold text-white' 
            data-aos="fade-up" // AOS fade-up animation
          >
            I am a React Developer
          </h1>
          <p className='text-gray-300 py-4'>
          I have a passion for frontend development and enjoy working with tools like Redux, React Router, Tailwind CSS, and Material-UI to build seamless and modern web interfaces. My expertise extends to state management, component-based architecture, and creating highly efficient single-page applications (SPAs).
          </p>
          <div>
            <button className='group text-white text-xl capitalize w-fit px-6 py-4 mt-6 flex items-center cursor-pointer bg-gradient-to-r from-blue-500 to-slate-950 rounded-md'>
              Portfolio
              <span className='group-hover:rotate-90 scale-105 duration-200'><FaArrowRight size={25} /></span>
            </button>
          </div>
        </div>
        
        {/* Right side image */}
        <div data-aos="fade-left"  // AOS Animation for the image
        >
          <img 
            src={hero3} 
            alt='This is my image' 
            className='rounded-3xl mt-5 mx-auto w-4/12 md:w-full'
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
