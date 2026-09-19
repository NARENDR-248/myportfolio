import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';
import { CategoryBadge, TechBadges } from './ProjectBadges';
import { useTheme } from './ThemeContext';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

// Code / live links only render when a real URL is provided, so cards never point at "#".
function Card({ src, title, desc, tags, category, codeHref, liveHref, onOpen }) {
  const { darkMode } = useTheme();

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -8 }}
      onClick={onOpen}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter') onOpen();
      }}
      data-cursor-hover
      className={`group flex cursor-pointer flex-col overflow-hidden rounded-2xl border backdrop-blur-xl transition-[border-color,box-shadow] duration-300 hover:border-blue-400/50 hover:shadow-[0_20px_50px_-20px_rgba(59,130,246,0.5)] ${
        darkMode ? 'border-white/10 bg-white/5' : 'border-black/10 bg-white shadow-sm'
      }`}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={src}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
        {category && (
          <div className="absolute left-3 top-3">
            <CategoryBadge category={category} />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-1 font-semibold">{title}</h3>
        <p className={`mb-4 text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{desc}</p>

        <div className="mb-5">
          <TechBadges tags={tags} />
        </div>

        <div className="mt-auto flex items-center justify-between gap-4">
          <span className="flex items-center gap-2 text-sm font-medium text-blue-400 transition-colors duration-200 group-hover:text-blue-300">
            View Details
            <FaArrowRight
              size={11}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </span>

          <div className="flex items-center gap-4">
            {codeHref && (
              <a
                href={codeHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={`flex items-center gap-2 text-sm font-medium transition-colors duration-200 ${
                  darkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <FaGithub size={14} /> GitHub
              </a>
            )}
            {liveHref && (
              <a
                href={liveHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 text-sm font-medium text-blue-400 transition-colors duration-200 hover:text-blue-300"
              >
                Live Demo <FaExternalLinkAlt size={11} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Card;
