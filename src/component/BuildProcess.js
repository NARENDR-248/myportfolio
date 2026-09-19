import React from 'react';
import { motion } from 'framer-motion';
import { FaDatabase, FaDesktop, FaRocket, FaServer } from 'react-icons/fa';
import TechIcon from './TechIcon';
import { TECH } from '../utilis/techStack';
import { useTheme } from './ThemeContext';

const steps = [
  {
    id: 1,
    number: '01',
    title: 'Frontend',
    icon: FaDesktop,
    desc: 'Responsive, component-based user interfaces.',
    tech: ['react', 'redux', 'tailwind'],
  },
  {
    id: 2,
    number: '02',
    title: 'API Layer',
    icon: FaServer,
    desc: 'Server-side logic exposed through RESTful endpoints.',
    tech: ['node', 'express', 'rest'],
  },
  {
    id: 3,
    number: '03',
    title: 'Database',
    icon: FaDatabase,
    desc: 'Data modeling and persistent storage.',
    tech: ['mongodb', 'mongoose'],
  },
  {
    id: 4,
    number: '04',
    title: 'Deployment & Tools',
    icon: FaRocket,
    desc: 'Version control, automation and hosting.',
    tech: ['git', 'github', 'cicd', 'firebase'],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stepList = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
};

function BuildProcess() {
  const { darkMode } = useTheme();
  const lineColor = darkMode ? 'from-blue-500/40 via-purple-400/60 to-blue-500/40' : 'from-blue-500/40 via-purple-500/60 to-blue-500/40';

  return (
    <div className={`w-full py-16 ${darkMode ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8">
        <div className="mb-12">
          <p className="text-sm font-semibold tracking-widest text-blue-400 mb-3">MY APPROACH</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold">How I Build Applications</h2>
        </div>

        <motion.ol
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stepList}
          className="relative grid gap-8 lg:grid-cols-4 lg:gap-6"
        >
          {/* Connecting line: vertical on small screens, horizontal on large */}
          <motion.span
            aria-hidden="true"
            variants={{ hidden: { scaleY: 0 }, show: { scaleY: 1, transition: { duration: 0.9, ease: 'easeOut' } } }}
            className={`lg:hidden pointer-events-none absolute left-6 top-6 bottom-6 w-px origin-top bg-gradient-to-b ${lineColor}`}
          />
          <motion.span
            aria-hidden="true"
            variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 0.9, ease: 'easeOut' } } }}
            className={`hidden lg:block pointer-events-none absolute left-[12.5%] right-[12.5%] top-6 h-px origin-left bg-gradient-to-r ${lineColor}`}
          />

          {steps.map(({ id, number, title, icon: Icon, desc, tech }) => (
            <motion.li key={id} variants={fadeUp} className="relative pl-16 lg:pl-0 lg:pt-16">
              <span className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-sm font-bold text-white shadow-lg shadow-blue-500/30 lg:left-1/2 lg:-translate-x-1/2">
                {number}
              </span>

              <motion.div
                whileHover={{ y: -4 }}
                className={`h-full rounded-2xl border p-5 backdrop-blur-xl transition-colors duration-300 lg:text-center ${
                  darkMode
                    ? 'border-white/10 bg-white/5 hover:border-blue-400/40'
                    : 'border-black/10 bg-white shadow-sm hover:border-blue-400/40'
                }`}
              >
                <div className="mb-2 flex items-center gap-2 lg:justify-center">
                  <Icon className="text-blue-400" size={15} />
                  <h3 className="font-semibold">{title}</h3>
                </div>
                <p className={`mb-4 text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{desc}</p>

                <ul className="flex flex-wrap gap-2 lg:justify-center">
                  {tech.map((techId) => (
                    <li
                      key={techId}
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${
                        darkMode ? 'border-white/10 bg-slate-950/60 text-slate-300' : 'border-black/10 bg-slate-50 text-slate-700'
                      }`}
                    >
                      <TechIcon id={techId} size={12} />
                      {TECH[techId].name}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </div>
  );
}

export default BuildProcess;
