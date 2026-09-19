import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaBriefcase, FaCommentDots, FaLayerGroup } from 'react-icons/fa';
import { TbApi } from 'react-icons/tb';
import { Link } from 'react-scroll';
import hero3 from '../asets/hero3.jpeg';
import { useTheme } from './ThemeContext';
import SocialLinks from './SocialLinks';
import TechIcon from './TechIcon';
import { TECH, accentOf } from '../utilis/techStack';

const MERN = ['mongodb', 'express', 'react', 'node'];

const profileFacts = [
  { id: 1, icon: FaBriefcase, label: '2+ Years Experience' },
  { id: 2, icon: FaLayerGroup, label: 'Full-Stack Development' },
  { id: 3, icon: TbApi, label: 'REST API Development' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const pillList = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

function Home() {
  const { darkMode } = useTheme();
  const glass = darkMode ? 'bg-slate-900/80 border-white/10' : 'bg-white/90 border-black/10';
  const muted = darkMode ? 'text-slate-400' : 'text-slate-600';

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

          <motion.h1 variants={fadeUp} className="font-extrabold leading-tight">
            <span className="block text-4xl sm:text-5xl lg:text-6xl">
              Narendra{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Kadiveti
              </span>
            </span>
            <span className="block mt-2 text-2xl sm:text-3xl lg:text-4xl bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              MERN Stack Developer
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 text-xl sm:text-2xl font-semibold">
            Building Modern Full-Stack Web Experiences
          </motion.p>

          <motion.p
            variants={fadeUp}
            className={`mt-4 text-lg leading-relaxed max-w-xl mx-auto md:mx-0 ${muted}`}
          >
            MERN Stack Developer with 2+ years of experience building responsive, scalable and
            user-focused web applications using MongoDB, Express.js, React.js and Node.js.
          </motion.p>

          {/* MERN technology badges */}
          <motion.ul
            variants={pillList}
            aria-label="MERN stack"
            className="mt-7 flex flex-wrap items-center justify-center md:justify-start gap-2.5"
          >
            {MERN.map((id) => {
              const accent = accentOf(id);
              return (
                <motion.li
                  key={id}
                  variants={fadeUp}
                  whileHover={{ y: -3 }}
                  style={{ '--accent': accent }}
                  className={`inline-flex items-center gap-2 pl-3 pr-4 py-1.5 rounded-full border text-sm font-medium backdrop-blur-xl transition-[border-color,box-shadow] duration-300 hover:[border-color:var(--accent)] hover:shadow-[0_8px_24px_-10px_var(--accent)] ${
                    darkMode ? 'border-white/10 bg-white/5 text-slate-200' : 'border-black/10 bg-white text-slate-700 shadow-sm'
                  }`}
                >
                  <TechIcon id={id} size={15} />
                  {TECH[id].name}
                </motion.li>
              );
            })}
          </motion.ul>

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
          <div className="relative w-64 sm:w-80 mb-16">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-blue-500 to-purple-600 opacity-40 blur-2xl" />
            <div
              className={`relative rounded-[2rem] p-2 border ${
                darkMode ? 'border-white/10 bg-slate-900' : 'border-black/10 bg-white'
              }`}
            >
              <motion.div
                initial={{ clipPath: 'inset(0% 0% 100% 0% round 1.6rem)' }}
                animate={{ clipPath: 'inset(0% 0% 0% 0% round 1.6rem)' }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
              >
                <img
                  src={hero3}
                  alt="Narendra Kadiveti"
                  className="rounded-[1.6rem] w-full h-80 sm:h-96 object-cover"
                />
              </motion.div>
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

            {/* Full-stack profile card */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className={`absolute -bottom-14 -left-6 sm:-left-12 w-60 rounded-2xl border p-4 shadow-xl backdrop-blur-xl ${glass}`}
            >
              <p className="text-sm font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                MERN Stack Developer
              </p>

              <ul className="mt-3 space-y-2">
                {profileFacts.map(({ id, icon: Icon, label }) => (
                  <li key={id} className="flex items-center gap-2.5 text-xs">
                    <span className="w-6 h-6 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center">
                      <Icon size={12} />
                    </span>
                    <span className={muted}>{label}</span>
                  </li>
                ))}
              </ul>

              <ul
                className={`mt-3 pt-3 border-t flex items-start justify-between ${
                  darkMode ? 'border-white/10' : 'border-black/10'
                }`}
              >
                {MERN.map((id) => {
                  const accent = accentOf(id);
                  return (
                    <li key={id} className="flex flex-col items-center gap-1">
                      <span
                        className="w-7 h-7 rounded-full flex items-center justify-center"
                        style={{ background: `${accent}1f`, boxShadow: `0 0 12px ${accent}55` }}
                      >
                        <TechIcon id={id} size={13} />
                      </span>
                      <span className={`text-[10px] ${muted}`}>{TECH[id].short || TECH[id].name}</span>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
