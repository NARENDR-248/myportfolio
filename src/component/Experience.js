import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import { useTheme } from './ThemeContext';

const experience = [
  {
    id: 1,
    role: 'Operations Associate – Client: Uber',
    company: 'LanceSoft India Pvt Ltd',
    duration: 'Oct 2024 – Present',
    location: 'Hyderabad',
  },
  {
    id: 2,
    role: 'Data Entry Operator',
    company: 'Nexplace Info Pvt Ltd',
    duration: 'Oct 2023 – Sep 2024',
    location: 'Bangalore',
  },
  {
    id: 3,
    role: 'Monitoring of Store Devices (Ticketing System)',
    company: 'ValueLabs',
    duration: 'May 2023',
    location: 'Remote',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

function Experience() {
  const { darkMode } = useTheme();

  return (
    <div className={`w-full py-16 ${darkMode ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
      <div className="max-w-screen-lg mx-auto px-4 sm:px-8">
        <div className="mb-10">
          <p className="text-sm font-semibold tracking-widest text-blue-400 mb-3">EXPERIENCE</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-2">My Professional Journey</h2>
          <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            Growth through learning and experience.
          </p>
        </div>

        <div className={`relative pl-10 border-l-2 ${darkMode ? 'border-white/10' : 'border-black/10'}`}>
          {experience.map(({ id, role, company, duration, location }) => (
            <motion.div
              key={id}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              className="relative mb-10 last:mb-0"
            >
              <span
                className={`absolute -left-[3.05rem] top-1 w-9 h-9 rounded-full flex items-center justify-center border-4 ${
                  darkMode ? 'bg-blue-500 border-slate-950 text-white' : 'bg-blue-500 border-slate-50 text-white'
                } shadow-lg shadow-blue-500/40`}
              >
                <FaBriefcase size={13} />
              </span>

              <div
                className={`rounded-2xl border p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 ${
                  darkMode ? 'border-white/10 bg-white/5' : 'border-black/10 bg-white shadow-sm'
                }`}
              >
                <div>
                  <h3 className="font-semibold">{role}</h3>
                  <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{company}</p>
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-sm font-medium">{duration}</p>
                  <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
