import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCode, FaLayerGroup, FaRocket } from 'react-icons/fa';
import { useTheme } from './ThemeContext';

// Only figures already present in the portfolio are numeric; the rest are plain labels.
const stats = [
  { id: 1, icon: FaBriefcase, color: 'text-cyan-400', value: '2+', label: 'Years Experience' },
  { id: 2, icon: FaCode, color: 'text-purple-400', value: '10+', label: 'Projects' },
  { id: 3, icon: FaLayerGroup, color: 'text-blue-400', value: 'MERN', label: 'Full Stack' },
  { id: 4, icon: FaRocket, color: 'text-pink-400', value: 'Always', label: 'Learning & Growth' },
];

const panel = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

function Stats() {
  const { darkMode } = useTheme();

  return (
    <div className={`w-full px-4 sm:px-8 -mt-4 ${darkMode ? 'bg-slate-950' : 'bg-slate-50'}`}>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={panel}
        className={`max-w-screen-xl mx-auto rounded-2xl border grid grid-cols-2 md:grid-cols-4 gap-6 p-8 backdrop-blur-xl ${
          darkMode ? 'border-white/10 bg-white/5' : 'border-black/10 bg-white shadow-sm'
        }`}
      >
        {stats.map(({ id, icon: Icon, color, value, label }) => (
          <motion.div
            key={id}
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 justify-center md:justify-start"
          >
            <Icon className={color} size={26} />
            <div>
              <p className="text-xl font-bold">{value}</p>
              <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{label}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Stats;
