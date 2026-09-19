import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaFileAlt, FaCommentDots } from 'react-icons/fa';
import { useTheme } from './ThemeContext';

function CtaBar() {
  const { darkMode } = useTheme();

  return (
    <div className={`w-full px-4 sm:px-8 pb-16 ${darkMode ? 'bg-slate-950' : 'bg-slate-50'}`}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`max-w-screen-xl mx-auto rounded-2xl border p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 bg-gradient-to-r ${
          darkMode ? 'from-blue-500/10 via-purple-500/10 to-transparent border-white/10' : 'from-blue-50 via-purple-50 to-white border-black/10'
        }`}
      >
        <div className="text-center sm:text-left">
          <h3 className="text-xl sm:text-2xl font-bold mb-1">Interested in my profile?</h3>
          <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Let's connect and discuss opportunities.
          </p>
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <button
            type="button"
            className={`flex items-center gap-2 px-6 py-3 rounded-full border font-semibold transition-colors duration-300 ${
              darkMode ? 'border-white/20 text-white hover:bg-white/10' : 'border-black/20 text-slate-900 hover:bg-black/5'
            }`}
          >
            <FaFileAlt size={13} /> View Resume
          </button>
          <Link
            to="contact"
            smooth
            duration={500}
            offset={-80}
            className="cursor-pointer flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg shadow-blue-500/30 hover:scale-105 transition-transform duration-300"
          >
            <FaCommentDots size={13} /> Let's Talk
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default CtaBar;
