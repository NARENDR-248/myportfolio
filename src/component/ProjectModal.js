import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaCheck } from 'react-icons/fa';
import { useTheme } from './ThemeContext';

function ProjectModal({ project, onClose }) {
  const { darkMode } = useTheme();

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 20 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-lg rounded-2xl border overflow-hidden max-h-[85vh] overflow-y-auto ${
          darkMode ? 'bg-slate-900 border-white/10 text-white' : 'bg-white border-black/10 text-slate-900'
        }`}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className={`absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center border z-10 ${
            darkMode ? 'border-white/10 bg-slate-900/80 text-white hover:bg-white/10' : 'border-black/10 bg-white/80 text-slate-900 hover:bg-black/5'
          }`}
        >
          <FaTimes size={14} />
        </button>

        <img src={project.src} alt={project.title} className="w-full h-52 object-cover" />

        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>

          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag) => (
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

          <p className={`text-sm font-semibold mb-1 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Purpose</p>
          <p className={`text-sm leading-relaxed mb-5 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            {project.problem}
          </p>

          <p className={`text-sm font-semibold mb-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Features</p>
          <ul className="space-y-2 mb-6">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm">
                <FaCheck className="mt-1 text-blue-400 shrink-0" size={11} />
                <span className={darkMode ? 'text-slate-400' : 'text-slate-600'}>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <a
              href={project.codeHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 text-sm font-medium transition-colors duration-200 ${
                darkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <FaGithub size={14} /> Code
            </a>
            <a
              href={project.liveHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors duration-200"
            >
              Live <FaExternalLinkAlt size={12} />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ProjectModal;
