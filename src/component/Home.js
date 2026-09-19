import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCommentDots } from 'react-icons/fa';
import { Link } from 'react-scroll';
import hero3 from '../asets/hero3.jpeg';
import { useTheme } from './ThemeContext';
import SocialLinks from './SocialLinks';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

function Home() {
  const { darkMode } = useTheme();

  return (
    <div
      className={`relative w-full overflow-hidden pt-28 pb-16 ${
        darkMode ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* Decorative background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-purple-600/20 blur-3xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-8 grid md:grid-cols-2 gap-16 items-center">
        {/* Left content */}
        <motion.div variants={container} initial="hidden" animate="show" className="text-center md:text-left">
          <motion.span
            variants={fadeUp}
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6 border ${
              darkMode ? 'border-white/10 bg-white/5 text-slate-300' : 'border-black/10 bg-black/5 text-slate-600'
            }`}
          >
            👋 Hello, I'm
          </motion.span>

          <motion.h1 variants={fadeUp} className="text-4xl sm:text-6xl font-extrabold leading-tight">
            Narendra{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Kadiveti
            </span>
            <br />
            React <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Developer</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className={`mt-6 text-lg leading-relaxed max-w-xl mx-auto md:mx-0 ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            Passionate about creating modern, responsive and user-friendly web applications using
            React, JavaScript and modern frontend technologies. I love turning ideas into real
            products and continuously learning new technologies.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-4">
            <Link
              to="projects"
              smooth
              duration={500}
              offset={-80}
              className="group cursor-pointer flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg shadow-blue-500/30 hover:scale-105 transition-transform duration-300"
            >
              View My Work
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={14} />
            </Link>
            <Link
              to="contact"
              smooth
              duration={500}
              offset={-80}
              className={`cursor-pointer flex items-center gap-2 px-7 py-3 rounded-full border font-semibold transition-colors duration-300 ${
                darkMode
                  ? 'border-white/20 text-white hover:bg-white/10'
                  : 'border-black/20 text-slate-900 hover:bg-black/5'
              }`}
            >
              <FaCommentDots size={14} /> Let's Talk
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 flex justify-center md:justify-start">
            <SocialLinks size={16} />
          </motion.div>
        </motion.div>

        {/* Right content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="relative w-64 sm:w-80">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-blue-500 to-purple-600 opacity-40 blur-2xl" />
            <div
              className={`relative rounded-[2rem] p-2 border ${
                darkMode ? 'border-white/10 bg-slate-900' : 'border-black/10 bg-white'
              }`}
            >
              <img
                src={hero3}
                alt="Narendra Kadiveti"
                className="rounded-[1.6rem] w-full h-80 sm:h-96 object-cover"
              />
            </div>

            {/* Open to opportunities badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className={`absolute -top-5 -left-6 flex items-center gap-2 px-4 py-2 rounded-full border shadow-xl text-sm font-medium ${
                darkMode ? 'bg-slate-900/90 border-white/10 text-white' : 'bg-white/90 border-black/10 text-slate-900'
              }`}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              Open to Opportunities
            </motion.div>

            {/* Floating stats */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className={`absolute -right-8 sm:-right-14 top-10 flex flex-col gap-3 px-5 py-4 rounded-2xl border shadow-xl backdrop-blur-xl ${
                darkMode ? 'bg-slate-900/80 border-white/10' : 'bg-white/90 border-black/10'
              }`}
            >
              <div className="text-center">
                <p className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">2+</p>
                <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">10+</p>
                <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Projects</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">React</p>
                <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Primary Focus</p>
              </div>
            </motion.div>

            <p
              className={`hidden sm:block absolute -bottom-10 -right-4 font-signture text-2xl border-b-2 border-blue-400/60 pb-1 ${
                darkMode ? 'text-slate-300' : 'text-slate-500'
              }`}
            >
              Keep Learning, Keep Building 🚀
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
