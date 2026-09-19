import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useTheme } from './ThemeContext';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

function Card({ src, title, desc, tags, codeHref = '#', liveHref = '#', onOpen }) {
  const { darkMode } = useTheme();

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6 }}
      onClick={onOpen}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter') onOpen();
      }}
      data-cursor-hover
      className={`cursor-pointer rounded-2xl overflow-hidden border transition-colors duration-300 ${
        darkMode ? 'border-white/10 bg-white/5 hover:border-blue-400/40' : 'border-black/10 bg-white hover:border-blue-400/40 shadow-sm'
      }`}
    >
      <div className="overflow-hidden">
        <img
          src={src}
          alt={title}
          className="h-44 w-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-5">
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className={`text-sm mb-4 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{desc}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`text-xs px-3 py-1 rounded-full font-medium ${
                darkMode ? 'bg-blue-500/10 text-blue-300' : 'bg-blue-50 text-blue-600'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href={codeHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className={`flex items-center gap-2 text-sm font-medium transition-colors duration-200 ${
              darkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <FaGithub size={14} /> Code
          </a>
          <a
            href={liveHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors duration-200"
          >
            Live <FaExternalLinkAlt size={12} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default Card;
