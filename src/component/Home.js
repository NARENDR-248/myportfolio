import React, { useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import hero3 from '../asets/hero3.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useTheme } from './ThemeContext'; // Import useTheme from ThemeContext

function Home() {
  const { darkMode } = useTheme(); // Access darkMode from ThemeContext

  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      once: true, // Only animate once
    });
  }, []);

  return (
    <div
      className={`h-screen w-full ${
        darkMode
          ? 'bg-gradient-to-b from-gray-900 to-black text-white'
          : 'bg-gradient-to-b from-gray-100 to-white text-black'
      }`}
    >
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center justify-center h-full px-6 gap-10">
        {/* Left Content */}
        <div
          className="flex flex-col justify-center h-full text-center md:text-left"
          data-aos="fade-right"
        >
          <h1
            className="text-4xl sm:text-6xl font-bold leading-tight"
            data-aos="fade-up"
          >
            I'm a React Developer
          </h1>
          <p
            className={`mt-4 text-lg leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            Passionate about creating dynamic and responsive user interfaces
            using tools like React, Redux, and Tailwind CSS. I enjoy building
            seamless web experiences and efficient single-page applications
            (SPAs) with modern frontend technologies.
          </p>
          <button
            className="group flex items-center justify-center mt-6 px-8 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white text-lg font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out"
            onClick={() => (window.location.href = '#portfolio')} // Smooth scroll to portfolio
          >
            <span className="relative">
              Portfolio
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-white rounded-full group-hover:w-full transition-all duration-300"></span>
            </span>
            <FaArrowRight
              className="ml-3 group-hover:translate-x-1 transition-transform duration-300"
              size={24}
            />
          </button>
        </div>

        {/* Right Content (Image) */}
        <div className="w-3/4 md:w-1/2 mt-8 md:mt-0" data-aos="fade-left">
          <img
            src={hero3}
            alt="Developer"
            className="rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
