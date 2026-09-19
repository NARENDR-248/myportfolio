import React from 'react';
import TechIcon from './TechIcon';
import { useTheme } from './ThemeContext';

// Categories are shown on top of the project image, so they use a dark glass chip in both themes.
const CATEGORY_STYLES = {
  'FULL STACK': 'border-emerald-400/40 text-emerald-300',
  FRONTEND: 'border-blue-400/40 text-blue-300',
  'WEB APPLICATION': 'border-purple-400/40 text-purple-300',
  API: 'border-amber-400/40 text-amber-300',
};

// Tags that map to a known technology get its icon.
const TAG_ICONS = { React: 'react' };

export function CategoryBadge({ category }) {
  return (
    <span
      className={`inline-block rounded-full border bg-slate-950/70 px-3 py-1 text-[10px] font-bold tracking-widest backdrop-blur-md ${
        CATEGORY_STYLES[category] || CATEGORY_STYLES.FRONTEND
      }`}
    >
      {category}
    </span>
  );
}

export function TechBadges({ tags }) {
  const { darkMode } = useTheme();

  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li
          key={tag}
          className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-transform duration-200 hover:scale-105 ${
            darkMode
              ? 'border-blue-400/20 bg-blue-500/10 text-blue-300'
              : 'border-blue-200 bg-blue-50 text-blue-600'
          }`}
        >
          {TAG_ICONS[tag] && <TechIcon id={TAG_ICONS[tag]} size={12} />}
          {tag}
        </li>
      ))}
    </ul>
  );
}
