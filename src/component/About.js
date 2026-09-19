import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaLightbulb, FaRocket, FaHeart, FaDownload } from 'react-icons/fa';
import { useTheme } from './ThemeContext';

const features = [
  {
    id: 1,
    icon: FaUser,
    color: 'bg-blue-500',
    title: 'Clean & Scalable Code',
    desc: 'I write clean, maintainable and scalable code.',
  },
  {
    id: 2,
    icon: FaLightbulb,
    color: 'bg-amber-400',
    title: 'Problem Solver',
    desc: 'I enjoy solving real world problems with technology.',
  },
  {
    id: 3,
    icon: FaRocket,
    color: 'bg-purple-500',
    title: 'Continuous Learner',
    desc: 'Always exploring new tools and technologies.',
  },
  {
    id: 4,
    icon: FaHeart,
    color: 'bg-pink-500',
    title: 'Passion for UI/UX',
    desc: 'I love creating beautiful and user-friendly interfaces.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
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
            Into Real Products
          </h2>
          <p className={`text-lg leading-relaxed mb-8 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Hi, I'm Narendra! I'm a React developer who enjoys building clean, responsive and
            user-friendly web applications. I have a background in Computer Science and a knack
            for learning new technologies including React, JavaScript, CSS, and modern frontend
            tools. My goal is to create meaningful digital experiences and grow as a
            full-stack developer.
          </p>
          <button
            type="button"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg shadow-blue-500/30 hover:scale-105 transition-transform duration-300"
          >
            Download Resume <FaDownload size={14} />
          </button>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.12 }}
          className="grid sm:grid-cols-2 gap-5"
        >
          {features.map(({ id, icon: Icon, color, title, desc }) => (
            <motion.div
              key={id}
              variants={fadeUp}
              className={`p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                darkMode
                  ? 'border-white/10 bg-white/5 hover:border-blue-400/40'
                  : 'border-black/10 bg-white hover:border-blue-400/40 shadow-sm'
              }`}
            >
              <div className={`w-11 h-11 rounded-xl ${color} flex items-center justify-center text-white mb-4`}>
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
