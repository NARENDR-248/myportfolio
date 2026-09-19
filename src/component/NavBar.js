import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaSun, FaMoon, FaDownload } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { useTheme } from './ThemeContext';

const links = [
  { id: 1, name: 'Home', to: 'home' },
  { id: 2, name: 'About', to: 'about' },
  { id: 3, name: 'Projects', to: 'projects' },
  { id: 4, name: 'Skills', to: 'skills' },
  { id: 5, name: 'Experience', to: 'experience' },
  { id: 6, name: 'Contact', to: 'contact' },
];

function NavBar() {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full border-b transition-colors duration-300 ${
        darkMode
          ? `border-white/10 ${scrolled ? 'bg-slate-950/80' : 'bg-slate-950/40'} backdrop-blur-xl`
          : `border-black/5 ${scrolled ? 'bg-white/90' : 'bg-white/60'} backdrop-blur-xl`
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between h-20 px-4 sm:px-8">
        <Link to="home" smooth duration={500} className="flex items-center gap-3 cursor-pointer">
          <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/30">
            N
          </span>
          <span className="leading-tight text-left">
            <span className={`block font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Narendra</span>
            <span className={`block text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>React Developer</span>
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ id, name, to }) => (
            <li key={id}>
              <Link
                to={to}
                smooth
                duration={500}
                offset={-80}
                spy
                activeClass={darkMode ? '!text-white' : '!text-slate-900'}
                className={`relative cursor-pointer text-sm font-medium transition-colors duration-200 ${
                  darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle theme"
            className={`w-10 h-10 rounded-full flex items-center justify-center border transition-colors duration-200 ${
              darkMode
                ? 'border-white/10 text-amber-300 hover:bg-white/5'
                : 'border-black/10 text-slate-600 hover:bg-black/5'
            }`}
          >
            {darkMode ? <FaSun size={16} /> : <FaMoon size={16} />}
          </button>

          <button
            type="button"
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold shadow-lg shadow-blue-500/30 hover:scale-105 transition-transform duration-200"
          >
            Download CV <FaDownload size={12} />
          </button>

          <button
            onClick={() => setNav(!nav)}
            className={`md:hidden ${darkMode ? 'text-white' : 'text-slate-900'}`}
            aria-label="Toggle menu"
          >
            {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {nav && (
        <ul
          className={`md:hidden flex flex-col items-center gap-6 py-8 border-t ${
            darkMode ? 'bg-slate-950/95 border-white/10 text-slate-300' : 'bg-white/95 border-black/5 text-slate-600'
          }`}
        >
          {links.map(({ id, name, to }) => (
            <li key={id}>
              <Link
                to={to}
                smooth
                duration={500}
                offset={-80}
                onClick={() => setNav(false)}
                className="text-lg font-medium cursor-pointer"
              >
                {name}
              </Link>
            </li>
          ))}
          <button
            type="button"
            className="mt-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold"
          >
            Download CV
          </button>
        </ul>
      )}
    </nav>
  );
}

export default NavBar;
