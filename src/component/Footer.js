import React from 'react';
import { Link } from 'react-scroll';
import { useTheme } from './ThemeContext';
import SocialLinks from './SocialLinks';

const links = [
  { id: 1, name: 'Home', to: 'home' },
  { id: 2, name: 'About', to: 'about' },
  { id: 3, name: 'Projects', to: 'projects' },
  { id: 4, name: 'Skills', to: 'skills' },
  { id: 5, name: 'Experience', to: 'experience' },
  { id: 6, name: 'Contact', to: 'contact' },
];

function Footer() {
  const { darkMode } = useTheme();

  return (
    <footer className={`w-full border-t ${darkMode ? 'border-white/10 bg-slate-950 text-white' : 'border-black/10 bg-white text-slate-900'}`}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-3">
          <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-white">
            N
          </span>
          <div>
            <p className="font-bold">Narendra</p>
            <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>React Developer</p>
          </div>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-6">
          {links.map(({ id, name, to }) => (
            <li key={id}>
              <Link
                to={to}
                smooth
                duration={500}
                offset={-80}
                className={`cursor-pointer text-sm font-medium transition-colors duration-200 ${
                  darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        <SocialLinks size={15} exclude={['Code']} />
      </div>

      <div className={`border-t ${darkMode ? 'border-white/10' : 'border-black/10'}`}>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <p className={darkMode ? 'text-slate-500' : 'text-slate-500'}>Keep Learning. Keep Building. 🚀</p>
          <p className={darkMode ? 'text-slate-500' : 'text-slate-500'}>
            © 2026 Narendra Kadiveti. All rights reserved.
          </p>
          <p className={darkMode ? 'text-slate-500' : 'text-slate-500'}>Built with ❤️ using React</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
