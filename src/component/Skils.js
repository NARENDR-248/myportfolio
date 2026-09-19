import React from 'react';
import { motion } from 'framer-motion';
import html from '../asets/html.jpg';
import css from '../asets/css.png';
import js from '../asets/es6.png';
import react from '../asets/react.png';
import redux from '../asets/redux.jpg';
import node from '../asets/node js.png';
import express from '../asets/express.jpg';
import tailwindcss from '../asets/tailwindcss.png';
import { useTheme } from './ThemeContext';

const categories = [
  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      { id: 1, img: html, name: 'HTML5' },
      { id: 2, img: css, name: 'CSS3' },
      { id: 3, img: js, name: 'JavaScript' },
      { id: 4, img: react, name: 'React' },
      { id: 5, img: redux, name: 'Redux' },
      { id: 8, img: tailwindcss, name: 'Tailwind CSS' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    skills: [
      { id: 6, img: node, name: 'Node.js' },
      { id: 7, img: express, name: 'Express.js' },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

function SkillGrid({ skills, darkMode }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.08 }}
      className="grid grid-cols-2 sm:grid-cols-4 gap-5"
    >
      {skills.map(({ id, img, name }) => (
        <motion.div
          key={id}
          variants={fadeUp}
          className={`group flex flex-col items-center justify-center gap-3 py-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
            darkMode
              ? 'border-white/10 bg-white/5 hover:border-blue-400/40 hover:bg-white/10'
              : 'border-black/10 bg-white hover:border-blue-400/40 shadow-sm'
          }`}
        >
          <span className="w-14 h-14 rounded-xl bg-white border border-black/10 flex items-center justify-center p-2">
            <img
              src={img}
              alt={name}
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </span>
          <p className="font-medium text-sm">{name}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}

function Skils() {
  const { darkMode } = useTheme();

  return (
    <div className={`w-full py-16 ${darkMode ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-10">
          <div>
            <p className="text-sm font-semibold tracking-widest text-blue-400 mb-3">MY SKILLS</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold">Technologies I Work With</h2>
          </div>
          <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            Always learning. Always building.
          </p>
        </div>

        <div className="space-y-10">
          {categories.map(({ id, label, skills }) => (
            <div key={id}>
              <p className={`text-xs font-semibold tracking-widest uppercase mb-4 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                {label}
              </p>
              <SkillGrid skills={skills} darkMode={darkMode} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skils;
