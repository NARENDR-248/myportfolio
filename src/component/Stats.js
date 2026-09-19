import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaCode, FaHeart } from 'react-icons/fa';
import { useTheme } from './ThemeContext';

const stats = [
  { id: 1, icon: FaGraduationCap, color: 'text-blue-400', value: '77.23%', label: 'B.Sc. Computer Science' },
  { id: 2, icon: FaBriefcase, color: 'text-cyan-400', value: '2+', label: 'Years Experience' },
  { id: 3, icon: FaCode, color: 'text-purple-400', value: '10+', label: 'Projects Completed' },
  { id: 4, icon: FaHeart, color: 'text-pink-400', value: '100%', label: 'Dedication' },
];

function Stats() {
  const { darkMode } = useTheme();

  return (
    <div className={`w-full px-4 sm:px-8 -mt-4 ${darkMode ? 'bg-slate-950' : 'bg-slate-50'}`}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`max-w-screen-xl mx-auto rounded-2xl border grid grid-cols-2 md:grid-cols-4 gap-6 p-8 backdrop-blur-xl ${
          darkMode ? 'border-white/10 bg-white/5' : 'border-black/10 bg-white shadow-sm'
        }`}
      >
        {stats.map(({ id, icon: Icon, color, value, label }) => (
          <div
            key={id}
            className="flex items-center gap-3 justify-center md:justify-start transition-transform duration-300 hover:scale-105"
          >
            <Icon className={color} size={26} />
            <div>
              <p className="text-xl font-bold">{value}</p>
              <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{label}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default Stats;
