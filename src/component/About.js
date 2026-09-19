import React from 'react';
import { motion } from 'framer-motion';
import { FaLayerGroup, FaCode, FaServer, FaRocket, FaDownload } from 'react-icons/fa';
import { useTheme } from './ThemeContext';
import { RESUME_FILENAME, RESUME_URL } from '../utilis/resume';

const features = [
  {
    id: 1,
    icon: FaLayerGroup,
    color: 'from-blue-500 to-cyan-500',
    title: 'Full-Stack Development',
    desc: 'Building modern applications across frontend and backend.',
  },
  {
    id: 2,
    icon: FaCode,
    color: 'from-purple-500 to-blue-500',
    title: 'Clean & Scalable Code',
    desc: 'Writing maintainable and reusable application code.',
  },
  {
    id: 3,
    icon: FaServer,
    color: 'from-emerald-500 to-teal-500',
    title: 'API & Backend Development',
    desc: 'Building and integrating RESTful APIs.',
  },
  {
    id: 4,
    icon: FaRocket,
    color: 'from-pink-500 to-purple-500',
    title: 'Continuous Learner',
    desc: 'Continuously exploring modern web technologies.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const cardList = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

function About() {
  const { darkMode } = useTheme();

  return (
    <div className={`w-full py-16 ${darkMode ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <p className="text-sm font-semibold tracking-widest text-blue-400 mb-3">ABOUT ME</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
            Turning Ideas
            <br />
            Into Full-Stack Products
          </h2>
          <p className={`text-lg leading-relaxed mb-4 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            MERN Stack Developer with 2+ years of professional software development experience,
            specializing in React.js and JavaScript, with hands-on knowledge of Node.js, Express.js,
            MongoDB, REST APIs, Redux Toolkit, and modern frontend development.
          </p>
          <p className={`text-lg leading-relaxed mb-8 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            I have a background in Computer Science and a knack for picking up new tools and
            technologies across the stack.
          </p>
          <a
            href={RESUME_URL}
            download={RESUME_FILENAME}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg shadow-blue-500/30 hover:scale-105 transition-transform duration-300"
          >
            Download Resume <FaDownload size={14} />
          </a>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardList}
          className="grid sm:grid-cols-2 gap-5"
        >
          {features.map(({ id, icon: Icon, color, title, desc }) => (
            <motion.div
              key={id}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className={`p-5 rounded-2xl border backdrop-blur-xl transition-colors duration-300 ${
                darkMode
                  ? 'border-white/10 bg-white/5 hover:border-blue-400/40'
                  : 'border-black/10 bg-white hover:border-blue-400/40 shadow-sm'
              }`}
            >
              <div
                className={`w-11 h-11 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white mb-4 shadow-lg`}
              >
                <Icon size={18} />
              </div>
              <h3 className="font-semibold mb-1">{title}</h3>
              <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default About;
