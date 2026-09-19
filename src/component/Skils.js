import React from 'react';
import { motion } from 'framer-motion';
import { FaDatabase, FaDesktop, FaLayerGroup, FaServer, FaTools } from 'react-icons/fa';
import MernStack from './MernStack';
import TechIcon from './TechIcon';
import { TECH, accentOf } from '../utilis/techStack';
import { useTheme } from './ThemeContext';

const categories = [
  {
    id: 'frontend',
    label: 'Frontend',
    blurb: 'Interfaces & styling',
    icon: FaDesktop,
    panel: 'lg:col-span-2',
    grid: 'grid-cols-2 sm:grid-cols-4 lg:grid-cols-8',
    skills: ['react', 'javascript', 'html', 'css', 'redux', 'tailwind', 'bootstrap', 'mui'],
  },
  {
    id: 'backend',
    label: 'Backend',
    blurb: 'Server & APIs',
    icon: FaServer,
    grid: 'grid-cols-2 sm:grid-cols-3',
    skills: ['node', 'express', 'rest'],
  },
  {
    id: 'database',
    label: 'Database',
    blurb: 'Data & modeling',
    icon: FaDatabase,
    grid: 'grid-cols-2 sm:grid-cols-3',
    skills: ['mongodb', 'mongoose', 'mssql'],
  },
  {
    id: 'tools',
    label: 'Tools & DevOps',
    blurb: 'Version control & delivery',
    icon: FaTools,
    grid: 'grid-cols-2 sm:grid-cols-3',
    skills: ['git', 'github', 'firebase', 'jenkins', 'cicd'],
  },
  {
    id: 'additional',
    label: 'Additional Technologies',
    blurb: 'Beyond the core stack',
    icon: FaLayerGroup,
    grid: 'grid-cols-2 sm:grid-cols-3',
    skills: ['python', 'nextjs', 'angular', 'typescript'],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const cardList = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

function TechCard({ id, darkMode }) {
  const accent = accentOf(id);

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4 }}
      style={{ '--accent': accent }}
      className={`group flex flex-col items-center justify-center gap-3 rounded-2xl border px-2 py-6 text-center transition-[border-color,box-shadow] duration-300 hover:[border-color:var(--accent)] hover:shadow-[0_12px_28px_-14px_var(--accent)] ${
        darkMode ? 'border-white/10 bg-white/5' : 'border-black/10 bg-white shadow-sm'
      }`}
    >
      <span
        className={`flex h-12 w-12 items-center justify-center rounded-xl border ${
          darkMode ? 'border-white/10 bg-slate-950/60' : 'border-black/10 bg-slate-100'
        }`}
      >
        <TechIcon
          id={id}
          size={24}
          className="transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-125"
        />
      </span>
      <p className="text-sm font-medium leading-tight">{TECH[id].name}</p>
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
            <h2 className="text-3xl sm:text-4xl font-extrabold">Full-Stack Technologies I Work With</h2>
          </div>
          <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            Always learning. Always building.
          </p>
        </div>

        <MernStack />

        <div className="grid gap-6 lg:grid-cols-2">
          {categories.map(({ id, label, blurb, icon: Icon, panel = '', grid, skills }) => (
            <div
              key={id}
              className={`rounded-3xl border p-6 backdrop-blur-xl ${panel} ${
                darkMode ? 'border-white/10 bg-white/[0.03]' : 'border-black/10 bg-white/60'
              }`}
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/20">
                  <Icon size={15} />
                </span>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-widest">{label}</h3>
                  <p className="text-xs text-slate-500">{blurb}</p>
                </div>
              </div>

              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardList}
                className={`grid gap-4 ${grid}`}
              >
                {skills.map((skill) => (
                  <TechCard key={skill} id={skill} darkMode={darkMode} />
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skils;
