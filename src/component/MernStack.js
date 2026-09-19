import React from 'react';
import { motion } from 'framer-motion';
import TechIcon from './TechIcon';
import { TECH, accentOf } from '../utilis/techStack';
import { useTheme } from './ThemeContext';

const stack = [
  { id: 'mongodb', letter: 'M', desc: 'NoSQL database' },
  { id: 'express', letter: 'E', desc: 'Backend framework' },
  { id: 'react', letter: 'R', desc: 'Frontend library' },
  { id: 'node', letter: 'N', desc: 'JavaScript runtime' },
];

// Horizontal connectors show once cards sit side by side. At 2 columns the one after the
// 2nd card would point at the next row, so it only appears from lg (4 columns) up.
const horizontalVisibility = ['hidden sm:block', 'hidden lg:block', 'hidden sm:block'];

const cardList = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

function Connector({ index, darkMode }) {
  const line = darkMode ? 'from-white/10 via-blue-400/60 to-white/10' : 'from-black/10 via-blue-500/60 to-black/10';

  return (
    <>
      {/* Vertical, single-column layout */}
      <span
        aria-hidden="true"
        className={`sm:hidden pointer-events-none absolute left-1/2 top-full h-6 w-px bg-gradient-to-b ${line}`}
      />
      {/* Horizontal, side-by-side layout */}
      <span
        aria-hidden="true"
        className={`${horizontalVisibility[index]} pointer-events-none absolute left-full top-1/2 h-px w-6 lg:w-10 bg-gradient-to-r ${line}`}
      >
        <motion.span
          className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-blue-400 shadow-[0_0_8px_2px_rgba(96,165,250,0.7)]"
          animate={{ left: ['0%', '100%'], opacity: [0, 1, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'linear', delay: index * 0.6 }}
        />
      </span>
    </>
  );
}

function MernStack() {
  const { darkMode } = useTheme();

  return (
    <div
      className={`relative mb-12 overflow-hidden rounded-3xl border p-6 sm:p-10 backdrop-blur-xl ${
        darkMode ? 'border-white/10 bg-white/5' : 'border-black/10 bg-white shadow-sm'
      }`}
    >
      <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-2/3 -translate-x-1/2 rounded-full bg-gradient-to-r from-emerald-500/10 via-blue-500/20 to-cyan-500/10 blur-3xl" />

      <div className="relative mb-10 text-center">
        <p className="mb-3 text-sm font-semibold tracking-widest text-blue-400">THE CORE STACK</p>
        <h3 className="text-2xl sm:text-3xl font-extrabold">MERN Stack</h3>
        <p className={`mx-auto mt-2 max-w-xl text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          MongoDB, Express.js, React.js and Node.js: JavaScript across the entire application.
        </p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={cardList}
        className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10"
      >
        {stack.map(({ id, letter, desc }, index) => {
          const accent = accentOf(id);
          return (
            <motion.div
              key={id}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              style={{ '--accent': accent }}
              className={`group relative rounded-2xl border p-6 text-center transition-[border-color,box-shadow] duration-300 hover:[border-color:var(--accent)] hover:shadow-[0_18px_40px_-18px_var(--accent)] ${
                darkMode ? 'border-white/10 bg-slate-950/60' : 'border-black/10 bg-slate-50'
              }`}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-3 top-1 select-none text-7xl font-black opacity-[0.05]"
              >
                {letter}
              </span>

              <div className="relative mx-auto mb-4 h-16 w-16">
                <span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-2xl opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: `${accent}55` }}
                />
                <span
                  className="relative flex h-full w-full items-center justify-center rounded-2xl border transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${accent}1a`, borderColor: `${accent}40` }}
                >
                  <TechIcon id={id} size={30} />
                </span>
              </div>

              <h4 className="text-lg font-semibold">{TECH[id].name}</h4>
              <p className={`mt-1 text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{desc}</p>

              {index < stack.length - 1 && <Connector index={index} darkMode={darkMode} />}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default MernStack;
